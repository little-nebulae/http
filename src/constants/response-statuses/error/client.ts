import type { ValueOf } from "type-fest";

export const HTTP_CLIENT_ERROR_RESPONSE_STATUS_ENUM = {
  BAD_REQUEST: {
    CODE: 400,
    TEXT: "Bad Request",
  },
  UNAUTHORIZED: {
    CODE: 401,
    TEXT: "Unauthorized",
  },
  PAYMENT_REQUIRED: {
    CODE: 402,
    TEXT: "Payment Required",
  },
  FORBIDDEN: {
    CODE: 403,
    TEXT: "Forbidden",
  },
  NOT_FOUND: {
    CODE: 404,
    TEXT: "Not Found",
  },
  METHOD_NOT_ALLOWED: {
    CODE: 405,
    TEXT: "Method Not Allowed",
  },
  NOT_ACCEPTABLE: {
    CODE: 406,
    TEXT: "Not Acceptable",
  },
  PROXY_AUTHENTICATION_REQUIRED: {
    CODE: 407,
    TEXT: "Proxy Authentication Required",
  },
  REQUEST_TIMEOUT: {
    CODE: 408,
    TEXT: "Request Timeout",
  },
  CONFLICT: {
    CODE: 409,
    TEXT: "Conflict",
  },
  GONE: {
    CODE: 410,
    TEXT: "Gone",
  },
  LENGTH_REQUIRED: {
    CODE: 411,
    TEXT: "Length Required",
  },
  PRECONDITION_FAILED: {
    CODE: 412,
    TEXT: "Precondition Failed",
  },
  CONTENT_TOO_LARGE: {
    CODE: 413,
    TEXT: "Content Too Large",
  },
  URI_TOO_LONG: {
    CODE: 414,
    TEXT: "URI Too Long",
  },
  UNSUPPORTED_MEDIA_TYPE: {
    CODE: 415,
    TEXT: "Unsupported Media Type",
  },
  RANGE_NOT_SATISFIABLE: {
    CODE: 416,
    TEXT: "Range Not Satisfiable",
  },
  EXPECTATION_FAILED: {
    CODE: 417,
    TEXT: "Expectation Failed",
  },
  IM_A_TEAPOT: {
    CODE: 418,
    TEXT: "I'm a teapot",
  },
  MISDIRECTED_REQUEST: {
    CODE: 421,
    TEXT: "Misdirected Request",
  },
  UNPROCESSABLE_CONTENT: {
    CODE: 422,
    TEXT: "Unprocessable Content",
  },
  LOCKED: {
    CODE: 423,
    TEXT: "Locked",
  },
  FAILED_DEPENDENCY: {
    CODE: 424,
    TEXT: "Failed Dependency",
  },
  TOO_EARLY: {
    CODE: 425,
    TEXT: "Too Early",
  },
  UPGRADE_REQUIRED: {
    CODE: 426,
    TEXT: "Upgrade Required",
  },
  PRECONDITION_REQUIRED: {
    CODE: 428,
    TEXT: "Precondition Required",
  },
  TOO_MANY_REQUESTS: {
    CODE: 429,
    TEXT: "Too Many Requests",
  },
  REQUEST_HEADER_FIELDS_TOO_LARGE: {
    CODE: 431,
    TEXT: "Request Header Fields Too Large",
  },
  UNAVAILABLE_FOR_LEGAL_REASONS: {
    CODE: 451,
    TEXT: "Unavailable For Legal Reasons",
  },
} as const;

type HttpClientErrorResponseStatus = ValueOf<
  typeof HTTP_CLIENT_ERROR_RESPONSE_STATUS_ENUM
>;
export type HttpClientErrorResponseStatusCode =
  HttpClientErrorResponseStatus["CODE"];
export type HttpClientErrorResponseStatusText =
  HttpClientErrorResponseStatus["TEXT"];
