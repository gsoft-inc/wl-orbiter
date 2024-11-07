import { Div } from "@components/html/index.ts";
import { Image } from "@components/image/index.ts";
import { Inline, Stack } from "@components/layout/index.ts";
import { Meta, StoryObj } from "@storybook/react";
import { Launch, Mars } from "./assets";

const meta = {
    title: "Chromatic/Image",
    component: Image,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Image>;

export default meta;

type ImageStory = StoryObj<typeof meta>;

export const Default: ImageStory = {
    name: "default",
    render: () => (
        <Image src={Launch} alt="SpaceX launch" />
    )
};

export const Contained: ImageStory = {
    name: "contained",
    render: () => (
        <Div width="200px" height="200px">
            <Image src={Launch} alt="SpaceX launch" />
        </Div>
    )
};

export const Size: ImageStory = {
    name: "size",
    render: () => (
        <Stack>
            <Image width="200px" src={Launch} alt="SpaceX launch" />
            <Image width="200px" height="200px" src={Launch} alt="SpaceX launch" />
        </Stack>
    )
};

export const Straight: ImageStory = {
    name: "straight",
    render: () => (
        <Inline alignY="end">
            <Image shape="straight" width="50px" height="50px" src={Launch} alt="SpaceX launch" />
            <Image shape="straight" width="100px" height="100px" src={Launch} alt="SpaceX launch" />
            <Image shape="straight" width="200px" height="200px" src={Launch} alt="SpaceX launch" />
            <Image shape="straight" width="300px" height="300px" src={Launch} alt="SpaceX launch" />
            <Image shape="straight" src={Launch} alt="SpaceX launch" />
        </Inline>
    )
};

export const Rounded: ImageStory = {
    name: "rounded",
    render: () => (
        <Inline alignY="end">
            <Image shape="rounded" width="50px" height="50px" src={Launch} alt="SpaceX launch" />
            <Image shape="rounded" width="100px" height="100px" src={Launch} alt="SpaceX launch" />
            <Image shape="rounded" width="200px" height="200px" src={Launch} alt="SpaceX launch" />
            <Image shape="rounded" width="300px" height="300px" src={Launch} alt="SpaceX launch" />
            <Image shape="rounded" src={Launch} alt="SpaceX launch" />
        </Inline>
    )
};

export const Circular: ImageStory = {
    name: "circular",
    render: () => (
        <Inline alignY="end">
            <Image shape="circular" width="50px" height="50px" src={Launch} alt="SpaceX launch" />
            <Image shape="circular" width="100px" height="100px" src={Launch} alt="SpaceX launch" />
            <Image shape="circular" width="200px" height="200px" src={Launch} alt="SpaceX launch" />
            <Image shape="circular" width="300px" height="300px" src={Launch} alt="SpaceX launch" />
            <Image shape="circular" src={Launch} alt="SpaceX launch" />
        </Inline>
    )
};

export const ObjectFit: ImageStory = {
    name: "object fit",
    render: () => (
        <Inline>
            <Div width="200px" height="200px">
                <Image objectFit="fill" width="100%" height="100%" src={Launch} alt="SpaceX launch" />
            </Div>
            <Div width="200px" height="200px">
                <Image objectFit="contain" width="100%" height="100%" src={Launch} alt="SpaceX launch" />
            </Div>
            <Div width="200px" height="200px">
                <Image objectFit="cover" width="100%" height="100%" src={Launch} alt="SpaceX launch" />
            </Div>
            <Div width="200px" height="200px">
                <Image objectFit="scale-down" width="100%" height="100%" src={Launch} alt="SpaceX launch" />
            </Div>
            <Div width="200px" height="200px">
                <Image objectFit="none" width="100%" height="100%" src={Launch} alt="SpaceX launch" />
            </Div>
        </Inline>
    )
};

export const ObjectPosition: ImageStory = {
    name: "object position",
    render: () => (
        <Inline>
            <Image objectPosition="50% 50%" objectFit="none" width="200px" height="200px" src={Mars} alt="SpaceX launch" />
            <Image objectPosition="right top" objectFit="none" width="200px" height="200px" src={Mars} alt="SpaceX launch" />
            <Image objectPosition="left bottom" objectFit="none" width="200px" height="200px" src={Mars} alt="SpaceX launch" />
            <Image objectPosition="27 17" objectFit="none" width="200px" height="200px" src={Mars} alt="SpaceX launch" />
        </Inline>
    )
};

export const Zoom: ImageStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <Image src={Launch} alt="SpaceX launch" />
            </Div>
            <Div className="zoom-out">
                <Image src={Launch} alt="SpaceX launch" />
            </Div>
        </Stack>
    )
};

export const Styling: ImageStory = {
    name: "styling",
    render: () => (
        <Inline>
            <Image border="warning" src={Mars} alt="SpaceX launch" />
            <Image className="border-red" src={Mars} alt="SpaceX launch" />
            <Image style={{ border: "1px solid red" }} src={Mars} alt="SpaceX launch" />
        </Inline>
    )
};
