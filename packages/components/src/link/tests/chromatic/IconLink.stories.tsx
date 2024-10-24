import { AddIcon } from "@hopper-ui/icons";
import { IconLink } from "@components/link";
import { Div } from "@components/html";
import { Inline, Stack } from "@components/layout";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/IconLink",
    component: IconLink
} as Meta<typeof IconLink>;

export default meta;

type IconLinkStory = StoryObj<typeof meta>;

export const Default: IconLinkStory = {
    name: "default",
    render: () => (
        <Inline alignY="end">
            <IconLink href="#" aria-label="Add"><AddIcon /></IconLink>
        </Inline>
    )
};

export const Primary: IconLinkStory = {
    name: "primary",
    render: () => (
        <Inline alignY="end">
            <IconLink variant="primary" aria-label="Add" href="#"><AddIcon /></IconLink>
        </Inline>
    )
};

export const Accent: IconLinkStory = {
    name: "accent",
    render: () => (
        <Inline alignY="end">
            <IconLink variant="accent" aria-label="Add" href="#"><AddIcon /></IconLink>
        </Inline>
    )
};

export const Negative: IconLinkStory = {
    name: "negative",
    render: () => (
        <Inline alignY="end">
            <IconLink variant="negative" aria-label="Add" href="#"><AddIcon /></IconLink>
        </Inline>
    )
};
export const InheritColor: IconLinkStory = {
    name: "inherit color",
    render: () => (
        <Inline alignY="end" color="primary">
            <IconLink color="inherit" aria-label="Add" href="#"><AddIcon /></IconLink>
        </Inline>
    )
};

export const States: IconLinkStory = {
    name: "states",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <IconLink active aria-label="Add" href="#"><AddIcon /></IconLink>
            </Inline>
            <Inline alignY="end">
                <IconLink focus aria-label="Add" href="#"><AddIcon /></IconLink>
            </Inline>
            <Inline alignY="end">
                <IconLink hover aria-label="Add" href="#"><AddIcon /></IconLink>
            </Inline>
            <Inline alignY="end">
                <IconLink focus hover aria-label="Add" href="#"><AddIcon /></IconLink>
            </Inline>
        </Stack>
    )
};

export const DisabledStates: IconLinkStory = {
    name: "disabled states",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <IconLink disabled aria-label="Add" href="#"><AddIcon /></IconLink>
            </Inline>
            <Inline alignY="end">
                <IconLink disabled active aria-label="Add" href="#"><AddIcon /></IconLink>
            </Inline>
            <Inline alignY="end">
                <IconLink disabled focus aria-label="Add" href="#"><AddIcon /></IconLink>
            </Inline>
            <Inline alignY="end">
                <IconLink disabled hover aria-label="Add" href="#"><AddIcon /></IconLink>
            </Inline>
            <Inline alignY="end">
                <IconLink disabled focus hover aria-label="Add" href="#"><AddIcon /></IconLink>
            </Inline>
        </Stack>
    )
};

export const External: IconLinkStory = {
    name: "external",
    render: () => (
        <IconLink external href="https://www.space.com/spacex-delays-south-korea-military-satellite-launch.html" aria-label="Add"><AddIcon /></IconLink>
    )
};

export const NewTab: IconLinkStory = {
    name: "new tab",
    render: () => (
        <IconLink target="_blank" href="#" aria-label="Add"><AddIcon /></IconLink>
    )
};

export const Zoom: IconLinkStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <IconLink href="#" aria-label="Add"><AddIcon /></IconLink>
            </Div>
            <Div className="zoom-out">
                <IconLink href="#" aria-label="Add"><AddIcon /></IconLink>
            </Div>
        </Stack>
    )
};
export const Styling: IconLinkStory = {
    name: "styling",
    render: () => (
        <Inline>
            <IconLink border="warning" href="#" aria-label="Add"><AddIcon /></IconLink>
            <IconLink className="bg-red" href="#" aria-label="Add"><AddIcon /></IconLink>
            <IconLink style={{ backgroundColor: "red" }} href="#" aria-label="Add"><AddIcon /></IconLink>
        </Inline>
    )
};

// createIconLinkTestSuite(<IconLinkAsButton type="button" />, stories("/button"));
