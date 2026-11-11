import type { ValueOf } from "type-fest";

export const HTTP_REDIRECTION_RESPONSE_STATUS_ENUM = {
  MULTIPLE_CHOICES: {
    code: 300,
    text: "Multiple Choices",
  },
  MOVED_PERMANENTLY: {
    code: 301,
    text: "Moved Permanently",
  },
  FOUND: {
    code: 302,
    text: "Found",
  },
  SEE_OTHER: {
    code: 303,
    text: "See Other",
  },
  NOT_MODIFIED: {
    code: 304,
    text: "Not Modified",
  },
  TEMPORARY_REDIRECT: {
    code: 307,
    text: "Temporary Redirect",
  },
  PERMANENT_REDIRECT: {
    code: 308,
    text: "Permanent Redirect",
  },
} as const;

type HttpRedirectionResponseStatus = ValueOf<
  typeof HTTP_REDIRECTION_RESPONSE_STATUS_ENUM
>;
export type HttpRedirectionResponseStatusCode =
  HttpRedirectionResponseStatus["code"];
export type HttpRedirectionResponseStatusText =
  HttpRedirectionResponseStatus["text"];
