/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { AppRegistry } from "./app_registry";
import { DevRegistry } from "./dev_registry";
import { Params } from "./params";

export const protobufPackage = "poc.poc";

/** GenesisState defines the poc module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  appRegistryList: AppRegistry[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  devRegistryList: DevRegistry[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, appRegistryList: [], devRegistryList: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.appRegistryList) {
      AppRegistry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.devRegistryList) {
      DevRegistry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.appRegistryList.push(AppRegistry.decode(reader, reader.uint32()));
          break;
        case 3:
          message.devRegistryList.push(DevRegistry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      appRegistryList: Array.isArray(object?.appRegistryList)
        ? object.appRegistryList.map((e: any) => AppRegistry.fromJSON(e))
        : [],
      devRegistryList: Array.isArray(object?.devRegistryList)
        ? object.devRegistryList.map((e: any) => DevRegistry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.appRegistryList) {
      obj.appRegistryList = message.appRegistryList.map((e) => e ? AppRegistry.toJSON(e) : undefined);
    } else {
      obj.appRegistryList = [];
    }
    if (message.devRegistryList) {
      obj.devRegistryList = message.devRegistryList.map((e) => e ? DevRegistry.toJSON(e) : undefined);
    } else {
      obj.devRegistryList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.appRegistryList = object.appRegistryList?.map((e) => AppRegistry.fromPartial(e)) || [];
    message.devRegistryList = object.devRegistryList?.map((e) => DevRegistry.fromPartial(e)) || [];
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
