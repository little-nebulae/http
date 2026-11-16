import type { ValueOf } from "type-fest";

export const HTTP_APPLICATION_MEDIA_TYPE_ENUM = {
  BINARY: "application/octet-stream",
  JSON: "application/json",
  PDF: "application/pdf",
} as const;

export type HttpApplicationMediaType = ValueOf<
  typeof HTTP_APPLICATION_MEDIA_TYPE_ENUM
>;
