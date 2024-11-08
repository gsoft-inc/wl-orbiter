
import { HtmlButton } from "@components/html";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Html elements/Button",
    component: HtmlButton,
    id: "html-button"
} as Meta<typeof HtmlButton>;

export default meta;

type Story = StoryObj<typeof HtmlButton>;

export const Example: Story = {
    render: () => (
        <HtmlButton border="rock-900" padding="1" type="button">Launch</HtmlButton>
    )
};
