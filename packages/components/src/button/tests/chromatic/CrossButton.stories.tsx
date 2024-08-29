import { CrossButton } from "@components/button/index.js";
import { Inline } from "@components/layout/index.js";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/CrossButton",
    component: CrossButton
} as ComponentMeta<typeof CrossButton>;

type CrossButtonStory = ComponentStoryObj<typeof CrossButton>;

export const Default: CrossButtonStory = {
    storyName: "default",
    render: () => (
        <Inline alignY="end">
            <CrossButton size="sm" aria-label="Clear" />
            <CrossButton aria-label="Clear" />
        </Inline>
    )
};
