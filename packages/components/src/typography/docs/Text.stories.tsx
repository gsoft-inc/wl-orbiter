import { Stack } from "@components/layout/index.ts";
import { Text } from "@components/typography/index.ts";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Text",
    component: Text,
    id: "text"
} as Meta<typeof Text>;

export default meta;

type TextStory = StoryObj<typeof meta>;

export const Size: TextStory = {
    render: () => (
        <Stack>
            <Text>If two pieces of the same type of metal touch in space they will permanently bond.</Text>
            <Text size="sm">If two pieces of the same type of metal touch in space they will permanently bond.</Text>
        </Stack>
    )
};
