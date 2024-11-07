import { Inline } from "@components/layout/index.ts";
import { NoResults } from "./assets/index.ts";
import { SvgImage } from "@components/image/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/SvgImage",
    component: SvgImage,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof SvgImage>;

export default meta;

type SvgImageStory = StoryObj<typeof meta>;

export const Stroke: SvgImageStory = {
    name: "stroke",
    render: () => (
        <SvgImage stroke="neutral" src={NoResults} aria-label="No Results" />
    )
};

export const Fill: SvgImageStory = {
    name: "fill",
    render: () => (
        <SvgImage fill="neutral" src={NoResults} aria-label="No Results" />
    )
};

export const Width: SvgImageStory = {
    name: "width",
    render: () => (
        <SvgImage width="100px" src={NoResults} stroke="neutral" aria-label="No Results" />
    )
};

export const Height: SvgImageStory = {
    name: "height",
    render: () => (
        <SvgImage height="100px" src={NoResults} stroke="neutral" aria-label="No Results" />
    )
};

export const Styling: SvgImageStory = {
    name: "styling",
    render: () => (
        <Inline>
            <SvgImage className="stroke-red" src={NoResults} aria-label="No Results" />
            <SvgImage style={{ stroke: "red" }} src={NoResults} aria-label="No Results" />
        </Inline>
    )
};
