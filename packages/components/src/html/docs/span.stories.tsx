import { Meta, StoryObj } from "@storybook/react";
import { Span } from "@components/html";

const meta = {
    title: "Html elements/Span",
    component: Span,
    id: "html-span"
} as Meta<typeof Span>;

export default meta;

type Story = StoryObj<typeof Span>;

export const Example: Story = {
    render: () => (
        <Span color="neutral-weak">NASA is now preparing for an ambitious new era of sustainable human spaceflight and discovery. The agency is building the Space Launch System rocket and the Orion spacecraft for human deep space exploration.</Span>
    )
};
