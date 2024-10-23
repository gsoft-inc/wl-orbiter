import { Tag } from "@components/tag";
import { Meta, StoryObj } from "@storybook/react";
import { Inline } from "@components/layout";

const meta = {
    title: "Chromatic/Tag",
    component: Tag
} as Meta<typeof Tag>;

export default meta;

type TagStory = StoryObj<typeof meta>;

export const Styling: TagStory = {
    name: "styling",
    render: () => (
        <Inline>
            <Tag border="warning">Falcon 9</Tag>
            <Tag className="bg-red">Falcon 9</Tag>
            <Tag style={{ backgroundColor: "red" }}>Falcon 9</Tag>
        </Inline>
    )
};
