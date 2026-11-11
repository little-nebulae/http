import type { ValueOf } from "type-fest";

export const HTTP_SERVER_ERROR_RESPONSE_STATUS_ENUM = {
  INTERNAL_SERVER_ERROR: {
    code: 500,
    text: "Internal Server Error",
  },
  SERVICE_UNAVAILABLE: {
    code: 503,
    text: "Service Unavailable",
  },
  GATEWAY_TIMEOUT: {
    code: 504,
    text: "Gateway Timeout",
  },
} as const;

type HttpServerErrorResponseStatus = ValueOf<
  typeof HTTP_SERVER_ERROR_RESPONSE_STATUS_ENUM
>;
export type HttpServerErrorResponseStatusCode =
  HttpServerErrorResponseStatus["code"];
export type HttpServerErrorResponseStatusText =
  HttpServerErrorResponseStatus["text"];
