declare global {
 // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace GameMsg. */
export namespace GameMsg {

    /** Properties of a Login. */
    interface ILogin {

        /** Login token */
        token?: (string|null);
    }

    /** Represents a Login. */
    class Login implements ILogin {

        /**
         * Constructs a new Login.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.ILogin);

        /** Login token. */
        public token: string;

        /**
         * Creates a new Login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Login instance
         */
        public static create(properties?: GameMsg.ILogin): GameMsg.Login;

        /**
         * Encodes the specified Login message. Does not implicitly {@link GameMsg.Login.verify|verify} messages.
         * @param message Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.ILogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Login message, length delimited. Does not implicitly {@link GameMsg.Login.verify|verify} messages.
         * @param message Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.ILogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Login message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.Login;

        /**
         * Decodes a Login message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.Login;

        /**
         * Verifies a Login message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Login message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Login
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.Login;

        /**
         * Creates a plain object from a Login message. Also converts values to other types if specified.
         * @param message Login
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.Login, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Login to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Error. */
    interface IError {

        /** Error type */
        type?: (number|null);

        /** Error msg */
        msg?: (string|null);
    }

    /** Represents an Error. */
    class Error implements IError {

        /**
         * Constructs a new Error.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IError);

        /** Error type. */
        public type: number;

        /** Error msg. */
        public msg: string;

        /**
         * Creates a new Error instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Error instance
         */
        public static create(properties?: GameMsg.IError): GameMsg.Error;

        /**
         * Encodes the specified Error message. Does not implicitly {@link GameMsg.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link GameMsg.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.Error;

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.Error;

        /**
         * Verifies an Error message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Error
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.Error;

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @param message Error
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Error to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a User. */
    interface IUser {

        /** User id */
        id?: (number|null);

        /** User name */
        name?: (string|null);

        /** User headImg */
        headImg?: (string|null);

        /** User groupId */
        groupId?: (string|null);

        /** User groupName */
        groupName?: (string|null);

        /** User gold */
        gold?: (number|null);

        /** User index */
        index?: (number|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IUser);

        /** User id. */
        public id: number;

        /** User name. */
        public name: string;

        /** User headImg. */
        public headImg: string;

        /** User groupId. */
        public groupId: string;

        /** User groupName. */
        public groupName: string;

        /** User gold. */
        public gold: number;

        /** User index. */
        public index: number;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: GameMsg.IUser): GameMsg.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link GameMsg.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link GameMsg.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserList. */
    interface IUserList {

        /** UserList list */
        list?: (GameMsg.IUser[]|null);
    }

    /** Represents a UserList. */
    class UserList implements IUserList {

        /**
         * Constructs a new UserList.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IUserList);

        /** UserList list. */
        public list: GameMsg.IUser[];

        /**
         * Creates a new UserList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserList instance
         */
        public static create(properties?: GameMsg.IUserList): GameMsg.UserList;

        /**
         * Encodes the specified UserList message. Does not implicitly {@link GameMsg.UserList.verify|verify} messages.
         * @param message UserList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IUserList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserList message, length delimited. Does not implicitly {@link GameMsg.UserList.verify|verify} messages.
         * @param message UserList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.IUserList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.UserList;

        /**
         * Decodes a UserList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.UserList;

        /**
         * Verifies a UserList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserList
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.UserList;

        /**
         * Creates a plain object from a UserList message. Also converts values to other types if specified.
         * @param message UserList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.UserList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Time. */
    interface ITime {

        /** Time time */
        time?: (number|null);
    }

    /** Represents a Time. */
    class Time implements ITime {

        /**
         * Constructs a new Time.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.ITime);

        /** Time time. */
        public time: number;

        /**
         * Creates a new Time instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Time instance
         */
        public static create(properties?: GameMsg.ITime): GameMsg.Time;

        /**
         * Encodes the specified Time message. Does not implicitly {@link GameMsg.Time.verify|verify} messages.
         * @param message Time message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.ITime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Time message, length delimited. Does not implicitly {@link GameMsg.Time.verify|verify} messages.
         * @param message Time message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.ITime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Time message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Time
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.Time;

        /**
         * Decodes a Time message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Time
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.Time;

        /**
         * Verifies a Time message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Time message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Time
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.Time;

        /**
         * Creates a plain object from a Time message. Also converts values to other types if specified.
         * @param message Time
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.Time, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Time to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Room. */
    interface IRoom {

        /** Room roomId */
        roomId?: (number|null);

        /** Room type */
        type?: (number|null);
    }

    /** Represents a Room. */
    class Room implements IRoom {

        /**
         * Constructs a new Room.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IRoom);

        /** Room roomId. */
        public roomId: number;

        /** Room type. */
        public type: number;

        /**
         * Creates a new Room instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Room instance
         */
        public static create(properties?: GameMsg.IRoom): GameMsg.Room;

        /**
         * Encodes the specified Room message. Does not implicitly {@link GameMsg.Room.verify|verify} messages.
         * @param message Room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Room message, length delimited. Does not implicitly {@link GameMsg.Room.verify|verify} messages.
         * @param message Room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Room message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.Room;

        /**
         * Decodes a Room message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.Room;

        /**
         * Verifies a Room message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Room message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Room
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.Room;

        /**
         * Creates a plain object from a Room message. Also converts values to other types if specified.
         * @param message Room
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.Room, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Room to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Cards. */
    interface ICards {

        /** Cards card */
        card?: (number[]|null);
    }

    /** Represents a Cards. */
    class Cards implements ICards {

        /**
         * Constructs a new Cards.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.ICards);

        /** Cards card. */
        public card: number[];

        /**
         * Creates a new Cards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Cards instance
         */
        public static create(properties?: GameMsg.ICards): GameMsg.Cards;

        /**
         * Encodes the specified Cards message. Does not implicitly {@link GameMsg.Cards.verify|verify} messages.
         * @param message Cards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.ICards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Cards message, length delimited. Does not implicitly {@link GameMsg.Cards.verify|verify} messages.
         * @param message Cards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.ICards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Cards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Cards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.Cards;

        /**
         * Decodes a Cards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Cards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.Cards;

        /**
         * Verifies a Cards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Cards message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Cards
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.Cards;

        /**
         * Creates a plain object from a Cards message. Also converts values to other types if specified.
         * @param message Cards
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.Cards, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Cards to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Start. */
    interface IStart {

        /** Start cards */
        cards?: (number[]|null);

        /** Start time */
        time?: (number|null);

        /** Start level */
        level?: (number|null);

        /** Start maxnum */
        maxnum?: (number|null);

        /** Start num */
        num?: (number|null);

        /** Start isMy */
        isMy?: (number|null);

        /** Start isOut */
        isOut?: (number|null);
    }

    /** Represents a Start. */
    class Start implements IStart {

        /**
         * Constructs a new Start.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IStart);

        /** Start cards. */
        public cards: number[];

        /** Start time. */
        public time: number;

        /** Start level. */
        public level: number;

        /** Start maxnum. */
        public maxnum: number;

        /** Start num. */
        public num: number;

        /** Start isMy. */
        public isMy: number;

        /** Start isOut. */
        public isOut: number;

        /**
         * Creates a new Start instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Start instance
         */
        public static create(properties?: GameMsg.IStart): GameMsg.Start;

        /**
         * Encodes the specified Start message. Does not implicitly {@link GameMsg.Start.verify|verify} messages.
         * @param message Start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Start message, length delimited. Does not implicitly {@link GameMsg.Start.verify|verify} messages.
         * @param message Start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.IStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Start message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.Start;

        /**
         * Decodes a Start message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.Start;

        /**
         * Verifies a Start message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Start message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Start
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.Start;

        /**
         * Creates a plain object from a Start message. Also converts values to other types if specified.
         * @param message Start
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.Start, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Start to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NextUser. */
    interface INextUser {

        /** NextUser id */
        id?: (number|null);

        /** NextUser isNot */
        isNot?: (number|null);

        /** NextUser isSend */
        isSend?: (number|null);

        /** NextUser isHit */
        isHit?: (number|null);

        /** NextUser hitCards */
        hitCards?: (GameMsg.ICards[]|null);
    }

    /** Represents a NextUser. */
    class NextUser implements INextUser {

        /**
         * Constructs a new NextUser.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.INextUser);

        /** NextUser id. */
        public id: number;

        /** NextUser isNot. */
        public isNot: number;

        /** NextUser isSend. */
        public isSend: number;

        /** NextUser isHit. */
        public isHit: number;

        /** NextUser hitCards. */
        public hitCards: GameMsg.ICards[];

        /**
         * Creates a new NextUser instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NextUser instance
         */
        public static create(properties?: GameMsg.INextUser): GameMsg.NextUser;

        /**
         * Encodes the specified NextUser message. Does not implicitly {@link GameMsg.NextUser.verify|verify} messages.
         * @param message NextUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.INextUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NextUser message, length delimited. Does not implicitly {@link GameMsg.NextUser.verify|verify} messages.
         * @param message NextUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.INextUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NextUser message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NextUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.NextUser;

        /**
         * Decodes a NextUser message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NextUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.NextUser;

        /**
         * Verifies a NextUser message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NextUser message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NextUser
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.NextUser;

        /**
         * Creates a plain object from a NextUser message. Also converts values to other types if specified.
         * @param message NextUser
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.NextUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NextUser to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendCard. */
    interface ISendCard {

        /** SendCard id */
        id?: (number|null);

        /** SendCard isSend */
        isSend?: (number|null);

        /** SendCard cardType */
        cardType?: (number|null);

        /** SendCard cards */
        cards?: (number[]|null);

        /** SendCard nextId */
        nextId?: (number|null);

        /** SendCard time */
        time?: (number|null);

        /** SendCard sendType */
        sendType?: (number|null);
    }

    /** Represents a SendCard. */
    class SendCard implements ISendCard {

        /**
         * Constructs a new SendCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.ISendCard);

        /** SendCard id. */
        public id: number;

        /** SendCard isSend. */
        public isSend: number;

        /** SendCard cardType. */
        public cardType: number;

        /** SendCard cards. */
        public cards: number[];

        /** SendCard nextId. */
        public nextId: number;

        /** SendCard time. */
        public time: number;

        /** SendCard sendType. */
        public sendType: number;

        /**
         * Creates a new SendCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendCard instance
         */
        public static create(properties?: GameMsg.ISendCard): GameMsg.SendCard;

        /**
         * Encodes the specified SendCard message. Does not implicitly {@link GameMsg.SendCard.verify|verify} messages.
         * @param message SendCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.ISendCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendCard message, length delimited. Does not implicitly {@link GameMsg.SendCard.verify|verify} messages.
         * @param message SendCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.ISendCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.SendCard;

        /**
         * Decodes a SendCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.SendCard;

        /**
         * Verifies a SendCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendCard
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.SendCard;

        /**
         * Creates a plain object from a SendCard message. Also converts values to other types if specified.
         * @param message SendCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.SendCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserSendCard. */
    interface IUserSendCard {

        /** UserSendCard cards */
        cards?: (string|null);
    }

    /** Represents a UserSendCard. */
    class UserSendCard implements IUserSendCard {

        /**
         * Constructs a new UserSendCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IUserSendCard);

        /** UserSendCard cards. */
        public cards: string;

        /**
         * Creates a new UserSendCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserSendCard instance
         */
        public static create(properties?: GameMsg.IUserSendCard): GameMsg.UserSendCard;

        /**
         * Encodes the specified UserSendCard message. Does not implicitly {@link GameMsg.UserSendCard.verify|verify} messages.
         * @param message UserSendCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IUserSendCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserSendCard message, length delimited. Does not implicitly {@link GameMsg.UserSendCard.verify|verify} messages.
         * @param message UserSendCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.IUserSendCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserSendCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.UserSendCard;

        /**
         * Decodes a UserSendCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.UserSendCard;

        /**
         * Verifies a UserSendCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserSendCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserSendCard
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.UserSendCard;

        /**
         * Creates a plain object from a UserSendCard message. Also converts values to other types if specified.
         * @param message UserSendCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.UserSendCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserSendCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserWin. */
    interface IUserWin {

        /** UserWin id */
        id?: (number|null);

        /** UserWin win */
        win?: (number|null);
    }

    /** Represents a UserWin. */
    class UserWin implements IUserWin {

        /**
         * Constructs a new UserWin.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IUserWin);

        /** UserWin id. */
        public id: number;

        /** UserWin win. */
        public win: number;

        /**
         * Creates a new UserWin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserWin instance
         */
        public static create(properties?: GameMsg.IUserWin): GameMsg.UserWin;

        /**
         * Encodes the specified UserWin message. Does not implicitly {@link GameMsg.UserWin.verify|verify} messages.
         * @param message UserWin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IUserWin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserWin message, length delimited. Does not implicitly {@link GameMsg.UserWin.verify|verify} messages.
         * @param message UserWin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.IUserWin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserWin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserWin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.UserWin;

        /**
         * Decodes a UserWin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserWin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.UserWin;

        /**
         * Verifies a UserWin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserWin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserWin
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.UserWin;

        /**
         * Creates a plain object from a UserWin message. Also converts values to other types if specified.
         * @param message UserWin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.UserWin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserWin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResUser. */
    interface IResUser {

        /** ResUser id */
        id?: (number|null);

        /** ResUser name */
        name?: (string|null);

        /** ResUser headImg */
        headImg?: (string|null);

        /** ResUser res */
        res?: (number|null);

        /** ResUser score */
        score?: (number|null);

        /** ResUser time */
        time?: (number|null);
    }

    /** Represents a ResUser. */
    class ResUser implements IResUser {

        /**
         * Constructs a new ResUser.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IResUser);

        /** ResUser id. */
        public id: number;

        /** ResUser name. */
        public name: string;

        /** ResUser headImg. */
        public headImg: string;

        /** ResUser res. */
        public res: number;

        /** ResUser score. */
        public score: number;

        /** ResUser time. */
        public time: number;

        /**
         * Creates a new ResUser instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResUser instance
         */
        public static create(properties?: GameMsg.IResUser): GameMsg.ResUser;

        /**
         * Encodes the specified ResUser message. Does not implicitly {@link GameMsg.ResUser.verify|verify} messages.
         * @param message ResUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IResUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResUser message, length delimited. Does not implicitly {@link GameMsg.ResUser.verify|verify} messages.
         * @param message ResUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.IResUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResUser message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.ResUser;

        /**
         * Decodes a ResUser message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.ResUser;

        /**
         * Verifies a ResUser message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResUser message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResUser
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.ResUser;

        /**
         * Creates a plain object from a ResUser message. Also converts values to other types if specified.
         * @param message ResUser
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.ResUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResUser to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WinList. */
    interface IWinList {

        /** WinList list */
        list?: (GameMsg.IResUser[]|null);

        /** WinList type */
        type?: (number|null);

        /** WinList time */
        time?: (number|null);
    }

    /** Represents a WinList. */
    class WinList implements IWinList {

        /**
         * Constructs a new WinList.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IWinList);

        /** WinList list. */
        public list: GameMsg.IResUser[];

        /** WinList type. */
        public type: number;

        /** WinList time. */
        public time: number;

        /**
         * Creates a new WinList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WinList instance
         */
        public static create(properties?: GameMsg.IWinList): GameMsg.WinList;

        /**
         * Encodes the specified WinList message. Does not implicitly {@link GameMsg.WinList.verify|verify} messages.
         * @param message WinList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IWinList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WinList message, length delimited. Does not implicitly {@link GameMsg.WinList.verify|verify} messages.
         * @param message WinList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.IWinList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WinList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WinList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.WinList;

        /**
         * Decodes a WinList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WinList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.WinList;

        /**
         * Verifies a WinList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WinList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WinList
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.WinList;

        /**
         * Creates a plain object from a WinList message. Also converts values to other types if specified.
         * @param message WinList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.WinList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WinList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Gong. */
    interface IGong {

        /** Gong fromId */
        fromId?: (number|null);

        /** Gong toId */
        toId?: (number|null);

        /** Gong card */
        card?: (number|null);
    }

    /** Represents a Gong. */
    class Gong implements IGong {

        /**
         * Constructs a new Gong.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IGong);

        /** Gong fromId. */
        public fromId: number;

        /** Gong toId. */
        public toId: number;

        /** Gong card. */
        public card: number;

        /**
         * Creates a new Gong instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Gong instance
         */
        public static create(properties?: GameMsg.IGong): GameMsg.Gong;

        /**
         * Encodes the specified Gong message. Does not implicitly {@link GameMsg.Gong.verify|verify} messages.
         * @param message Gong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IGong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Gong message, length delimited. Does not implicitly {@link GameMsg.Gong.verify|verify} messages.
         * @param message Gong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.IGong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Gong message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Gong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.Gong;

        /**
         * Decodes a Gong message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Gong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.Gong;

        /**
         * Verifies a Gong message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Gong message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Gong
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.Gong;

        /**
         * Creates a plain object from a Gong message. Also converts values to other types if specified.
         * @param message Gong
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.Gong, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Gong to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GongList. */
    interface IGongList {

        /** GongList list */
        list?: (GameMsg.IGong[]|null);

        /** GongList time */
        time?: (number|null);
    }

    /** Represents a GongList. */
    class GongList implements IGongList {

        /**
         * Constructs a new GongList.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IGongList);

        /** GongList list. */
        public list: GameMsg.IGong[];

        /** GongList time. */
        public time: number;

        /**
         * Creates a new GongList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GongList instance
         */
        public static create(properties?: GameMsg.IGongList): GameMsg.GongList;

        /**
         * Encodes the specified GongList message. Does not implicitly {@link GameMsg.GongList.verify|verify} messages.
         * @param message GongList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IGongList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GongList message, length delimited. Does not implicitly {@link GameMsg.GongList.verify|verify} messages.
         * @param message GongList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.IGongList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GongList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GongList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.GongList;

        /**
         * Decodes a GongList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GongList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.GongList;

        /**
         * Verifies a GongList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GongList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GongList
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.GongList;

        /**
         * Creates a plain object from a GongList message. Also converts values to other types if specified.
         * @param message GongList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.GongList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GongList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ScoreGame. */
    interface IScoreGame {

        /** ScoreGame roomId */
        roomId?: (number|null);

        /** ScoreGame zu */
        zu?: (number|null);

        /** ScoreGame headImg */
        headImg?: (string|null);
    }

    /** Represents a ScoreGame. */
    class ScoreGame implements IScoreGame {

        /**
         * Constructs a new ScoreGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IScoreGame);

        /** ScoreGame roomId. */
        public roomId: number;

        /** ScoreGame zu. */
        public zu: number;

        /** ScoreGame headImg. */
        public headImg: string;

        /**
         * Creates a new ScoreGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ScoreGame instance
         */
        public static create(properties?: GameMsg.IScoreGame): GameMsg.ScoreGame;

        /**
         * Encodes the specified ScoreGame message. Does not implicitly {@link GameMsg.ScoreGame.verify|verify} messages.
         * @param message ScoreGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IScoreGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ScoreGame message, length delimited. Does not implicitly {@link GameMsg.ScoreGame.verify|verify} messages.
         * @param message ScoreGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.IScoreGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ScoreGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ScoreGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.ScoreGame;

        /**
         * Decodes a ScoreGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ScoreGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.ScoreGame;

        /**
         * Verifies a ScoreGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ScoreGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ScoreGame
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.ScoreGame;

        /**
         * Creates a plain object from a ScoreGame message. Also converts values to other types if specified.
         * @param message ScoreGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.ScoreGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ScoreGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OutGame. */
    interface IOutGame {

        /** OutGame gameId */
        gameId?: (number|null);

        /** OutGame lun */
        lun?: (number|null);

        /** OutGame game */
        game?: (number|null);
    }

    /** Represents an OutGame. */
    class OutGame implements IOutGame {

        /**
         * Constructs a new OutGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IOutGame);

        /** OutGame gameId. */
        public gameId: number;

        /** OutGame lun. */
        public lun: number;

        /** OutGame game. */
        public game: number;

        /**
         * Creates a new OutGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OutGame instance
         */
        public static create(properties?: GameMsg.IOutGame): GameMsg.OutGame;

        /**
         * Encodes the specified OutGame message. Does not implicitly {@link GameMsg.OutGame.verify|verify} messages.
         * @param message OutGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IOutGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OutGame message, length delimited. Does not implicitly {@link GameMsg.OutGame.verify|verify} messages.
         * @param message OutGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.IOutGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OutGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OutGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.OutGame;

        /**
         * Decodes an OutGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OutGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.OutGame;

        /**
         * Verifies an OutGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OutGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OutGame
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.OutGame;

        /**
         * Creates a plain object from an OutGame message. Also converts values to other types if specified.
         * @param message OutGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.OutGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OutGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KongGong. */
    interface IKongGong {

        /** KongGong one */
        one?: (number|null);

        /** KongGong two */
        two?: (number|null);
    }

    /** Represents a KongGong. */
    class KongGong implements IKongGong {

        /**
         * Constructs a new KongGong.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IKongGong);

        /** KongGong one. */
        public one: number;

        /** KongGong two. */
        public two: number;

        /**
         * Creates a new KongGong instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KongGong instance
         */
        public static create(properties?: GameMsg.IKongGong): GameMsg.KongGong;

        /**
         * Encodes the specified KongGong message. Does not implicitly {@link GameMsg.KongGong.verify|verify} messages.
         * @param message KongGong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IKongGong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KongGong message, length delimited. Does not implicitly {@link GameMsg.KongGong.verify|verify} messages.
         * @param message KongGong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.IKongGong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KongGong message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KongGong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.KongGong;

        /**
         * Decodes a KongGong message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KongGong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.KongGong;

        /**
         * Verifies a KongGong message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KongGong message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KongGong
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.KongGong;

        /**
         * Creates a plain object from a KongGong message. Also converts values to other types if specified.
         * @param message KongGong
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.KongGong, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KongGong to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Match. */
    interface IMatch {

        /** Match time */
        time?: (number|null);

        /** Match num */
        num?: (number|null);

        /** Match match */
        match?: (number|null);
    }

    /** Represents a Match. */
    class Match implements IMatch {

        /**
         * Constructs a new Match.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IMatch);

        /** Match time. */
        public time: number;

        /** Match num. */
        public num: number;

        /** Match match. */
        public match: number;

        /**
         * Creates a new Match instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Match instance
         */
        public static create(properties?: GameMsg.IMatch): GameMsg.Match;

        /**
         * Encodes the specified Match message. Does not implicitly {@link GameMsg.Match.verify|verify} messages.
         * @param message Match message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IMatch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Match message, length delimited. Does not implicitly {@link GameMsg.Match.verify|verify} messages.
         * @param message Match message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.IMatch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Match message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Match
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.Match;

        /**
         * Decodes a Match message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Match
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.Match;

        /**
         * Verifies a Match message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Match message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Match
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.Match;

        /**
         * Creates a plain object from a Match message. Also converts values to other types if specified.
         * @param message Match
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.Match, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Match to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserCards. */
    interface IUserCards {

        /** UserCards id */
        id?: (number|null);

        /** UserCards index */
        index?: (number|null);

        /** UserCards cards */
        cards?: (number[]|null);
    }

    /** Represents a UserCards. */
    class UserCards implements IUserCards {

        /**
         * Constructs a new UserCards.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IUserCards);

        /** UserCards id. */
        public id: number;

        /** UserCards index. */
        public index: number;

        /** UserCards cards. */
        public cards: number[];

        /**
         * Creates a new UserCards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserCards instance
         */
        public static create(properties?: GameMsg.IUserCards): GameMsg.UserCards;

        /**
         * Encodes the specified UserCards message. Does not implicitly {@link GameMsg.UserCards.verify|verify} messages.
         * @param message UserCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IUserCards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserCards message, length delimited. Does not implicitly {@link GameMsg.UserCards.verify|verify} messages.
         * @param message UserCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.IUserCards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserCards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.UserCards;

        /**
         * Decodes a UserCards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.UserCards;

        /**
         * Verifies a UserCards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserCards message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserCards
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.UserCards;

        /**
         * Creates a plain object from a UserCards message. Also converts values to other types if specified.
         * @param message UserCards
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.UserCards, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserCards to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserCardsList. */
    interface IUserCardsList {

        /** UserCardsList list */
        list?: (GameMsg.IUserCards[]|null);
    }

    /** Represents a UserCardsList. */
    class UserCardsList implements IUserCardsList {

        /**
         * Constructs a new UserCardsList.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IUserCardsList);

        /** UserCardsList list. */
        public list: GameMsg.IUserCards[];

        /**
         * Creates a new UserCardsList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserCardsList instance
         */
        public static create(properties?: GameMsg.IUserCardsList): GameMsg.UserCardsList;

        /**
         * Encodes the specified UserCardsList message. Does not implicitly {@link GameMsg.UserCardsList.verify|verify} messages.
         * @param message UserCardsList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IUserCardsList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserCardsList message, length delimited. Does not implicitly {@link GameMsg.UserCardsList.verify|verify} messages.
         * @param message UserCardsList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.IUserCardsList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserCardsList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserCardsList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.UserCardsList;

        /**
         * Decodes a UserCardsList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserCardsList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.UserCardsList;

        /**
         * Verifies a UserCardsList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserCardsList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserCardsList
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.UserCardsList;

        /**
         * Creates a plain object from a UserCardsList message. Also converts values to other types if specified.
         * @param message UserCardsList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.UserCardsList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserCardsList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Organize. */
    interface IOrganize {

        /** Organize cards */
        cards?: (GameMsg.ICards[]|null);
    }

    /** Represents an Organize. */
    class Organize implements IOrganize {

        /**
         * Constructs a new Organize.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IOrganize);

        /** Organize cards. */
        public cards: GameMsg.ICards[];

        /**
         * Creates a new Organize instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Organize instance
         */
        public static create(properties?: GameMsg.IOrganize): GameMsg.Organize;

        /**
         * Encodes the specified Organize message. Does not implicitly {@link GameMsg.Organize.verify|verify} messages.
         * @param message Organize message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IOrganize, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Organize message, length delimited. Does not implicitly {@link GameMsg.Organize.verify|verify} messages.
         * @param message Organize message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameMsg.IOrganize, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Organize message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Organize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameMsg.Organize;

        /**
         * Decodes an Organize message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Organize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameMsg.Organize;

        /**
         * Verifies an Organize message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Organize message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Organize
         */
        public static fromObject(object: { [k: string]: any }): GameMsg.Organize;

        /**
         * Creates a plain object from an Organize message. Also converts values to other types if specified.
         * @param message Organize
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameMsg.Organize, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Organize to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
 
} 
 export {}