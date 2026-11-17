import type { IterableElement } from "type-fest";

import { HTTP_REQUEST_METHOD_ENUM } from "@/constants/request-methods";

const HTTP_METHOD_WITH_REQUEST_BODY_SET = new Set([
  HTTP_REQUEST_METHOD_ENUM.PATCH,
  HTTP_REQUEST_METHOD_ENUM.POST,
  HTTP_REQUEST_METHOD_ENUM.PUT,
  HTTP_REQUEST_METHOD_ENUM.QUERY,
]);

export type HttpMethodWithRequestBody = IterableElement<
  typeof HTTP_METHOD_WITH_REQUEST_BODY_SET
>;

export function isHttpMethodWithRequestBody(
  method: string,
): method is HttpMethodWithRequestBody {
  //@ts-expect-error
  return HTTP_METHOD_WITH_REQUEST_BODY_SET.has(method);
}
