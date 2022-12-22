/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "poc.poc";

export interface DevRegistry {
  index: string;
  apps: string;
}

function createBaseDevRegistry(): DevRegistry {
  return { index: "", apps: "" };
}

export const DevRegistry = {
  encode(message: DevRegistry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.apps !== "") {
      writer.uint32(18).string(message.apps);
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
          message.apps = reader.string();
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
      apps: isSet(object.apps) ? String(object.apps) : "",
    };
  },

  toJSON(message: DevRegistry): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.apps !== undefined && (obj.apps = message.apps);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DevRegistry>, I>>(object: I): DevRegistry {
    const message = createBaseDevRegistry();
    message.index = object.index ?? "";
    message.apps = object.apps ?? "";
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
