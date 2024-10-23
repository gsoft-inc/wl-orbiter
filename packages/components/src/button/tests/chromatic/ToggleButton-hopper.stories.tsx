import { Inline } from "@components/layout";
import { ToggleButton } from "@components/button";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/ToggleButton-hopper",
    component: ToggleButton
} as Meta<typeof ToggleButton>;

export default meta;

type ToggleButtonStory = StoryObj<typeof meta>;

export const Styling: ToggleButtonStory = {
    name: "styling",
    render: () => (
        <Inline>
            <ToggleButton border="sunken-treasure-600" variant="secondary">Cutoff</ToggleButton>
            <ToggleButton className="bg-red" variant="secondary">Cutoff</ToggleButton>
            <ToggleButton style={{ backgroundColor: "red" }} variant="secondary">Cutoff</ToggleButton>
        </Inline>
    )
};
