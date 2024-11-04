import { Meta, StoryObj } from "@storybook/react";
import { Header } from "@components/placeholders";

const meta = {
    title: "Placeholders/Header",
    component: Header,
    id: "header"
} as Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof Header>;

export const Example: Story = {
    render: () => (
        <Header>We are the light that travels into space.</Header>
    )
};
