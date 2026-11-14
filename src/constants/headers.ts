import type { ValueOf } from "type-fest";

export const HTTP_HEADER_ENUM = {
  AUTHORIZATION: "authorization",
  CACHE_CONTROL: "cache-control",
  CONNECTION: "connection",
  CONTENT_ENCODING: "content-encoding",
  CONTENT_SECURITY_POLICY: "content-security-policy",
  CONTENT_TYPE: "content-type",
  COOKIE: "cookie",
  CROSS_ORIGIN_RESOURCE_POLICY: "cross-origin-resource-policy",
  DATE: "date",
  EXPIRES: "expires",
  FORWARDED: "forwarded",
  HOST: "host",
  KEEP_ALIVE: "keep-alive",
  LAST_MODIFIED: "last-modified",
  LOCATION: "location",
  ORIGIN: "origin",
  RETRY_AFTER: "retry-after",
  SET_COOKIE: "set-cookie",
  TRANSFER_ENCODING: "transfer-encoding",
  UPGRADE: "upgrade",
  USER_AGENT: "user-agent",
} as const;

export type HttpHeader = ValueOf<typeof HTTP_HEADER_ENUM>;
