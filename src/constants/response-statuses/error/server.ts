import type { ValueOf } from "type-fest";

export const HTTP_SERVER_ERROR_RESPONSE_STATUS_ENUM = {
  INTERNAL_SERVER_ERROR: {
    code: 500,
    text: "Internal Server Error",
  },
  NOT_IMPLEMENTED: {
    code: 501,
    text: "Not Implemented",
  },
  BAD_GATEWAY: {
    code: 502,
    text: "Bad Gateway",
  },
  SERVICE_UNAVAILABLE: {
    code: 503,
    text: "Service Unavailable",
  },
  GATEWAY_TIMEOUT: {
    code: 504,
    text: "Gateway Timeout",
  },
  HTTP_VERSION_NOT_SUPPORTED: {
    code: 505,
    text: "HTTP Version Not Supported",
  },
  VARIANT_ALSO_NEGOTIATES: {
    code: 506,
    text: "Variant Also Negotiates",
  },
  INSUFFICIENT_STORAGE: {
    code: 507,
    text: "Insufficient Storage",
  },
  LOOP_DETECTED: {
    code: 508,
    text: "Loop Detected",
  },
  NOT_EXTENDED: {
    code: 510,
    text: "Not Extended",
  },
  NETWORK_AUTHENTICATION_REQUIRED: {
    code: 511,
    text: "Network Authentication Required",
  },
} as const;

type HttpServerErrorResponseStatus = ValueOf<
  typeof HTTP_SERVER_ERROR_RESPONSE_STATUS_ENUM
>;
export type HttpServerErrorResponseStatusCode =
  HttpServerErrorResponseStatus["code"];
export type HttpServerErrorResponseStatusText =
  HttpServerErrorResponseStatus["text"];
