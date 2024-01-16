import { AddIcon } from "@hopper-ui/icons";
import { IconButton } from "@components/button";
import { Inline } from "@components/layout";
import { createIconButtonTestSuite } from "./createIconButtonTestSuite";
import { storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/IconButton")
        .segment(segment)
        .build();
}

createIconButtonTestSuite(<IconButton variant="primary" />, stories("/primary"));

createIconButtonTestSuite(<IconButton variant="secondary" />, stories("/secondary"));

createIconButtonTestSuite(<IconButton variant="tertiary" />, stories("/tertiary"));

createIconButtonTestSuite(<IconButton variant="upsell" />, stories("/upsell"));

createIconButtonTestSuite(<IconButton variant="negative" />, stories("/negative"));

stories()
    .add("styling", () =>
        <Inline>
            <IconButton border="sunken-treasure-900" variant="secondary" aria-label="Add"><AddIcon /></IconButton>
            <IconButton className="bg-red" variant="secondary" aria-label="Add"><AddIcon /></IconButton>
            <IconButton style={{ backgroundColor: "red" }} variant="secondary" aria-label="Add"><AddIcon /></IconButton>
        </Inline>
    );
