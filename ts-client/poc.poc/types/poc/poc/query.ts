/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { AppRegistry } from "./app_registry";
import { DevRegistry } from "./dev_registry";
import { Params } from "./params";

export const protobufPackage = "poc.poc";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetAppRegistryRequest {
  index: string;
}

export interface QueryGetAppRegistryResponse {
  appRegistry: AppRegistry | undefined;
}

export interface QueryAllAppRegistryRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAppRegistryResponse {
  appRegistry: AppRegistry[];
  pagination: PageResponse | undefined;
}

export interface QueryGetDevRegistryRequest {
  index: string;
}

export interface QueryGetDevRegistryResponse {
  devRegistry: DevRegistry | undefined;
}

export interface QueryAllDevRegistryRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDevRegistryResponse {
  devRegistry: DevRegistry[];
  pagination: PageResponse | undefined;
}

export interface QueryShowAppUsersRequest {
  appId: string;
}

export interface QueryShowAppUsersResponse {
  users: string;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAppRegistryRequest(): QueryGetAppRegistryRequest {
  return { index: "" };
}

export const QueryGetAppRegistryRequest = {
  encode(message: QueryGetAppRegistryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAppRegistryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAppRegistryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAppRegistryRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetAppRegistryRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAppRegistryRequest>, I>>(object: I): QueryGetAppRegistryRequest {
    const message = createBaseQueryGetAppRegistryRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetAppRegistryResponse(): QueryGetAppRegistryResponse {
  return { appRegistry: undefined };
}

export const QueryGetAppRegistryResponse = {
  encode(message: QueryGetAppRegistryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appRegistry !== undefined) {
      AppRegistry.encode(message.appRegistry, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAppRegistryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAppRegistryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appRegistry = AppRegistry.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAppRegistryResponse {
    return { appRegistry: isSet(object.appRegistry) ? AppRegistry.fromJSON(object.appRegistry) : undefined };
  },

  toJSON(message: QueryGetAppRegistryResponse): unknown {
    const obj: any = {};
    message.appRegistry !== undefined
      && (obj.appRegistry = message.appRegistry ? AppRegistry.toJSON(message.appRegistry) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAppRegistryResponse>, I>>(object: I): QueryGetAppRegistryResponse {
    const message = createBaseQueryGetAppRegistryResponse();
    message.appRegistry = (object.appRegistry !== undefined && object.appRegistry !== null)
      ? AppRegistry.fromPartial(object.appRegistry)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAppRegistryRequest(): QueryAllAppRegistryRequest {
  return { pagination: undefined };
}

export const QueryAllAppRegistryRequest = {
  encode(message: QueryAllAppRegistryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAppRegistryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAppRegistryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAppRegistryRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllAppRegistryRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAppRegistryRequest>, I>>(object: I): QueryAllAppRegistryRequest {
    const message = createBaseQueryAllAppRegistryRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAppRegistryResponse(): QueryAllAppRegistryResponse {
  return { appRegistry: [], pagination: undefined };
}

export const QueryAllAppRegistryResponse = {
  encode(message: QueryAllAppRegistryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.appRegistry) {
      AppRegistry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAppRegistryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAppRegistryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appRegistry.push(AppRegistry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAppRegistryResponse {
    return {
      appRegistry: Array.isArray(object?.appRegistry)
        ? object.appRegistry.map((e: any) => AppRegistry.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllAppRegistryResponse): unknown {
    const obj: any = {};
    if (message.appRegistry) {
      obj.appRegistry = message.appRegistry.map((e) => e ? AppRegistry.toJSON(e) : undefined);
    } else {
      obj.appRegistry = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAppRegistryResponse>, I>>(object: I): QueryAllAppRegistryResponse {
    const message = createBaseQueryAllAppRegistryResponse();
    message.appRegistry = object.appRegistry?.map((e) => AppRegistry.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetDevRegistryRequest(): QueryGetDevRegistryRequest {
  return { index: "" };
}

export const QueryGetDevRegistryRequest = {
  encode(message: QueryGetDevRegistryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDevRegistryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDevRegistryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDevRegistryRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetDevRegistryRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDevRegistryRequest>, I>>(object: I): QueryGetDevRegistryRequest {
    const message = createBaseQueryGetDevRegistryRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetDevRegistryResponse(): QueryGetDevRegistryResponse {
  return { devRegistry: undefined };
}

export const QueryGetDevRegistryResponse = {
  encode(message: QueryGetDevRegistryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.devRegistry !== undefined) {
      DevRegistry.encode(message.devRegistry, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDevRegistryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDevRegistryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.devRegistry = DevRegistry.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDevRegistryResponse {
    return { devRegistry: isSet(object.devRegistry) ? DevRegistry.fromJSON(object.devRegistry) : undefined };
  },

  toJSON(message: QueryGetDevRegistryResponse): unknown {
    const obj: any = {};
    message.devRegistry !== undefined
      && (obj.devRegistry = message.devRegistry ? DevRegistry.toJSON(message.devRegistry) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDevRegistryResponse>, I>>(object: I): QueryGetDevRegistryResponse {
    const message = createBaseQueryGetDevRegistryResponse();
    message.devRegistry = (object.devRegistry !== undefined && object.devRegistry !== null)
      ? DevRegistry.fromPartial(object.devRegistry)
      : undefined;
    return message;
  },
};

function createBaseQueryAllDevRegistryRequest(): QueryAllDevRegistryRequest {
  return { pagination: undefined };
}

export const QueryAllDevRegistryRequest = {
  encode(message: QueryAllDevRegistryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDevRegistryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDevRegistryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDevRegistryRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllDevRegistryRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDevRegistryRequest>, I>>(object: I): QueryAllDevRegistryRequest {
    const message = createBaseQueryAllDevRegistryRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllDevRegistryResponse(): QueryAllDevRegistryResponse {
  return { devRegistry: [], pagination: undefined };
}

export const QueryAllDevRegistryResponse = {
  encode(message: QueryAllDevRegistryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.devRegistry) {
      DevRegistry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDevRegistryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDevRegistryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.devRegistry.push(DevRegistry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDevRegistryResponse {
    return {
      devRegistry: Array.isArray(object?.devRegistry)
        ? object.devRegistry.map((e: any) => DevRegistry.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllDevRegistryResponse): unknown {
    const obj: any = {};
    if (message.devRegistry) {
      obj.devRegistry = message.devRegistry.map((e) => e ? DevRegistry.toJSON(e) : undefined);
    } else {
      obj.devRegistry = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDevRegistryResponse>, I>>(object: I): QueryAllDevRegistryResponse {
    const message = createBaseQueryAllDevRegistryResponse();
    message.devRegistry = object.devRegistry?.map((e) => DevRegistry.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryShowAppUsersRequest(): QueryShowAppUsersRequest {
  return { appId: "" };
}

export const QueryShowAppUsersRequest = {
  encode(message: QueryShowAppUsersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== "") {
      writer.uint32(10).string(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowAppUsersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowAppUsersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowAppUsersRequest {
    return { appId: isSet(object.appId) ? String(object.appId) : "" };
  },

  toJSON(message: QueryShowAppUsersRequest): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = message.appId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryShowAppUsersRequest>, I>>(object: I): QueryShowAppUsersRequest {
    const message = createBaseQueryShowAppUsersRequest();
    message.appId = object.appId ?? "";
    return message;
  },
};

function createBaseQueryShowAppUsersResponse(): QueryShowAppUsersResponse {
  return { users: "" };
}

export const QueryShowAppUsersResponse = {
  encode(message: QueryShowAppUsersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.users !== "") {
      writer.uint32(10).string(message.users);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowAppUsersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowAppUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.users = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowAppUsersResponse {
    return { users: isSet(object.users) ? String(object.users) : "" };
  },

  toJSON(message: QueryShowAppUsersResponse): unknown {
    const obj: any = {};
    message.users !== undefined && (obj.users = message.users);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryShowAppUsersResponse>, I>>(object: I): QueryShowAppUsersResponse {
    const message = createBaseQueryShowAppUsersResponse();
    message.users = object.users ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a AppRegistry by index. */
  AppRegistry(request: QueryGetAppRegistryRequest): Promise<QueryGetAppRegistryResponse>;
  /** Queries a list of AppRegistry items. */
  AppRegistryAll(request: QueryAllAppRegistryRequest): Promise<QueryAllAppRegistryResponse>;
  /** Queries a DevRegistry by index. */
  DevRegistry(request: QueryGetDevRegistryRequest): Promise<QueryGetDevRegistryResponse>;
  /** Queries a list of DevRegistry items. */
  DevRegistryAll(request: QueryAllDevRegistryRequest): Promise<QueryAllDevRegistryResponse>;
  /** Queries a list of ShowAppUsers items. */
  ShowAppUsers(request: QueryShowAppUsersRequest): Promise<QueryShowAppUsersResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.AppRegistry = this.AppRegistry.bind(this);
    this.AppRegistryAll = this.AppRegistryAll.bind(this);
    this.DevRegistry = this.DevRegistry.bind(this);
    this.DevRegistryAll = this.DevRegistryAll.bind(this);
    this.ShowAppUsers = this.ShowAppUsers.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("poc.poc.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  AppRegistry(request: QueryGetAppRegistryRequest): Promise<QueryGetAppRegistryResponse> {
    const data = QueryGetAppRegistryRequest.encode(request).finish();
    const promise = this.rpc.request("poc.poc.Query", "AppRegistry", data);
    return promise.then((data) => QueryGetAppRegistryResponse.decode(new _m0.Reader(data)));
  }

  AppRegistryAll(request: QueryAllAppRegistryRequest): Promise<QueryAllAppRegistryResponse> {
    const data = QueryAllAppRegistryRequest.encode(request).finish();
    const promise = this.rpc.request("poc.poc.Query", "AppRegistryAll", data);
    return promise.then((data) => QueryAllAppRegistryResponse.decode(new _m0.Reader(data)));
  }

  DevRegistry(request: QueryGetDevRegistryRequest): Promise<QueryGetDevRegistryResponse> {
    const data = QueryGetDevRegistryRequest.encode(request).finish();
    const promise = this.rpc.request("poc.poc.Query", "DevRegistry", data);
    return promise.then((data) => QueryGetDevRegistryResponse.decode(new _m0.Reader(data)));
  }

  DevRegistryAll(request: QueryAllDevRegistryRequest): Promise<QueryAllDevRegistryResponse> {
    const data = QueryAllDevRegistryRequest.encode(request).finish();
    const promise = this.rpc.request("poc.poc.Query", "DevRegistryAll", data);
    return promise.then((data) => QueryAllDevRegistryResponse.decode(new _m0.Reader(data)));
  }

  ShowAppUsers(request: QueryShowAppUsersRequest): Promise<QueryShowAppUsersResponse> {
    const data = QueryShowAppUsersRequest.encode(request).finish();
    const promise = this.rpc.request("poc.poc.Query", "ShowAppUsers", data);
    return promise.then((data) => QueryShowAppUsersResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
