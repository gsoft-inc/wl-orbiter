import { Div } from "@components/html";
import { Dot } from "@components/dot";
import { Inline, Stack } from "@components/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Dot",
    component: Dot
} as Meta<typeof Dot>;

export default meta;

type DotStory = StoryObj<typeof meta>;

export const Default: DotStory = {
    name: "default",
    render: () => (
        <Dot color="neutral-weakest" />
    )
};

export const Label: DotStory = {
    name: "label",
    render: () => (
        <Dot color="neutral-weakest">Habitable</Dot>
    )
};

export const Color: DotStory = {
    name: "color",
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
    name: "zoom",
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
    name: "styling",
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
