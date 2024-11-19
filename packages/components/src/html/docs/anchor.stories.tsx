import { A } from "@components/html/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Html elements/A",
    component: A,
    id: "html-anchor"
} as Meta<typeof A>;

export default meta;

type Story = StoryObj<typeof A>;

export const Example: Story = {
    render: () => (
        <A color="neutral-weak" href="https://www.cc.com/shows/futurama">Futurama</A>
    )
};

