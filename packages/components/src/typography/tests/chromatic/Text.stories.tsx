import { Div } from "@components/html";
import { Stack } from "@components/layout";
import { Text } from "@components/typography";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Text",
    component: Text
} as Meta<typeof Text>;

export default meta;

type TextStory = StoryObj<typeof meta>;

export const Default: TextStory = {
    name: "default",
    render: () => (
        <Stack gap={0}>
            <Text size="2xl">There are no passengers on spaceship earth.</Text>
            <Text size="xl">There are no passengers on spaceship earth.</Text>
            <Text size="lg">There are no passengers on spaceship earth.</Text>
            <Text>There are no passengers on spaceship earth.</Text>
            <Text size="sm">There are no passengers on spaceship earth.</Text>
            <Text size="xs">There are no passengers on spaceship earth.</Text>
        </Stack>
    )
};

export const Inherit: TextStory = {
    name: "inherit",
    render: () => (
        <Div fontSize="0.625rem">
            <Text size="inherit">There are no passengers on spaceship earth.</Text>
        </Div>
    )
};

export const Styling: TextStory = {
    name: "styling",
    render: () => (
        <Stack>
            <Text border="warning">There are no passengers on spaceship earth.</Text>
            <Text className="bg-red">There are no passengers on spaceship earth.</Text>
            <Text style={{ backgroundColor: "red" }}>There are no passengers on spaceship earth.</Text>
        </Stack>
    )
};
