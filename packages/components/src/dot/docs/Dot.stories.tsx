import { Dot } from "@components/dot/index.ts";
import { Inline } from "@components/layout/index.ts";
import { Meta, StoryObj } from "@storybook/react/*";

const meta = {
    title: "Components/Dot",
    component: Dot,
    id: "dot"
} as Meta<typeof Dot>;

export default meta;

type Story = StoryObj<typeof Dot>;

export const Default: Story = {
    render: () => <Dot color="primary" />
};

export const Label: Story = {
    render: () => <Dot color="neutral-weakest">Habitable</Dot>
};

export const Color: Story = {
    render: () => (
        <Inline>
            <Dot color="neutral-weakest">Habitable</Dot>
            <Dot color="hsl(25, 69%, 41%)">Uninhabitable</Dot>
            <Dot color="--hop-sapphire-600">Clean</Dot>
        </Inline>
    )
};
