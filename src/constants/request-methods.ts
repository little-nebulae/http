import type { ValueOf } from "type-fest";

export const HTTP_REQUEST_METHOD_ENUM = {
  GET: "GET",
  QUERY: "QUERY",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
  PATCH: "PATCH",
  HEAD: "HEAD",
  OPTIONS: "OPTIONS",
  TRACE: "TRACE",
  CONNECT: "CONNECT",
} as const;

export type HttpRequestMethod = ValueOf<typeof HTTP_REQUEST_METHOD_ENUM>;
