/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(window || global).GameMsg = (function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.GameMsg = (function() {
    
        /**
         * Namespace GameMsg.
         * @exports GameMsg
         * @namespace
         */
        var GameMsg = {};
    
        GameMsg.Login = (function() {
    
            /**
             * Properties of a Login.
             * @memberof GameMsg
             * @interface ILogin
             * @property {string|null} [token] Login token
             */
    
            /**
             * Constructs a new Login.
             * @memberof GameMsg
             * @classdesc Represents a Login.
             * @implements ILogin
             * @constructor
             * @param {GameMsg.ILogin=} [properties] Properties to set
             */
            function Login(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Login token.
             * @member {string} token
             * @memberof GameMsg.Login
             * @instance
             */
            Login.prototype.token = "";
    
            /**
             * Creates a new Login instance using the specified properties.
             * @function create
             * @memberof GameMsg.Login
             * @static
             * @param {GameMsg.ILogin=} [properties] Properties to set
             * @returns {GameMsg.Login} Login instance
             */
            Login.create = function create(properties) {
                return new Login(properties);
            };
    
            /**
             * Encodes the specified Login message. Does not implicitly {@link GameMsg.Login.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.Login
             * @static
             * @param {GameMsg.ILogin} message Login message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Login.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.token != null && message.hasOwnProperty("token"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                return writer;
            };
    
            /**
             * Encodes the specified Login message, length delimited. Does not implicitly {@link GameMsg.Login.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.Login
             * @static
             * @param {GameMsg.ILogin} message Login message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Login.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Login message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.Login
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.Login} Login
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Login.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.Login();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.token = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Login message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.Login
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.Login} Login
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Login.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Login message.
             * @function verify
             * @memberof GameMsg.Login
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Login.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                return null;
            };
    
            /**
             * Creates a Login message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.Login
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.Login} Login
             */
            Login.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.Login)
                    return object;
                var message = new $root.GameMsg.Login();
                if (object.token != null)
                    message.token = String(object.token);
                return message;
            };
    
            /**
             * Creates a plain object from a Login message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.Login
             * @static
             * @param {GameMsg.Login} message Login
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Login.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.token = "";
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                return object;
            };
    
            /**
             * Converts this Login to JSON.
             * @function toJSON
             * @memberof GameMsg.Login
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Login.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Login;
        })();
    
        GameMsg.Error = (function() {
    
            /**
             * Properties of an Error.
             * @memberof GameMsg
             * @interface IError
             * @property {number|null} [type] Error type
             * @property {string|null} [msg] Error msg
             */
    
            /**
             * Constructs a new Error.
             * @memberof GameMsg
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {GameMsg.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Error type.
             * @member {number} type
             * @memberof GameMsg.Error
             * @instance
             */
            Error.prototype.type = 0;
    
            /**
             * Error msg.
             * @member {string} msg
             * @memberof GameMsg.Error
             * @instance
             */
            Error.prototype.msg = "";
    
            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof GameMsg.Error
             * @static
             * @param {GameMsg.IError=} [properties] Properties to set
             * @returns {GameMsg.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };
    
            /**
             * Encodes the specified Error message. Does not implicitly {@link GameMsg.Error.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.Error
             * @static
             * @param {GameMsg.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.msg != null && message.hasOwnProperty("msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                return writer;
            };
    
            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link GameMsg.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.Error
             * @static
             * @param {GameMsg.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.Error();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.msg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Error message.
             * @function verify
             * @memberof GameMsg.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isInteger(message.type))
                        return "type: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                return null;
            };
    
            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.Error)
                    return object;
                var message = new $root.GameMsg.Error();
                if (object.type != null)
                    message.type = object.type | 0;
                if (object.msg != null)
                    message.msg = String(object.msg);
                return message;
            };
    
            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.Error
             * @static
             * @param {GameMsg.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = 0;
                    object.msg = "";
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.msg != null && message.hasOwnProperty("msg"))
                    object.msg = message.msg;
                return object;
            };
    
            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof GameMsg.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Error;
        })();
    
        GameMsg.User = (function() {
    
            /**
             * Properties of a User.
             * @memberof GameMsg
             * @interface IUser
             * @property {number|null} [id] User id
             * @property {string|null} [name] User name
             * @property {string|null} [headImg] User headImg
             * @property {string|null} [groupId] User groupId
             * @property {string|null} [groupName] User groupName
             * @property {number|null} [gold] User gold
             * @property {number|null} [index] User index
             */
    
            /**
             * Constructs a new User.
             * @memberof GameMsg
             * @classdesc Represents a User.
             * @implements IUser
             * @constructor
             * @param {GameMsg.IUser=} [properties] Properties to set
             */
            function User(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * User id.
             * @member {number} id
             * @memberof GameMsg.User
             * @instance
             */
            User.prototype.id = 0;
    
            /**
             * User name.
             * @member {string} name
             * @memberof GameMsg.User
             * @instance
             */
            User.prototype.name = "";
    
            /**
             * User headImg.
             * @member {string} headImg
             * @memberof GameMsg.User
             * @instance
             */
            User.prototype.headImg = "";
    
            /**
             * User groupId.
             * @member {string} groupId
             * @memberof GameMsg.User
             * @instance
             */
            User.prototype.groupId = "";
    
            /**
             * User groupName.
             * @member {string} groupName
             * @memberof GameMsg.User
             * @instance
             */
            User.prototype.groupName = "";
    
            /**
             * User gold.
             * @member {number} gold
             * @memberof GameMsg.User
             * @instance
             */
            User.prototype.gold = 0;
    
            /**
             * User index.
             * @member {number} index
             * @memberof GameMsg.User
             * @instance
             */
            User.prototype.index = 0;
    
            /**
             * Creates a new User instance using the specified properties.
             * @function create
             * @memberof GameMsg.User
             * @static
             * @param {GameMsg.IUser=} [properties] Properties to set
             * @returns {GameMsg.User} User instance
             */
            User.create = function create(properties) {
                return new User(properties);
            };
    
            /**
             * Encodes the specified User message. Does not implicitly {@link GameMsg.User.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.User
             * @static
             * @param {GameMsg.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.headImg != null && message.hasOwnProperty("headImg"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.headImg);
                if (message.groupId != null && message.hasOwnProperty("groupId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.groupId);
                if (message.groupName != null && message.hasOwnProperty("groupName"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.groupName);
                if (message.gold != null && message.hasOwnProperty("gold"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.gold);
                if (message.index != null && message.hasOwnProperty("index"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.index);
                return writer;
            };
    
            /**
             * Encodes the specified User message, length delimited. Does not implicitly {@link GameMsg.User.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.User
             * @static
             * @param {GameMsg.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a User message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.User();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.headImg = reader.string();
                        break;
                    case 4:
                        message.groupId = reader.string();
                        break;
                    case 5:
                        message.groupName = reader.string();
                        break;
                    case 6:
                        message.gold = reader.int32();
                        break;
                    case 7:
                        message.index = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a User message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a User message.
             * @function verify
             * @memberof GameMsg.User
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            User.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.headImg != null && message.hasOwnProperty("headImg"))
                    if (!$util.isString(message.headImg))
                        return "headImg: string expected";
                if (message.groupId != null && message.hasOwnProperty("groupId"))
                    if (!$util.isString(message.groupId))
                        return "groupId: string expected";
                if (message.groupName != null && message.hasOwnProperty("groupName"))
                    if (!$util.isString(message.groupName))
                        return "groupName: string expected";
                if (message.gold != null && message.hasOwnProperty("gold"))
                    if (!$util.isInteger(message.gold))
                        return "gold: integer expected";
                if (message.index != null && message.hasOwnProperty("index"))
                    if (!$util.isInteger(message.index))
                        return "index: integer expected";
                return null;
            };
    
            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.User
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.User} User
             */
            User.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.User)
                    return object;
                var message = new $root.GameMsg.User();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.name != null)
                    message.name = String(object.name);
                if (object.headImg != null)
                    message.headImg = String(object.headImg);
                if (object.groupId != null)
                    message.groupId = String(object.groupId);
                if (object.groupName != null)
                    message.groupName = String(object.groupName);
                if (object.gold != null)
                    message.gold = object.gold | 0;
                if (object.index != null)
                    message.index = object.index | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.User
             * @static
             * @param {GameMsg.User} message User
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            User.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.name = "";
                    object.headImg = "";
                    object.groupId = "";
                    object.groupName = "";
                    object.gold = 0;
                    object.index = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.headImg != null && message.hasOwnProperty("headImg"))
                    object.headImg = message.headImg;
                if (message.groupId != null && message.hasOwnProperty("groupId"))
                    object.groupId = message.groupId;
                if (message.groupName != null && message.hasOwnProperty("groupName"))
                    object.groupName = message.groupName;
                if (message.gold != null && message.hasOwnProperty("gold"))
                    object.gold = message.gold;
                if (message.index != null && message.hasOwnProperty("index"))
                    object.index = message.index;
                return object;
            };
    
            /**
             * Converts this User to JSON.
             * @function toJSON
             * @memberof GameMsg.User
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return User;
        })();
    
        GameMsg.UserList = (function() {
    
            /**
             * Properties of a UserList.
             * @memberof GameMsg
             * @interface IUserList
             * @property {Array.<GameMsg.IUser>|null} [list] UserList list
             */
    
            /**
             * Constructs a new UserList.
             * @memberof GameMsg
             * @classdesc Represents a UserList.
             * @implements IUserList
             * @constructor
             * @param {GameMsg.IUserList=} [properties] Properties to set
             */
            function UserList(properties) {
                this.list = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UserList list.
             * @member {Array.<GameMsg.IUser>} list
             * @memberof GameMsg.UserList
             * @instance
             */
            UserList.prototype.list = $util.emptyArray;
    
            /**
             * Creates a new UserList instance using the specified properties.
             * @function create
             * @memberof GameMsg.UserList
             * @static
             * @param {GameMsg.IUserList=} [properties] Properties to set
             * @returns {GameMsg.UserList} UserList instance
             */
            UserList.create = function create(properties) {
                return new UserList(properties);
            };
    
            /**
             * Encodes the specified UserList message. Does not implicitly {@link GameMsg.UserList.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.UserList
             * @static
             * @param {GameMsg.IUserList} message UserList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.list != null && message.list.length)
                    for (var i = 0; i < message.list.length; ++i)
                        $root.GameMsg.User.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified UserList message, length delimited. Does not implicitly {@link GameMsg.UserList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.UserList
             * @static
             * @param {GameMsg.IUserList} message UserList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a UserList message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.UserList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.UserList} UserList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.UserList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.GameMsg.User.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a UserList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.UserList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.UserList} UserList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a UserList message.
             * @function verify
             * @memberof GameMsg.UserList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.list != null && message.hasOwnProperty("list")) {
                    if (!Array.isArray(message.list))
                        return "list: array expected";
                    for (var i = 0; i < message.list.length; ++i) {
                        var error = $root.GameMsg.User.verify(message.list[i]);
                        if (error)
                            return "list." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a UserList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.UserList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.UserList} UserList
             */
            UserList.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.UserList)
                    return object;
                var message = new $root.GameMsg.UserList();
                if (object.list) {
                    if (!Array.isArray(object.list))
                        throw TypeError(".GameMsg.UserList.list: array expected");
                    message.list = [];
                    for (var i = 0; i < object.list.length; ++i) {
                        if (typeof object.list[i] !== "object")
                            throw TypeError(".GameMsg.UserList.list: object expected");
                        message.list[i] = $root.GameMsg.User.fromObject(object.list[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a UserList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.UserList
             * @static
             * @param {GameMsg.UserList} message UserList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.list = [];
                if (message.list && message.list.length) {
                    object.list = [];
                    for (var j = 0; j < message.list.length; ++j)
                        object.list[j] = $root.GameMsg.User.toObject(message.list[j], options);
                }
                return object;
            };
    
            /**
             * Converts this UserList to JSON.
             * @function toJSON
             * @memberof GameMsg.UserList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UserList;
        })();
    
        GameMsg.Time = (function() {
    
            /**
             * Properties of a Time.
             * @memberof GameMsg
             * @interface ITime
             * @property {number|null} [time] Time time
             */
    
            /**
             * Constructs a new Time.
             * @memberof GameMsg
             * @classdesc Represents a Time.
             * @implements ITime
             * @constructor
             * @param {GameMsg.ITime=} [properties] Properties to set
             */
            function Time(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Time time.
             * @member {number} time
             * @memberof GameMsg.Time
             * @instance
             */
            Time.prototype.time = 0;
    
            /**
             * Creates a new Time instance using the specified properties.
             * @function create
             * @memberof GameMsg.Time
             * @static
             * @param {GameMsg.ITime=} [properties] Properties to set
             * @returns {GameMsg.Time} Time instance
             */
            Time.create = function create(properties) {
                return new Time(properties);
            };
    
            /**
             * Encodes the specified Time message. Does not implicitly {@link GameMsg.Time.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.Time
             * @static
             * @param {GameMsg.ITime} message Time message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Time.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.time != null && message.hasOwnProperty("time"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.time);
                return writer;
            };
    
            /**
             * Encodes the specified Time message, length delimited. Does not implicitly {@link GameMsg.Time.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.Time
             * @static
             * @param {GameMsg.ITime} message Time message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Time.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Time message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.Time
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.Time} Time
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Time.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.Time();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.time = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Time message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.Time
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.Time} Time
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Time.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Time message.
             * @function verify
             * @memberof GameMsg.Time
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Time.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time))
                        return "time: integer expected";
                return null;
            };
    
            /**
             * Creates a Time message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.Time
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.Time} Time
             */
            Time.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.Time)
                    return object;
                var message = new $root.GameMsg.Time();
                if (object.time != null)
                    message.time = object.time | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Time message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.Time
             * @static
             * @param {GameMsg.Time} message Time
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Time.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.time = 0;
                if (message.time != null && message.hasOwnProperty("time"))
                    object.time = message.time;
                return object;
            };
    
            /**
             * Converts this Time to JSON.
             * @function toJSON
             * @memberof GameMsg.Time
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Time.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Time;
        })();
    
        GameMsg.Room = (function() {
    
            /**
             * Properties of a Room.
             * @memberof GameMsg
             * @interface IRoom
             * @property {number|null} [roomId] Room roomId
             * @property {number|null} [type] Room type
             */
    
            /**
             * Constructs a new Room.
             * @memberof GameMsg
             * @classdesc Represents a Room.
             * @implements IRoom
             * @constructor
             * @param {GameMsg.IRoom=} [properties] Properties to set
             */
            function Room(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Room roomId.
             * @member {number} roomId
             * @memberof GameMsg.Room
             * @instance
             */
            Room.prototype.roomId = 0;
    
            /**
             * Room type.
             * @member {number} type
             * @memberof GameMsg.Room
             * @instance
             */
            Room.prototype.type = 0;
    
            /**
             * Creates a new Room instance using the specified properties.
             * @function create
             * @memberof GameMsg.Room
             * @static
             * @param {GameMsg.IRoom=} [properties] Properties to set
             * @returns {GameMsg.Room} Room instance
             */
            Room.create = function create(properties) {
                return new Room(properties);
            };
    
            /**
             * Encodes the specified Room message. Does not implicitly {@link GameMsg.Room.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.Room
             * @static
             * @param {GameMsg.IRoom} message Room message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Room.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                return writer;
            };
    
            /**
             * Encodes the specified Room message, length delimited. Does not implicitly {@link GameMsg.Room.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.Room
             * @static
             * @param {GameMsg.IRoom} message Room message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Room.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Room message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.Room
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.Room} Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Room.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.Room();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roomId = reader.int32();
                        break;
                    case 2:
                        message.type = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Room message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.Room
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.Room} Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Room.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Room message.
             * @function verify
             * @memberof GameMsg.Room
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Room.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isInteger(message.roomId))
                        return "roomId: integer expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isInteger(message.type))
                        return "type: integer expected";
                return null;
            };
    
            /**
             * Creates a Room message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.Room
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.Room} Room
             */
            Room.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.Room)
                    return object;
                var message = new $root.GameMsg.Room();
                if (object.roomId != null)
                    message.roomId = object.roomId | 0;
                if (object.type != null)
                    message.type = object.type | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Room message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.Room
             * @static
             * @param {GameMsg.Room} message Room
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Room.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.roomId = 0;
                    object.type = 0;
                }
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    object.roomId = message.roomId;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                return object;
            };
    
            /**
             * Converts this Room to JSON.
             * @function toJSON
             * @memberof GameMsg.Room
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Room.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Room;
        })();
    
        GameMsg.Cards = (function() {
    
            /**
             * Properties of a Cards.
             * @memberof GameMsg
             * @interface ICards
             * @property {Array.<number>|null} [card] Cards card
             */
    
            /**
             * Constructs a new Cards.
             * @memberof GameMsg
             * @classdesc Represents a Cards.
             * @implements ICards
             * @constructor
             * @param {GameMsg.ICards=} [properties] Properties to set
             */
            function Cards(properties) {
                this.card = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Cards card.
             * @member {Array.<number>} card
             * @memberof GameMsg.Cards
             * @instance
             */
            Cards.prototype.card = $util.emptyArray;
    
            /**
             * Creates a new Cards instance using the specified properties.
             * @function create
             * @memberof GameMsg.Cards
             * @static
             * @param {GameMsg.ICards=} [properties] Properties to set
             * @returns {GameMsg.Cards} Cards instance
             */
            Cards.create = function create(properties) {
                return new Cards(properties);
            };
    
            /**
             * Encodes the specified Cards message. Does not implicitly {@link GameMsg.Cards.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.Cards
             * @static
             * @param {GameMsg.ICards} message Cards message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Cards.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.card != null && message.card.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.card.length; ++i)
                        writer.int32(message.card[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified Cards message, length delimited. Does not implicitly {@link GameMsg.Cards.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.Cards
             * @static
             * @param {GameMsg.ICards} message Cards message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Cards.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Cards message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.Cards
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.Cards} Cards
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Cards.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.Cards();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.card && message.card.length))
                            message.card = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.card.push(reader.int32());
                        } else
                            message.card.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Cards message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.Cards
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.Cards} Cards
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Cards.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Cards message.
             * @function verify
             * @memberof GameMsg.Cards
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Cards.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.card != null && message.hasOwnProperty("card")) {
                    if (!Array.isArray(message.card))
                        return "card: array expected";
                    for (var i = 0; i < message.card.length; ++i)
                        if (!$util.isInteger(message.card[i]))
                            return "card: integer[] expected";
                }
                return null;
            };
    
            /**
             * Creates a Cards message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.Cards
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.Cards} Cards
             */
            Cards.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.Cards)
                    return object;
                var message = new $root.GameMsg.Cards();
                if (object.card) {
                    if (!Array.isArray(object.card))
                        throw TypeError(".GameMsg.Cards.card: array expected");
                    message.card = [];
                    for (var i = 0; i < object.card.length; ++i)
                        message.card[i] = object.card[i] | 0;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Cards message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.Cards
             * @static
             * @param {GameMsg.Cards} message Cards
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Cards.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.card = [];
                if (message.card && message.card.length) {
                    object.card = [];
                    for (var j = 0; j < message.card.length; ++j)
                        object.card[j] = message.card[j];
                }
                return object;
            };
    
            /**
             * Converts this Cards to JSON.
             * @function toJSON
             * @memberof GameMsg.Cards
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Cards.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Cards;
        })();
    
        GameMsg.Start = (function() {
    
            /**
             * Properties of a Start.
             * @memberof GameMsg
             * @interface IStart
             * @property {Array.<number>|null} [cards] Start cards
             * @property {number|null} [time] Start time
             * @property {number|null} [level] Start level
             * @property {number|null} [maxnum] Start maxnum
             * @property {number|null} [num] Start num
             * @property {number|null} [isMy] Start isMy
             * @property {number|null} [isOut] Start isOut
             */
    
            /**
             * Constructs a new Start.
             * @memberof GameMsg
             * @classdesc Represents a Start.
             * @implements IStart
             * @constructor
             * @param {GameMsg.IStart=} [properties] Properties to set
             */
            function Start(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Start cards.
             * @member {Array.<number>} cards
             * @memberof GameMsg.Start
             * @instance
             */
            Start.prototype.cards = $util.emptyArray;
    
            /**
             * Start time.
             * @member {number} time
             * @memberof GameMsg.Start
             * @instance
             */
            Start.prototype.time = 0;
    
            /**
             * Start level.
             * @member {number} level
             * @memberof GameMsg.Start
             * @instance
             */
            Start.prototype.level = 0;
    
            /**
             * Start maxnum.
             * @member {number} maxnum
             * @memberof GameMsg.Start
             * @instance
             */
            Start.prototype.maxnum = 0;
    
            /**
             * Start num.
             * @member {number} num
             * @memberof GameMsg.Start
             * @instance
             */
            Start.prototype.num = 0;
    
            /**
             * Start isMy.
             * @member {number} isMy
             * @memberof GameMsg.Start
             * @instance
             */
            Start.prototype.isMy = 0;
    
            /**
             * Start isOut.
             * @member {number} isOut
             * @memberof GameMsg.Start
             * @instance
             */
            Start.prototype.isOut = 0;
    
            /**
             * Creates a new Start instance using the specified properties.
             * @function create
             * @memberof GameMsg.Start
             * @static
             * @param {GameMsg.IStart=} [properties] Properties to set
             * @returns {GameMsg.Start} Start instance
             */
            Start.create = function create(properties) {
                return new Start(properties);
            };
    
            /**
             * Encodes the specified Start message. Does not implicitly {@link GameMsg.Start.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.Start
             * @static
             * @param {GameMsg.IStart} message Start message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Start.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cards != null && message.cards.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.cards.length; ++i)
                        writer.int32(message.cards[i]);
                    writer.ldelim();
                }
                if (message.time != null && message.hasOwnProperty("time"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.time);
                if (message.level != null && message.hasOwnProperty("level"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.level);
                if (message.maxnum != null && message.hasOwnProperty("maxnum"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.maxnum);
                if (message.num != null && message.hasOwnProperty("num"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.num);
                if (message.isMy != null && message.hasOwnProperty("isMy"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.isMy);
                if (message.isOut != null && message.hasOwnProperty("isOut"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.isOut);
                return writer;
            };
    
            /**
             * Encodes the specified Start message, length delimited. Does not implicitly {@link GameMsg.Start.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.Start
             * @static
             * @param {GameMsg.IStart} message Start message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Start.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Start message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.Start
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.Start} Start
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Start.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.Start();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.cards.push(reader.int32());
                        } else
                            message.cards.push(reader.int32());
                        break;
                    case 2:
                        message.time = reader.int32();
                        break;
                    case 3:
                        message.level = reader.int32();
                        break;
                    case 4:
                        message.maxnum = reader.int32();
                        break;
                    case 5:
                        message.num = reader.int32();
                        break;
                    case 6:
                        message.isMy = reader.int32();
                        break;
                    case 7:
                        message.isOut = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Start message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.Start
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.Start} Start
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Start.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Start message.
             * @function verify
             * @memberof GameMsg.Start
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Start.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i)
                        if (!$util.isInteger(message.cards[i]))
                            return "cards: integer[] expected";
                }
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time))
                        return "time: integer expected";
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.maxnum != null && message.hasOwnProperty("maxnum"))
                    if (!$util.isInteger(message.maxnum))
                        return "maxnum: integer expected";
                if (message.num != null && message.hasOwnProperty("num"))
                    if (!$util.isInteger(message.num))
                        return "num: integer expected";
                if (message.isMy != null && message.hasOwnProperty("isMy"))
                    if (!$util.isInteger(message.isMy))
                        return "isMy: integer expected";
                if (message.isOut != null && message.hasOwnProperty("isOut"))
                    if (!$util.isInteger(message.isOut))
                        return "isOut: integer expected";
                return null;
            };
    
            /**
             * Creates a Start message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.Start
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.Start} Start
             */
            Start.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.Start)
                    return object;
                var message = new $root.GameMsg.Start();
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".GameMsg.Start.cards: array expected");
                    message.cards = [];
                    for (var i = 0; i < object.cards.length; ++i)
                        message.cards[i] = object.cards[i] | 0;
                }
                if (object.time != null)
                    message.time = object.time | 0;
                if (object.level != null)
                    message.level = object.level | 0;
                if (object.maxnum != null)
                    message.maxnum = object.maxnum | 0;
                if (object.num != null)
                    message.num = object.num | 0;
                if (object.isMy != null)
                    message.isMy = object.isMy | 0;
                if (object.isOut != null)
                    message.isOut = object.isOut | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Start message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.Start
             * @static
             * @param {GameMsg.Start} message Start
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Start.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cards = [];
                if (options.defaults) {
                    object.time = 0;
                    object.level = 0;
                    object.maxnum = 0;
                    object.num = 0;
                    object.isMy = 0;
                    object.isOut = 0;
                }
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (var j = 0; j < message.cards.length; ++j)
                        object.cards[j] = message.cards[j];
                }
                if (message.time != null && message.hasOwnProperty("time"))
                    object.time = message.time;
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.maxnum != null && message.hasOwnProperty("maxnum"))
                    object.maxnum = message.maxnum;
                if (message.num != null && message.hasOwnProperty("num"))
                    object.num = message.num;
                if (message.isMy != null && message.hasOwnProperty("isMy"))
                    object.isMy = message.isMy;
                if (message.isOut != null && message.hasOwnProperty("isOut"))
                    object.isOut = message.isOut;
                return object;
            };
    
            /**
             * Converts this Start to JSON.
             * @function toJSON
             * @memberof GameMsg.Start
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Start.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Start;
        })();
    
        GameMsg.NextUser = (function() {
    
            /**
             * Properties of a NextUser.
             * @memberof GameMsg
             * @interface INextUser
             * @property {number|null} [id] NextUser id
             * @property {number|null} [isNot] NextUser isNot
             * @property {number|null} [isSend] NextUser isSend
             * @property {number|null} [isHit] NextUser isHit
             * @property {Array.<GameMsg.ICards>|null} [hitCards] NextUser hitCards
             */
    
            /**
             * Constructs a new NextUser.
             * @memberof GameMsg
             * @classdesc Represents a NextUser.
             * @implements INextUser
             * @constructor
             * @param {GameMsg.INextUser=} [properties] Properties to set
             */
            function NextUser(properties) {
                this.hitCards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * NextUser id.
             * @member {number} id
             * @memberof GameMsg.NextUser
             * @instance
             */
            NextUser.prototype.id = 0;
    
            /**
             * NextUser isNot.
             * @member {number} isNot
             * @memberof GameMsg.NextUser
             * @instance
             */
            NextUser.prototype.isNot = 0;
    
            /**
             * NextUser isSend.
             * @member {number} isSend
             * @memberof GameMsg.NextUser
             * @instance
             */
            NextUser.prototype.isSend = 0;
    
            /**
             * NextUser isHit.
             * @member {number} isHit
             * @memberof GameMsg.NextUser
             * @instance
             */
            NextUser.prototype.isHit = 0;
    
            /**
             * NextUser hitCards.
             * @member {Array.<GameMsg.ICards>} hitCards
             * @memberof GameMsg.NextUser
             * @instance
             */
            NextUser.prototype.hitCards = $util.emptyArray;
    
            /**
             * Creates a new NextUser instance using the specified properties.
             * @function create
             * @memberof GameMsg.NextUser
             * @static
             * @param {GameMsg.INextUser=} [properties] Properties to set
             * @returns {GameMsg.NextUser} NextUser instance
             */
            NextUser.create = function create(properties) {
                return new NextUser(properties);
            };
    
            /**
             * Encodes the specified NextUser message. Does not implicitly {@link GameMsg.NextUser.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.NextUser
             * @static
             * @param {GameMsg.INextUser} message NextUser message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NextUser.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.isNot != null && message.hasOwnProperty("isNot"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.isNot);
                if (message.isSend != null && message.hasOwnProperty("isSend"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.isSend);
                if (message.isHit != null && message.hasOwnProperty("isHit"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.isHit);
                if (message.hitCards != null && message.hitCards.length)
                    for (var i = 0; i < message.hitCards.length; ++i)
                        $root.GameMsg.Cards.encode(message.hitCards[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified NextUser message, length delimited. Does not implicitly {@link GameMsg.NextUser.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.NextUser
             * @static
             * @param {GameMsg.INextUser} message NextUser message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NextUser.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a NextUser message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.NextUser
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.NextUser} NextUser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NextUser.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.NextUser();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.isNot = reader.int32();
                        break;
                    case 3:
                        message.isSend = reader.int32();
                        break;
                    case 4:
                        message.isHit = reader.int32();
                        break;
                    case 5:
                        if (!(message.hitCards && message.hitCards.length))
                            message.hitCards = [];
                        message.hitCards.push($root.GameMsg.Cards.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a NextUser message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.NextUser
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.NextUser} NextUser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NextUser.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a NextUser message.
             * @function verify
             * @memberof GameMsg.NextUser
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NextUser.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.isNot != null && message.hasOwnProperty("isNot"))
                    if (!$util.isInteger(message.isNot))
                        return "isNot: integer expected";
                if (message.isSend != null && message.hasOwnProperty("isSend"))
                    if (!$util.isInteger(message.isSend))
                        return "isSend: integer expected";
                if (message.isHit != null && message.hasOwnProperty("isHit"))
                    if (!$util.isInteger(message.isHit))
                        return "isHit: integer expected";
                if (message.hitCards != null && message.hasOwnProperty("hitCards")) {
                    if (!Array.isArray(message.hitCards))
                        return "hitCards: array expected";
                    for (var i = 0; i < message.hitCards.length; ++i) {
                        var error = $root.GameMsg.Cards.verify(message.hitCards[i]);
                        if (error)
                            return "hitCards." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a NextUser message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.NextUser
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.NextUser} NextUser
             */
            NextUser.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.NextUser)
                    return object;
                var message = new $root.GameMsg.NextUser();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.isNot != null)
                    message.isNot = object.isNot | 0;
                if (object.isSend != null)
                    message.isSend = object.isSend | 0;
                if (object.isHit != null)
                    message.isHit = object.isHit | 0;
                if (object.hitCards) {
                    if (!Array.isArray(object.hitCards))
                        throw TypeError(".GameMsg.NextUser.hitCards: array expected");
                    message.hitCards = [];
                    for (var i = 0; i < object.hitCards.length; ++i) {
                        if (typeof object.hitCards[i] !== "object")
                            throw TypeError(".GameMsg.NextUser.hitCards: object expected");
                        message.hitCards[i] = $root.GameMsg.Cards.fromObject(object.hitCards[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a NextUser message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.NextUser
             * @static
             * @param {GameMsg.NextUser} message NextUser
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NextUser.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.hitCards = [];
                if (options.defaults) {
                    object.id = 0;
                    object.isNot = 0;
                    object.isSend = 0;
                    object.isHit = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.isNot != null && message.hasOwnProperty("isNot"))
                    object.isNot = message.isNot;
                if (message.isSend != null && message.hasOwnProperty("isSend"))
                    object.isSend = message.isSend;
                if (message.isHit != null && message.hasOwnProperty("isHit"))
                    object.isHit = message.isHit;
                if (message.hitCards && message.hitCards.length) {
                    object.hitCards = [];
                    for (var j = 0; j < message.hitCards.length; ++j)
                        object.hitCards[j] = $root.GameMsg.Cards.toObject(message.hitCards[j], options);
                }
                return object;
            };
    
            /**
             * Converts this NextUser to JSON.
             * @function toJSON
             * @memberof GameMsg.NextUser
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NextUser.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return NextUser;
        })();
    
        GameMsg.SendCard = (function() {
    
            /**
             * Properties of a SendCard.
             * @memberof GameMsg
             * @interface ISendCard
             * @property {number|null} [id] SendCard id
             * @property {number|null} [isSend] SendCard isSend
             * @property {number|null} [cardType] SendCard cardType
             * @property {Array.<number>|null} [cards] SendCard cards
             * @property {number|null} [nextId] SendCard nextId
             * @property {number|null} [time] SendCard time
             * @property {number|null} [sendType] SendCard sendType
             */
    
            /**
             * Constructs a new SendCard.
             * @memberof GameMsg
             * @classdesc Represents a SendCard.
             * @implements ISendCard
             * @constructor
             * @param {GameMsg.ISendCard=} [properties] Properties to set
             */
            function SendCard(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SendCard id.
             * @member {number} id
             * @memberof GameMsg.SendCard
             * @instance
             */
            SendCard.prototype.id = 0;
    
            /**
             * SendCard isSend.
             * @member {number} isSend
             * @memberof GameMsg.SendCard
             * @instance
             */
            SendCard.prototype.isSend = 0;
    
            /**
             * SendCard cardType.
             * @member {number} cardType
             * @memberof GameMsg.SendCard
             * @instance
             */
            SendCard.prototype.cardType = 0;
    
            /**
             * SendCard cards.
             * @member {Array.<number>} cards
             * @memberof GameMsg.SendCard
             * @instance
             */
            SendCard.prototype.cards = $util.emptyArray;
    
            /**
             * SendCard nextId.
             * @member {number} nextId
             * @memberof GameMsg.SendCard
             * @instance
             */
            SendCard.prototype.nextId = 0;
    
            /**
             * SendCard time.
             * @member {number} time
             * @memberof GameMsg.SendCard
             * @instance
             */
            SendCard.prototype.time = 0;
    
            /**
             * SendCard sendType.
             * @member {number} sendType
             * @memberof GameMsg.SendCard
             * @instance
             */
            SendCard.prototype.sendType = 0;
    
            /**
             * Creates a new SendCard instance using the specified properties.
             * @function create
             * @memberof GameMsg.SendCard
             * @static
             * @param {GameMsg.ISendCard=} [properties] Properties to set
             * @returns {GameMsg.SendCard} SendCard instance
             */
            SendCard.create = function create(properties) {
                return new SendCard(properties);
            };
    
            /**
             * Encodes the specified SendCard message. Does not implicitly {@link GameMsg.SendCard.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.SendCard
             * @static
             * @param {GameMsg.ISendCard} message SendCard message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SendCard.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.isSend != null && message.hasOwnProperty("isSend"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.isSend);
                if (message.cardType != null && message.hasOwnProperty("cardType"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cardType);
                if (message.cards != null && message.cards.length) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork();
                    for (var i = 0; i < message.cards.length; ++i)
                        writer.int32(message.cards[i]);
                    writer.ldelim();
                }
                if (message.nextId != null && message.hasOwnProperty("nextId"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nextId);
                if (message.time != null && message.hasOwnProperty("time"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.time);
                if (message.sendType != null && message.hasOwnProperty("sendType"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.sendType);
                return writer;
            };
    
            /**
             * Encodes the specified SendCard message, length delimited. Does not implicitly {@link GameMsg.SendCard.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.SendCard
             * @static
             * @param {GameMsg.ISendCard} message SendCard message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SendCard.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SendCard message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.SendCard
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.SendCard} SendCard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SendCard.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.SendCard();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.isSend = reader.int32();
                        break;
                    case 3:
                        message.cardType = reader.int32();
                        break;
                    case 4:
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.cards.push(reader.int32());
                        } else
                            message.cards.push(reader.int32());
                        break;
                    case 5:
                        message.nextId = reader.int32();
                        break;
                    case 6:
                        message.time = reader.int32();
                        break;
                    case 7:
                        message.sendType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SendCard message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.SendCard
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.SendCard} SendCard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SendCard.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SendCard message.
             * @function verify
             * @memberof GameMsg.SendCard
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SendCard.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.isSend != null && message.hasOwnProperty("isSend"))
                    if (!$util.isInteger(message.isSend))
                        return "isSend: integer expected";
                if (message.cardType != null && message.hasOwnProperty("cardType"))
                    if (!$util.isInteger(message.cardType))
                        return "cardType: integer expected";
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i)
                        if (!$util.isInteger(message.cards[i]))
                            return "cards: integer[] expected";
                }
                if (message.nextId != null && message.hasOwnProperty("nextId"))
                    if (!$util.isInteger(message.nextId))
                        return "nextId: integer expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time))
                        return "time: integer expected";
                if (message.sendType != null && message.hasOwnProperty("sendType"))
                    if (!$util.isInteger(message.sendType))
                        return "sendType: integer expected";
                return null;
            };
    
            /**
             * Creates a SendCard message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.SendCard
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.SendCard} SendCard
             */
            SendCard.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.SendCard)
                    return object;
                var message = new $root.GameMsg.SendCard();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.isSend != null)
                    message.isSend = object.isSend | 0;
                if (object.cardType != null)
                    message.cardType = object.cardType | 0;
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".GameMsg.SendCard.cards: array expected");
                    message.cards = [];
                    for (var i = 0; i < object.cards.length; ++i)
                        message.cards[i] = object.cards[i] | 0;
                }
                if (object.nextId != null)
                    message.nextId = object.nextId | 0;
                if (object.time != null)
                    message.time = object.time | 0;
                if (object.sendType != null)
                    message.sendType = object.sendType | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a SendCard message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.SendCard
             * @static
             * @param {GameMsg.SendCard} message SendCard
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SendCard.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cards = [];
                if (options.defaults) {
                    object.id = 0;
                    object.isSend = 0;
                    object.cardType = 0;
                    object.nextId = 0;
                    object.time = 0;
                    object.sendType = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.isSend != null && message.hasOwnProperty("isSend"))
                    object.isSend = message.isSend;
                if (message.cardType != null && message.hasOwnProperty("cardType"))
                    object.cardType = message.cardType;
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (var j = 0; j < message.cards.length; ++j)
                        object.cards[j] = message.cards[j];
                }
                if (message.nextId != null && message.hasOwnProperty("nextId"))
                    object.nextId = message.nextId;
                if (message.time != null && message.hasOwnProperty("time"))
                    object.time = message.time;
                if (message.sendType != null && message.hasOwnProperty("sendType"))
                    object.sendType = message.sendType;
                return object;
            };
    
            /**
             * Converts this SendCard to JSON.
             * @function toJSON
             * @memberof GameMsg.SendCard
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SendCard.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SendCard;
        })();
    
        GameMsg.UserSendCard = (function() {
    
            /**
             * Properties of a UserSendCard.
             * @memberof GameMsg
             * @interface IUserSendCard
             * @property {string|null} [cards] UserSendCard cards
             */
    
            /**
             * Constructs a new UserSendCard.
             * @memberof GameMsg
             * @classdesc Represents a UserSendCard.
             * @implements IUserSendCard
             * @constructor
             * @param {GameMsg.IUserSendCard=} [properties] Properties to set
             */
            function UserSendCard(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UserSendCard cards.
             * @member {string} cards
             * @memberof GameMsg.UserSendCard
             * @instance
             */
            UserSendCard.prototype.cards = "";
    
            /**
             * Creates a new UserSendCard instance using the specified properties.
             * @function create
             * @memberof GameMsg.UserSendCard
             * @static
             * @param {GameMsg.IUserSendCard=} [properties] Properties to set
             * @returns {GameMsg.UserSendCard} UserSendCard instance
             */
            UserSendCard.create = function create(properties) {
                return new UserSendCard(properties);
            };
    
            /**
             * Encodes the specified UserSendCard message. Does not implicitly {@link GameMsg.UserSendCard.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.UserSendCard
             * @static
             * @param {GameMsg.IUserSendCard} message UserSendCard message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserSendCard.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cards != null && message.hasOwnProperty("cards"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.cards);
                return writer;
            };
    
            /**
             * Encodes the specified UserSendCard message, length delimited. Does not implicitly {@link GameMsg.UserSendCard.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.UserSendCard
             * @static
             * @param {GameMsg.IUserSendCard} message UserSendCard message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserSendCard.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a UserSendCard message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.UserSendCard
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.UserSendCard} UserSendCard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserSendCard.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.UserSendCard();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.cards = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a UserSendCard message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.UserSendCard
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.UserSendCard} UserSendCard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserSendCard.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a UserSendCard message.
             * @function verify
             * @memberof GameMsg.UserSendCard
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserSendCard.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cards != null && message.hasOwnProperty("cards"))
                    if (!$util.isString(message.cards))
                        return "cards: string expected";
                return null;
            };
    
            /**
             * Creates a UserSendCard message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.UserSendCard
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.UserSendCard} UserSendCard
             */
            UserSendCard.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.UserSendCard)
                    return object;
                var message = new $root.GameMsg.UserSendCard();
                if (object.cards != null)
                    message.cards = String(object.cards);
                return message;
            };
    
            /**
             * Creates a plain object from a UserSendCard message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.UserSendCard
             * @static
             * @param {GameMsg.UserSendCard} message UserSendCard
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserSendCard.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.cards = "";
                if (message.cards != null && message.hasOwnProperty("cards"))
                    object.cards = message.cards;
                return object;
            };
    
            /**
             * Converts this UserSendCard to JSON.
             * @function toJSON
             * @memberof GameMsg.UserSendCard
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserSendCard.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UserSendCard;
        })();
    
        GameMsg.UserWin = (function() {
    
            /**
             * Properties of a UserWin.
             * @memberof GameMsg
             * @interface IUserWin
             * @property {number|null} [id] UserWin id
             * @property {number|null} [win] UserWin win
             */
    
            /**
             * Constructs a new UserWin.
             * @memberof GameMsg
             * @classdesc Represents a UserWin.
             * @implements IUserWin
             * @constructor
             * @param {GameMsg.IUserWin=} [properties] Properties to set
             */
            function UserWin(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UserWin id.
             * @member {number} id
             * @memberof GameMsg.UserWin
             * @instance
             */
            UserWin.prototype.id = 0;
    
            /**
             * UserWin win.
             * @member {number} win
             * @memberof GameMsg.UserWin
             * @instance
             */
            UserWin.prototype.win = 0;
    
            /**
             * Creates a new UserWin instance using the specified properties.
             * @function create
             * @memberof GameMsg.UserWin
             * @static
             * @param {GameMsg.IUserWin=} [properties] Properties to set
             * @returns {GameMsg.UserWin} UserWin instance
             */
            UserWin.create = function create(properties) {
                return new UserWin(properties);
            };
    
            /**
             * Encodes the specified UserWin message. Does not implicitly {@link GameMsg.UserWin.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.UserWin
             * @static
             * @param {GameMsg.IUserWin} message UserWin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserWin.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.win != null && message.hasOwnProperty("win"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.win);
                return writer;
            };
    
            /**
             * Encodes the specified UserWin message, length delimited. Does not implicitly {@link GameMsg.UserWin.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.UserWin
             * @static
             * @param {GameMsg.IUserWin} message UserWin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserWin.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a UserWin message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.UserWin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.UserWin} UserWin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserWin.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.UserWin();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.win = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a UserWin message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.UserWin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.UserWin} UserWin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserWin.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a UserWin message.
             * @function verify
             * @memberof GameMsg.UserWin
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserWin.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.win != null && message.hasOwnProperty("win"))
                    if (!$util.isInteger(message.win))
                        return "win: integer expected";
                return null;
            };
    
            /**
             * Creates a UserWin message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.UserWin
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.UserWin} UserWin
             */
            UserWin.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.UserWin)
                    return object;
                var message = new $root.GameMsg.UserWin();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.win != null)
                    message.win = object.win | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a UserWin message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.UserWin
             * @static
             * @param {GameMsg.UserWin} message UserWin
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserWin.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.win = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.win != null && message.hasOwnProperty("win"))
                    object.win = message.win;
                return object;
            };
    
            /**
             * Converts this UserWin to JSON.
             * @function toJSON
             * @memberof GameMsg.UserWin
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserWin.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UserWin;
        })();
    
        GameMsg.ResUser = (function() {
    
            /**
             * Properties of a ResUser.
             * @memberof GameMsg
             * @interface IResUser
             * @property {number|null} [id] ResUser id
             * @property {string|null} [name] ResUser name
             * @property {string|null} [headImg] ResUser headImg
             * @property {number|null} [res] ResUser res
             * @property {number|null} [score] ResUser score
             * @property {number|null} [time] ResUser time
             */
    
            /**
             * Constructs a new ResUser.
             * @memberof GameMsg
             * @classdesc Represents a ResUser.
             * @implements IResUser
             * @constructor
             * @param {GameMsg.IResUser=} [properties] Properties to set
             */
            function ResUser(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ResUser id.
             * @member {number} id
             * @memberof GameMsg.ResUser
             * @instance
             */
            ResUser.prototype.id = 0;
    
            /**
             * ResUser name.
             * @member {string} name
             * @memberof GameMsg.ResUser
             * @instance
             */
            ResUser.prototype.name = "";
    
            /**
             * ResUser headImg.
             * @member {string} headImg
             * @memberof GameMsg.ResUser
             * @instance
             */
            ResUser.prototype.headImg = "";
    
            /**
             * ResUser res.
             * @member {number} res
             * @memberof GameMsg.ResUser
             * @instance
             */
            ResUser.prototype.res = 0;
    
            /**
             * ResUser score.
             * @member {number} score
             * @memberof GameMsg.ResUser
             * @instance
             */
            ResUser.prototype.score = 0;
    
            /**
             * ResUser time.
             * @member {number} time
             * @memberof GameMsg.ResUser
             * @instance
             */
            ResUser.prototype.time = 0;
    
            /**
             * Creates a new ResUser instance using the specified properties.
             * @function create
             * @memberof GameMsg.ResUser
             * @static
             * @param {GameMsg.IResUser=} [properties] Properties to set
             * @returns {GameMsg.ResUser} ResUser instance
             */
            ResUser.create = function create(properties) {
                return new ResUser(properties);
            };
    
            /**
             * Encodes the specified ResUser message. Does not implicitly {@link GameMsg.ResUser.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.ResUser
             * @static
             * @param {GameMsg.IResUser} message ResUser message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResUser.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.headImg != null && message.hasOwnProperty("headImg"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.headImg);
                if (message.res != null && message.hasOwnProperty("res"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.res);
                if (message.score != null && message.hasOwnProperty("score"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.score);
                if (message.time != null && message.hasOwnProperty("time"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.time);
                return writer;
            };
    
            /**
             * Encodes the specified ResUser message, length delimited. Does not implicitly {@link GameMsg.ResUser.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.ResUser
             * @static
             * @param {GameMsg.IResUser} message ResUser message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResUser.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ResUser message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.ResUser
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.ResUser} ResUser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResUser.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.ResUser();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.headImg = reader.string();
                        break;
                    case 4:
                        message.res = reader.int32();
                        break;
                    case 5:
                        message.score = reader.int32();
                        break;
                    case 6:
                        message.time = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ResUser message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.ResUser
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.ResUser} ResUser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResUser.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ResUser message.
             * @function verify
             * @memberof GameMsg.ResUser
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResUser.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.headImg != null && message.hasOwnProperty("headImg"))
                    if (!$util.isString(message.headImg))
                        return "headImg: string expected";
                if (message.res != null && message.hasOwnProperty("res"))
                    if (!$util.isInteger(message.res))
                        return "res: integer expected";
                if (message.score != null && message.hasOwnProperty("score"))
                    if (!$util.isInteger(message.score))
                        return "score: integer expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time))
                        return "time: integer expected";
                return null;
            };
    
            /**
             * Creates a ResUser message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.ResUser
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.ResUser} ResUser
             */
            ResUser.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.ResUser)
                    return object;
                var message = new $root.GameMsg.ResUser();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.name != null)
                    message.name = String(object.name);
                if (object.headImg != null)
                    message.headImg = String(object.headImg);
                if (object.res != null)
                    message.res = object.res | 0;
                if (object.score != null)
                    message.score = object.score | 0;
                if (object.time != null)
                    message.time = object.time | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a ResUser message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.ResUser
             * @static
             * @param {GameMsg.ResUser} message ResUser
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResUser.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.name = "";
                    object.headImg = "";
                    object.res = 0;
                    object.score = 0;
                    object.time = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.headImg != null && message.hasOwnProperty("headImg"))
                    object.headImg = message.headImg;
                if (message.res != null && message.hasOwnProperty("res"))
                    object.res = message.res;
                if (message.score != null && message.hasOwnProperty("score"))
                    object.score = message.score;
                if (message.time != null && message.hasOwnProperty("time"))
                    object.time = message.time;
                return object;
            };
    
            /**
             * Converts this ResUser to JSON.
             * @function toJSON
             * @memberof GameMsg.ResUser
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResUser.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ResUser;
        })();
    
        GameMsg.WinList = (function() {
    
            /**
             * Properties of a WinList.
             * @memberof GameMsg
             * @interface IWinList
             * @property {Array.<GameMsg.IResUser>|null} [list] WinList list
             * @property {number|null} [type] WinList type
             * @property {number|null} [time] WinList time
             */
    
            /**
             * Constructs a new WinList.
             * @memberof GameMsg
             * @classdesc Represents a WinList.
             * @implements IWinList
             * @constructor
             * @param {GameMsg.IWinList=} [properties] Properties to set
             */
            function WinList(properties) {
                this.list = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * WinList list.
             * @member {Array.<GameMsg.IResUser>} list
             * @memberof GameMsg.WinList
             * @instance
             */
            WinList.prototype.list = $util.emptyArray;
    
            /**
             * WinList type.
             * @member {number} type
             * @memberof GameMsg.WinList
             * @instance
             */
            WinList.prototype.type = 0;
    
            /**
             * WinList time.
             * @member {number} time
             * @memberof GameMsg.WinList
             * @instance
             */
            WinList.prototype.time = 0;
    
            /**
             * Creates a new WinList instance using the specified properties.
             * @function create
             * @memberof GameMsg.WinList
             * @static
             * @param {GameMsg.IWinList=} [properties] Properties to set
             * @returns {GameMsg.WinList} WinList instance
             */
            WinList.create = function create(properties) {
                return new WinList(properties);
            };
    
            /**
             * Encodes the specified WinList message. Does not implicitly {@link GameMsg.WinList.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.WinList
             * @static
             * @param {GameMsg.IWinList} message WinList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WinList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.list != null && message.list.length)
                    for (var i = 0; i < message.list.length; ++i)
                        $root.GameMsg.ResUser.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                if (message.time != null && message.hasOwnProperty("time"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.time);
                return writer;
            };
    
            /**
             * Encodes the specified WinList message, length delimited. Does not implicitly {@link GameMsg.WinList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.WinList
             * @static
             * @param {GameMsg.IWinList} message WinList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WinList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a WinList message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.WinList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.WinList} WinList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WinList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.WinList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.GameMsg.ResUser.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.type = reader.int32();
                        break;
                    case 3:
                        message.time = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a WinList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.WinList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.WinList} WinList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WinList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a WinList message.
             * @function verify
             * @memberof GameMsg.WinList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WinList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.list != null && message.hasOwnProperty("list")) {
                    if (!Array.isArray(message.list))
                        return "list: array expected";
                    for (var i = 0; i < message.list.length; ++i) {
                        var error = $root.GameMsg.ResUser.verify(message.list[i]);
                        if (error)
                            return "list." + error;
                    }
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isInteger(message.type))
                        return "type: integer expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time))
                        return "time: integer expected";
                return null;
            };
    
            /**
             * Creates a WinList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.WinList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.WinList} WinList
             */
            WinList.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.WinList)
                    return object;
                var message = new $root.GameMsg.WinList();
                if (object.list) {
                    if (!Array.isArray(object.list))
                        throw TypeError(".GameMsg.WinList.list: array expected");
                    message.list = [];
                    for (var i = 0; i < object.list.length; ++i) {
                        if (typeof object.list[i] !== "object")
                            throw TypeError(".GameMsg.WinList.list: object expected");
                        message.list[i] = $root.GameMsg.ResUser.fromObject(object.list[i]);
                    }
                }
                if (object.type != null)
                    message.type = object.type | 0;
                if (object.time != null)
                    message.time = object.time | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a WinList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.WinList
             * @static
             * @param {GameMsg.WinList} message WinList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WinList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.list = [];
                if (options.defaults) {
                    object.type = 0;
                    object.time = 0;
                }
                if (message.list && message.list.length) {
                    object.list = [];
                    for (var j = 0; j < message.list.length; ++j)
                        object.list[j] = $root.GameMsg.ResUser.toObject(message.list[j], options);
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.time != null && message.hasOwnProperty("time"))
                    object.time = message.time;
                return object;
            };
    
            /**
             * Converts this WinList to JSON.
             * @function toJSON
             * @memberof GameMsg.WinList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WinList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return WinList;
        })();
    
        GameMsg.Gong = (function() {
    
            /**
             * Properties of a Gong.
             * @memberof GameMsg
             * @interface IGong
             * @property {number|null} [fromId] Gong fromId
             * @property {number|null} [toId] Gong toId
             * @property {number|null} [card] Gong card
             */
    
            /**
             * Constructs a new Gong.
             * @memberof GameMsg
             * @classdesc Represents a Gong.
             * @implements IGong
             * @constructor
             * @param {GameMsg.IGong=} [properties] Properties to set
             */
            function Gong(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Gong fromId.
             * @member {number} fromId
             * @memberof GameMsg.Gong
             * @instance
             */
            Gong.prototype.fromId = 0;
    
            /**
             * Gong toId.
             * @member {number} toId
             * @memberof GameMsg.Gong
             * @instance
             */
            Gong.prototype.toId = 0;
    
            /**
             * Gong card.
             * @member {number} card
             * @memberof GameMsg.Gong
             * @instance
             */
            Gong.prototype.card = 0;
    
            /**
             * Creates a new Gong instance using the specified properties.
             * @function create
             * @memberof GameMsg.Gong
             * @static
             * @param {GameMsg.IGong=} [properties] Properties to set
             * @returns {GameMsg.Gong} Gong instance
             */
            Gong.create = function create(properties) {
                return new Gong(properties);
            };
    
            /**
             * Encodes the specified Gong message. Does not implicitly {@link GameMsg.Gong.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.Gong
             * @static
             * @param {GameMsg.IGong} message Gong message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Gong.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fromId != null && message.hasOwnProperty("fromId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.fromId);
                if (message.toId != null && message.hasOwnProperty("toId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.toId);
                if (message.card != null && message.hasOwnProperty("card"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.card);
                return writer;
            };
    
            /**
             * Encodes the specified Gong message, length delimited. Does not implicitly {@link GameMsg.Gong.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.Gong
             * @static
             * @param {GameMsg.IGong} message Gong message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Gong.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Gong message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.Gong
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.Gong} Gong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Gong.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.Gong();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.fromId = reader.int32();
                        break;
                    case 2:
                        message.toId = reader.int32();
                        break;
                    case 3:
                        message.card = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Gong message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.Gong
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.Gong} Gong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Gong.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Gong message.
             * @function verify
             * @memberof GameMsg.Gong
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Gong.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.fromId != null && message.hasOwnProperty("fromId"))
                    if (!$util.isInteger(message.fromId))
                        return "fromId: integer expected";
                if (message.toId != null && message.hasOwnProperty("toId"))
                    if (!$util.isInteger(message.toId))
                        return "toId: integer expected";
                if (message.card != null && message.hasOwnProperty("card"))
                    if (!$util.isInteger(message.card))
                        return "card: integer expected";
                return null;
            };
    
            /**
             * Creates a Gong message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.Gong
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.Gong} Gong
             */
            Gong.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.Gong)
                    return object;
                var message = new $root.GameMsg.Gong();
                if (object.fromId != null)
                    message.fromId = object.fromId | 0;
                if (object.toId != null)
                    message.toId = object.toId | 0;
                if (object.card != null)
                    message.card = object.card | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Gong message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.Gong
             * @static
             * @param {GameMsg.Gong} message Gong
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Gong.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.fromId = 0;
                    object.toId = 0;
                    object.card = 0;
                }
                if (message.fromId != null && message.hasOwnProperty("fromId"))
                    object.fromId = message.fromId;
                if (message.toId != null && message.hasOwnProperty("toId"))
                    object.toId = message.toId;
                if (message.card != null && message.hasOwnProperty("card"))
                    object.card = message.card;
                return object;
            };
    
            /**
             * Converts this Gong to JSON.
             * @function toJSON
             * @memberof GameMsg.Gong
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Gong.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Gong;
        })();
    
        GameMsg.GongList = (function() {
    
            /**
             * Properties of a GongList.
             * @memberof GameMsg
             * @interface IGongList
             * @property {Array.<GameMsg.IGong>|null} [list] GongList list
             * @property {number|null} [time] GongList time
             */
    
            /**
             * Constructs a new GongList.
             * @memberof GameMsg
             * @classdesc Represents a GongList.
             * @implements IGongList
             * @constructor
             * @param {GameMsg.IGongList=} [properties] Properties to set
             */
            function GongList(properties) {
                this.list = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GongList list.
             * @member {Array.<GameMsg.IGong>} list
             * @memberof GameMsg.GongList
             * @instance
             */
            GongList.prototype.list = $util.emptyArray;
    
            /**
             * GongList time.
             * @member {number} time
             * @memberof GameMsg.GongList
             * @instance
             */
            GongList.prototype.time = 0;
    
            /**
             * Creates a new GongList instance using the specified properties.
             * @function create
             * @memberof GameMsg.GongList
             * @static
             * @param {GameMsg.IGongList=} [properties] Properties to set
             * @returns {GameMsg.GongList} GongList instance
             */
            GongList.create = function create(properties) {
                return new GongList(properties);
            };
    
            /**
             * Encodes the specified GongList message. Does not implicitly {@link GameMsg.GongList.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.GongList
             * @static
             * @param {GameMsg.IGongList} message GongList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GongList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.list != null && message.list.length)
                    for (var i = 0; i < message.list.length; ++i)
                        $root.GameMsg.Gong.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.time != null && message.hasOwnProperty("time"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.time);
                return writer;
            };
    
            /**
             * Encodes the specified GongList message, length delimited. Does not implicitly {@link GameMsg.GongList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.GongList
             * @static
             * @param {GameMsg.IGongList} message GongList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GongList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GongList message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.GongList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.GongList} GongList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GongList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.GongList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.GameMsg.Gong.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.time = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GongList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.GongList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.GongList} GongList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GongList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GongList message.
             * @function verify
             * @memberof GameMsg.GongList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GongList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.list != null && message.hasOwnProperty("list")) {
                    if (!Array.isArray(message.list))
                        return "list: array expected";
                    for (var i = 0; i < message.list.length; ++i) {
                        var error = $root.GameMsg.Gong.verify(message.list[i]);
                        if (error)
                            return "list." + error;
                    }
                }
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time))
                        return "time: integer expected";
                return null;
            };
    
            /**
             * Creates a GongList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.GongList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.GongList} GongList
             */
            GongList.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.GongList)
                    return object;
                var message = new $root.GameMsg.GongList();
                if (object.list) {
                    if (!Array.isArray(object.list))
                        throw TypeError(".GameMsg.GongList.list: array expected");
                    message.list = [];
                    for (var i = 0; i < object.list.length; ++i) {
                        if (typeof object.list[i] !== "object")
                            throw TypeError(".GameMsg.GongList.list: object expected");
                        message.list[i] = $root.GameMsg.Gong.fromObject(object.list[i]);
                    }
                }
                if (object.time != null)
                    message.time = object.time | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a GongList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.GongList
             * @static
             * @param {GameMsg.GongList} message GongList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GongList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.list = [];
                if (options.defaults)
                    object.time = 0;
                if (message.list && message.list.length) {
                    object.list = [];
                    for (var j = 0; j < message.list.length; ++j)
                        object.list[j] = $root.GameMsg.Gong.toObject(message.list[j], options);
                }
                if (message.time != null && message.hasOwnProperty("time"))
                    object.time = message.time;
                return object;
            };
    
            /**
             * Converts this GongList to JSON.
             * @function toJSON
             * @memberof GameMsg.GongList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GongList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GongList;
        })();
    
        GameMsg.ScoreGame = (function() {
    
            /**
             * Properties of a ScoreGame.
             * @memberof GameMsg
             * @interface IScoreGame
             * @property {number|null} [roomId] ScoreGame roomId
             * @property {number|null} [zu] ScoreGame zu
             * @property {string|null} [headImg] ScoreGame headImg
             */
    
            /**
             * Constructs a new ScoreGame.
             * @memberof GameMsg
             * @classdesc Represents a ScoreGame.
             * @implements IScoreGame
             * @constructor
             * @param {GameMsg.IScoreGame=} [properties] Properties to set
             */
            function ScoreGame(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ScoreGame roomId.
             * @member {number} roomId
             * @memberof GameMsg.ScoreGame
             * @instance
             */
            ScoreGame.prototype.roomId = 0;
    
            /**
             * ScoreGame zu.
             * @member {number} zu
             * @memberof GameMsg.ScoreGame
             * @instance
             */
            ScoreGame.prototype.zu = 0;
    
            /**
             * ScoreGame headImg.
             * @member {string} headImg
             * @memberof GameMsg.ScoreGame
             * @instance
             */
            ScoreGame.prototype.headImg = "";
    
            /**
             * Creates a new ScoreGame instance using the specified properties.
             * @function create
             * @memberof GameMsg.ScoreGame
             * @static
             * @param {GameMsg.IScoreGame=} [properties] Properties to set
             * @returns {GameMsg.ScoreGame} ScoreGame instance
             */
            ScoreGame.create = function create(properties) {
                return new ScoreGame(properties);
            };
    
            /**
             * Encodes the specified ScoreGame message. Does not implicitly {@link GameMsg.ScoreGame.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.ScoreGame
             * @static
             * @param {GameMsg.IScoreGame} message ScoreGame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ScoreGame.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
                if (message.zu != null && message.hasOwnProperty("zu"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.zu);
                if (message.headImg != null && message.hasOwnProperty("headImg"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.headImg);
                return writer;
            };
    
            /**
             * Encodes the specified ScoreGame message, length delimited. Does not implicitly {@link GameMsg.ScoreGame.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.ScoreGame
             * @static
             * @param {GameMsg.IScoreGame} message ScoreGame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ScoreGame.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ScoreGame message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.ScoreGame
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.ScoreGame} ScoreGame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ScoreGame.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.ScoreGame();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roomId = reader.int32();
                        break;
                    case 2:
                        message.zu = reader.int32();
                        break;
                    case 3:
                        message.headImg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ScoreGame message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.ScoreGame
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.ScoreGame} ScoreGame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ScoreGame.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ScoreGame message.
             * @function verify
             * @memberof GameMsg.ScoreGame
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ScoreGame.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isInteger(message.roomId))
                        return "roomId: integer expected";
                if (message.zu != null && message.hasOwnProperty("zu"))
                    if (!$util.isInteger(message.zu))
                        return "zu: integer expected";
                if (message.headImg != null && message.hasOwnProperty("headImg"))
                    if (!$util.isString(message.headImg))
                        return "headImg: string expected";
                return null;
            };
    
            /**
             * Creates a ScoreGame message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.ScoreGame
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.ScoreGame} ScoreGame
             */
            ScoreGame.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.ScoreGame)
                    return object;
                var message = new $root.GameMsg.ScoreGame();
                if (object.roomId != null)
                    message.roomId = object.roomId | 0;
                if (object.zu != null)
                    message.zu = object.zu | 0;
                if (object.headImg != null)
                    message.headImg = String(object.headImg);
                return message;
            };
    
            /**
             * Creates a plain object from a ScoreGame message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.ScoreGame
             * @static
             * @param {GameMsg.ScoreGame} message ScoreGame
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ScoreGame.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.roomId = 0;
                    object.zu = 0;
                    object.headImg = "";
                }
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    object.roomId = message.roomId;
                if (message.zu != null && message.hasOwnProperty("zu"))
                    object.zu = message.zu;
                if (message.headImg != null && message.hasOwnProperty("headImg"))
                    object.headImg = message.headImg;
                return object;
            };
    
            /**
             * Converts this ScoreGame to JSON.
             * @function toJSON
             * @memberof GameMsg.ScoreGame
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ScoreGame.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ScoreGame;
        })();
    
        GameMsg.OutGame = (function() {
    
            /**
             * Properties of an OutGame.
             * @memberof GameMsg
             * @interface IOutGame
             * @property {number|null} [gameId] OutGame gameId
             * @property {number|null} [lun] OutGame lun
             * @property {number|null} [game] OutGame game
             */
    
            /**
             * Constructs a new OutGame.
             * @memberof GameMsg
             * @classdesc Represents an OutGame.
             * @implements IOutGame
             * @constructor
             * @param {GameMsg.IOutGame=} [properties] Properties to set
             */
            function OutGame(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * OutGame gameId.
             * @member {number} gameId
             * @memberof GameMsg.OutGame
             * @instance
             */
            OutGame.prototype.gameId = 0;
    
            /**
             * OutGame lun.
             * @member {number} lun
             * @memberof GameMsg.OutGame
             * @instance
             */
            OutGame.prototype.lun = 0;
    
            /**
             * OutGame game.
             * @member {number} game
             * @memberof GameMsg.OutGame
             * @instance
             */
            OutGame.prototype.game = 0;
    
            /**
             * Creates a new OutGame instance using the specified properties.
             * @function create
             * @memberof GameMsg.OutGame
             * @static
             * @param {GameMsg.IOutGame=} [properties] Properties to set
             * @returns {GameMsg.OutGame} OutGame instance
             */
            OutGame.create = function create(properties) {
                return new OutGame(properties);
            };
    
            /**
             * Encodes the specified OutGame message. Does not implicitly {@link GameMsg.OutGame.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.OutGame
             * @static
             * @param {GameMsg.IOutGame} message OutGame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OutGame.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameId);
                if (message.lun != null && message.hasOwnProperty("lun"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.lun);
                if (message.game != null && message.hasOwnProperty("game"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.game);
                return writer;
            };
    
            /**
             * Encodes the specified OutGame message, length delimited. Does not implicitly {@link GameMsg.OutGame.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.OutGame
             * @static
             * @param {GameMsg.IOutGame} message OutGame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OutGame.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an OutGame message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.OutGame
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.OutGame} OutGame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OutGame.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.OutGame();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.gameId = reader.int32();
                        break;
                    case 2:
                        message.lun = reader.int32();
                        break;
                    case 3:
                        message.game = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an OutGame message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.OutGame
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.OutGame} OutGame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OutGame.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an OutGame message.
             * @function verify
             * @memberof GameMsg.OutGame
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OutGame.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    if (!$util.isInteger(message.gameId))
                        return "gameId: integer expected";
                if (message.lun != null && message.hasOwnProperty("lun"))
                    if (!$util.isInteger(message.lun))
                        return "lun: integer expected";
                if (message.game != null && message.hasOwnProperty("game"))
                    if (!$util.isInteger(message.game))
                        return "game: integer expected";
                return null;
            };
    
            /**
             * Creates an OutGame message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.OutGame
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.OutGame} OutGame
             */
            OutGame.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.OutGame)
                    return object;
                var message = new $root.GameMsg.OutGame();
                if (object.gameId != null)
                    message.gameId = object.gameId | 0;
                if (object.lun != null)
                    message.lun = object.lun | 0;
                if (object.game != null)
                    message.game = object.game | 0;
                return message;
            };
    
            /**
             * Creates a plain object from an OutGame message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.OutGame
             * @static
             * @param {GameMsg.OutGame} message OutGame
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OutGame.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.gameId = 0;
                    object.lun = 0;
                    object.game = 0;
                }
                if (message.gameId != null && message.hasOwnProperty("gameId"))
                    object.gameId = message.gameId;
                if (message.lun != null && message.hasOwnProperty("lun"))
                    object.lun = message.lun;
                if (message.game != null && message.hasOwnProperty("game"))
                    object.game = message.game;
                return object;
            };
    
            /**
             * Converts this OutGame to JSON.
             * @function toJSON
             * @memberof GameMsg.OutGame
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OutGame.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return OutGame;
        })();
    
        GameMsg.KongGong = (function() {
    
            /**
             * Properties of a KongGong.
             * @memberof GameMsg
             * @interface IKongGong
             * @property {number|null} [one] KongGong one
             * @property {number|null} [two] KongGong two
             */
    
            /**
             * Constructs a new KongGong.
             * @memberof GameMsg
             * @classdesc Represents a KongGong.
             * @implements IKongGong
             * @constructor
             * @param {GameMsg.IKongGong=} [properties] Properties to set
             */
            function KongGong(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * KongGong one.
             * @member {number} one
             * @memberof GameMsg.KongGong
             * @instance
             */
            KongGong.prototype.one = 0;
    
            /**
             * KongGong two.
             * @member {number} two
             * @memberof GameMsg.KongGong
             * @instance
             */
            KongGong.prototype.two = 0;
    
            /**
             * Creates a new KongGong instance using the specified properties.
             * @function create
             * @memberof GameMsg.KongGong
             * @static
             * @param {GameMsg.IKongGong=} [properties] Properties to set
             * @returns {GameMsg.KongGong} KongGong instance
             */
            KongGong.create = function create(properties) {
                return new KongGong(properties);
            };
    
            /**
             * Encodes the specified KongGong message. Does not implicitly {@link GameMsg.KongGong.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.KongGong
             * @static
             * @param {GameMsg.IKongGong} message KongGong message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KongGong.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.one != null && message.hasOwnProperty("one"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.one);
                if (message.two != null && message.hasOwnProperty("two"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.two);
                return writer;
            };
    
            /**
             * Encodes the specified KongGong message, length delimited. Does not implicitly {@link GameMsg.KongGong.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.KongGong
             * @static
             * @param {GameMsg.IKongGong} message KongGong message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KongGong.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a KongGong message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.KongGong
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.KongGong} KongGong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KongGong.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.KongGong();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.one = reader.int32();
                        break;
                    case 2:
                        message.two = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a KongGong message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.KongGong
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.KongGong} KongGong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KongGong.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a KongGong message.
             * @function verify
             * @memberof GameMsg.KongGong
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            KongGong.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.one != null && message.hasOwnProperty("one"))
                    if (!$util.isInteger(message.one))
                        return "one: integer expected";
                if (message.two != null && message.hasOwnProperty("two"))
                    if (!$util.isInteger(message.two))
                        return "two: integer expected";
                return null;
            };
    
            /**
             * Creates a KongGong message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.KongGong
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.KongGong} KongGong
             */
            KongGong.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.KongGong)
                    return object;
                var message = new $root.GameMsg.KongGong();
                if (object.one != null)
                    message.one = object.one | 0;
                if (object.two != null)
                    message.two = object.two | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a KongGong message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.KongGong
             * @static
             * @param {GameMsg.KongGong} message KongGong
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            KongGong.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.one = 0;
                    object.two = 0;
                }
                if (message.one != null && message.hasOwnProperty("one"))
                    object.one = message.one;
                if (message.two != null && message.hasOwnProperty("two"))
                    object.two = message.two;
                return object;
            };
    
            /**
             * Converts this KongGong to JSON.
             * @function toJSON
             * @memberof GameMsg.KongGong
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            KongGong.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return KongGong;
        })();
    
        GameMsg.Match = (function() {
    
            /**
             * Properties of a Match.
             * @memberof GameMsg
             * @interface IMatch
             * @property {number|null} [time] Match time
             * @property {number|null} [num] Match num
             * @property {number|null} [match] Match match
             */
    
            /**
             * Constructs a new Match.
             * @memberof GameMsg
             * @classdesc Represents a Match.
             * @implements IMatch
             * @constructor
             * @param {GameMsg.IMatch=} [properties] Properties to set
             */
            function Match(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Match time.
             * @member {number} time
             * @memberof GameMsg.Match
             * @instance
             */
            Match.prototype.time = 0;
    
            /**
             * Match num.
             * @member {number} num
             * @memberof GameMsg.Match
             * @instance
             */
            Match.prototype.num = 0;
    
            /**
             * Match match.
             * @member {number} match
             * @memberof GameMsg.Match
             * @instance
             */
            Match.prototype.match = 0;
    
            /**
             * Creates a new Match instance using the specified properties.
             * @function create
             * @memberof GameMsg.Match
             * @static
             * @param {GameMsg.IMatch=} [properties] Properties to set
             * @returns {GameMsg.Match} Match instance
             */
            Match.create = function create(properties) {
                return new Match(properties);
            };
    
            /**
             * Encodes the specified Match message. Does not implicitly {@link GameMsg.Match.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.Match
             * @static
             * @param {GameMsg.IMatch} message Match message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Match.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.time != null && message.hasOwnProperty("time"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.time);
                if (message.num != null && message.hasOwnProperty("num"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.num);
                if (message.match != null && message.hasOwnProperty("match"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.match);
                return writer;
            };
    
            /**
             * Encodes the specified Match message, length delimited. Does not implicitly {@link GameMsg.Match.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.Match
             * @static
             * @param {GameMsg.IMatch} message Match message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Match.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Match message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.Match
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.Match} Match
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Match.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.Match();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.time = reader.int32();
                        break;
                    case 2:
                        message.num = reader.int32();
                        break;
                    case 3:
                        message.match = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Match message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.Match
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.Match} Match
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Match.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Match message.
             * @function verify
             * @memberof GameMsg.Match
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Match.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time))
                        return "time: integer expected";
                if (message.num != null && message.hasOwnProperty("num"))
                    if (!$util.isInteger(message.num))
                        return "num: integer expected";
                if (message.match != null && message.hasOwnProperty("match"))
                    if (!$util.isInteger(message.match))
                        return "match: integer expected";
                return null;
            };
    
            /**
             * Creates a Match message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.Match
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.Match} Match
             */
            Match.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.Match)
                    return object;
                var message = new $root.GameMsg.Match();
                if (object.time != null)
                    message.time = object.time | 0;
                if (object.num != null)
                    message.num = object.num | 0;
                if (object.match != null)
                    message.match = object.match | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Match message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.Match
             * @static
             * @param {GameMsg.Match} message Match
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Match.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.time = 0;
                    object.num = 0;
                    object.match = 0;
                }
                if (message.time != null && message.hasOwnProperty("time"))
                    object.time = message.time;
                if (message.num != null && message.hasOwnProperty("num"))
                    object.num = message.num;
                if (message.match != null && message.hasOwnProperty("match"))
                    object.match = message.match;
                return object;
            };
    
            /**
             * Converts this Match to JSON.
             * @function toJSON
             * @memberof GameMsg.Match
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Match.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Match;
        })();
    
        GameMsg.UserCards = (function() {
    
            /**
             * Properties of a UserCards.
             * @memberof GameMsg
             * @interface IUserCards
             * @property {number|null} [id] UserCards id
             * @property {number|null} [index] UserCards index
             * @property {Array.<number>|null} [cards] UserCards cards
             */
    
            /**
             * Constructs a new UserCards.
             * @memberof GameMsg
             * @classdesc Represents a UserCards.
             * @implements IUserCards
             * @constructor
             * @param {GameMsg.IUserCards=} [properties] Properties to set
             */
            function UserCards(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UserCards id.
             * @member {number} id
             * @memberof GameMsg.UserCards
             * @instance
             */
            UserCards.prototype.id = 0;
    
            /**
             * UserCards index.
             * @member {number} index
             * @memberof GameMsg.UserCards
             * @instance
             */
            UserCards.prototype.index = 0;
    
            /**
             * UserCards cards.
             * @member {Array.<number>} cards
             * @memberof GameMsg.UserCards
             * @instance
             */
            UserCards.prototype.cards = $util.emptyArray;
    
            /**
             * Creates a new UserCards instance using the specified properties.
             * @function create
             * @memberof GameMsg.UserCards
             * @static
             * @param {GameMsg.IUserCards=} [properties] Properties to set
             * @returns {GameMsg.UserCards} UserCards instance
             */
            UserCards.create = function create(properties) {
                return new UserCards(properties);
            };
    
            /**
             * Encodes the specified UserCards message. Does not implicitly {@link GameMsg.UserCards.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.UserCards
             * @static
             * @param {GameMsg.IUserCards} message UserCards message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserCards.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.index != null && message.hasOwnProperty("index"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.index);
                if (message.cards != null && message.cards.length) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork();
                    for (var i = 0; i < message.cards.length; ++i)
                        writer.int32(message.cards[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified UserCards message, length delimited. Does not implicitly {@link GameMsg.UserCards.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.UserCards
             * @static
             * @param {GameMsg.IUserCards} message UserCards message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserCards.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a UserCards message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.UserCards
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.UserCards} UserCards
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserCards.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.UserCards();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.index = reader.int32();
                        break;
                    case 3:
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.cards.push(reader.int32());
                        } else
                            message.cards.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a UserCards message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.UserCards
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.UserCards} UserCards
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserCards.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a UserCards message.
             * @function verify
             * @memberof GameMsg.UserCards
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserCards.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.index != null && message.hasOwnProperty("index"))
                    if (!$util.isInteger(message.index))
                        return "index: integer expected";
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i)
                        if (!$util.isInteger(message.cards[i]))
                            return "cards: integer[] expected";
                }
                return null;
            };
    
            /**
             * Creates a UserCards message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.UserCards
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.UserCards} UserCards
             */
            UserCards.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.UserCards)
                    return object;
                var message = new $root.GameMsg.UserCards();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.index != null)
                    message.index = object.index | 0;
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".GameMsg.UserCards.cards: array expected");
                    message.cards = [];
                    for (var i = 0; i < object.cards.length; ++i)
                        message.cards[i] = object.cards[i] | 0;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a UserCards message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.UserCards
             * @static
             * @param {GameMsg.UserCards} message UserCards
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserCards.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cards = [];
                if (options.defaults) {
                    object.id = 0;
                    object.index = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.index != null && message.hasOwnProperty("index"))
                    object.index = message.index;
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (var j = 0; j < message.cards.length; ++j)
                        object.cards[j] = message.cards[j];
                }
                return object;
            };
    
            /**
             * Converts this UserCards to JSON.
             * @function toJSON
             * @memberof GameMsg.UserCards
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserCards.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UserCards;
        })();
    
        GameMsg.UserCardsList = (function() {
    
            /**
             * Properties of a UserCardsList.
             * @memberof GameMsg
             * @interface IUserCardsList
             * @property {Array.<GameMsg.IUserCards>|null} [list] UserCardsList list
             */
    
            /**
             * Constructs a new UserCardsList.
             * @memberof GameMsg
             * @classdesc Represents a UserCardsList.
             * @implements IUserCardsList
             * @constructor
             * @param {GameMsg.IUserCardsList=} [properties] Properties to set
             */
            function UserCardsList(properties) {
                this.list = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UserCardsList list.
             * @member {Array.<GameMsg.IUserCards>} list
             * @memberof GameMsg.UserCardsList
             * @instance
             */
            UserCardsList.prototype.list = $util.emptyArray;
    
            /**
             * Creates a new UserCardsList instance using the specified properties.
             * @function create
             * @memberof GameMsg.UserCardsList
             * @static
             * @param {GameMsg.IUserCardsList=} [properties] Properties to set
             * @returns {GameMsg.UserCardsList} UserCardsList instance
             */
            UserCardsList.create = function create(properties) {
                return new UserCardsList(properties);
            };
    
            /**
             * Encodes the specified UserCardsList message. Does not implicitly {@link GameMsg.UserCardsList.verify|verify} messages.
             * @function encode
             * @memberof GameMsg.UserCardsList
             * @static
             * @param {GameMsg.IUserCardsList} message UserCardsList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserCardsList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.list != null && message.list.length)
                    for (var i = 0; i < message.list.length; ++i)
                        $root.GameMsg.UserCards.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified UserCardsList message, length delimited. Does not implicitly {@link GameMsg.UserCardsList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameMsg.UserCardsList
             * @static
             * @param {GameMsg.IUserCardsList} message UserCardsList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserCardsList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a UserCardsList message from the specified reader or buffer.
             * @function decode
             * @memberof GameMsg.UserCardsList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameMsg.UserCardsList} UserCardsList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserCardsList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.UserCardsList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.GameMsg.UserCards.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a UserCardsList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameMsg.UserCardsList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameMsg.UserCardsList} UserCardsList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserCardsList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a UserCardsList message.
             * @function verify
             * @memberof GameMsg.UserCardsList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserCardsList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.list != null && message.hasOwnProperty("list")) {
                    if (!Array.isArray(message.list))
                        return "list: array expected";
                    for (var i = 0; i < message.list.length; ++i) {
                        var error = $root.GameMsg.UserCards.verify(message.list[i]);
                        if (error)
                            return "list." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a UserCardsList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameMsg.UserCardsList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameMsg.UserCardsList} UserCardsList
             */
            UserCardsList.fromObject = function fromObject(object) {
                if (object instanceof $root.GameMsg.UserCardsList)
                    return object;
                var message = new $root.GameMsg.UserCardsList();
                if (object.list) {
                    if (!Array.isArray(object.list))
                        throw TypeError(".GameMsg.UserCardsList.list: array expected");
                    message.list = [];
                    for (var i = 0; i < object.list.length; ++i) {
                        if (typeof object.list[i] !== "object")
                            throw TypeError(".GameMsg.UserCardsList.list: object expected");
                        message.list[i] = $root.GameMsg.UserCards.fromObject(object.list[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a UserCardsList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameMsg.UserCardsList
             * @static
             * @param {GameMsg.UserCardsList} message UserCardsList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserCardsList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.list = [];
                if (message.list && message.list.length) {
                    object.list = [];
                    for (var j = 0; j < message.list.length; ++j)
                        object.list[j] = $root.GameMsg.UserCards.toObject(message.list[j], options);
                }
                return object;
            };
    
            /**
             * Converts this UserCardsList to JSON.
             * @function toJSON
             * @memberof GameMsg.UserCardsList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserCardsList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UserCardsList;
        })();
    
        return GameMsg;
    })();

    return $root;
})(protobuf).GameMsg;
