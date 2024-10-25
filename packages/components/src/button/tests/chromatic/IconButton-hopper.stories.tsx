import { AddIcon } from "@hopper-ui/icons";
import { IconButton } from "@components/button";
import { Inline } from "@components/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/IconButton-hopper",
    component: IconButton,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof IconButton>;

export default meta;

type IconButtonStory = StoryObj<typeof meta>;

export const Styling: IconButtonStory = {
    name: "styling",
    render: () => (
        <Inline>
            <IconButton border="sunken-treasure-900" variant="secondary" aria-label="Add"><AddIcon /></IconButton>
            <IconButton className="bg-red" variant="secondary" aria-label="Add"><AddIcon /></IconButton>
            <IconButton style={{ backgroundColor: "red" }} variant="secondary" aria-label="Add"><AddIcon /></IconButton>
        </Inline>
    )
};
