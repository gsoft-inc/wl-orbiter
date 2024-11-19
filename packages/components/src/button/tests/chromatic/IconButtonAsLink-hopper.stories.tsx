import { AddIcon } from "@hopper-ui/icons";
import { IconButtonAsLink } from "@components/button/index.ts";
import { Inline } from "@components/layout/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/IconButtonAsLink-hopper",
    component: IconButtonAsLink,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof IconButtonAsLink>;

export default meta;

type IconButtonAsLinkStory = StoryObj<typeof meta>;

export const Styling: IconButtonAsLinkStory = {
    name: "styling",
    render: () => (
        <Inline>
            <IconButtonAsLink border="sunken-treasure-600" variant="secondary"><AddIcon /></IconButtonAsLink>
            <IconButtonAsLink className="bg-red" variant="secondary"><AddIcon /></IconButtonAsLink>
            <IconButtonAsLink style={{ backgroundColor: "red" }} variant="secondary"><AddIcon /></IconButtonAsLink>
        </Inline>
    )
};
