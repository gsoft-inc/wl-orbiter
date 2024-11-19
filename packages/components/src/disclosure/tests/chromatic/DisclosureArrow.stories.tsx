import { DisclosureArrow, DisclosureContext } from "@components/disclosure/index.ts";
import { Inline } from "@components/layout/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/DisclosureArrow",
    component: DisclosureArrow,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof DisclosureArrow>;

export default meta;

type DisclosureArrowStory = StoryObj<typeof meta>;

export const Default:DisclosureArrowStory = {
    name: "default",
    render: () => (
        <DisclosureArrow open />
    )
};

export const Controlled:DisclosureArrowStory = {
    name: "controlled",
    render: () => (
        <Inline>
            <DisclosureArrow open={false} />
            <DisclosureArrow open />
        </Inline>
    )
};

export const Context:DisclosureArrowStory = {
    name: "context",
    render: () => (
        <Inline>
            <DisclosureContext.Provider value={{ isOpen: false }}>
                <DisclosureArrow />
            </DisclosureContext.Provider>
            <DisclosureContext.Provider value={{ isOpen: true }}>
                <DisclosureArrow />
            </DisclosureContext.Provider>
        </Inline>
    )
};

export const Styling:DisclosureArrowStory = {
    name: "styling",
    render: () => (
        <Inline>
            <DisclosureArrow open className="border-red" />
            <DisclosureArrow open style={{ border: "1px solid red" }} />
        </Inline>
    )
};

