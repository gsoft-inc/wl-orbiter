import { Meta, StoryObj } from "@storybook/react";
import { Div } from "@components/html/index.ts";
import { Divider } from "@components/divider/index.ts";
import { Dot } from "@components/dot/index.ts";
import { Flex } from "@components/layout/index.ts";
import { TextLink } from "@components/link/index.ts";

const meta = {
    title: "Components/Divider",
    component: Divider,
    id: "divider"
} as Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
    render: () => (
        <Divider />
    )
};

export const Vertical: Story = {
    render: () => (
        <Flex>
            <Dot color="--o-ui-moss-600">Starlink operational</Dot>
            <Divider orientation="vertical" />
            <TextLink href="#">Manage</TextLink>
            <Divider orientation="vertical" />
            <TextLink href="#">View logs</TextLink>
        </Flex>
    )
};

export const LabelledHorizontally: Story = {
    render: () => (
        <Divider>Last 30 days</Divider>
    )
};

export const LabelledVertically: Story = {
    render: () => (
        <Div height="150px">
            <Divider orientation="vertical">Last 30 days</Divider>
        </Div>
    )
};
