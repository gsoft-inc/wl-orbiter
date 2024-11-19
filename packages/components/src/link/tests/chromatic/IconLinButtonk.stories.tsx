import { AddIcon } from "@hopper-ui/icons";
import { IconLinkAsButton } from "@components/link/index.ts";
import { Div } from "@components/html/index.ts";
import { Inline, Stack } from "@components/layout/index.ts";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/IconLink/button",
    component: IconLinkAsButton,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof IconLinkAsButton>;

export default meta;

type IconLinkStory = StoryObj<typeof meta>;

export const Default: IconLinkStory = {
    name: "default",
    render: () => (
        <Inline alignY="end">
            <IconLinkAsButton type="button" href="#" aria-label="Add"><AddIcon /></IconLinkAsButton>
        </Inline>
    )
};

export const Primary: IconLinkStory = {
    name: "primary",
    render: () => (
        <Inline alignY="end">
            <IconLinkAsButton type="button" variant="primary" aria-label="Add" href="#"><AddIcon /></IconLinkAsButton>
        </Inline>
    )
};

export const Accent: IconLinkStory = {
    name: "accent",
    render: () => (
        <Inline alignY="end">
            <IconLinkAsButton type="button" variant="accent" aria-label="Add" href="#"><AddIcon /></IconLinkAsButton>
        </Inline>
    )
};

export const Negative: IconLinkStory = {
    name: "negative",
    render: () => (
        <Inline alignY="end">
            <IconLinkAsButton type="button" variant="negative" aria-label="Add" href="#"><AddIcon /></IconLinkAsButton>
        </Inline>
    )
};
export const InheritColor: IconLinkStory = {
    name: "inherit color",
    render: () => (
        <Inline alignY="end" color="primary">
            <IconLinkAsButton type="button" color="inherit" aria-label="Add" href="#"><AddIcon /></IconLinkAsButton>
        </Inline>
    )
};

export const States: IconLinkStory = {
    name: "states",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <IconLinkAsButton type="button" active aria-label="Add" href="#"><AddIcon /></IconLinkAsButton>
            </Inline>
            <Inline alignY="end">
                <IconLinkAsButton type="button" focus aria-label="Add" href="#"><AddIcon /></IconLinkAsButton>
            </Inline>
            <Inline alignY="end">
                <IconLinkAsButton type="button" hover aria-label="Add" href="#"><AddIcon /></IconLinkAsButton>
            </Inline>
            <Inline alignY="end">
                <IconLinkAsButton type="button" focus hover aria-label="Add" href="#"><AddIcon /></IconLinkAsButton>
            </Inline>
        </Stack>
    )
};

export const DisabledStates: IconLinkStory = {
    name: "disabled states",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <IconLinkAsButton type="button" disabled aria-label="Add" href="#"><AddIcon /></IconLinkAsButton>
            </Inline>
            <Inline alignY="end">
                <IconLinkAsButton type="button" disabled active aria-label="Add" href="#"><AddIcon /></IconLinkAsButton>
            </Inline>
            <Inline alignY="end">
                <IconLinkAsButton type="button" disabled focus aria-label="Add" href="#"><AddIcon /></IconLinkAsButton>
            </Inline>
            <Inline alignY="end">
                <IconLinkAsButton type="button" disabled hover aria-label="Add" href="#"><AddIcon /></IconLinkAsButton>
            </Inline>
            <Inline alignY="end">
                <IconLinkAsButton type="button" disabled focus hover aria-label="Add" href="#"><AddIcon /></IconLinkAsButton>
            </Inline>
        </Stack>
    )
};

export const External: IconLinkStory = {
    name: "external",
    render: () => (
        <IconLinkAsButton type="button" external href="https://www.space.com/spacex-delays-south-korea-military-satellite-launch.html" aria-label="Add"><AddIcon /></IconLinkAsButton>
    )
};

export const NewTab: IconLinkStory = {
    name: "new tab",
    render: () => (
        <IconLinkAsButton type="button" target="_blank" href="#" aria-label="Add"><AddIcon /></IconLinkAsButton>
    )
};

export const Zoom: IconLinkStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <IconLinkAsButton type="button" href="#" aria-label="Add"><AddIcon /></IconLinkAsButton>
            </Div>
            <Div className="zoom-out">
                <IconLinkAsButton type="button" href="#" aria-label="Add"><AddIcon /></IconLinkAsButton>
            </Div>
        </Stack>
    )
};
