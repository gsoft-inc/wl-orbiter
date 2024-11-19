import { GalaxyImage, GalaxyImage2x, GalaxyImageLg, NoResults } from "./assets/index.ts";
import { Image, SvgImage } from "@components/image/index.ts";
import { Inline } from "@components/layout/index.ts";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Image",
    component: Image,
    id: "image"
} as Meta<typeof Image>;

export default meta;

type ImageStory = StoryObj<typeof meta>;

export const Shape: ImageStory = {
    render: () => (
        <Inline>
            <Image alt="Galaxy" height={960} shape="rounded" src={GalaxyImage} width={960} />
            <Image alt="Galaxy" height={960} shape="circular" src={GalaxyImage} width={960} />
        </Inline>
    )
};

export const Size: ImageStory = {
    render: () => (
        <Image alt="Galaxy" height="200px" src={GalaxyImageLg} width="200px" />
    )
};

export const Retina: ImageStory = {
    render: () => (
        <Image alt="Galaxy" height="200px" srcSet={`${GalaxyImage} 1x, ${GalaxyImage2x} 2x`} width="200px" />
    )
};

export const SVGImageStory: ImageStory = {
    render: () => (
        <SvgImage aria-label="No results" src={NoResults} stroke="sapphire-600" />
    )
};

export const SVGImageSize: ImageStory = {
    render: () => (
        <SvgImage aria-label="No results" height="150px" src={NoResults} stroke="sapphire-600" width="150px" />
    )
};

export const Color: ImageStory = {
    render: () => (
        <SvgImage aria-label="No results" fill="sunken-treasure-100" src={NoResults} stroke="sapphire-600" />
    )
};
