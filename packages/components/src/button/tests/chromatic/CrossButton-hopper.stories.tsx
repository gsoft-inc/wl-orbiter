import { CrossButton } from "@components/button/index.ts";
import { Inline } from "@components/layout/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/CrossButton-hopper",
    component: CrossButton,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
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
