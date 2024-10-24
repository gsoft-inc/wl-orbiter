import { CheckmarkIcon } from "@hopper-ui/icons";
import { Inline } from "@components/layout";
import { ToggleIconButton } from "@components/button";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/ToggleIconButton",
    component: ToggleIconButton
} as Meta<typeof ToggleIconButton>;

export default meta;

type ToggleIconButtonStory = StoryObj<typeof meta>;

export const Styling: ToggleIconButtonStory = {
    name: "styling",
    render: () => (
        <Inline>
            <ToggleIconButton border="sunken-treasure-600" variant="secondary" aria-label="Activate"><CheckmarkIcon /></ToggleIconButton>
            <ToggleIconButton className="bg-red" variant="secondary" aria-label="Activate"><CheckmarkIcon /></ToggleIconButton>
            <ToggleIconButton style={{ backgroundColor: "red" }} variant="secondary" aria-label="Activate"><CheckmarkIcon /></ToggleIconButton>
        </Inline>
    )
};
