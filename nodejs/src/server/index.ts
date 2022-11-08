import { Server, ServerCredentials } from '@grpc/grpc-js';
import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js/build/src/server-call';
import path from 'path';
import fs from 'fs/promises';

// import { Language } from '../proto/com/language/v1/language_pb';
import { HelloServiceService } from '../proto/service/hello/v1/hello_service_grpc_pb';
import { GreetRequest, GreetResponse } from '../proto/service/hello/v1/hello_service_pb';
import PBGeneratedValidators from '../pbjs/bundle';

const greet = async (call: ServerUnaryCall<GreetRequest, GreetResponse>, callback: sendUnaryData<GreetResponse>) => {
  const { CODE_EN, CODE_UA, CODE_UNSPECIFIED } = PBGeneratedValidators.com.language.v1.Language.Code;

  const response = new GreetResponse();

  switch (call.request.getLanguage()) {
    case CODE_EN:
      response.setMessage(`Hello ${call.request.getName()}`);
      break;
    case CODE_UA:
      response.setMessage(`Привіт ${call.request.getName()}`);
      break;
    case CODE_UNSPECIFIED:
    default:
      response.setMessage(`Language not set, ${call.request.getName()}`);
  }

  callback(null, response);
};

async function main() {
  const server = new Server();
  server.addService(HelloServiceService, { greet });

  const configFilePath = path.join(__dirname, '..', 'config.json');
  const config = await getProtoValidatedConfig(configFilePath);

  const { address, port } = config;
  const socket = address + ':' + port;
  server.bindAsync(socket, ServerCredentials.createInsecure(), () => {
    server.start();
    console.log(`server is running on ${socket}`);
  });
}

async function getProtoValidatedConfig(configFilePath: string) {
  const ConfigValidator = PBGeneratedValidators.com.utils.v1.Config;

  const configFile = await fs.readFile(configFilePath);
  const config = JSON.parse(configFile.toString());

  const validationError = ConfigValidator.verify(config);
  if (validationError) throw new Error(`Invalid config file: ${JSON.stringify(config, undefined, 2)}`);
  return config;
}

main();
