import { Loader } from "@components/loader";
import { Inline, Stack } from "@components/layout";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    component: Loader,
    title: "Chromatic/Loader",
    parameters: {
        chromatic: {
            delay: 100,
            chromaticPauseAnimationAtEnd: true
        }
    }
} as Meta<typeof Loader>;

export default meta;

type LoaderStory = StoryObj<typeof meta>;

export const Default: LoaderStory = {
    name: "default",
    render: () => (
        <Loader aria-label="Loading..." />
    )
};

export const Styling: LoaderStory = {
    name: "styling",
    render: () => (
        <Inline alignY="end" >
            <Loader className="border-red" aria-label="Loading..." />
            <Loader style={{ border: "1px solid red" }} aria-label="Loading..." />
        </Inline>
    )
};

export const Zoom: LoaderStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Inline alignY="end" className="zoom-in">
                <Loader aria-label="Loading..." />
            </Inline>
            <Inline alignY="end" className="zoom-out">
                <Loader aria-label="Loading..." />
            </Inline>
        </Stack>
    )
};

