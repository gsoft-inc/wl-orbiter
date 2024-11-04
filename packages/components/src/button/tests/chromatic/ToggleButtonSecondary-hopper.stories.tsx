import { Inline, Stack } from "@components/layout";
import { ToggleButton } from "@components/button";
import { LightbulbIcon } from "@hopper-ui/icons";
import { Div } from "@components/html";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/ToggleButton-hopper/secondary",
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
                <ToggleButton size="sm" variant="secondary">Cutoff</ToggleButton>
                <ToggleButton variant="secondary">Cutoff</ToggleButton>
            </Inline>
            <ToggleButton variant="secondary">
                <Text>Cutoff</Text>
                <LightbulbIcon />
            </ToggleButton>
            <Inline alignY="end">
                <ToggleButton size="sm" variant="secondary">Aa</ToggleButton>
                <ToggleButton variant="secondary">Aa</ToggleButton>
            </Inline>
            <Inline alignY="end">
                <ToggleButton checked variant="secondary">Aa</ToggleButton>
                <ToggleButton active variant="secondary">Aa</ToggleButton>
                <ToggleButton focus variant="secondary">Aa</ToggleButton>
                <ToggleButton hover variant="secondary">Aa</ToggleButton>
                <ToggleButton focus hover variant="secondary">Aa</ToggleButton>
                <ToggleButton disabled variant="secondary">Aa</ToggleButton>
            </Inline>
        </Stack>
    )
};

export const States: ToggleButtonStory = {
    name: "states",
    render: () => (
        <Inline alignY="end">
            <ToggleButton checked variant="secondary">Cutoff</ToggleButton>
            <ToggleButton active variant="secondary">Cutoff</ToggleButton>
            <ToggleButton focus variant="secondary">Cutoff</ToggleButton>
            <ToggleButton hover variant="secondary">Cutoff</ToggleButton>
            <ToggleButton focus hover variant="secondary">Cutoff</ToggleButton>
            <ToggleButton disabled variant="secondary">Cutoff</ToggleButton>
        </Inline>
    )
};

export const Checked: ToggleButtonStory = {
    name: "checked",
    render: () => (
        <Inline>
            <ToggleButton checked variant="secondary">Cutoff</ToggleButton>
            <ToggleButton defaultChecked variant="secondary">Cutoff</ToggleButton>
            <ToggleButton checked variant="secondary">
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
                <ToggleButton variant="secondary">Cutoff</ToggleButton>
            </Div>
            <Div className="zoom-out">
                <ToggleButton variant="secondary">Cutoff</ToggleButton>
            </Div>
        </Inline>
    )
};
