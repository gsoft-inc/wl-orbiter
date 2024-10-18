import { Box } from "@components/box";
import { Content } from "@components/placeholders";
import { Div } from "@components/html";
import { Heading } from "@components/typography";
import { IllustratedMessage } from "@components/illustrated-message";
import { Image } from "@components/image";
import { Inline, Stack } from "@components/layout";
import { Nasa } from "./assets";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/IllustratedMessage",
    component: IllustratedMessage
} as Meta<typeof IllustratedMessage>;

export default meta;

type IllustratedMessageStory = StoryObj<typeof meta>;


export const Default: IllustratedMessageStory = {
    name: "default",
    render: () => (
        <IllustratedMessage>
            <Image src={Nasa} alt="Nasa" width="150px" />
            <Heading>Can't find "Saturn"</Heading>
            <Content>Try searching for something else.</Content>
        </IllustratedMessage>
    )
};

export const Horizontal: IllustratedMessageStory = {
    name: "horizontal",
    render: () => (
        <Stack>
            <IllustratedMessage orientation="horizontal" width="700px" height="200px">
                <Image src={Nasa} alt="Nasa" />
                <Heading>Can't find "Saturn"</Heading>
                <Content>Try searching for something else.</Content>
            </IllustratedMessage>
            <Box width="700px" height="200px">
                <IllustratedMessage orientation="horizontal">
                    <Image src={Nasa} alt="Nasa" />
                    <Heading>Can't find "Saturn"</Heading>
                    <Content>Try searching for something else.</Content>
                </IllustratedMessage>
            </Box>
        </Stack>
    )
};

export const Vertical: IllustratedMessageStory = {
    name: "vertical",
    render: () => (
        <Inline>
            <IllustratedMessage orientation="vertical" width="200px" height="500px">
                <Image src={Nasa} alt="Nasa" />
                <Heading>Can't find "Saturn"</Heading>
                <Content>Try searching for something else.</Content>
            </IllustratedMessage>
            <Box width="200px" height="500px">
                <IllustratedMessage orientation="vertical">
                    <Image src={Nasa} alt="Nasa" />
                    <Heading>Can't find "Saturn"</Heading>
                    <Content>Try searching for something else.</Content>
                </IllustratedMessage>
            </Box>
        </Inline>
    )
};

export const VeryLongTitle: IllustratedMessageStory = {
    name: "very long title",
    render: () => (
        <IllustratedMessage width="700px" height="200px">
            <Image src={Nasa} alt="Nasa" />
            <Heading>Can't find "Saturn" or "Mars" or another continent.</Heading>
            <Content>Try searching for something else.</Content>
        </IllustratedMessage>
    )
};

export const VeryLongContent: IllustratedMessageStory = {
    name: "very long content",
    render: () => (
        <IllustratedMessage width="700px" height="200px" orientation="horizontal">
            <Image src={Nasa} alt="Nasa" />
            <Heading>Can't find "Saturn"</Heading>
            <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit metus neque, non pharetra enim tincidunt dictum. Fusce in ultricies turpis, vitae finibus nunc. Quisque laoreet sit amet eros eget volutpat. Pellentesque non nulla dui. Sed nec felis quam. Vestibulum velit magna, fringilla ut neque cursus, porta rhoncus nulla. Suspendisse auctor sollicitudin tortor, quis viverra tellus egestas sed. Pellentesque ut dignissim nisi. Duis sit amet ex bibendum, pharetra purus eget, varius massa. In pulvinar dui quis dignissim commodo. Nulla facilisi..</Content>
        </IllustratedMessage>
    )
};

export const NoTitle: IllustratedMessageStory = {
    name: "no title",
    render: () => (
        <IllustratedMessage width="700px" height="200px">
            <Image src={Nasa} alt="Nasa" />
            <Content>Try searching for something else.</Content>
        </IllustratedMessage>
    )
};

export const NoDimensions: IllustratedMessageStory = {
    name: "no dimensions",
    render: () => (
        <Stack>
            <IllustratedMessage>
                <Image src={Nasa} alt="Nasa" width="150px" />
                <Heading>Can't find "Saturn"</Heading>
                <Content>Try searching for something else.</Content>
            </IllustratedMessage>
            <IllustratedMessage orientation="horizontal">
                <Image src={Nasa} alt="Nasa" width="150px" />
                <Heading>Can't find "Saturn"</Heading>
                <Content>Try searching for something else.</Content>
            </IllustratedMessage>
        </Stack>
    )
};

export const Zoom: IllustratedMessageStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <IllustratedMessage border="warning" width="700px" height="200px" orientation="horizontal">
                    <Image src={Nasa} alt="Nasa" />
                    <Heading>Can't find "Saturn"</Heading>
                    <Content>Try searching for something else.</Content>
                </IllustratedMessage>
            </Div>
            <Div className="zoom-out">
                <IllustratedMessage border="warning" width="700px" height="200px" orientation="horizontal">
                    <Image src={Nasa} alt="Nasa" />
                    <Heading>Can't find "Saturn"</Heading>
                    <Content>Try searching for something else.</Content>
                </IllustratedMessage>
            </Div>
        </Stack>
    )
};

export const Styling: IllustratedMessageStory = {
    name: "styling",
    render: () => (
        <Stack>
            <IllustratedMessage border="warning" width="700px" height="200px" orientation="horizontal">
                <Image src={Nasa} alt="Nasa" />
                <Heading>Can't find "Saturn"</Heading>
                <Content>Try searching for something else.</Content>
            </IllustratedMessage>
            <IllustratedMessage className="border-red" width="700px" height="200px" orientation="horizontal">
                <Image src={Nasa} alt="Nasa" />
                <Heading>Can't find "Saturn"</Heading>
                <Content>Try searching for something else.</Content>
            </IllustratedMessage>
            <IllustratedMessage style={{ border: "1px solid red" }} width="700px" height="200px" orientation="horizontal">
                <Image src={Nasa} alt="Nasa" />
                <Heading>Can't find "Saturn"</Heading>
                <Content>Try searching for something else.</Content>
            </IllustratedMessage>
        </Stack>
    )
};
