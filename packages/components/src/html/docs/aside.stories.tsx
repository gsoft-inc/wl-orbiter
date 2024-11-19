import { Aside } from "@components/html/index.ts";
import { Paragraph } from "@components/typography/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Html elements/Aside",
    component: Aside,
    id: "html-aside"
} as Meta<typeof Aside>;

export default meta;

type Story = StoryObj<typeof Aside>;

export const Example: Story = {
    render: () => (
        <Aside color="neutral-weak">
            <Paragraph>The Universe is under no obligation to make sense to you. The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever.</Paragraph>
        </Aside>
    )
};
