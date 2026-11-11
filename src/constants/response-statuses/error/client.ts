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
  PAYMENT_REQUIRED: {
    code: 402,
    text: "Payment Required",
  },
  FORBIDDEN: {
    code: 403,
    text: "Forbidden",
  },
  NOT_FOUND: {
    code: 404,
    text: "Not Found",
  },
  METHOD_NOT_ALLOWED: {
    code: 405,
    text: "Method Not Allowed",
  },
  NOT_ACCEPTABLE: {
    code: 406,
    text: "Not Acceptable",
  },
  PROXY_AUTHENTICATION_REQUIRED: {
    code: 407,
    text: "Proxy Authentication Required",
  },
  REQUEST_TIMEOUT: {
    code: 408,
    text: "Request Timeout",
  },
  CONFLICT: {
    code: 409,
    text: "Conflict",
  },
  GONE: {
    code: 410,
    text: "Gone",
  },
  LENGTH_REQUIRED: {
    code: 411,
    text: "Length Required",
  },
  PRECONDITION_FAILED: {
    code: 412,
    text: "Precondition Failed",
  },
  CONTENT_TOO_LARGE: {
    code: 413,
    text: "Content Too Large",
  },
  URI_TOO_LONG: {
    code: 414,
    text: "URI Too Long",
  },
  UNSUPPORTED_MEDIA_TYPE: {
    code: 415,
    text: "Unsupported Media Type",
  },
  RANGE_NOT_SATISFIABLE: {
    code: 416,
    text: "Range Not Satisfiable",
  },
  EXPECTATION_FAILED: {
    code: 417,
    text: "Expectation Failed",
  },
  IM_A_TEAPOT: {
    code: 418,
    text: "I'm a teapot",
  },
  MISDIRECTED_REQUEST: {
    code: 421,
    text: "Misdirected Request",
  },
  UNPROCESSABLE_CONTENT: {
    code: 422,
    text: "Unprocessable Content",
  },
  LOCKED: {
    code: 423,
    text: "Locked",
  },
  FAILED_DEPENDENCY: {
    code: 424,
    text: "Failed Dependency",
  },
  TOO_EARLY: {
    code: 425,
    text: "Too Early",
  },
  UPGRADE_REQUIRED: {
    code: 426,
    text: "Upgrade Required",
  },
  PRECONDITION_REQUIRED: {
    code: 428,
    text: "Precondition Required",
  },
  TOO_MANY_REQUESTS: {
    code: 429,
    text: "Too Many Requests",
  },
  REQUEST_HEADER_FIELDS_TOO_LARGE: {
    code: 431,
    text: "Request Header Fields Too Large",
  },
  UNAVAILABLE_FOR_LEGAL_REASONS: {
    code: 451,
    text: "Unavailable For Legal Reasons",
  },
} as const;

type HttpClientErrorResponseStatus = ValueOf<
  typeof HTTP_CLIENT_ERROR_RESPONSE_STATUS_ENUM
>;
export type HttpClientErrorResponseStatusCode =
  HttpClientErrorResponseStatus["code"];
export type HttpClientErrorResponseStatusText =
  HttpClientErrorResponseStatus["text"];
