/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "poc.poc";

export interface MsgRegisterApp {
  creator: string;
  parameters: string;
}

export interface MsgRegisterAppResponse {
  appId: string;
}

export interface MsgRegisterAppUser {
  creator: string;
  appId: string;
  userId: string;
}

export interface MsgRegisterAppUserResponse {
}

export interface MsgDeregisterApp {
  creator: string;
  appId: string;
}

export interface MsgDeregisterAppResponse {
}

export interface MsgDeregisterAppUser {
  creator: string;
  appId: string;
  devId: string;
}

export interface MsgDeregisterAppUserResponse {
}

function createBaseMsgRegisterApp(): MsgRegisterApp {
  return { creator: "", parameters: "" };
}

export const MsgRegisterApp = {
  encode(message: MsgRegisterApp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.parameters !== "") {
      writer.uint32(18).string(message.parameters);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterApp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterApp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.parameters = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterApp {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      parameters: isSet(object.parameters) ? String(object.parameters) : "",
    };
  },

  toJSON(message: MsgRegisterApp): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.parameters !== undefined && (obj.parameters = message.parameters);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterApp>, I>>(object: I): MsgRegisterApp {
    const message = createBaseMsgRegisterApp();
    message.creator = object.creator ?? "";
    message.parameters = object.parameters ?? "";
    return message;
  },
};

function createBaseMsgRegisterAppResponse(): MsgRegisterAppResponse {
  return { appId: "" };
}

