import { AddIcon } from "@hopper-ui/icons";
import { IconButton } from "@components/button";
import { Inline } from "@components/layout";
import { Meta, StoryObj } from "@storybook/react";

// createIconButtonTestSuite(<IconButton variant="primary" />, stories("/primary"));
// createIconButtonTestSuite(<IconButton variant="secondary" />, stories("/secondary"));
// createIconButtonTestSuite(<IconButton variant="tertiary" />, stories("/tertiary"));
// createIconButtonTestSuite(<IconButton variant="upsell" />, stories("/upsell"));
// createIconButtonTestSuite(<IconButton variant="negative" />, stories("/negative"));

const meta = {
    title: "Chromatic/IconButton-hopper",
    component: IconButton
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
