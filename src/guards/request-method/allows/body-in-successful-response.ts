import type { ExtractFrom } from "@little-nebulae/utility-types";

import type { HttpRequestMethod } from "@/constants/request-methods";

import { HTTP_REQUEST_METHOD_ENUM } from "@/constants/request-methods";

export type HttpRequestMethodThatAllowsBodyInSuccessfulResponse = ExtractFrom<
  HttpRequestMethod,
  "DELETE" | "OPTIONS" | "PATCH" | "PUT"
>;

export function isHttpRequestMethodThatAllowsBodyInSuccessfulResponse(
  method: string,
): method is HttpRequestMethodThatAllowsBodyInSuccessfulResponse {
  return (
    method === HTTP_REQUEST_METHOD_ENUM.DELETE ||
    method === HTTP_REQUEST_METHOD_ENUM.OPTIONS ||
    method === HTTP_REQUEST_METHOD_ENUM.PATCH ||
    method === HTTP_REQUEST_METHOD_ENUM.PUT
  );
}
