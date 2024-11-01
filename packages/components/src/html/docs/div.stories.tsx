import { Div } from "@components/html";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Html elements/Div",
    component: Div,
    id: "html-div"
} as Meta<typeof Div>;

export default meta;

type Story = StoryObj<typeof Div>;

export const Example: Story = {
    render: () => (
        <Div color="neutral-weak">Apple co-founder Steve Wozniak tweeted on Sunday about a "private space company" he's launching that's "unlike the others." Called Privateer Space, its mission is to "keep space safe and accessible to all humankind".</Div>
    )
};
