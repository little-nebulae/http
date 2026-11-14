import type { ValueOf } from "type-fest";

export const HTTP_SUCCESSFUL_RESPONSE_STATUS_ENUM = {
  OK: {
    CODE: 200,
    TEXT: "OK",
  },
  CREATED: {
    CODE: 201,
    TEXT: "Created",
  },
  ACCEPTED: {
    CODE: 202,
    TEXT: "Accepted",
  },
  NON_AUTHORITATIVE_INFORMATION: {
    CODE: 203,
    TEXT: "Non-Authoritative Information",
  },
  NO_CONTENT: {
    CODE: 204,
    TEXT: "No Content",
  },
  RESET_CONTENT: {
    CODE: 205,
    TEXT: "Reset Content",
  },
  PARTIAL_CONTENT: {
    CODE: 206,
    TEXT: "Partial Content",
  },
  MULTI_STATUS: {
    CODE: 207,
    TEXT: "Multi-Status",
  },
  ALREADY_REPORTED: {
    CODE: 208,
    TEXT: "Already Reported",
  },
  IM_USED: {
    CODE: 226,
    TEXT: "IM Used",
  },
} as const;

type HttpSuccessfulResponseStatus = ValueOf<
  typeof HTTP_SUCCESSFUL_RESPONSE_STATUS_ENUM
>;
export type HttpSuccessfulResponseStatusCode =
  HttpSuccessfulResponseStatus["CODE"];
export type HttpSuccessfulResponseStatusText =
  HttpSuccessfulResponseStatus["TEXT"];
