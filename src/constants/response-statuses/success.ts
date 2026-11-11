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
  NO_CONTENT: {
    code: 204,
    text: "No Content",
  },
} as const;

type HttpSuccessfulResponseStatus = ValueOf<
  typeof HTTP_SUCCESSFUL_RESPONSE_STATUS_ENUM
>;
export type HttpSuccessfulResponseStatusCode =
  HttpSuccessfulResponseStatus["code"];
export type HttpSuccessfulResponseStatusText =
  HttpSuccessfulResponseStatus["text"];
