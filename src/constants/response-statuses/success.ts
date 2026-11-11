import type { ValueOf } from "type-fest";

export const HTTP_SUCCESSFUL_RESPONSE_STATUS_ENUM = {
  OK: {
    code: 200,
    text: "OK",
  },
  CREATED: {
    code: 201,
    text: "Created",
  },
  ACCEPTED: {
    code: 202,
    text: "Accepted",
  },
  NON_AUTHORITATIVE_INFORMATION: {
    code: 203,
    text: "Non-Authoritative Information",
  },
  NO_CONTENT: {
    code: 204,
    text: "No Content",
  },
  RESET_CONTENT: {
    code: 205,
    text: "Reset Content",
  },
  PARTIAL_CONTENT: {
    code: 206,
    text: "Partial Content",
  },
  MULTI_STATUS: {
    code: 207,
    text: "Multi-Status",
  },
  ALREADY_REPORTED: {
    code: 208,
    text: "Already Reported",
  },
  IM_USED: {
    code: 226,
    text: "IM Used",
  },
} as const;

type HttpSuccessfulResponseStatus = ValueOf<
  typeof HTTP_SUCCESSFUL_RESPONSE_STATUS_ENUM
>;
export type HttpSuccessfulResponseStatusCode =
  HttpSuccessfulResponseStatus["code"];
export type HttpSuccessfulResponseStatusText =
  HttpSuccessfulResponseStatus["text"];
