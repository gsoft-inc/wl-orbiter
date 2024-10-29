import { H3 } from "@components/typography";
import { Accordion } from "@components/accordion";
import { Content } from "@components/placeholders";
import { Item } from "@components/collection";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Accordion",
    component: Accordion,
    id: "accordion"
} as Meta<typeof Accordion>;

export default meta;

type AccordionStory = StoryObj<typeof meta>;

export const Default: AccordionStory = {
    name: "default",
    render: () => (
        <Accordion>
            <Item key="mars">
                <H3>Mars</H3>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.</Content>
            </Item>
            <Item key="jupiter">
                <H3>Jupiter</H3>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
            <Item key="venus">
                <H3>Venus</H3>
                <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
            </Item>
        </Accordion>
    )
};
