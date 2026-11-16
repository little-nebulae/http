import type { ValueOf } from "type-fest";

export const HTTP_TEXT_MEDIA_TYPE_ENUM = {
  CSS: "text/css",
  CSV: "text/csv",
  HTML: "text/html",
  JAVASCRIPT: "text/javascript",
  MARKDOWN: "text/markdown",
  PLAIN: "text/plain",
} as const;

export type HttpTextMediaType = ValueOf<typeof HTTP_TEXT_MEDIA_TYPE_ENUM>;
