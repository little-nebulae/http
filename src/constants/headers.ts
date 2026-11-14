import type { ValueOf } from "type-fest";

export const HTTP_HEADER_ENUM = {
  AUTHORIZATION: "authorization",
  CACHE_CONTROL: "cache-control",
  CONNECTION: "connection",
  CONTENT_ENCODING: "content-encoding",
  CONTENT_TYPE: "content-type",
  COOKIE: "cookie",
  EXPIRES: "expires",
  FORWARDED: "forwarded",
  HOST: "host",
  KEEP_ALIVE: "keep-alive",
  LAST_MODIFIED: "last-modified",
  LOCATION: "location",
  RETRY_AFTER: "retry-after",
  SET_COOKIE: "set-cookie",
} as const;

export type HttpHeader = ValueOf<typeof HTTP_HEADER_ENUM>;
