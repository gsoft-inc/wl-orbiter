import { Inline, Stack } from "@components/layout";
import { ToggleButton } from "@components/button";
import { Div } from "@components/html";
import { LightbulbIcon } from "@hopper-ui/icons";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/ToggleButton-hopper/primary",
    component: ToggleButton,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof ToggleButton>;

export default meta;

type ToggleButtonStory = StoryObj<typeof meta>;

export const Default: ToggleButtonStory = {
    name: "default",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <ToggleButton size="sm" variant="primary">Cutoff</ToggleButton>
                <ToggleButton variant="primary">Cutoff</ToggleButton>
            </Inline>
            <ToggleButton variant="primary">
                <Text>Cutoff</Text>
                <LightbulbIcon />
            </ToggleButton>
            <Inline alignY="end">
                <ToggleButton size="sm" variant="primary">Aa</ToggleButton>
                <ToggleButton variant="primary">Aa</ToggleButton>
            </Inline>
            <Inline alignY="end">
                <ToggleButton checked variant="primary">Aa</ToggleButton>
                <ToggleButton active variant="primary">Aa</ToggleButton>
                <ToggleButton focus variant="primary">Aa</ToggleButton>
                <ToggleButton hover variant="primary">Aa</ToggleButton>
                <ToggleButton focus hover variant="primary">Aa</ToggleButton>
                <ToggleButton disabled variant="primary">Aa</ToggleButton>
            </Inline>
        </Stack>
    )
};

export const States: ToggleButtonStory = {
    name: "states",
    render: () => (
        <Inline alignY="end">
            <ToggleButton checked variant="primary">Cutoff</ToggleButton>
            <ToggleButton active variant="primary">Cutoff</ToggleButton>
            <ToggleButton focus variant="primary">Cutoff</ToggleButton>
            <ToggleButton hover variant="primary">Cutoff</ToggleButton>
            <ToggleButton focus hover variant="primary">Cutoff</ToggleButton>
            <ToggleButton disabled variant="primary">Cutoff</ToggleButton>
        </Inline>
    )
};

export const Checked: ToggleButtonStory = {
    name: "checked",
    render: () => (
        <Inline>
            <ToggleButton checked variant="primary">Cutoff</ToggleButton>
            <ToggleButton defaultChecked variant="primary">Cutoff</ToggleButton>
            <ToggleButton checked variant="primary">
                <Text>Cutoff</Text>
                <LightbulbIcon />
            </ToggleButton>
        </Inline>
    )
};

export const Zoom: ToggleButtonStory = {
    name: "zoom",
    render: () => (
        <Inline>
            <Div className="zoom-in">
                <ToggleButton variant="primary">Cutoff</ToggleButton>
            </Div>
            <Div className="zoom-out">
                <ToggleButton variant="primary">Cutoff</ToggleButton>
            </Div>
        </Inline>
    )
};
