import type { ValueOf } from "type-fest";

export const HTTP_CLIENT_ERROR_RESPONSE_STATUS_ENUM = {
  BAD_REQUEST: {
    code: 400,
    text: "Bad Request",
  },
  UNAUTHORIZED: {
    code: 401,
    text: "Unauthorized",
  },
  FORBIDDEN: {
    code: 403,
    text: "Forbidden",
  },
  NOT_FOUND: {
    code: 404,
    text: "Not Found",
  },
  CONFLICT: {
    code: 409,
    text: "Conflict",
  },
  UNPROCESSABLE_CONTENT: {
    code: 422,
    text: "Unprocessable Content",
  },
  TOO_MANY_REQUESTS: {
    code: 429,
    text: "Too Many Requests",
  },
} as const;

type HttpClientErrorResponseStatus = ValueOf<
  typeof HTTP_CLIENT_ERROR_RESPONSE_STATUS_ENUM
>;
export type HttpClientErrorResponseStatusCode =
  HttpClientErrorResponseStatus["code"];
export type HttpClientErrorResponseStatusText =
  HttpClientErrorResponseStatus["text"];
