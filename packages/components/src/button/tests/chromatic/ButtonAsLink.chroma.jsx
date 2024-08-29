import { ButtonAsLink } from "@components/button/index.js";
import { Inline } from "@components/layout/index.js";
import { createButtonTestSuite } from "./createButtonTestSuite.js";
import { storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/ButtonAsLink")
        .segment(segment)
        .build();
}

createButtonTestSuite(<ButtonAsLink variant="primary" />, stories("/primary"));

createButtonTestSuite(
    <ButtonAsLink variant="secondary" />,
    stories("/secondary"),
);

createButtonTestSuite(
    <ButtonAsLink variant="tertiary" />,
    stories("/tertiary"),
);

createButtonTestSuite(<ButtonAsLink variant="upsell" />, stories("/upsell"));

createButtonTestSuite(
    <ButtonAsLink variant="negative" />,
    stories("/negative"),
);

stories()
    .add("styling", () => (
        <Inline>
            <ButtonAsLink border="sunken-treasure-600" variant="secondary">
        Button
            </ButtonAsLink>
            <ButtonAsLink className="bg-red" variant="secondary">Button</ButtonAsLink>
            <ButtonAsLink style={{ backgroundColor: "red" }} variant="secondary">
        Button
            </ButtonAsLink>
        </Inline>
    ));
