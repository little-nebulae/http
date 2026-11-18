import type { ExtractFrom } from "@little-nebulae/utility-types";

import type { HttpRequestMethod } from "@/constants/request-methods";

import { HTTP_REQUEST_METHOD_ENUM } from "@/constants/request-methods";

export type HttpRequestMethodThatForbidsBodyInErrorResponse = ExtractFrom<
  HttpRequestMethod,
  "HEAD"
>;

export function isHttpRequestMethodThatForbidsBodyInErrorResponse(
  method: string,
): method is HttpRequestMethodThatForbidsBodyInErrorResponse {
  return method === HTTP_REQUEST_METHOD_ENUM.HEAD;
}
