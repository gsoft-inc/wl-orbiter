import { Inline } from "@components/layout";
import { Switch } from "@components/switch";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Switch",
    component: Switch,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Switch>;

export default meta;

type SwitchStory = StoryObj<typeof meta>;

export const Styling: SwitchStory = {
    name: "styling",
    render: () => (
        <Inline>
            <Switch border="warning">Engines</Switch>
            <Switch className="border-red">Engines</Switch>
            <Switch style={{ border: "1px solid red" }}>Engines</Switch>
        </Inline>
    )
};

