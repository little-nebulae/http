import type { ExtractFrom } from "@little-nebulae/utility-types";

import type { HttpRequestMethod } from "@/constants/request-methods";

import { HTTP_REQUEST_METHOD_ENUM } from "@/constants/request-methods";

export type HttpRequestMethodThatForbidsBodyInSuccessfulResponse = ExtractFrom<
  HttpRequestMethod,
  "CONNECT" | "HEAD"
>;

export function isHttpRequestMethodThatForbidsBodyInSuccessfulResponse(
  method: string,
): method is HttpRequestMethodThatForbidsBodyInSuccessfulResponse {
  return (
    method === HTTP_REQUEST_METHOD_ENUM.CONNECT ||
    method === HTTP_REQUEST_METHOD_ENUM.HEAD
  );
}
