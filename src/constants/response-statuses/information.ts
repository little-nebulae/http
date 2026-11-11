import type { ValueOf } from "type-fest";

export const HTTP_INFORMATIONAL_RESPONSE_STATUS_ENUM = {
  CONTINUE: {
    code: 100,
    text: "Continue",
  },
  SWITCHING_PROTOCOLS: {
    code: 101,
    text: "Switching Protocols",
  },
  EARLY_HINTS: {
    code: 103,
    text: "Early Hints",
  },
} as const;

type HttpInformationalResponseStatus = ValueOf<
  typeof HTTP_INFORMATIONAL_RESPONSE_STATUS_ENUM
>;
export type HttpInformationalResponseStatusCode =
  HttpInformationalResponseStatus["code"];
export type HttpInformationalResponseStatusText =
  HttpInformationalResponseStatus["text"];
