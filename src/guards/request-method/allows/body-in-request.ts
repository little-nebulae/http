import type { ExtractFrom } from "@little-nebulae/utility-types";

import type { HttpRequestMethod } from "@/constants/request-methods";

import { HTTP_REQUEST_METHOD_ENUM } from "@/constants/request-methods";

export type HttpRequestMethodThatAllowsBodyInRequest = ExtractFrom<
  HttpRequestMethod,
  "OPTIONS"
>;

export function isHttpRequestMethodThatAllowsBodyInRequest(
  method: string,
): method is HttpRequestMethodThatAllowsBodyInRequest {
  return method === HTTP_REQUEST_METHOD_ENUM.OPTIONS;
}
