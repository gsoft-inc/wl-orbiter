import { Meta, StoryObj } from "@storybook/react";
import { Counter } from "@components/counter";
import { Div } from "@components/html";
import { Inline } from "@components/layout";
import { Text } from "@components/typography";

const meta = {
    title: "Components/Counter",
    component: Counter,
    id: "counter"
} as Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof Counter>;

export const Default: Story = {
    render: () => (
        <Counter>15</Counter>
    )
};

export const Divider: Story = {
    render: () => (
        <Counter variant="divider">100+</Counter>
    )
};

export const Highlight: Story = {
    render: () => (
        <Inline alignY="center" gap={480}>
            <Counter highlight>15</Counter>
            <Counter highlight variant="divider">100+</Counter>
        </Inline>
    )
};

export const Pushed: Story = {
    render: () => (
        <Inline alignY="center" gap={480}>
            <Div>
                <Text>Satellites</Text> <Counter pushed>15</Counter>
            </Div>
            <Div>
                <Text>Satellites</Text> <Counter pushed variant="divider">100+</Counter>
            </Div>
        </Inline>
    )
};
