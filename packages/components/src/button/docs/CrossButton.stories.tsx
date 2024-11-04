import { CrossButton } from "@components/button";
import { Inline } from "@components/layout";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/CrossButton",
    component: CrossButton,
    id: "cross-button"
} as Meta<typeof CrossButton>;

export default meta;

type CrossButtonStory = StoryObj<typeof meta>;

export const Default: CrossButtonStory = {
    render: () => (
        <CrossButton aria-label="Clear" />
    )
};

export const Disabled: CrossButtonStory = {
    render: () => (
        <CrossButton aria-label="Clear" disabled />
    )
};

export const Size: CrossButtonStory = {
    render: () => (
        <Inline alignY="center">
            <CrossButton aria-label="Clear" size="xs" />
            <CrossButton aria-label="Clear" size="sm" />
            <CrossButton aria-label="Clear" />
        </Inline>
    )
};
