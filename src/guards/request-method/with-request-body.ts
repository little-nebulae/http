import type { IterableElement } from "type-fest";

import { HTTP_REQUEST_METHOD_ENUM } from "@/constants/request-methods";

const HTTP_REQUEST_METHOD_WITH_REQUEST_BODY_SET = new Set([
  HTTP_REQUEST_METHOD_ENUM.PATCH,
  HTTP_REQUEST_METHOD_ENUM.POST,
  HTTP_REQUEST_METHOD_ENUM.PUT,
  HTTP_REQUEST_METHOD_ENUM.QUERY,
]);

export type HttpRequestMethodWithRequestBody = IterableElement<
  typeof HTTP_REQUEST_METHOD_WITH_REQUEST_BODY_SET
>;

export function isHttpRequestMethodWithRequestBody(
  method: string,
): method is HttpRequestMethodWithRequestBody {
  // @ts-expect-error
  return HTTP_REQUEST_METHOD_WITH_REQUEST_BODY_SET.has(method);
}
