import type { ValueOf } from "type-fest";

import { HTTP_CLIENT_ERROR_RESPONSE_STATUS_ENUM } from "@/constants/response-statuses/error/client";
import { HTTP_SERVER_ERROR_RESPONSE_STATUS_ENUM } from "@/constants/response-statuses/error/server";

export const HTTP_ERROR_RESPONSE_STATUS_RECORD = {
  ...HTTP_CLIENT_ERROR_RESPONSE_STATUS_ENUM,
  ...HTTP_SERVER_ERROR_RESPONSE_STATUS_ENUM,
} as const;

type HttpErrorResponseStatus = ValueOf<
  typeof HTTP_ERROR_RESPONSE_STATUS_RECORD
>;
export type HttpErrorResponseStatusCode = HttpErrorResponseStatus["code"];
export type HttpErrorResponseStatusText = HttpErrorResponseStatus["text"];
