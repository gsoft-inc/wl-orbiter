import { AddIcon } from "@hopper-ui/icons";
import { IconButtonAsLink } from "@components/button";
import { Inline } from "@components/layout";
import { createIconButtonTestSuite } from "./createIconButtonTestSuite";
import { storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/IconButtonAsLink-hopper")
        .segment(segment)
        .build();
}

createIconButtonTestSuite(<IconButtonAsLink variant="primary" />, stories("/primary"));

createIconButtonTestSuite(<IconButtonAsLink variant="secondary" />, stories("/secondary"));

createIconButtonTestSuite(<IconButtonAsLink variant="tertiary" />, stories("/tertiary"));

createIconButtonTestSuite(<IconButtonAsLink variant="upsell" />, stories("/upsell"));

createIconButtonTestSuite(<IconButtonAsLink variant="negative" />, stories("/negative"));

stories()
    .add("styling", () =>
        <Inline>
            <IconButtonAsLink border="sunken-treasure-600" variant="secondary"><AddIcon /></IconButtonAsLink>
            <IconButtonAsLink className="bg-red" variant="secondary"><AddIcon /></IconButtonAsLink>
            <IconButtonAsLink style={{ backgroundColor: "red" }} variant="secondary"><AddIcon /></IconButtonAsLink>
        </Inline>
    );
