import { Img } from "@components/html/index.ts";
import { Meta, StoryObj } from "@storybook/react";
import { Planet } from "./assets";

const meta = {
    title: "Html elements/Img",
    component: Img,
    id: "html-img"
} as Meta<typeof Img>;

export default meta;

type Story = StoryObj<typeof Img>;

export const Example: Story = {
    render: () => (
        <Img border="rock-400" src={Planet} />
    )
};
