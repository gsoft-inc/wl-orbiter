import { Launch } from "./assets";
import { Image } from "@components/image/index.ts";

export default function LaunchImage() {
    return (
        <Image width="325" height="216" src={Launch} alt="SpaceX Launch" />
    );
}
