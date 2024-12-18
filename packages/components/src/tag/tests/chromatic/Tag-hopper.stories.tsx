import { Tag } from "@components/tag/index.ts";
import { Inline } from "@components/layout/index.ts";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Tag-hopper",
    component: Tag,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
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
