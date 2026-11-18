import type { ExtractFrom } from "@little-nebulae/utility-types";

import type { HttpRequestMethod } from "@/constants/request-methods";

import { HTTP_REQUEST_METHOD_ENUM } from "@/constants/request-methods";

export type HttpRequestMethodThatRequiresBodyInRequest = ExtractFrom<
  HttpRequestMethod,
  "PATCH" | "POST" | "PUT" | "QUERY"
>;

export function isHttpRequestMethodThatRequiresBodyInRequest(
  method: string,
): method is HttpRequestMethodThatRequiresBodyInRequest {
  return (
    method === HTTP_REQUEST_METHOD_ENUM.PATCH ||
    method === HTTP_REQUEST_METHOD_ENUM.POST ||
    method === HTTP_REQUEST_METHOD_ENUM.PUT ||
    method === HTTP_REQUEST_METHOD_ENUM.QUERY
  );
}
