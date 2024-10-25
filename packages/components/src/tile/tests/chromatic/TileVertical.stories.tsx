import { Content } from "@components/placeholders";
import { Div } from "@components/html";
import { Heading, Paragraph } from "@components/typography";
import { Illustration } from "@components/illustration";
import { Image } from "@components/image";
import { Inline, Stack } from "@components/layout";
import { Tile } from "@components/tile";
import { Nasa } from "./assets";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Tile/vertical",
    component: Tile,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Tile>;

export default meta;

type TileStory = StoryObj<typeof meta>;

export const Images: TileStory = {
    name: "default",
    render: () => (
        <Tile orientation="vertical" width="300px">
            <Heading>Fuel</Heading>
            <Content>Fuel configuration and level</Content>
        </Tile>
    )
};

export const IllustrationStory: TileStory = {
    name: "illustration",
    render: () => (
        <Tile orientation="vertical" width="300px">
            <Illustration color="neutral-weakest">
                <Image src={Nasa} width="100px" alt="Nasa Logo" />
            </Illustration>
            <Heading>Fuel</Heading>
            <Content>Fuel configuration and level</Content>
        </Tile>
    )
};

export const AllSections: TileStory = {
    name: "all sections",
    render: () => (
        <Tile orientation="vertical" width="300px">
            <Illustration color="neutral-weakest">
                <Image src={Nasa} width="100px" alt="Nasa Logo" />
            </Illustration>
            <Heading>Fuel</Heading>
            <Content>Fuel configuration and level</Content>
        </Tile>
    )
};

export const HeadingOverflow: TileStory = {
    name: "heading overflow",
    render: () => (
        <Tile orientation="vertical" width="300px">
            <Heading>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus a purus sit amet volutpat. Ut ac mauris sit amet elit rhoncus dictum. Morbi vehicula, tortor eget congue porta, mi ipsum interdum lectus, non lobortis dui nulla sed nisi.</Heading>
            <Content>Fuel configuration and level</Content>
        </Tile>
    )
};

export const ContentOverflow: TileStory = {
    name: "content overflow",
    render: () => (
        <Tile orientation="vertical" width="300px">
            <Heading>Fuel</Heading>
            <Content>
                <Paragraph>
                    This year, the National Science Foundation (NSF) said farewell to the iconic Arecibo Observatory in Puerto Rico after two major cable failures
                    led to the radio telescope's collapse. The 57-year old structure was once the largest radio dish telescope in the world, and researchers have used its capabilities to make significant breakthroughs in astronomy.
                    The Arecibo Observatory also served as the dramatic backdrop to films like "Contact" and "Goldeneye."
                </Paragraph>
                <Paragraph>The facility suffered two cable failures this year, and then in early December, the suspended platform above the radio dish came crashing down.</Paragraph>
                <Paragraph>The news about Arecibo's structural damage and subsequent decommissioning was disheartening for the local community, too. Field trips to its visitors' center are a ''rite of passage'' for Puerto Rican children.</Paragraph>
            </Content>
        </Tile>
    )
};

export const EverythingOverflow: TileStory = {
    name: "everything overflow",
    render: () => (
        <Tile orientation="vertical" width="300px">
            <Heading>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus a purus sit amet volutpat. Ut ac mauris sit amet elit rhoncus dictum. Morbi vehicula, tortor eget congue porta, mi ipsum interdum lectus, non lobortis dui nulla sed nisi.</Heading>
            <Content>
                <Paragraph>
                    This year, the National Science Foundation (NSF) said farewell to the iconic Arecibo Observatory in Puerto Rico after two major cable failures
                    led to the radio telescope's collapse. The 57-year old structure was once the largest radio dish telescope in the world, and researchers have used its capabilities to make significant breakthroughs in astronomy.
                    The Arecibo Observatory also served as the dramatic backdrop to films like "Contact" and "Goldeneye."
                </Paragraph>
                <Paragraph>The facility suffered two cable failures this year, and then in early December, the suspended platform above the radio dish came crashing down.</Paragraph>
                <Paragraph>The news about Arecibo's structural damage and subsequent decommissioning was disheartening for the local community, too. Field trips to its visitors' center are a ''rite of passage'' for Puerto Rican children.</Paragraph>
            </Content>
        </Tile>
    )
};

export const DefaultChecked: TileStory = {
    name: "default checked",
    render: () => (
        <Tile orientation="vertical" width="300px" defaultChecked>
            <Heading>Fuel</Heading>
            <Content>Fuel configuration and level</Content>
        </Tile>
    )
};

export const States: TileStory = {
    name: "states",
    render: () => (
        <Stack>
            <Inline>
                <Tile orientation="vertical" width="300px" active>
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </Tile>
                <Tile orientation="vertical" width="300px" focus>
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </Tile>
                <Tile orientation="vertical" width="300px" hover>
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </Tile>
                <Tile orientation="vertical" width="300px" focus hover>
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </Tile>
            </Inline>
            <Inline>
                <Tile orientation="vertical" width="300px" disabled>
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </Tile>
                <Tile orientation="vertical" width="300px" disabled active>
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </Tile>
                <Tile orientation="vertical" width="300px" disabled hover>
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </Tile>
                <Tile orientation="vertical" width="300px" disabled focus>
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </Tile>
            </Inline>
        </Stack>
    )
};

export const Zoom: TileStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <Tile orientation="vertical" width="300px">
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </Tile>
            </Div>
            <Div className="zoom-out">
                <Tile orientation="vertical" width="300px">
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </Tile>
            </Div>
        </Stack>
    )
};

export const Styling: TileStory = {
    name: "styling",
    render: () => (
        <Stack>
            <Tile orientation="vertical" width="300px" border="sunken-treasure-900">
                <Heading>Map</Heading>
                <Content>View space map</Content>
            </Tile>
            <Tile orientation="vertical" width="300px" className="border-red">
                <Heading>Map</Heading>
                <Content>View space map</Content>
            </Tile>
            <Tile orientation="vertical" width="300px" style={{ border: "1px solid red" }}>
                <Heading>Map</Heading>
                <Content>View space map</Content>
            </Tile>
        </Stack>
    )
};
