import { Accordion } from "@components/accordion/index.js";
import { Content } from "@components/placeholders/index.js";
import { H3 } from "@components/typography/index.js";
import { Inline } from "@components/layout/index.js";
import { Item } from "@components/collection/index.js";
import { createAccordionTestSuite } from "./createAccordionTestSuite.js";
import { paramsBuilder, storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/Accordion")
        .segment(segment)
        .parameters(
            paramsBuilder()
                .chromaticDelay(100)
                .build(),
        )
        .build();
}

createAccordionTestSuite(
    <Accordion variant="borderless" />,
    stories("/borderless"),
);

createAccordionTestSuite(
    <Accordion variant="bordered" />,
    stories("/bordered"),
);

stories()
    .add("conditional rendering", () => (
        <Accordion>
            <Item>
                <H3>Mars</H3>
                <Content>
          Mars is the fourth planet from the Sun and the second-smallest planet
          in the Solar System.
                </Content>
            </Item>
            {false && (
                <Item>
                    <H3>Jupiter</H3>
                    <Content>
            Jupiter is the fifth planet from the Sun and the largest in the
            Solar System.
                    </Content>
                </Item>
            )}
        </Accordion>
    ))
    .add("styling", () => (
        <Inline>
            <Accordion border="warning" expandedKeys={["0"]}>
                <Item>
                    <H3 border="warning">Mars</H3>
                    <Content border="warning">
            Mars is the fourth planet from the Sun and the second-smallest
            planet in the Solar System.
                    </Content>
                </Item>
            </Accordion>
            <Accordion className="border-red" expandedKeys={["0"]}>
                <Item>
                    <H3 className="border-red">Mars</H3>
                    <Content className="border-red">
            Mars is the fourth planet from the Sun and the second-smallest
            planet in the Solar System.
                    </Content>
                </Item>
            </Accordion>
            <Accordion style={{ border: "1px solid red" }} expandedKeys={["0"]}>
                <Item>
                    <H3 style={{ border: "1px solid red" }}>Mars</H3>
                    <Content style={{ border: "1px solid red" }}>
            Mars is the fourth planet from the Sun and the second-smallest
            planet in the Solar System.
                    </Content>
                </Item>
            </Accordion>
        </Inline>
    ));
