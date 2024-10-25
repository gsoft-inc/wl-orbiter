import { TileLink } from "@components/tile";
import { Content } from "@components/placeholders";
import { Div } from "@components/html";
import { Heading } from "@components/typography";
import { Illustration } from "@components/illustration";
import { Image } from "@components/image";
import { Inline, Stack } from "@components/layout";
import { Nasa } from "./assets";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/TileLink/vertical",
    component: TileLink
} as Meta<typeof TileLink>;

export default meta;

type TileLinkStory = StoryObj<typeof meta>;

export const Default: TileLinkStory = {
    name: "default",
    render: () => (
        <TileLink href="https://www.google.com" orientation="vertical" width="300px">
            <Heading>Fuel</Heading>
            <Content>Fuel configuration and level</Content>
        </TileLink>
    )
};

export const External: TileLinkStory = {
    name: "external",
    render: () => (
        <TileLink href="https://www.google.com" external orientation="vertical" width="300px">
            <Heading>Fuel</Heading>
            <Content>Fuel configuration and level</Content>
        </TileLink>
    )
};

export const States: TileLinkStory = {
    name: "states",
    render: () => (
        <Stack>
            <Inline>
                <TileLink active href="https://www.google.com" orientation="vertical" width="300px">
                    <Heading>Map</Heading>
                    <Content>View space map</Content>
                </TileLink>
                <TileLink focus href="https://www.google.com" orientation="vertical" width="300px">
                    <Heading>Map</Heading>
                    <Content>View space map</Content>
                </TileLink>
                <TileLink hover href="https://www.google.com" orientation="vertical" width="300px">
                    <Heading>Map</Heading>
                    <Content>View space map</Content>
                </TileLink>
                <TileLink focus hover href="https://www.google.com" orientation="vertical" width="300px">
                    <Heading>Map</Heading>
                    <Content>View space map</Content>
                </TileLink>
            </Inline>
            <Inline>
                <TileLink disabled href="https://www.google.com" orientation="vertical" width="300px">
                    <Heading>Map</Heading>
                    <Content>View space map</Content>
                </TileLink>
                <TileLink disabled active href="https://www.google.com" orientation="vertical" width="300px">
                    <Heading>Map</Heading>
                    <Content>View space map</Content>
                </TileLink>
                <TileLink disabled hover href="https://www.google.com" orientation="vertical" width="300px">
                    <Heading>Map</Heading>
                    <Content>View space map</Content>
                </TileLink>
                <TileLink disabled focus href="https://www.google.com" orientation="vertical" width="300px">
                    <Heading>Map</Heading>
                    <Content>View space map</Content>
                </TileLink>
            </Inline>
        </Stack>
    )
};

export const IllustrationStory: TileLinkStory = {
    name: "illustration",
    render: () => (
        <TileLink orientation="vertical" width="300px" href="https://www.google.com">
            <Illustration backgroundColor="red">
                <Image src={Nasa} width="100px" alt="Nasa Logo" />
            </Illustration>
            <Heading>Fuel</Heading>
            <Content>Fuel configuration and level</Content>
        </TileLink>
    )
};

export const Zoom: TileLinkStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <TileLink href="https://www.google.com" orientation="vertical" width="300px">
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </TileLink>
            </Div>
            <Div className="zoom-out">
                <TileLink href="https://www.google.com" orientation="vertical" width="300px">
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </TileLink>
            </Div>
        </Stack>
    )
};

export const Styling: TileLinkStory = {
    name: "styling",
    render: () => (
        <Stack>
            <TileLink border="sunken-treasure-900" href="https://www.google.com" orientation="vertical" width="300px">
                <Heading>Fuel</Heading>
                <Content>Fuel configuration and level</Content>
            </TileLink>
            <TileLink className="border-red" href="https://www.google.com" orientation="vertical" width="300px">
                <Heading>Fuel</Heading>
                <Content>Fuel configuration and level</Content>
            </TileLink>
            <TileLink style={{ border: "1px solid red" }} href="https://www.google.com" orientation="vertical" width="300px">
                <Heading>Fuel</Heading>
                <Content>Fuel configuration and level</Content>
            </TileLink>
        </Stack>
    )
};
