import { DeletedAvatarProps } from "@components/avatar/index.js";
import { expectAssignable } from "@test-utils";

expectAssignable<DeletedAvatarProps>({ "aria-label": "Elon Musk" });
expectAssignable<DeletedAvatarProps>({ "aria-label": "Elon Musk" });
