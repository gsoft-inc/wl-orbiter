import { CheckmarkIcon } from "@hopper-ui/icons";
import { Inline } from "@hopper-ui/components";
import { ToggleIconButton } from "@components/button";
import { createToggleIconButtonTestSuite } from "./createToggleIconButtonTestSuite-hopper";
import { storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/ToggleIconButton-hopper")
        .segment(segment)
        .build();
}

createToggleIconButtonTestSuite(<ToggleIconButton variant="primary" />, stories("/primary"));

createToggleIconButtonTestSuite(<ToggleIconButton variant="secondary" />, stories("/secondary"));

stories()
    .add("styling", () =>
        <Inline>
            <ToggleIconButton border="sunken-treasure-600" variant="secondary" aria-label="Activate"><CheckmarkIcon /></ToggleIconButton>
            <ToggleIconButton className="bg-red" variant="secondary" aria-label="Activate"><CheckmarkIcon /></ToggleIconButton>
            <ToggleIconButton style={{ backgroundColor: "red" }} variant="secondary" aria-label="Activate"><CheckmarkIcon /></ToggleIconButton>
        </Inline>
    );
