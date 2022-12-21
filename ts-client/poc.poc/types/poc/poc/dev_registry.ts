/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "poc.poc";

export interface DevRegistry {
  index: string;
  devId: string;
  appsList: string;
}

function createBaseDevRegistry(): DevRegistry {
  return { index: "", devId: "", appsList: "" };
}

export const DevRegistry = {
  encode(message: DevRegistry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.devId !== "") {
      writer.uint32(18).string(message.devId);
    }
    if (message.appsList !== "") {
      writer.uint32(26).string(message.appsList);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DevRegistry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDevRegistry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.devId = reader.string();
          break;
        case 3:
          message.appsList = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DevRegistry {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      devId: isSet(object.devId) ? String(object.devId) : "",
      appsList: isSet(object.appsList) ? String(object.appsList) : "",
    };
  },

  toJSON(message: DevRegistry): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.devId !== undefined && (obj.devId = message.devId);
    message.appsList !== undefined && (obj.appsList = message.appsList);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DevRegistry>, I>>(object: I): DevRegistry {
    const message = createBaseDevRegistry();
    message.index = object.index ?? "";
    message.devId = object.devId ?? "";
    message.appsList = object.appsList ?? "";
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
