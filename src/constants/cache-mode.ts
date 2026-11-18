import type { ValueOf } from "type-fest";

export const HTTP_CACHE_MODE_ENUM = {
  DEFAULT: "default",
  NO_STORE: "no-store",
  RELOAD: "reload",
  NO_CACHE: "no-cache",
  FORCE_CACHE: "force-cache",
  ONLY_IF_CACHED: "only-if-cached",
} as const;

export type HttpCacheMode = ValueOf<typeof HTTP_CACHE_MODE_ENUM>;
