import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "@components/placeholders";

const meta = {
    title: "Placeholders/Footer",
    component: Footer,
    id: "footer"
} as Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof Footer>;

export const Example: Story = {
    render: () => (
        <Footer>&copy; All rights reserved.</Footer>
    )
};
