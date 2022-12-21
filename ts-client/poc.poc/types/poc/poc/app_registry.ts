/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "poc.poc";

export interface AppRegistry {
  index: string;
  appId: string;
  devId: string;
  parameters: string;
  users: string;
}

function createBaseAppRegistry(): AppRegistry {
  return { index: "", appId: "", devId: "", parameters: "", users: "" };
}

export const AppRegistry = {
  encode(message: AppRegistry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.appId !== "") {
      writer.uint32(18).string(message.appId);
    }
    if (message.devId !== "") {
      writer.uint32(26).string(message.devId);
    }
    if (message.parameters !== "") {
      writer.uint32(34).string(message.parameters);
    }
    if (message.users !== "") {
      writer.uint32(42).string(message.users);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppRegistry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppRegistry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.appId = reader.string();
          break;
        case 3:
          message.devId = reader.string();
          break;
        case 4:
          message.parameters = reader.string();
          break;
        case 5:
          message.users = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppRegistry {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      appId: isSet(object.appId) ? String(object.appId) : "",
      devId: isSet(object.devId) ? String(object.devId) : "",
      parameters: isSet(object.parameters) ? String(object.parameters) : "",
      users: isSet(object.users) ? String(object.users) : "",
    };
  },

  toJSON(message: AppRegistry): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.appId !== undefined && (obj.appId = message.appId);
    message.devId !== undefined && (obj.devId = message.devId);
    message.parameters !== undefined && (obj.parameters = message.parameters);
    message.users !== undefined && (obj.users = message.users);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AppRegistry>, I>>(object: I): AppRegistry {
    const message = createBaseAppRegistry();
    message.index = object.index ?? "";
    message.appId = object.appId ?? "";
    message.devId = object.devId ?? "";
    message.parameters = object.parameters ?? "";
    message.users = object.users ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
