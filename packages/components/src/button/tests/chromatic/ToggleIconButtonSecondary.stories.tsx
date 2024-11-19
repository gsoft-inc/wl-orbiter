import { CheckmarkIcon } from "@hopper-ui/icons";
import { Inline, Stack } from "@components/layout/index.ts";
import { ToggleIconButton } from "@components/button/index.ts";
import { Div } from "@components/html/index.ts";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/ToggleIconButton/secondary",
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
                <ToggleIconButton size="sm" aria-label="Activate" variant="secondary">
                    <CheckmarkIcon />
                </ToggleIconButton>
                <ToggleIconButton aria-label="Activate" variant="secondary">
                    <CheckmarkIcon />
                </ToggleIconButton>
            </Inline>
            <Inline alignY="end">
                <ToggleIconButton checked aria-label="Activate" variant="secondary">
                    <CheckmarkIcon />
                </ToggleIconButton>
                <ToggleIconButton active aria-label="Activate" variant="secondary">
                    <CheckmarkIcon />
                </ToggleIconButton>
                <ToggleIconButton focus aria-label="Activate" variant="secondary">
                    <CheckmarkIcon />
                </ToggleIconButton>
                <ToggleIconButton hover aria-label="Activate" variant="secondary">
                    <CheckmarkIcon />
                </ToggleIconButton>
                <ToggleIconButton focus hover aria-label="Activate" variant="secondary">
                    <CheckmarkIcon />
                </ToggleIconButton>
                <ToggleIconButton disabled aria-label="Activate" variant="secondary">
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
            <ToggleIconButton checked aria-label="Activate" variant="secondary">
                <CheckmarkIcon />
            </ToggleIconButton>
            <ToggleIconButton defaultChecked aria-label="Activate" variant="secondary">
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
                <ToggleIconButton aria-label="Activate" variant="secondary">
                    <CheckmarkIcon />
                </ToggleIconButton>
            </Div>
            <Div className="zoom-out">
                <ToggleIconButton aria-label="Activate" variant="secondary">
                    <CheckmarkIcon />
                </ToggleIconButton>
            </Div>
        </Inline>
    )
};
