/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface PocAppRegistry {
  index?: string;
  appId?: string;
  devId?: string;
  parameters?: string;
  users?: string;
}

export interface PocDevRegistry {
  index?: string;
  devId?: string;
  appsList?: string;
}

export type PocMsgDeregisterAppResponse = object;

export type PocMsgDeregisterAppUserResponse = object;

export type PocMsgRegisterAppResponse = object;

export type PocMsgRegisterAppUserResponse = object;

/**
 * Params defines the parameters for the module.
 */
export type PocParams = object;

export interface PocQueryAllAppRegistryResponse {
  appRegistry?: PocAppRegistry[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface PocQueryAllDevRegistryResponse {
  devRegistry?: PocDevRegistry[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface PocQueryGetAppRegistryResponse {
  appRegistry?: PocAppRegistry;
}

export interface PocQueryGetDevRegistryResponse {
  devRegistry?: PocDevRegistry;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface PocQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: PocParams;
}

export interface PocQueryShowAppParametersResponse {
  parameters?: string;
}

export interface PocQueryShowAppUsersResponse {
  users?: string;
}

export interface PocQueryShowDevAppsResponse {
  apps?: string;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently. It will be empty if
   * there are no more results.
   * @format byte
   */
  next_key?: string;

  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   * @format uint64
   */
  total?: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title poc/poc/app_registry.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryAppRegistryAll
   * @summary Queries a list of AppRegistry items.
   * @request GET:/poc/poc/app_registry
   */
  queryAppRegistryAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<PocQueryAllAppRegistryResponse, RpcStatus>({
      path: `/poc/poc/app_registry`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAppRegistry
   * @summary Queries a AppRegistry by index.
   * @request GET:/poc/poc/app_registry/{index}
   */
  queryAppRegistry = (index: string, params: RequestParams = {}) =>
    this.request<PocQueryGetAppRegistryResponse, RpcStatus>({
      path: `/poc/poc/app_registry/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDevRegistryAll
   * @summary Queries a list of DevRegistry items.
   * @request GET:/poc/poc/dev_registry
   */
  queryDevRegistryAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<PocQueryAllDevRegistryResponse, RpcStatus>({
      path: `/poc/poc/dev_registry`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDevRegistry
   * @summary Queries a DevRegistry by index.
   * @request GET:/poc/poc/dev_registry/{index}
   */
  queryDevRegistry = (index: string, params: RequestParams = {}) =>
    this.request<PocQueryGetDevRegistryResponse, RpcStatus>({
      path: `/poc/poc/dev_registry/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/poc/poc/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<PocQueryParamsResponse, RpcStatus>({
      path: `/poc/poc/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryShowAppParameters
   * @summary Queries a list of ShowAppParameters items.
   * @request GET:/poc/poc/show_app_parameters/{appId}
   */
  queryShowAppParameters = (appId: string, params: RequestParams = {}) =>
    this.request<PocQueryShowAppParametersResponse, RpcStatus>({
      path: `/poc/poc/show_app_parameters/${appId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryShowAppUsers
   * @summary Queries a list of ShowAppUsers items.
   * @request GET:/poc/poc/show_app_users/{appId}
   */
  queryShowAppUsers = (appId: string, params: RequestParams = {}) =>
    this.request<PocQueryShowAppUsersResponse, RpcStatus>({
      path: `/poc/poc/show_app_users/${appId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryShowDevApps
   * @summary Queries a list of ShowDevApps items.
   * @request GET:/poc/poc/show_dev_apps/{devId}
   */
  queryShowDevApps = (devId: string, params: RequestParams = {}) =>
    this.request<PocQueryShowDevAppsResponse, RpcStatus>({
      path: `/poc/poc/show_dev_apps/${devId}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
