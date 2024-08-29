import { AnonymousAvatarProps } from "@components/avatar/index.js";
import { expectAssignable } from "@test-utils";

expectAssignable<AnonymousAvatarProps>({ "aria-label": "Elon Musk" });
expectAssignable<AnonymousAvatarProps>({ "aria-label": "Elon Musk" });
