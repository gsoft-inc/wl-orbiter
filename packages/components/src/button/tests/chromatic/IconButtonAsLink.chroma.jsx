import { AddIcon } from "@hopper-ui/icons";
import { IconButtonAsLink } from "@components/button/index.js";
import { Inline } from "@components/layout/index.js";
import { createIconButtonTestSuite } from "./createIconButtonTestSuite.js";
import { storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/IconButtonAsLink")
        .segment(segment)
        .build();
}

createIconButtonTestSuite(
    <IconButtonAsLink variant="primary" />,
    stories("/primary"),
);

createIconButtonTestSuite(
    <IconButtonAsLink variant="secondary" />,
    stories("/secondary"),
);

createIconButtonTestSuite(
    <IconButtonAsLink variant="tertiary" />,
    stories("/tertiary"),
);

createIconButtonTestSuite(
    <IconButtonAsLink variant="upsell" />,
    stories("/upsell"),
);

createIconButtonTestSuite(
    <IconButtonAsLink variant="negative" />,
    stories("/negative"),
);

stories()
    .add("styling", () => (
        <Inline>
            <IconButtonAsLink border="sunken-treasure-600" variant="secondary">
                <AddIcon />
            </IconButtonAsLink>
            <IconButtonAsLink className="bg-red" variant="secondary">
                <AddIcon />
            </IconButtonAsLink>
            <IconButtonAsLink style={{ backgroundColor: "red" }} variant="secondary">
                <AddIcon />
            </IconButtonAsLink>
        </Inline>
    ));
