import { Box } from "@components/box/index.ts";
import { Inline } from "@components/layout/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Box-hopper",
    component: Box,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Box>;

export default meta;

type BoxStory = StoryObj<typeof meta>;

export const Default: BoxStory = {
    name: "default",
    render: () => (
        <Box>The Universe is under no obligation to make sense to you.</Box>
    )
};

export const Styling: BoxStory = {
    name: "styling",
    render: () => (
        <Inline>
            <Box border="warning">The Universe is under no obligation to make sense to you.</Box>
            <Box className="bg-red">The Universe is under no obligation to make sense to you.</Box>
            <Box style={{ backgroundColor: "red" }}>The Universe is under no obligation to make sense to you.</Box>
        </Inline>
    )
};
