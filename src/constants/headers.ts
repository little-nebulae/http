import type { ValueOf } from "@little-nebulae/type-utils";

export const HTTP_HEADER_RECORD = {
  AUTHORIZATION: "authorization",
  CONTENT_TYPE: "content-type",
  COOKIE: "cookie",
  RETRY_AFTER: "retry-after",
} as const;

export type HttpHeader = ValueOf<typeof HTTP_HEADER_RECORD>;
