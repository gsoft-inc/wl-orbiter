import { Content } from "@components/placeholders/index.ts";
import { Div } from "@components/html/index.ts";
import { Heading } from "@components/typography/index.ts";
import { Stack } from "@components/layout/index.ts";
import { Tile, TileGroup, TileLink } from "@components/tile/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/TileGroup",
    component: TileGroup,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof TileGroup>;

export default meta;

type TileGroupStory = StoryObj<typeof meta>;

export const Selection: TileGroupStory = {
    name: "selection",
    render: () => (
        <Stack>
            <TileGroup defaultValue={["fuel"]} selectionMode="single" rowSize={3}>
                <Tile value="map">
                    <Heading>Map</Heading>
                    <Content>View space map</Content>
                </Tile>
                <Tile value="fuel">
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </Tile>
                <Tile value="setting">
                    <Heading>Setting</Heading>
                    <Content>Cockpit settings</Content>
                </Tile>
            </TileGroup>
            <TileGroup defaultValue={["fuel", "setting"]} selectionMode="multiple" rowSize={3}>
                <Tile value="map">
                    <Heading>Map</Heading>
                    <Content>View space map</Content>
                </Tile>
                <Tile value="fuel">
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </Tile>
                <Tile value="setting">
                    <Heading>Setting</Heading>
                    <Content>Cockpit settings</Content>
                </Tile>
            </TileGroup>
        </Stack>
    )
};

export const OnePerRow: TileGroupStory = {
    name: "1 per row",
    render: () => (
        <TileGroup rowSize={1}>
            <TileLink href="https://www.google.com">
                <Heading>Map</Heading>
                <Content>View space map</Content>
            </TileLink>
            <TileLink href="https://www.google.com">
                <Heading>Fuel</Heading>
                <Content>Fuel configuration and level</Content>
            </TileLink>
            <TileLink href="https://www.google.com">
                <Heading>Setting</Heading>
                <Content>Cockpit settings</Content>
            </TileLink>
        </TileGroup>
    )
};

export const TwoPerRow: TileGroupStory = {
    name: "2 per row",
    render: () => (
        <TileGroup rowSize={2}>
            <TileLink href="https://www.google.com">
                <Heading>Map</Heading>
                <Content>View space map</Content>
            </TileLink>
            <TileLink href="https://www.google.com">
                <Heading>Fuel</Heading>
                <Content>Fuel configuration and level</Content>
            </TileLink>
            <TileLink href="https://www.google.com">
                <Heading>Setting</Heading>
                <Content>Cockpit settings</Content>
            </TileLink>
        </TileGroup>
    )
};

export const ThreePerRow: TileGroupStory = {
    name: "3 per row",
    render: () => (
        <TileGroup rowSize={3}>
            <TileLink href="https://www.google.com">
                <Heading>Map</Heading>
                <Content>View space map</Content>
            </TileLink>
            <TileLink href="https://www.google.com">
                <Heading>Fuel</Heading>
                <Content>Fuel configuration and level</Content>
            </TileLink>
            <TileLink href="https://www.google.com">
                <Heading>Setting</Heading>
                <Content>Cockpit settings</Content>
            </TileLink>
        </TileGroup>
    )
};

export const Wrap: TileGroupStory = {
    name: "wrap",
    render: () => (
        <TileGroup rowSize={6}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(x => (
                <TileLink href="https://www.google.com" key={x}>
                    <Heading>{x}</Heading>
                    <Content>{x}</Content>
                </TileLink>
            ))}
        </TileGroup>
    )
};

export const Disabled: TileGroupStory = {
    name: "disabled",
    render: () => (
        <Stack>
            <TileGroup selectionMode="none" disabled rowSize={3}>
                <TileLink href="https://www.google.com">
                    <Heading>Map</Heading>
                    <Content>View space map</Content>
                </TileLink>
                <TileLink href="https://www.google.com">
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </TileLink>
                <TileLink href="https://www.google.com">
                    <Heading>Setting</Heading>
                    <Content>Cockpit settings</Content>
                </TileLink>
            </TileGroup>
            <TileGroup selectionMode="single" disabled rowSize={3}>
                <Tile value="map">
                    <Heading>Map</Heading>
                    <Content>View space map</Content>
                </Tile>
                <Tile value="fuel">
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </Tile>
                <Tile value="setting">
                    <Heading>Setting</Heading>
                    <Content>Cockpit settings</Content>
                </Tile>
            </TileGroup>
            <TileGroup selectionMode="multiple" disabled rowSize={3}>
                <Tile value="map">
                    <Heading>Map</Heading>
                    <Content>View space map</Content>
                </Tile>
                <Tile value="fuel">
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </Tile>
                <Tile value="setting">
                    <Heading>Setting</Heading>
                    <Content>Cockpit settings</Content>
                </Tile>
            </TileGroup>
        </Stack>
    )
};

export const Zoom: TileGroupStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <TileGroup rowSize={3}>
                    <Tile value="map">
                        <Heading>Map</Heading>
                        <Content>View space map</Content>
                    </Tile>
                    <Tile value="fuel">
                        <Heading>Fuel</Heading>
                        <Content>Fuel configuration and level</Content>
                    </Tile>
                    <Tile value="setting">
                        <Heading>Setting</Heading>
                        <Content>Cockpit settings</Content>
                    </Tile>
                </TileGroup>
            </Div>
            <Div className="zoom-out">
                <TileGroup rowSize={3}>
                    <Tile value="map">
                        <Heading>Map</Heading>
                        <Content>View space map</Content>
                    </Tile>
                    <Tile value="fuel">
                        <Heading>Fuel</Heading>
                        <Content>Fuel configuration and level</Content>
                    </Tile>
                    <Tile value="setting">
                        <Heading>Setting</Heading>
                        <Content>Cockpit settings</Content>
                    </Tile>
                </TileGroup>
            </Div>
        </Stack>
    )
};

export const Styling: TileGroupStory = {
    name: "styling",
    render: () => (
        <Stack>
            <TileGroup border="warning" rowSize={3}>
                <TileLink href="https://www.google.com">
                    <Heading>Map</Heading>
                    <Content>View space map</Content>
                </TileLink>
                <TileLink href="https://www.google.com">
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </TileLink>
                <TileLink href="https://www.google.com">
                    <Heading>Setting</Heading>
                    <Content>Cockpit settings</Content>
                </TileLink>
            </TileGroup>
            <TileGroup className="border-red" rowSize={3}>
                <TileLink href="https://www.google.com">
                    <Heading>Map</Heading>
                    <Content>View space map</Content>
                </TileLink>
                <TileLink href="https://www.google.com">
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </TileLink>
                <TileLink href="https://www.google.com">
                    <Heading>Setting</Heading>
                    <Content>Cockpit settings</Content>
                </TileLink>
            </TileGroup>
            <TileGroup style={{ border: "1px solid red" }} rowSize={3}>
                <TileLink href="https://www.google.com">
                    <Heading>Map</Heading>
                    <Content>View space map</Content>
                </TileLink>
                <TileLink href="https://www.google.com">
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </TileLink>
                <TileLink href="https://www.google.com">
                    <Heading>Setting</Heading>
                    <Content>Cockpit settings</Content>
                </TileLink>
            </TileGroup>
        </Stack>
    )
};
