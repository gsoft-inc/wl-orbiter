import { Checkbox } from "@components/checkbox";
import { Inline } from "@components/layout";
import { createCheckboxTestSuite } from "./createCheckboxTestSuite";
import { paramsBuilder, storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/Checkbox")
        .segment(segment)
        .parameters(paramsBuilder()
            .chromaticDelay(100)
            .build())
        .build();
}

createCheckboxTestSuite(<Checkbox />, stories("/unchecked"));

createCheckboxTestSuite(<Checkbox defaultChecked />, stories("/checked"));

createCheckboxTestSuite(<Checkbox defaultIndeterminate />, stories("/indeterminate"));

stories()
    .add("styling", () =>
        <Inline>
            <Checkbox border="warning">Milky Way</Checkbox>
            <Checkbox className="bg-red">Milky Way</Checkbox>
            <Checkbox style={{ backgroundColor: "red" }}>Milky Way</Checkbox>
        </Inline>
    );
