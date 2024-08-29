import { Box } from "@components/box/index.js";
import { Inline } from "@components/layout/index.js";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/Box",
    component: Box,
    parameters: {
        chromatic: { delay: 100 }
    }
} as ComponentMeta<typeof Box>;

type BoxStory = ComponentStoryObj<typeof Box>;

export const Default: BoxStory = {
    storyName: "default",
    render: () => (
        <Box>The Universe is under no obligation to make sense to you.</Box>
    )
};

export const Styling: BoxStory = {
    storyName: "styling",
    render: () => (
        <Inline>
            <Box border="warning">The Universe is under no obligation to make sense to you.</Box>
            <Box className="bg-red">The Universe is under no obligation to make sense to you.</Box>
            <Box style={{ backgroundColor: "red" }}>The Universe is under no obligation to make sense to you.</Box>
        </Inline>
    )
};
