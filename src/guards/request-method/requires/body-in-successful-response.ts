import type { ExtractFrom } from "@little-nebulae/utility-types";

import type { HttpRequestMethod } from "@/constants/request-methods";

import { HTTP_REQUEST_METHOD_ENUM } from "@/constants/request-methods";

export type HttpRequestMethodThatRequiresBodyInSuccessfulResponse = ExtractFrom<
  HttpRequestMethod,
  "GET" | "POST" | "QUERY" | "TRACE"
>;

export function isHttpRequestMethodThatRequiresBodyInSuccessfulResponse(
  method: string,
): method is HttpRequestMethodThatRequiresBodyInSuccessfulResponse {
  return (
    method === HTTP_REQUEST_METHOD_ENUM.GET ||
    method === HTTP_REQUEST_METHOD_ENUM.POST ||
    method === HTTP_REQUEST_METHOD_ENUM.QUERY ||
    method === HTTP_REQUEST_METHOD_ENUM.TRACE
  );
}
