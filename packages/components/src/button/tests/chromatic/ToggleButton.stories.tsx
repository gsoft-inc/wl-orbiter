import { Inline } from "@components/layout/index.ts";
import { ToggleButton } from "@components/button/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/ToggleButton",
    component: ToggleButton,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
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
