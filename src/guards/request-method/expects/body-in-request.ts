import type { ExtractFrom } from "@little-nebulae/utility-types";

import type { HttpRequestMethod } from "@/constants/request-methods";

import { HTTP_REQUEST_METHOD_ENUM } from "@/constants/request-methods";

export type HttpRequestMethodThatExpectsBodyInRequest = ExtractFrom<
  HttpRequestMethod,
  "PATCH" | "POST" | "PUT" | "QUERY"
>;

export function isHttpRequestMethodThatExpectsBodyInRequest(
  method: string,
): method is HttpRequestMethodThatExpectsBodyInRequest {
  return (
    method === HTTP_REQUEST_METHOD_ENUM.PATCH ||
    method === HTTP_REQUEST_METHOD_ENUM.POST ||
    method === HTTP_REQUEST_METHOD_ENUM.PUT ||
    method === HTTP_REQUEST_METHOD_ENUM.QUERY
  );
}
