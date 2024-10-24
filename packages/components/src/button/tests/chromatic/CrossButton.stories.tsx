import { CrossButton } from "@components/button";
import { Inline } from "@components/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/CrossButton",
    component: CrossButton
} as Meta<typeof CrossButton>;

export default meta;

type CrossButtonStory = StoryObj<typeof meta>;

export const Default: CrossButtonStory = {
    name: "default",
    render: () => (
        <Inline alignY="end">
            <CrossButton size="sm" aria-label="Clear" />
            <CrossButton aria-label="Clear" />
        </Inline>
    )
};