export const MsgRegisterAppResponse = {
  encode(message: MsgRegisterAppResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== "") {
      writer.uint32(10).string(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAppResponse();
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

  fromJSON(object: any): MsgRegisterAppResponse {
    return { appId: isSet(object.appId) ? String(object.appId) : "" };
  },

  toJSON(message: MsgRegisterAppResponse): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = message.appId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterAppResponse>, I>>(object: I): MsgRegisterAppResponse {
    const message = createBaseMsgRegisterAppResponse();
    message.appId = object.appId ?? "";
    return message;
  },
};

function createBaseMsgRegisterAppUser(): MsgRegisterAppUser {
  return { creator: "", appId: "", userId: "" };
}

export const MsgRegisterAppUser = {
  encode(message: MsgRegisterAppUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.appId !== "") {
      writer.uint32(18).string(message.appId);
    }
    if (message.userId !== "") {
      writer.uint32(26).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterAppUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAppUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.appId = reader.string();
          break;
        case 3:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterAppUser {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      appId: isSet(object.appId) ? String(object.appId) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
    };
  },

  toJSON(message: MsgRegisterAppUser): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.appId !== undefined && (obj.appId = message.appId);
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterAppUser>, I>>(object: I): MsgRegisterAppUser {
    const message = createBaseMsgRegisterAppUser();
    message.creator = object.creator ?? "";
    message.appId = object.appId ?? "";
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseMsgRegisterAppUserResponse(): MsgRegisterAppUserResponse {
  return {};
}

export const MsgRegisterAppUserResponse = {
  encode(_: MsgRegisterAppUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterAppUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAppUserResponse();
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

  fromJSON(_: any): MsgRegisterAppUserResponse {
    return {};
  },

  toJSON(_: MsgRegisterAppUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterAppUserResponse>, I>>(_: I): MsgRegisterAppUserResponse {
    const message = createBaseMsgRegisterAppUserResponse();
    return message;
  },
};

function createBaseMsgDeregisterApp(): MsgDeregisterApp {
  return { creator: "", appId: "" };
}

export const MsgDeregisterApp = {
  encode(message: MsgDeregisterApp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.appId !== "") {
      writer.uint32(18).string(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeregisterApp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeregisterApp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.appId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeregisterApp {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      appId: isSet(object.appId) ? String(object.appId) : "",
    };
  },

  toJSON(message: MsgDeregisterApp): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.appId !== undefined && (obj.appId = message.appId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeregisterApp>, I>>(object: I): MsgDeregisterApp {
    const message = createBaseMsgDeregisterApp();
    message.creator = object.creator ?? "";
    message.appId = object.appId ?? "";
    return message;
  },
};

function createBaseMsgDeregisterAppResponse(): MsgDeregisterAppResponse {
  return {};
}

export const MsgDeregisterAppResponse = {
  encode(_: MsgDeregisterAppResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeregisterAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeregisterAppResponse();
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

  fromJSON(_: any): MsgDeregisterAppResponse {
    return {};
  },

  toJSON(_: MsgDeregisterAppResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeregisterAppResponse>, I>>(_: I): MsgDeregisterAppResponse {
    const message = createBaseMsgDeregisterAppResponse();
    return message;
  },
};

function createBaseMsgDeregisterAppUser(): MsgDeregisterAppUser {
  return { creator: "", appId: "", devId: "" };
}

export const MsgDeregisterAppUser = {
  encode(message: MsgDeregisterAppUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.appId !== "") {
      writer.uint32(18).string(message.appId);
    }
    if (message.devId !== "") {
      writer.uint32(26).string(message.devId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeregisterAppUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeregisterAppUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.appId = reader.string();
          break;
        case 3:
          message.devId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeregisterAppUser {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      appId: isSet(object.appId) ? String(object.appId) : "",
      devId: isSet(object.devId) ? String(object.devId) : "",
    };
  },

  toJSON(message: MsgDeregisterAppUser): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.appId !== undefined && (obj.appId = message.appId);
    message.devId !== undefined && (obj.devId = message.devId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeregisterAppUser>, I>>(object: I): MsgDeregisterAppUser {
    const message = createBaseMsgDeregisterAppUser();
    message.creator = object.creator ?? "";
    message.appId = object.appId ?? "";
    message.devId = object.devId ?? "";
    return message;
  },
};

function createBaseMsgDeregisterAppUserResponse(): MsgDeregisterAppUserResponse {
  return {};
}

export const MsgDeregisterAppUserResponse = {
  encode(_: MsgDeregisterAppUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeregisterAppUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeregisterAppUserResponse();
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

  fromJSON(_: any): MsgDeregisterAppUserResponse {
    return {};
  },

  toJSON(_: MsgDeregisterAppUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeregisterAppUserResponse>, I>>(_: I): MsgDeregisterAppUserResponse {
    const message = createBaseMsgDeregisterAppUserResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  RegisterApp(request: MsgRegisterApp): Promise<MsgRegisterAppResponse>;
  RegisterAppUser(request: MsgRegisterAppUser): Promise<MsgRegisterAppUserResponse>;
  DeregisterApp(request: MsgDeregisterApp): Promise<MsgDeregisterAppResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeregisterAppUser(request: MsgDeregisterAppUser): Promise<MsgDeregisterAppUserResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterApp = this.RegisterApp.bind(this);
    this.RegisterAppUser = this.RegisterAppUser.bind(this);
    this.DeregisterApp = this.DeregisterApp.bind(this);
    this.DeregisterAppUser = this.DeregisterAppUser.bind(this);
  }
  RegisterApp(request: MsgRegisterApp): Promise<MsgRegisterAppResponse> {
    const data = MsgRegisterApp.encode(request).finish();
    const promise = this.rpc.request("poc.poc.Msg", "RegisterApp", data);
    return promise.then((data) => MsgRegisterAppResponse.decode(new _m0.Reader(data)));
  }

  RegisterAppUser(request: MsgRegisterAppUser): Promise<MsgRegisterAppUserResponse> {
    const data = MsgRegisterAppUser.encode(request).finish();
    const promise = this.rpc.request("poc.poc.Msg", "RegisterAppUser", data);
    return promise.then((data) => MsgRegisterAppUserResponse.decode(new _m0.Reader(data)));
  }

  DeregisterApp(request: MsgDeregisterApp): Promise<MsgDeregisterAppResponse> {
    const data = MsgDeregisterApp.encode(request).finish();
    const promise = this.rpc.request("poc.poc.Msg", "DeregisterApp", data);
    return promise.then((data) => MsgDeregisterAppResponse.decode(new _m0.Reader(data)));
  }

  DeregisterAppUser(request: MsgDeregisterAppUser): Promise<MsgDeregisterAppUserResponse> {
    const data = MsgDeregisterAppUser.encode(request).finish();
    const promise = this.rpc.request("poc.poc.Msg", "DeregisterAppUser", data);
    return promise.then((data) => MsgDeregisterAppUserResponse.decode(new _m0.Reader(data)));
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
