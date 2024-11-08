import { Meta, StoryObj } from "@storybook/react";
import { Nav, UL, LI } from "@components/html";
import { TextLink } from "@components/link";

const meta = {
    title: "Html elements/Nav",
    component: Nav,
    id: "html-nav"
} as Meta<typeof Nav>;

export default meta;

type Story = StoryObj<typeof Nav>;

export const Example: Story = {
    render: () => (
        <Nav color="neutral-weak">
            <UL>
                <LI><TextLink href="#">Missions</TextLink></LI>
                <LI><TextLink href="#">Launches</TextLink></LI>
                <LI><TextLink href="#">Careers</TextLink></LI>
            </UL>
        </Nav>
    )
};
