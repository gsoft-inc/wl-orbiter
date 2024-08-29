import { Inline } from "@components/layout/index.js";
import { Tag } from "@components/tag/index.js";
import { createTagTestSuite } from "./createTagTestSuite.js";
import { storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/Tag")
        .segment(segment)
        .build();
}

createTagTestSuite(<Tag variant="solid" />, stories("/solid"));

createTagTestSuite(<Tag variant="outline" />, stories("/outline"));

stories()
    .add("styling", () => (
        <Inline>
            <Tag border="warning">Falcon 9</Tag>
            <Tag className="bg-red">Falcon 9</Tag>
            <Tag style={{ backgroundColor: "red" }}>Falcon 9</Tag>
        </Inline>
    ));
