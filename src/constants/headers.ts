import type { ValueOf } from "type-fest";

export const HTTP_HEADER_ENUM = {
  AUTHORIZATION: "authorization",
  CACHE_CONTROL: "cache-control",
  CONTENT_ENCODING: "content-encoding",
  CONTENT_TYPE: "content-type",
  COOKIE: "cookie",
  RETRY_AFTER: "retry-after",
} as const;

export type HttpHeader = ValueOf<typeof HTTP_HEADER_ENUM>;
