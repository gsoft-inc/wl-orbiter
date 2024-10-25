import { CheckmarkIcon } from "@hopper-ui/icons";
import { Inline, Stack } from "@components/layout";
import { ToggleIconButton } from "@components/button";
import { Div } from "@components/html";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/ToggleIconButton/primary",
    component: ToggleIconButton,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof ToggleIconButton>;

export default meta;

type ToggleIconButtonStory = StoryObj<typeof meta>;

export const Default: ToggleIconButtonStory = {
    name: "default",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <ToggleIconButton size="sm" aria-label="Activate" variant="primary">
                    <CheckmarkIcon />
                </ToggleIconButton>
                <ToggleIconButton aria-label="Activate" variant="primary">
                    <CheckmarkIcon />
                </ToggleIconButton>
            </Inline>
            <Inline alignY="end">
                <ToggleIconButton checked aria-label="Activate" variant="primary">
                    <CheckmarkIcon />
                </ToggleIconButton>
                <ToggleIconButton active aria-label="Activate" variant="primary">
                    <CheckmarkIcon />
                </ToggleIconButton>
                <ToggleIconButton focus aria-label="Activate" variant="primary">
                    <CheckmarkIcon />
                </ToggleIconButton>
                <ToggleIconButton hover aria-label="Activate" variant="primary">
                    <CheckmarkIcon />
                </ToggleIconButton>
                <ToggleIconButton focus hover aria-label="Activate" variant="primary">
                    <CheckmarkIcon />
                </ToggleIconButton>
                <ToggleIconButton disabled aria-label="Activate" variant="primary">
                    <CheckmarkIcon />
                </ToggleIconButton>
            </Inline>
        </Stack>
    )
};

export const Checked: ToggleIconButtonStory = {
    name: "checked",
    render: () => (
        <Inline>
            <ToggleIconButton checked aria-label="Activate" variant="primary">
                <CheckmarkIcon />
            </ToggleIconButton>
            <ToggleIconButton defaultChecked aria-label="Activate" variant="primary">
                <CheckmarkIcon />
            </ToggleIconButton>
        </Inline>
    )
};

export const Zoom: ToggleIconButtonStory = {
    name: "zoom",
    render: () => (
        <Inline>
            <Div className="zoom-in">
                <ToggleIconButton aria-label="Activate" variant="primary">
                    <CheckmarkIcon />
                </ToggleIconButton>
            </Div>
            <Div className="zoom-out">
                <ToggleIconButton aria-label="Activate" variant="primary">
                    <CheckmarkIcon />
                </ToggleIconButton>
            </Div>
        </Inline>
    )
};
