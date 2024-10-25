import { Box } from "@components/box";
import { Div } from "@components/html";
import { Illustration } from "@components/illustration";
import { Image } from "@components/image";
import { Inline, Stack } from "@components/layout";
import { Meta, StoryObj } from "@storybook/react";
import { Nasa } from "./assets";

const meta = {
    title: "Chromatic/Illustration",
    component: Illustration,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Illustration>;

export default meta;

type IllustrationStory = StoryObj<typeof meta>;

export const Default: IllustrationStory = {
    name: "default",
    render: () => (
        <Illustration>
            <Image src={Nasa} alt="Nasa" width="150px" />
        </Illustration>
    )
};

export const Horizontal: IllustrationStory = {
    name: "horizontal",
    render: () => (
        <Stack>
            <Illustration orientation="horizontal" width="700px" height="200px" backgroundColor="sapphire-200">
                <Image src={Nasa} alt="Nasa" />
            </Illustration>
            <Box width="700px" height="200px">
                <Illustration orientation="horizontal" backgroundColor="sapphire-200">
                    <Image src={Nasa} alt="Nasa" />
                </Illustration>
            </Box>
        </Stack>
    )
};

export const Vertical: IllustrationStory = {
    name: "vertical",
    render: () => (
        <Inline>
            <Illustration orientation="vertical" width="200px" height="500px" backgroundColor="sapphire-200">
                <Image src={Nasa} alt="Nasa" />
            </Illustration>
            <Box width="200px" height="500px">
                <Illustration orientation="vertical" backgroundColor="sapphire-200">
                    <Image src={Nasa} alt="Nasa" />
                </Illustration>
            </Box>
        </Inline>
    )
};

export const Straight: IllustrationStory = {
    name: "straight",
    render: () => (
        <Illustration shape="straight" width="700px" height="200px" backgroundColor="sapphire-200">
            <Image src={Nasa} alt="Nasa" />
        </Illustration>
    )
};

export const Rounded: IllustrationStory = {
    name: "rounded",
    render: () => (
        <Illustration shape="rounded" width="700px" height="200px" backgroundColor="sapphire-200">
            <Image src={Nasa} alt="Nasa" />
        </Illustration>
    )
};

export const Color: IllustrationStory = {
    name: "color",
    render: () => (
        <Stack>
            <Inline>
                <Illustration backgroundColor="sapphire-200" width="700px" height="200px">
                    <Image src={Nasa} alt="Nasa" />
                </Illustration>
                <Illustration backgroundColor="rgb(151, 231, 222)" width="700px" height="200px">
                    <Image src={Nasa} alt="Nasa" />
                </Illustration>
            </Inline>
            <Inline>
                <Illustration backgroundColor="hsla(173, 63%, 75%, 1)" width="700px" height="200px">
                    <Image src={Nasa} alt="Nasa" />
                </Illustration>
                <Illustration backgroundColor="#97e7de" width="700px" height="200px">
                    <Image src={Nasa} alt="Nasa" />
                </Illustration>
            </Inline>
        </Stack>
    )
};

export const Zoom: IllustrationStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <Illustration border="warning" width="700px" height="200px">
                    <Image src={Nasa} alt="Nasa" />
                </Illustration>
            </Div>
            <Div className="zoom-out">
                <Illustration border="warning" width="700px" height="200px">
                    <Image src={Nasa} alt="Nasa" />
                </Illustration>
            </Div>
        </Stack>
    )
};

export const Styling: IllustrationStory = {
    name: "styling",
    render: () => (
        <Stack>
            <Illustration border="warning" width="700px" height="200px">
                <Image src={Nasa} alt="Nasa" />
            </Illustration>
            <Illustration className="border-red" width="700px" height="200px">
                <Image src={Nasa} alt="Nasa" />
            </Illustration>
            <Illustration style={{ border: "1px solid red" }} width="700px" height="200px">
                <Image src={Nasa} alt="Nasa" />
            </Illustration>
        </Stack>
    )
};
