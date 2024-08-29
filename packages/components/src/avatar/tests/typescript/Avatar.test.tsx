import { AvatarProps } from "@components/avatar/index.js";
import { LaunchImage } from "./assets/index.js";
import { expectAssignable } from "@test-utils";

expectAssignable<AvatarProps>({ name: "Elon Musk", src: "./launch.png" });
expectAssignable<AvatarProps>({ name: "Elon Musk", src: LaunchImage });
