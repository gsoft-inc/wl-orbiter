import { Image } from "@components/image/index.ts";
import { Launch } from "./assets/index.ts";
import { Link } from "@components/link/index.ts";
import { Inline } from "@components/layout/index.ts";
import LaunchImage from "./LaunchImage.tsx";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Link/image",
    component: Link,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Link>;

export default meta;

type LinkStory = StoryObj<typeof meta>;

export const Default: LinkStory = {
    name: "default",
    render: () => (
        <Link href="#">
            <LaunchImage />
        </Link>
    )
};

export const States: LinkStory = {
    name: "states",
    render: () => (
        <Inline wrap>
            <Link active href="#">
                <LaunchImage />
            </Link>
            <Link focus href="#">
                <LaunchImage />
            </Link>
            <Link hover href="#">
                <LaunchImage />
            </Link>
            <Link focus hover href="#">
                <LaunchImage />
            </Link>
        </Inline>
    )
};

export const DisabledStates: LinkStory = {
    name: "disabled states",
    render: () => (
        <Inline wrap>
            <Link disabled href="#">
                <LaunchImage />
            </Link>
            <Link disabled active href="#">
                <LaunchImage />
            </Link>
            <Link disabled focus href="#">
                <LaunchImage />
            </Link>
            <Link disabled hover href="#">
                <LaunchImage />
            </Link>
            <Link disabled focus hover href="#">
                <LaunchImage />
            </Link>
        </Inline>
    )
};

export const External: LinkStory = {
    name: "external",
    render: () => (
        <Link external href="https://www.space.com/spacex-delays-south-korea-military-satellite-launch.html">
            <LaunchImage />
        </Link>
    )
};

export const NewTab: LinkStory = {
    name: "new tab",
    render: () => (
        <Link target="_blank" href="#">
            <LaunchImage />
        </Link>
    )
};

export const Rounded: LinkStory = {
    name: "rounded",
    render: () => (
        <Link shape="rounded" focus href="#">
            <Image width="4.5rem" height="4.5rem" src={Launch} alt="SpaceX Launch" />
        </Link>
    )
};

export const Circular: LinkStory = {
    name: "circular",
    render: () => (
        <Link shape="circular" focus href="#">
            <Image width="4.5rem" height="4.5rem" src={Launch} alt="SpaceX Launch" />
        </Link>
    )
};

export const Box: LinkStory = {
    name: "box",
    render: () => (
        <Link shape="box" focus href="#">
            <Image width="4.5rem" height="4.5rem" src={Launch} alt="SpaceX Launch" />
        </Link>
    )
};
