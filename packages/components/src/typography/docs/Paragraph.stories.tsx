import { Paragraph } from "@components/typography";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Paragraph",
    component: Paragraph,
    id: "paragraph"
} as Meta<typeof Paragraph>;

export default meta;

type ParagraphStory = StoryObj<typeof meta>;

export const Size: ParagraphStory = {
    render: () => (
        <>
            <Paragraph size="lg">If two pieces of the same type of metal touch in space they will permanently bond.</Paragraph>
            <Paragraph>If two pieces of the same type of metal touch in space they will permanently bond.</Paragraph>
        </>
    )
};
