import { Inline } from "@components/layout";
import { Radio } from "@components/radio";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Radio",
    component: Radio,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Radio>;

export default meta;

type RadioStory = StoryObj<typeof meta>;

export const Styling: RadioStory = {
    name: "styling",
    render: () => (
        <Inline>
            <Radio border="warning" value="any">Milky Way</Radio>
            <Radio className="bg-red" value="any">Milky Way</Radio>
            <Radio style={{ backgroundColor: "red" }} value="any">Milky Way</Radio>
        </Inline>
    )
};
