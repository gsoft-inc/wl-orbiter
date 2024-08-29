import { paramsBuilder, storiesOfBuilder } from "@stories/utils";

import { Inline } from "@components/layout/index.js";
import { Radio } from "@components/radio/index.js";
import { createRadioTestSuite } from "./createRadioTestSuite.js";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/Radio")
        .segment(segment)
        .parameters(
            paramsBuilder()
                .chromaticDelay(100)
                .build(),
        )
        .build();
}

createRadioTestSuite(<Radio />, stories("/unchecked"));

createRadioTestSuite(<Radio defaultChecked />, stories("/checked"));

stories()
    .add("styling", () => (
        <Inline>
            <Radio border="warning" value="any">Milky Way</Radio>
            <Radio className="bg-red" value="any">Milky Way</Radio>
            <Radio style={{ backgroundColor: "red" }} value="any">Milky Way</Radio>
        </Inline>
    ));
