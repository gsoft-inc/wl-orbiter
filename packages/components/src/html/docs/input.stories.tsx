import { HtmlInput } from "@components/html";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Html elements/Input",
    component: HtmlInput,
    id: "html-input"
} as Meta<typeof HtmlInput>;

export default meta;

type Story = StoryObj<typeof HtmlInput>;

export const Example: Story = {
    render: () => (
        <HtmlInput border="rock-900" type="text" />
    )
};
