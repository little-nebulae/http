import type { ValueOf } from "type-fest";

import { HTTP_APPLICATION_MEDIA_TYPE_ENUM } from "@/constants/media-types/application";
import { HTTP_TEXT_MEDIA_TYPE_ENUM } from "@/constants/media-types/text";

export const HTTP_MEDIA_TYPE_ENUM = {
  ...HTTP_APPLICATION_MEDIA_TYPE_ENUM,
  ...HTTP_TEXT_MEDIA_TYPE_ENUM,
};
export type HttpMediaType = ValueOf<typeof HTTP_MEDIA_TYPE_ENUM>;
