import type { ValueOf } from "type-fest";

export const HTTP_INFORMATIONAL_RESPONSE_STATUS_ENUM = {
  CONTINUE: {
    CODE: 100,
    TEXT: "Continue",
  },
  SWITCHING_PROTOCOLS: {
    CODE: 101,
    TEXT: "Switching Protocols",
  },
  EARLY_HINTS: {
    CODE: 103,
    TEXT: "Early Hints",
  },
} as const;

type HttpInformationalResponseStatus = ValueOf<
  typeof HTTP_INFORMATIONAL_RESPONSE_STATUS_ENUM
>;
export type HttpInformationalResponseStatusCode =
  HttpInformationalResponseStatus["CODE"];
export type HttpInformationalResponseStatusText =
  HttpInformationalResponseStatus["TEXT"];
