import type { ValueOf } from "type-fest";

import { HTTP_ERROR_RESPONSE_STATUS_ENUM } from "@/constants/response-statuses/error";
import { HTTP_SUCCESSFUL_RESPONSE_STATUS_ENUM } from "@/constants/response-statuses/success";

export const HTTP_RESPONSE_STATUS_RECORD = {
  ...HTTP_SUCCESSFUL_RESPONSE_STATUS_ENUM,
  ...HTTP_ERROR_RESPONSE_STATUS_ENUM,
} as const;

type HttpResponseStatus = ValueOf<typeof HTTP_RESPONSE_STATUS_RECORD>;
export type HttpResponseStatusCode = HttpResponseStatus["code"];
export type HttpResponseStatusText = HttpResponseStatus["text"];
