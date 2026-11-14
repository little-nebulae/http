import type { ValueOf } from "type-fest";

export const HTTP_SERVER_ERROR_RESPONSE_STATUS_ENUM = {
  INTERNAL_SERVER_ERROR: {
    CODE: 500,
    TEXT: "Internal Server Error",
  },
  NOT_IMPLEMENTED: {
    CODE: 501,
    TEXT: "Not Implemented",
  },
  BAD_GATEWAY: {
    CODE: 502,
    TEXT: "Bad Gateway",
  },
  SERVICE_UNAVAILABLE: {
    CODE: 503,
    TEXT: "Service Unavailable",
  },
  GATEWAY_TIMEOUT: {
    CODE: 504,
    TEXT: "Gateway Timeout",
  },
  HTTP_VERSION_NOT_SUPPORTED: {
    CODE: 505,
    TEXT: "HTTP Version Not Supported",
  },
  VARIANT_ALSO_NEGOTIATES: {
    CODE: 506,
    TEXT: "Variant Also Negotiates",
  },
  INSUFFICIENT_STORAGE: {
    CODE: 507,
    TEXT: "Insufficient Storage",
  },
  LOOP_DETECTED: {
    CODE: 508,
    TEXT: "Loop Detected",
  },
  NOT_EXTENDED: {
    CODE: 510,
    TEXT: "Not Extended",
  },
  NETWORK_AUTHENTICATION_REQUIRED: {
    CODE: 511,
    TEXT: "Network Authentication Required",
  },
} as const;

type HttpServerErrorResponseStatus = ValueOf<
  typeof HTTP_SERVER_ERROR_RESPONSE_STATUS_ENUM
>;
export type HttpServerErrorResponseStatusCode =
  HttpServerErrorResponseStatus["CODE"];
export type HttpServerErrorResponseStatusText =
  HttpServerErrorResponseStatus["TEXT"];
