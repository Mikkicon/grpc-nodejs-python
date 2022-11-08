import { credentials } from '@grpc/grpc-js';
import fs from 'fs/promises';
import path from 'path';

import { Language } from '../proto/com/language/v1/language_pb';
import { HelloServiceClient } from '../proto/service/hello/v1/hello_service_grpc_pb';
import { GreetRequest } from '../proto/service/hello/v1/hello_service_pb';
import PBGeneratedValidators from '../pbjs/bundle';

async function main() {
  const configFilePath = path.join(__dirname, '..', 'config.json');
  const config = await getProtoValidatedConfig(configFilePath);
  const { address, port } = config;
  const socket = address + ':' + port;
  const client = new HelloServiceClient(socket, credentials.createInsecure());

  const request = new GreetRequest();
  request.setName('fd');
  request.setLanguage(Language.Code.CODE_UA);

  client.greet(request, (error, response) => {
    if (error === null && response) console.table(response.getMessage());
    else console.error(error);
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
