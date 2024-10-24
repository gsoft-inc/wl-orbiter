import { Inline } from "@components/layout";
import { TextLink } from "@components/link";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/TextLink",
    component: TextLink
} as Meta<typeof TextLink>;

export default meta;

type TextLinkStory = StoryObj<typeof meta>;

export const Default: TextLinkStory = {
    name: "default",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <TextLink size="sm" href="#">Flight details</TextLink>
                <TextLink href="#">Flight details</TextLink>
            </Inline>
            <Div fontSize={180}>
                <TextLink size="inherit" href="#">Flight details</TextLink>
            </Div>
            <Div width="400px">
                <TextLink href="#">
                    NASA selected SpaceX to develop a lunar optimized Starship to transport crew between lunar orbiter and the surface of the Moon as part of NASA’s Artemis program.
                </TextLink>
            </Div>
        </Stack>
    )
};

export const Icon: TextLinkStory = {
    name: "icon",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <TextLink size="sm" href="#">
                    <Text>Flight details</Text>
                    <ArrowRightIcon />
                </TextLink>
                <TextLink href="#">
                    <Text>Flight details</Text>
                    <ArrowRightIcon />
                </TextLink>
            </Inline>
            <Div width="400px">
                <TextLink href="#">
                    <Text>NASA selected SpaceX to develop a lunar optimized Starship to transport crew between lunar orbiter and the surface of the Moon as part of NASA’s Artemis program.</Text>
                    <ArrowRightIcon />
                </TextLink>
            </Div>
        </Stack>
    )
};

export const StartIcon: TextLinkStory = {
    name: "start icon",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <TextLink size="sm" href="#">
                    <InfoIcon slot="start-icon" />
                    <Text>Flight details</Text>
                </TextLink>
                <TextLink href="#">
                    <InfoIcon slot="start-icon" />
                    <Text>Flight details</Text>
                </TextLink>
            </Inline>
            <Div width="400px">
                <TextLink href="#">
                    <InfoIcon slot="start-icon" />
                    <Text>NASA selected SpaceX to develop a lunar optimized Starship to transport crew between lunar orbiter and the surface of the Moon as part of NASA’s Artemis program.</Text>
                </TextLink>
            </Div>
        </Stack>
    )
};

export const Primary: TextLinkStory = {
    name: "primary",
    render: () => (
        <Inline alignY="end">
            <TextLink variant="primary" size="sm" href="#">Flight details</TextLink>
            <TextLink variant="primary" href="#">Flight details</TextLink>
        </Inline>
    )
};

export const Accent: TextLinkStory = {
    name: "accent",
    render: () => (
        <Inline alignY="end">
            <TextLink variant="accent" size="sm" href="#">Flight details</TextLink>
            <TextLink variant="accent" href="#">Flight details</TextLink>
        </Inline>
    )
};

export const Negative: TextLinkStory = {
    name: "negative",
    render: () => (
        <Inline alignY="end">
            <TextLink variant="negative" size="sm" href="#">Flight details</TextLink>
            <TextLink variant="negative" href="#">Flight details</TextLink>
        </Inline>
    )
};

export const InheritColor: TextLinkStory = {
    name: "inherit color",
    render: () => (
        <Inline alignY="end" color="primary">
            <TextLink color="inherit" size="sm" href="#">Flight details</TextLink>
            <TextLink color="inherit" href="#">Flight details</TextLink>
        </Inline>
    )
};

export const States: TextLinkStory = {
    name: "states",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <TextLink active size="sm" href="#">Flight details</TextLink>
                <TextLink active href="#">Flight details</TextLink>
            </Inline>
            <Inline alignY="end">
                <TextLink focus size="sm" href="#">Flight details</TextLink>
                <TextLink focus href="#">Flight details</TextLink>
            </Inline>
            <Inline alignY="end">
                <TextLink hover size="sm" href="#">Flight details</TextLink>
                <TextLink hover href="#">Flight details</TextLink>
            </Inline>
            <Inline alignY="end">
                <TextLink focus hover size="sm" href="#">Flight details</TextLink>
                <TextLink focus hover href="#">Flight details</TextLink>
            </Inline>
        </Stack>
    )
};

export const DisabledStates: TextLinkStory = {
    name: "disabled states",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <TextLink disabled size="sm" href="#">Flight details</TextLink>
                <TextLink disabled href="#">Flight details</TextLink>
            </Inline>
            <Inline alignY="end">
                <TextLink disabled active size="sm" href="#">Flight details</TextLink>
                <TextLink disabled active href="#">Flight details</TextLink>
            </Inline>
            <Inline alignY="end">
                <TextLink disabled focus size="sm" href="#">Flight details</TextLink>
                <TextLink disabled focus href="#">Flight details</TextLink>
            </Inline>
            <Inline alignY="end">
                <TextLink disabled hover size="sm" href="#">Flight details</TextLink>
                <TextLink disabled hover href="#">Flight details</TextLink>
            </Inline>
            <Inline alignY="end">
                <TextLink disabled focus hover size="sm" href="#">Flight details</TextLink>
                <TextLink disabled focus hover href="#">Flight details</TextLink>
            </Inline>
        </Stack>
    )
};

export const External: TextLinkStory = {
    name: "external",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <TextLink external size="sm" href="#">Flight details</TextLink>
                <TextLink external href="#">Flight details</TextLink>
            </Inline>
            <Div width="400px">
                <TextLink external href="#">
                    NASA selected SpaceX to develop a lunar optimized Starship to transport crew between lunar orbiter and the surface of the Moon as part of NASA’s Artemis program.
                </TextLink>
            </Div>
        </Stack>
    )
};

export const NewTab: TextLinkStory = {
    name: "new tab",
    render: () => (
        <TextLink target="_blank" href="#">Flight details</TextLink>
    )
};

export const Zoom: TextLinkStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <TextLink href="#">Flight details</TextLink>
            </Div>
            <Div className="zoom-out">
                <TextLink href="#">Flight details</TextLink>
            </Div>
        </Stack>
    )
};

export const Styling: TextLinkStory = {
    name: "styling",
    render: () => (
        <Inline>
            <TextLink border="warning" href="#">Flight details</TextLink>
            <TextLink className="bg-red" href="#">Flight details</TextLink>
            <TextLink style={{ backgroundColor: "red" }} href="#">Flight details</TextLink>
        </Inline>

    )
};
