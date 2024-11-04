import { Meta, StoryObj } from "@storybook/react";
import { Content } from "@components/placeholders";

const meta = {
    title: "Placeholders/Content",
    component: Content,
    id: "content"
} as Meta<typeof Content>;

export default meta;

type Story = StoryObj<typeof Content>;

export const Example: Story = {
    render: () => (
        <Content>The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever.</Content>
    )
};
