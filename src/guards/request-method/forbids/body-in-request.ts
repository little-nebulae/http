import type { ExtractFrom } from "@little-nebulae/utility-types";

import type { HttpRequestMethod } from "@/constants/request-methods";

import { HTTP_REQUEST_METHOD_ENUM } from "@/constants/request-methods";

export type HttpRequestMethodThatForbidsBodyInRequest = ExtractFrom<
  HttpRequestMethod,
  "CONNECT" | "DELETE" | "GET" | "HEAD" | "TRACE"
>;

export function isHttpRequestMethodThatForbidsBodyInRequest(
  method: string,
): method is HttpRequestMethodThatForbidsBodyInRequest {
  return (
    method === HTTP_REQUEST_METHOD_ENUM.CONNECT ||
    method === HTTP_REQUEST_METHOD_ENUM.DELETE ||
    method === HTTP_REQUEST_METHOD_ENUM.GET ||
    method === HTTP_REQUEST_METHOD_ENUM.HEAD ||
    method === HTTP_REQUEST_METHOD_ENUM.TRACE
  );
}
