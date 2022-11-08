/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.service = (function() {

    /**
     * Namespace service.
     * @exports service
     * @namespace
     */
    var service = {};

    service.hello = (function() {

        /**
         * Namespace hello.
         * @memberof service
         * @namespace
         */
        var hello = {};

        hello.v1 = (function() {

            /**
             * Namespace v1.
             * @memberof service.hello
             * @namespace
             */
            var v1 = {};

            v1.HelloService = (function() {

                /**
                 * Constructs a new HelloService service.
                 * @memberof service.hello.v1
                 * @classdesc Represents a HelloService
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function HelloService(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (HelloService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = HelloService;

                /**
                 * Creates new HelloService service using the specified rpc implementation.
                 * @function create
                 * @memberof service.hello.v1.HelloService
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {HelloService} RPC service. Useful where requests and/or responses are streamed.
                 */
                HelloService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link service.hello.v1.HelloService#greet}.
                 * @memberof service.hello.v1.HelloService
                 * @typedef GreetCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {service.hello.v1.GreetResponse} [response] GreetResponse
                 */

                /**
                 * Calls Greet.
                 * @function greet
                 * @memberof service.hello.v1.HelloService
                 * @instance
                 * @param {service.hello.v1.IGreetRequest} request GreetRequest message or plain object
                 * @param {service.hello.v1.HelloService.GreetCallback} callback Node-style callback called with the error, if any, and GreetResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(HelloService.prototype.greet = function greet(request, callback) {
                    return this.rpcCall(greet, $root.service.hello.v1.GreetRequest, $root.service.hello.v1.GreetResponse, request, callback);
                }, "name", { value: "Greet" });

                /**
                 * Calls Greet.
                 * @function greet
                 * @memberof service.hello.v1.HelloService
                 * @instance
                 * @param {service.hello.v1.IGreetRequest} request GreetRequest message or plain object
                 * @returns {Promise<service.hello.v1.GreetResponse>} Promise
                 * @variation 2
                 */

                return HelloService;
            })();

            v1.GreetRequest = (function() {

                /**
                 * Properties of a GreetRequest.
                 * @memberof service.hello.v1
                 * @interface IGreetRequest
                 * @property {string|null} [name] GreetRequest name
                 * @property {com.language.v1.Language.Code|null} [language] GreetRequest language
                 */

                /**
                 * Constructs a new GreetRequest.
                 * @memberof service.hello.v1
                 * @classdesc Represents a GreetRequest.
                 * @implements IGreetRequest
                 * @constructor
                 * @param {service.hello.v1.IGreetRequest=} [properties] Properties to set
                 */
                function GreetRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GreetRequest name.
                 * @member {string} name
                 * @memberof service.hello.v1.GreetRequest
                 * @instance
                 */
                GreetRequest.prototype.name = "";

                /**
                 * GreetRequest language.
                 * @member {com.language.v1.Language.Code} language
                 * @memberof service.hello.v1.GreetRequest
                 * @instance
                 */
                GreetRequest.prototype.language = 0;

                /**
                 * Creates a new GreetRequest instance using the specified properties.
                 * @function create
                 * @memberof service.hello.v1.GreetRequest
                 * @static
                 * @param {service.hello.v1.IGreetRequest=} [properties] Properties to set
                 * @returns {service.hello.v1.GreetRequest} GreetRequest instance
                 */
                GreetRequest.create = function create(properties) {
                    return new GreetRequest(properties);
                };

                /**
                 * Encodes the specified GreetRequest message. Does not implicitly {@link service.hello.v1.GreetRequest.verify|verify} messages.
                 * @function encode
                 * @memberof service.hello.v1.GreetRequest
                 * @static
                 * @param {service.hello.v1.IGreetRequest} message GreetRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GreetRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.language != null && Object.hasOwnProperty.call(message, "language"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.language);
                    return writer;
                };

                /**
                 * Encodes the specified GreetRequest message, length delimited. Does not implicitly {@link service.hello.v1.GreetRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof service.hello.v1.GreetRequest
                 * @static
                 * @param {service.hello.v1.IGreetRequest} message GreetRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GreetRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GreetRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof service.hello.v1.GreetRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {service.hello.v1.GreetRequest} GreetRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GreetRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.service.hello.v1.GreetRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message.language = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GreetRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof service.hello.v1.GreetRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {service.hello.v1.GreetRequest} GreetRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GreetRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GreetRequest message.
                 * @function verify
                 * @memberof service.hello.v1.GreetRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GreetRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.language != null && message.hasOwnProperty("language"))
                        switch (message.language) {
                        default:
                            return "language: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a GreetRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof service.hello.v1.GreetRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {service.hello.v1.GreetRequest} GreetRequest
                 */
                GreetRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.service.hello.v1.GreetRequest)
                        return object;
                    var message = new $root.service.hello.v1.GreetRequest();
                    if (object.name != null)
                        message.name = String(object.name);
                    switch (object.language) {
                    default:
                        if (typeof object.language === "number") {
                            message.language = object.language;
                            break;
                        }
                        break;
                    case "CODE_UNSPECIFIED":
                    case 0:
                        message.language = 0;
                        break;
                    case "CODE_EN":
                    case 1:
                        message.language = 1;
                        break;
                    case "CODE_UA":
                    case 2:
                        message.language = 2;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a GreetRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof service.hello.v1.GreetRequest
                 * @static
                 * @param {service.hello.v1.GreetRequest} message GreetRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GreetRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.language = options.enums === String ? "CODE_UNSPECIFIED" : 0;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.language != null && message.hasOwnProperty("language"))
                        object.language = options.enums === String ? $root.com.language.v1.Language.Code[message.language] === undefined ? message.language : $root.com.language.v1.Language.Code[message.language] : message.language;
                    return object;
                };

                /**
                 * Converts this GreetRequest to JSON.
                 * @function toJSON
                 * @memberof service.hello.v1.GreetRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GreetRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GreetRequest
                 * @function getTypeUrl
                 * @memberof service.hello.v1.GreetRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GreetRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/service.hello.v1.GreetRequest";
                };

                return GreetRequest;
            })();

            v1.GreetResponse = (function() {

                /**
                 * Properties of a GreetResponse.
                 * @memberof service.hello.v1
                 * @interface IGreetResponse
                 * @property {string|null} [message] GreetResponse message
                 */

                /**
                 * Constructs a new GreetResponse.
                 * @memberof service.hello.v1
                 * @classdesc Represents a GreetResponse.
                 * @implements IGreetResponse
                 * @constructor
                 * @param {service.hello.v1.IGreetResponse=} [properties] Properties to set
                 */
                function GreetResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GreetResponse message.
                 * @member {string} message
                 * @memberof service.hello.v1.GreetResponse
                 * @instance
                 */
                GreetResponse.prototype.message = "";

                /**
                 * Creates a new GreetResponse instance using the specified properties.
                 * @function create
                 * @memberof service.hello.v1.GreetResponse
                 * @static
                 * @param {service.hello.v1.IGreetResponse=} [properties] Properties to set
                 * @returns {service.hello.v1.GreetResponse} GreetResponse instance
                 */
                GreetResponse.create = function create(properties) {
                    return new GreetResponse(properties);
                };

                /**
                 * Encodes the specified GreetResponse message. Does not implicitly {@link service.hello.v1.GreetResponse.verify|verify} messages.
                 * @function encode
                 * @memberof service.hello.v1.GreetResponse
                 * @static
                 * @param {service.hello.v1.IGreetResponse} message GreetResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GreetResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                    return writer;
                };

                /**
                 * Encodes the specified GreetResponse message, length delimited. Does not implicitly {@link service.hello.v1.GreetResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof service.hello.v1.GreetResponse
                 * @static
                 * @param {service.hello.v1.IGreetResponse} message GreetResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GreetResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GreetResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof service.hello.v1.GreetResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {service.hello.v1.GreetResponse} GreetResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GreetResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.service.hello.v1.GreetResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.message = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GreetResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof service.hello.v1.GreetResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {service.hello.v1.GreetResponse} GreetResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GreetResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GreetResponse message.
                 * @function verify
                 * @memberof service.hello.v1.GreetResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GreetResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.message != null && message.hasOwnProperty("message"))
                        if (!$util.isString(message.message))
                            return "message: string expected";
                    return null;
                };

                /**
                 * Creates a GreetResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof service.hello.v1.GreetResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {service.hello.v1.GreetResponse} GreetResponse
                 */
                GreetResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.service.hello.v1.GreetResponse)
                        return object;
                    var message = new $root.service.hello.v1.GreetResponse();
                    if (object.message != null)
                        message.message = String(object.message);
                    return message;
                };

                /**
                 * Creates a plain object from a GreetResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof service.hello.v1.GreetResponse
                 * @static
                 * @param {service.hello.v1.GreetResponse} message GreetResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GreetResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.message = "";
                    if (message.message != null && message.hasOwnProperty("message"))
                        object.message = message.message;
                    return object;
                };

                /**
                 * Converts this GreetResponse to JSON.
                 * @function toJSON
                 * @memberof service.hello.v1.GreetResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GreetResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GreetResponse
                 * @function getTypeUrl
                 * @memberof service.hello.v1.GreetResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GreetResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/service.hello.v1.GreetResponse";
                };

                return GreetResponse;
            })();

            return v1;
        })();

        return hello;
    })();

    return service;
})();

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.utils = (function() {

        /**
         * Namespace utils.
         * @memberof com
         * @namespace
         */
        var utils = {};

        utils.v1 = (function() {

            /**
             * Namespace v1.
             * @memberof com.utils
             * @namespace
             */
            var v1 = {};

            v1.Config = (function() {

                /**
                 * Properties of a Config.
                 * @memberof com.utils.v1
                 * @interface IConfig
                 * @property {string|null} [address] Config address
                 * @property {string|null} [port] Config port
                 */

                /**
                 * Constructs a new Config.
                 * @memberof com.utils.v1
                 * @classdesc Represents a Config.
                 * @implements IConfig
                 * @constructor
                 * @param {com.utils.v1.IConfig=} [properties] Properties to set
                 */
                function Config(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Config address.
                 * @member {string|null|undefined} address
                 * @memberof com.utils.v1.Config
                 * @instance
                 */
                Config.prototype.address = null;

                /**
                 * Config port.
                 * @member {string|null|undefined} port
                 * @memberof com.utils.v1.Config
                 * @instance
                 */
                Config.prototype.port = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * Config _address.
                 * @member {"address"|undefined} _address
                 * @memberof com.utils.v1.Config
                 * @instance
                 */
                Object.defineProperty(Config.prototype, "_address", {
                    get: $util.oneOfGetter($oneOfFields = ["address"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Config _port.
                 * @member {"port"|undefined} _port
                 * @memberof com.utils.v1.Config
                 * @instance
                 */
                Object.defineProperty(Config.prototype, "_port", {
                    get: $util.oneOfGetter($oneOfFields = ["port"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Config instance using the specified properties.
                 * @function create
                 * @memberof com.utils.v1.Config
                 * @static
                 * @param {com.utils.v1.IConfig=} [properties] Properties to set
                 * @returns {com.utils.v1.Config} Config instance
                 */
                Config.create = function create(properties) {
                    return new Config(properties);
                };

                /**
                 * Encodes the specified Config message. Does not implicitly {@link com.utils.v1.Config.verify|verify} messages.
                 * @function encode
                 * @memberof com.utils.v1.Config
                 * @static
                 * @param {com.utils.v1.IConfig} message Config message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Config.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.address);
                    if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.port);
                    return writer;
                };

                /**
                 * Encodes the specified Config message, length delimited. Does not implicitly {@link com.utils.v1.Config.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.utils.v1.Config
                 * @static
                 * @param {com.utils.v1.IConfig} message Config message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Config.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Config message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.utils.v1.Config
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.utils.v1.Config} Config
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Config.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.utils.v1.Config();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.address = reader.string();
                                break;
                            }
                        case 2: {
                                message.port = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Config message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.utils.v1.Config
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.utils.v1.Config} Config
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Config.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Config message.
                 * @function verify
                 * @memberof com.utils.v1.Config
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Config.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.address != null && message.hasOwnProperty("address")) {
                        properties._address = 1;
                        if (!$util.isString(message.address))
                            return "address: string expected";
                    }
                    if (message.port != null && message.hasOwnProperty("port")) {
                        properties._port = 1;
                        if (!$util.isString(message.port))
                            return "port: string expected";
                    }
                    return null;
                };

                /**
                 * Creates a Config message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.utils.v1.Config
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.utils.v1.Config} Config
                 */
                Config.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.utils.v1.Config)
                        return object;
                    var message = new $root.com.utils.v1.Config();
                    if (object.address != null)
                        message.address = String(object.address);
                    if (object.port != null)
                        message.port = String(object.port);
                    return message;
                };

                /**
                 * Creates a plain object from a Config message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.utils.v1.Config
                 * @static
                 * @param {com.utils.v1.Config} message Config
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Config.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.address != null && message.hasOwnProperty("address")) {
                        object.address = message.address;
                        if (options.oneofs)
                            object._address = "address";
                    }
                    if (message.port != null && message.hasOwnProperty("port")) {
                        object.port = message.port;
                        if (options.oneofs)
                            object._port = "port";
                    }
                    return object;
                };

                /**
                 * Converts this Config to JSON.
                 * @function toJSON
                 * @memberof com.utils.v1.Config
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Config.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Config
                 * @function getTypeUrl
                 * @memberof com.utils.v1.Config
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Config.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.utils.v1.Config";
                };

                return Config;
            })();

            return v1;
        })();

        return utils;
    })();

    com.language = (function() {

        /**
         * Namespace language.
         * @memberof com
         * @namespace
         */
        var language = {};

        language.v1 = (function() {

            /**
             * Namespace v1.
             * @memberof com.language
             * @namespace
             */
            var v1 = {};

            v1.Language = (function() {

                /**
                 * Properties of a Language.
                 * @memberof com.language.v1
                 * @interface ILanguage
                 */

                /**
                 * Constructs a new Language.
                 * @memberof com.language.v1
                 * @classdesc Represents a Language.
                 * @implements ILanguage
                 * @constructor
                 * @param {com.language.v1.ILanguage=} [properties] Properties to set
                 */
                function Language(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new Language instance using the specified properties.
                 * @function create
                 * @memberof com.language.v1.Language
                 * @static
                 * @param {com.language.v1.ILanguage=} [properties] Properties to set
                 * @returns {com.language.v1.Language} Language instance
                 */
                Language.create = function create(properties) {
                    return new Language(properties);
                };

                /**
                 * Encodes the specified Language message. Does not implicitly {@link com.language.v1.Language.verify|verify} messages.
                 * @function encode
                 * @memberof com.language.v1.Language
                 * @static
                 * @param {com.language.v1.ILanguage} message Language message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Language.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified Language message, length delimited. Does not implicitly {@link com.language.v1.Language.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.language.v1.Language
                 * @static
                 * @param {com.language.v1.ILanguage} message Language message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Language.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Language message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.language.v1.Language
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.language.v1.Language} Language
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Language.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.language.v1.Language();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Language message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.language.v1.Language
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.language.v1.Language} Language
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Language.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Language message.
                 * @function verify
                 * @memberof com.language.v1.Language
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Language.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a Language message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.language.v1.Language
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.language.v1.Language} Language
                 */
                Language.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.language.v1.Language)
                        return object;
                    return new $root.com.language.v1.Language();
                };

                /**
                 * Creates a plain object from a Language message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.language.v1.Language
                 * @static
                 * @param {com.language.v1.Language} message Language
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Language.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this Language to JSON.
                 * @function toJSON
                 * @memberof com.language.v1.Language
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Language.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Language
                 * @function getTypeUrl
                 * @memberof com.language.v1.Language
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Language.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.language.v1.Language";
                };

                /**
                 * Code enum.
                 * @name com.language.v1.Language.Code
                 * @enum {number}
                 * @property {number} CODE_UNSPECIFIED=0 CODE_UNSPECIFIED value
                 * @property {number} CODE_EN=1 CODE_EN value
                 * @property {number} CODE_UA=2 CODE_UA value
                 */
                Language.Code = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "CODE_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "CODE_EN"] = 1;
                    values[valuesById[2] = "CODE_UA"] = 2;
                    return values;
                })();

                return Language;
            })();

            return v1;
        })();

        return language;
    })();

    return com;
})();

module.exports = $root;
