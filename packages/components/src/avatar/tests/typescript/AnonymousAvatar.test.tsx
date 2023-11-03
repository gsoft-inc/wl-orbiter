import { AnonymousAvatarProps } from "@components/avatar";
import { expectAssignable } from "@test-utils";

expectAssignable<AnonymousAvatarProps>({ "aria-label": "Elon Musk" });
expectAssignable<AnonymousAvatarProps>({ "aria-label": "Elon Musk" });
