import type { IterableElement } from "type-fest";

import { HTTP_REQUEST_METHOD_ENUM } from "@/constants/request-methods";

const HTTP_METHOD_WITH_NO_REQUEST_BODY_SET = new Set([
  HTTP_REQUEST_METHOD_ENUM.CONNECT,
  HTTP_REQUEST_METHOD_ENUM.DELETE,
  HTTP_REQUEST_METHOD_ENUM.GET,
  HTTP_REQUEST_METHOD_ENUM.HEAD,
  HTTP_REQUEST_METHOD_ENUM.OPTIONS,
  HTTP_REQUEST_METHOD_ENUM.TRACE,
]);

export type HttpMethodWithNoRequestBody = IterableElement<
  typeof HTTP_METHOD_WITH_NO_REQUEST_BODY_SET
>;

export function isHttpMethodWithNoRequestBody(
  method: string,
): method is HttpMethodWithNoRequestBody {
  //@ts-expect-error
  return HTTP_METHOD_WITH_NO_REQUEST_BODY_SET.has(method);
}
