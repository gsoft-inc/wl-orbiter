import { Checkbox } from "@components/checkbox";
import { Inline } from "@components/layout";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Checkbox",
    component: Checkbox,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Checkbox>;

export default meta;

type CheckboxStory = StoryObj<typeof meta>;

export const Styling: CheckboxStory = {
    name: "styling",
    render: () => (
        <Inline>
            <Checkbox border="warning">Milky Way</Checkbox>
            <Checkbox className="bg-red">Milky Way</Checkbox>
            <Checkbox style={{ backgroundColor: "red" }}>Milky Way</Checkbox>
        </Inline>
    )
};
