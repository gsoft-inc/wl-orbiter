import { Div } from "@components/html/index.js";
import { Dot } from "@components/dot/index.js";
import { Inline, Stack } from "@components/layout/index.js";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/Dot",
    component: Dot
} as ComponentMeta<typeof Dot>;

type DotStory = ComponentStoryObj<typeof Dot>;

export const Default: DotStory = {
    storyName: "default",
    render: () => (
        <Dot color="neutral-weakest" />
    )
};

export const Label: DotStory = {
    storyName: "label",
    render: () => (
        <Dot color="neutral-weakest">Habitable</Dot>
    )
};

export const Color: DotStory = {
    storyName: "color",
    render: () => (
        <Stack>
            <Dot color="hsl(25, 69%, 41%)"></Dot>
            <Dot color="hsla(25, 69%, 41%, 0.5)"></Dot>
            <Dot color="#a4b5dd"></Dot>
            <Dot color="rgb(128,0,0)"></Dot>
            <Dot color="rgb(128,0,0,0.5)"></Dot>
            <Dot color="primary"></Dot>
            <Dot color="red"></Dot>
            <Dot color="--hop-rock-600"></Dot>
        </Stack>
    )
};

export const Zoom: DotStory = {
    storyName: "zoom",
    render: () => (
        <Inline>
            <Div className="zoom-in">
                <Dot color="neutral-weakest" />
            </Div>
            <Div className="zoom-out">
                <Dot color="neutral-weakest" />
            </Div>
        </Inline>
    )
};

export const Styling: DotStory = {
    storyName: "styling",
    render: () => (
        <Stack>
            <Inline>
                <Dot border="warning" color="neutral-weakest"></Dot>
                <Dot className="border-red" color="neutral-weakest"></Dot>
                <Dot style={{ border: "1px solid red" }} color="neutral-weakest"></Dot>
            </Inline>
            <Inline>
                <Dot border="warning" color="neutral-weakest">Habitable</Dot>
                <Dot className="border-red" color="neutral-weakest">Habitable</Dot>
                <Dot style={{ border: "1px solid red" }} color="neutral-weakest">Habitable</Dot>
            </Inline>
        </Stack>
    )
};
