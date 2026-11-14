import type { ValueOf } from "type-fest";

export const HTTP_REDIRECTION_RESPONSE_STATUS_ENUM = {
  MULTIPLE_CHOICES: {
    CODE: 300,
    TEXT: "Multiple Choices",
  },
  MOVED_PERMANENTLY: {
    CODE: 301,
    TEXT: "Moved Permanently",
  },
  FOUND: {
    CODE: 302,
    TEXT: "Found",
  },
  SEE_OTHER: {
    CODE: 303,
    TEXT: "See Other",
  },
  NOT_MODIFIED: {
    CODE: 304,
    TEXT: "Not Modified",
  },
  TEMPORARY_REDIRECT: {
    CODE: 307,
    TEXT: "Temporary Redirect",
  },
  PERMANENT_REDIRECT: {
    CODE: 308,
    TEXT: "Permanent Redirect",
  },
} as const;

type HttpRedirectionResponseStatus = ValueOf<
  typeof HTTP_REDIRECTION_RESPONSE_STATUS_ENUM
>;
export type HttpRedirectionResponseStatusCode =
  HttpRedirectionResponseStatus["CODE"];
export type HttpRedirectionResponseStatusText =
  HttpRedirectionResponseStatus["TEXT"];
