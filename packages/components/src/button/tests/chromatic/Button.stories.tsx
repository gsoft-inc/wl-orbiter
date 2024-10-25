import { Button } from "@components/button";
import { Inline } from "@components/layout";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Button",
    component: Button,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Button>;

export default meta;

type ButtonStory = StoryObj<typeof meta>;

export const Styling: ButtonStory = {
    name: "styling",
    render: () => (
        <Inline>
            <Button border="sunken-treasure-600" variant="secondary">Button</Button>
            <Button className="bg-red" variant="secondary">Button</Button>
            <Button style={{ backgroundColor: "red" }} variant="secondary">Button</Button>
        </Inline>
    )
};
