import { Meta, StoryObj } from "@storybook/react";
import { Box } from "@components/box/index.ts";

const meta = {
    title: "Components/Box",
    component: Box,
    id: "box"
} as Meta<typeof Box>;

export default meta;

type BoxStory = StoryObj<typeof meta>;

export const Default: BoxStory = {
    render: () => <Box as="div" border="neutral" padding={160}>Enjoy space like never before.</Box>
};
