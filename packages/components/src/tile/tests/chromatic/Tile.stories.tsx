import { Apollo11Banner, Apollo11Poster, Nasa } from "./assets";
import { Content } from "@components/placeholders/index.ts";
import { Heading } from "@components/typography/index.ts";
import { Illustration } from "@components/illustration/index.ts";
import { Image } from "@components/image/index.ts";
import { Inline, Stack } from "@components/layout/index.ts";
import { Tile } from "@components/tile/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Tile",
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
    name: "images",
    render: () => (
        <Inline>
            <Stack>
                <Tile width="300px" orientation="vertical">
                    <Image src={Apollo11Banner} alt="Apollo 11 Banner" />
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </Tile>
                <Tile width="500px" orientation="horizontal">
                    <Image src={Apollo11Poster} alt="Apollo 11 Poster" />
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </Tile>
            </Stack>
        </Inline>
    )
};

export const FlexLayout: TileStory = {
    name: "flex layout",
    render: () => (
        <Stack>
            <Inline>
                <Tile width="500px" orientation="vertical">
                    <Illustration color="sapphire-200">
                        <Image src={Nasa} width="100px" alt="Nasa Logo" />
                    </Illustration>
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </Tile>
                <Tile width="500px" orientation="vertical">
                    <Illustration color="sapphire-200">
                        <Image src={Nasa} width="100px" alt="Nasa Logo" />
                    </Illustration>
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </Tile>
            </Inline>
            <Inline>
                <Tile width="500px" orientation="horizontal">
                    <Illustration color="sapphire-200">
                        <Image src={Nasa} width="100px" alt="Nasa Logo" />
                    </Illustration>
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </Tile>
                <Tile width="500px" orientation="horizontal">
                    <Illustration color="sapphire-200">
                        <Image src={Nasa} width="100px" alt="Nasa Logo" />
                    </Illustration>
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </Tile>
            </Inline>
        </Stack>
    )
};

// createTileTestSuite(<Tile orientation="horizontal" width="600px" />, stories("/horizontal"));
// createTileTestSuite(<Tile orientation="vertical" width="300px" />, stories("/vertical"));
