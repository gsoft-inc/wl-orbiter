import { Underlay } from "@components/overlay/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Underlay",
    component: Underlay,
    parameters: {
        chromatic: {
            delay: 100,
            chromaticPauseAnimationAtEnd: true
        }
    }
} as Meta<typeof Underlay>;

export default meta;

type UnderlayStory = StoryObj<typeof meta>;

export const Default: UnderlayStory = {
    name: "default",
    render: () => (
        <Underlay />
    )
};

export const StyledSystem: UnderlayStory = {
    name: "styled system",
    render: () => (
        <Underlay border="warning" />
    )
};

export const ClassName: UnderlayStory = {
    name: "className",
    render: () => (
        <Underlay className="border-red" />
    )
};

export const Style: UnderlayStory = {
    name: "style",
    render: () => (
        <Underlay style={{ border: "1px solid red" }} />
    )
};
