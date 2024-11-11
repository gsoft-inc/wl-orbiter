import { TextLinkAsButton } from "@components/link/index.ts";
import { ArrowRightIcon, InfoIcon } from "@hopper-ui/icons";
import { Div } from "@components/html/index.ts";
import { Inline, Stack } from "@components/layout/index.ts";
import { Text } from "@components/typography/index.ts";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/TextLink/button",
    component: TextLinkAsButton,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof TextLinkAsButton>;

export default meta;

type TextLinkStory = StoryObj<typeof meta>;

export const Default: TextLinkStory = {
    name: "default",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <TextLinkAsButton size="sm" href="#">Flight details</TextLinkAsButton>
                <TextLinkAsButton href="#">Flight details</TextLinkAsButton>
            </Inline>
            <Div fontSize={180}>
                <TextLinkAsButton size="inherit" href="#">Flight details</TextLinkAsButton>
            </Div>
            <Div width="400px">
                <TextLinkAsButton href="#">
                    NASA selected SpaceX to develop a lunar optimized Starship to transport crew between lunar orbiter and the surface of the Moon as part of NASA’s Artemis program.
                </TextLinkAsButton>
            </Div>
        </Stack>
    )
};

export const Icon: TextLinkStory = {
    name: "icon",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <TextLinkAsButton size="sm" href="#">
                    <Text>Flight details</Text>
                    <ArrowRightIcon />
                </TextLinkAsButton>
                <TextLinkAsButton href="#">
                    <Text>Flight details</Text>
                    <ArrowRightIcon />
                </TextLinkAsButton>
            </Inline>
            <Div width="400px">
                <TextLinkAsButton href="#">
                    <Text>NASA selected SpaceX to develop a lunar optimized Starship to transport crew between lunar orbiter and the surface of the Moon as part of NASA’s Artemis program.</Text>
                    <ArrowRightIcon />
                </TextLinkAsButton>
            </Div>
        </Stack>
    )
};

export const StartIcon: TextLinkStory = {
    name: "start icon",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <TextLinkAsButton size="sm" href="#">
                    <InfoIcon slot="start-icon" />
                    <Text>Flight details</Text>
                </TextLinkAsButton>
                <TextLinkAsButton href="#">
                    <InfoIcon slot="start-icon" />
                    <Text>Flight details</Text>
                </TextLinkAsButton>
            </Inline>
            <Div width="400px">
                <TextLinkAsButton href="#">
                    <InfoIcon slot="start-icon" />
                    <Text>NASA selected SpaceX to develop a lunar optimized Starship to transport crew between lunar orbiter and the surface of the Moon as part of NASA’s Artemis program.</Text>
                </TextLinkAsButton>
            </Div>
        </Stack>
    )
};

export const Primary: TextLinkStory = {
    name: "primary",
    render: () => (
        <Inline alignY="end">
            <TextLinkAsButton variant="primary" size="sm" href="#">Flight details</TextLinkAsButton>
            <TextLinkAsButton variant="primary" href="#">Flight details</TextLinkAsButton>
        </Inline>
    )
};

export const Accent: TextLinkStory = {
    name: "accent",
    render: () => (
        <Inline alignY="end">
            <TextLinkAsButton variant="accent" size="sm" href="#">Flight details</TextLinkAsButton>
            <TextLinkAsButton variant="accent" href="#">Flight details</TextLinkAsButton>
        </Inline>
    )
};

export const Negative: TextLinkStory = {
    name: "negative",
    render: () => (
        <Inline alignY="end">
            <TextLinkAsButton variant="negative" size="sm" href="#">Flight details</TextLinkAsButton>
            <TextLinkAsButton variant="negative" href="#">Flight details</TextLinkAsButton>
        </Inline>
    )
};

export const InheritColor: TextLinkStory = {
    name: "inherit color",
    render: () => (
        <Inline alignY="end" color="primary">
            <TextLinkAsButton color="inherit" size="sm" href="#">Flight details</TextLinkAsButton>
            <TextLinkAsButton color="inherit" href="#">Flight details</TextLinkAsButton>
        </Inline>
    )
};

export const States: TextLinkStory = {
    name: "states",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <TextLinkAsButton active size="sm" href="#">Flight details</TextLinkAsButton>
                <TextLinkAsButton active href="#">Flight details</TextLinkAsButton>
            </Inline>
            <Inline alignY="end">
                <TextLinkAsButton focus size="sm" href="#">Flight details</TextLinkAsButton>
                <TextLinkAsButton focus href="#">Flight details</TextLinkAsButton>
            </Inline>
            <Inline alignY="end">
                <TextLinkAsButton hover size="sm" href="#">Flight details</TextLinkAsButton>
                <TextLinkAsButton hover href="#">Flight details</TextLinkAsButton>
            </Inline>
            <Inline alignY="end">
                <TextLinkAsButton focus hover size="sm" href="#">Flight details</TextLinkAsButton>
                <TextLinkAsButton focus hover href="#">Flight details</TextLinkAsButton>
            </Inline>
        </Stack>
    )
};

export const DisabledStates: TextLinkStory = {
    name: "disabled states",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <TextLinkAsButton disabled size="sm" href="#">Flight details</TextLinkAsButton>
                <TextLinkAsButton disabled href="#">Flight details</TextLinkAsButton>
            </Inline>
            <Inline alignY="end">
                <TextLinkAsButton disabled active size="sm" href="#">Flight details</TextLinkAsButton>
                <TextLinkAsButton disabled active href="#">Flight details</TextLinkAsButton>
            </Inline>
            <Inline alignY="end">
                <TextLinkAsButton disabled focus size="sm" href="#">Flight details</TextLinkAsButton>
                <TextLinkAsButton disabled focus href="#">Flight details</TextLinkAsButton>
            </Inline>
            <Inline alignY="end">
                <TextLinkAsButton disabled hover size="sm" href="#">Flight details</TextLinkAsButton>
                <TextLinkAsButton disabled hover href="#">Flight details</TextLinkAsButton>
            </Inline>
            <Inline alignY="end">
                <TextLinkAsButton disabled focus hover size="sm" href="#">Flight details</TextLinkAsButton>
                <TextLinkAsButton disabled focus hover href="#">Flight details</TextLinkAsButton>
            </Inline>
        </Stack>
    )
};

export const External: TextLinkStory = {
    name: "external",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <TextLinkAsButton external size="sm" href="#">Flight details</TextLinkAsButton>
                <TextLinkAsButton external href="#">Flight details</TextLinkAsButton>
            </Inline>
            <Div width="400px">
                <TextLinkAsButton external href="#">
                    NASA selected SpaceX to develop a lunar optimized Starship to transport crew between lunar orbiter and the surface of the Moon as part of NASA’s Artemis program.
                </TextLinkAsButton>
            </Div>
        </Stack>
    )
};

export const NewTab: TextLinkStory = {
    name: "new tab",
    render: () => (
        <TextLinkAsButton target="_blank" href="#">Flight details</TextLinkAsButton>
    )
};

export const Zoom: TextLinkStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <TextLinkAsButton href="#">Flight details</TextLinkAsButton>
            </Div>
            <Div className="zoom-out">
                <TextLinkAsButton href="#">Flight details</TextLinkAsButton>
            </Div>
        </Stack>
    )
};
