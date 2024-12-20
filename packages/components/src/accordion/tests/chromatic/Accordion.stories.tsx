import { Accordion } from "@components/accordion/index.ts";
import { Content } from "@components/placeholders/index.ts";
import { H3 } from "@components/typography/index.ts";
import { Inline } from "@components/layout/index.ts";
import { Item } from "@components/collection/index.ts";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Accordion",
    component: Accordion,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Accordion>;

export default meta;

type AccordionStory = StoryObj<typeof meta>;

export const ConditionalRendering: AccordionStory = {
    name: "conditional rendering",
    render: () => (
        <Accordion>
            <Item>
                <H3>Mars</H3>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.</Content>
            </Item>
            {false && <Item>
                <H3>Jupiter</H3>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>}
        </Accordion>
    )
};

export const Styling: AccordionStory = {
    name: "styling",
    render: () => (
        <Inline>
            <Accordion border="warning" expandedKeys={["0"]}>
                <Item>
                    <H3 border="warning">Mars</H3>
                    <Content border="warning">Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.</Content>
                </Item>
            </Accordion>
            <Accordion className="border-red" expandedKeys={["0"]}>
                <Item>
                    <H3 className="border-red">Mars</H3>
                    <Content className="border-red">Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.</Content>
                </Item>
            </Accordion>
            <Accordion style={{ border: "1px solid red" }} expandedKeys={["0"]}>
                <Item>
                    <H3 style={{ border: "1px solid red" }}>Mars</H3>
                    <Content style={{ border: "1px solid red" }}>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.</Content>
                </Item>
            </Accordion>
        </Inline>
    )
};
