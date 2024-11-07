import { LI, UL } from "@components/html/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Html elements/List",
    component: UL,
    id: "html-list"
} as Meta<typeof UL>;

export default meta;

type Story = StoryObj<typeof LI>;

export const Example: Story = {
    render: () => (
        <UL color="neutral-weak">
            <LI>Explore</LI>
            <LI>Discover</LI>
            <LI color="sapphire-600">Colonize</LI>
        </UL>
    )
};
