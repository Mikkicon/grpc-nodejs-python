import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace service. */
export namespace service {

    /** Namespace hello. */
    namespace hello {

        /** Namespace v1. */
        namespace v1 {

            /** Represents a HelloService */
            class HelloService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new HelloService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new HelloService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): HelloService;

                /**
                 * Calls Greet.
                 * @param request GreetRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GreetResponse
                 */
                public greet(request: service.hello.v1.IGreetRequest, callback: service.hello.v1.HelloService.GreetCallback): void;

                /**
                 * Calls Greet.
                 * @param request GreetRequest message or plain object
                 * @returns Promise
                 */
                public greet(request: service.hello.v1.IGreetRequest): Promise<service.hello.v1.GreetResponse>;
            }

            namespace HelloService {

                /**
                 * Callback as used by {@link service.hello.v1.HelloService#greet}.
                 * @param error Error, if any
                 * @param [response] GreetResponse
                 */
                type GreetCallback = (error: (Error|null), response?: service.hello.v1.GreetResponse) => void;
            }

            /** Properties of a GreetRequest. */
            interface IGreetRequest {

                /** GreetRequest name */
                name?: (string|null);

                /** GreetRequest language */
                language?: (com.language.v1.Language.Code|null);
            }

            /** Represents a GreetRequest. */
            class GreetRequest implements IGreetRequest {

                /**
                 * Constructs a new GreetRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: service.hello.v1.IGreetRequest);

                /** GreetRequest name. */
                public name: string;

                /** GreetRequest language. */
                public language: com.language.v1.Language.Code;

                /**
                 * Creates a new GreetRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GreetRequest instance
                 */
                public static create(properties?: service.hello.v1.IGreetRequest): service.hello.v1.GreetRequest;

                /**
                 * Encodes the specified GreetRequest message. Does not implicitly {@link service.hello.v1.GreetRequest.verify|verify} messages.
                 * @param message GreetRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: service.hello.v1.IGreetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GreetRequest message, length delimited. Does not implicitly {@link service.hello.v1.GreetRequest.verify|verify} messages.
                 * @param message GreetRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: service.hello.v1.IGreetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GreetRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GreetRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): service.hello.v1.GreetRequest;

                /**
                 * Decodes a GreetRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GreetRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): service.hello.v1.GreetRequest;

                /**
                 * Verifies a GreetRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GreetRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GreetRequest
                 */
                public static fromObject(object: { [k: string]: any }): service.hello.v1.GreetRequest;

                /**
                 * Creates a plain object from a GreetRequest message. Also converts values to other types if specified.
                 * @param message GreetRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: service.hello.v1.GreetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GreetRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GreetRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GreetResponse. */
            interface IGreetResponse {

                /** GreetResponse message */
                message?: (string|null);
            }

            /** Represents a GreetResponse. */
            class GreetResponse implements IGreetResponse {

                /**
                 * Constructs a new GreetResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: service.hello.v1.IGreetResponse);

                /** GreetResponse message. */
                public message: string;

                /**
                 * Creates a new GreetResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GreetResponse instance
                 */
                public static create(properties?: service.hello.v1.IGreetResponse): service.hello.v1.GreetResponse;

                /**
                 * Encodes the specified GreetResponse message. Does not implicitly {@link service.hello.v1.GreetResponse.verify|verify} messages.
                 * @param message GreetResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: service.hello.v1.IGreetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GreetResponse message, length delimited. Does not implicitly {@link service.hello.v1.GreetResponse.verify|verify} messages.
                 * @param message GreetResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: service.hello.v1.IGreetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GreetResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GreetResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): service.hello.v1.GreetResponse;

                /**
                 * Decodes a GreetResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GreetResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): service.hello.v1.GreetResponse;

                /**
                 * Verifies a GreetResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GreetResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GreetResponse
                 */
                public static fromObject(object: { [k: string]: any }): service.hello.v1.GreetResponse;

                /**
                 * Creates a plain object from a GreetResponse message. Also converts values to other types if specified.
                 * @param message GreetResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: service.hello.v1.GreetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GreetResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GreetResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}

/** Namespace com. */
export namespace com {

    /** Namespace utils. */
    namespace utils {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of a Config. */
            interface IConfig {

                /** Config address */
                address?: (string|null);

                /** Config port */
                port?: (string|null);
            }

            /** Represents a Config. */
            class Config implements IConfig {

                /**
                 * Constructs a new Config.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.utils.v1.IConfig);

                /** Config address. */
                public address?: (string|null);

                /** Config port. */
                public port?: (string|null);

                /** Config _address. */
                public _address?: "address";

                /** Config _port. */
                public _port?: "port";

                /**
                 * Creates a new Config instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Config instance
                 */
                public static create(properties?: com.utils.v1.IConfig): com.utils.v1.Config;

                /**
                 * Encodes the specified Config message. Does not implicitly {@link com.utils.v1.Config.verify|verify} messages.
                 * @param message Config message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.utils.v1.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Config message, length delimited. Does not implicitly {@link com.utils.v1.Config.verify|verify} messages.
                 * @param message Config message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.utils.v1.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Config message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Config
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.utils.v1.Config;

                /**
                 * Decodes a Config message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Config
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.utils.v1.Config;

                /**
                 * Verifies a Config message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Config message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Config
                 */
                public static fromObject(object: { [k: string]: any }): com.utils.v1.Config;

                /**
                 * Creates a plain object from a Config message. Also converts values to other types if specified.
                 * @param message Config
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.utils.v1.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Config to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Config
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace language. */
    namespace language {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of a Language. */
            interface ILanguage {
            }

            /** Represents a Language. */
            class Language implements ILanguage {

                /**
                 * Constructs a new Language.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.language.v1.ILanguage);

                /**
                 * Creates a new Language instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Language instance
                 */
                public static create(properties?: com.language.v1.ILanguage): com.language.v1.Language;

                /**
                 * Encodes the specified Language message. Does not implicitly {@link com.language.v1.Language.verify|verify} messages.
                 * @param message Language message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.language.v1.ILanguage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Language message, length delimited. Does not implicitly {@link com.language.v1.Language.verify|verify} messages.
                 * @param message Language message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.language.v1.ILanguage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Language message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Language
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.language.v1.Language;

                /**
                 * Decodes a Language message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Language
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.language.v1.Language;

                /**
                 * Verifies a Language message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Language message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Language
                 */
                public static fromObject(object: { [k: string]: any }): com.language.v1.Language;

                /**
                 * Creates a plain object from a Language message. Also converts values to other types if specified.
                 * @param message Language
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.language.v1.Language, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Language to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Language
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Language {

                /** Code enum. */
                enum Code {
                    CODE_UNSPECIFIED = 0,
                    CODE_EN = 1,
                    CODE_UA = 2
                }
            }
        }
    }
}
