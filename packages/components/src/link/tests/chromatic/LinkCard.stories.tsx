import { Link } from "@components/link/index.ts";
import { Inline } from "@components/layout/index.ts";
import Card from "./Card";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Link/card",
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
            <Card />
        </Link>
    )
};

export const States: LinkStory = {
    name: "states",
    render: () => (
        <Inline wrap>
            <Link active href="#">
                <Card />
            </Link>
            <Link focus href="#">
                <Card />
            </Link>
            <Link hover href="#">
                <Card />
            </Link>
            <Link focus hover href="#">
                <Card />
            </Link>
        </Inline>
    )
};

export const DisabledStates: LinkStory = {
    name: "disabled states",
    render: () => (
        <Inline wrap>
            <Link disabled href="#">
                <Card />
            </Link>
            <Link disabled active href="#">
                <Card />
            </Link>
            <Link disabled focus href="#">
                <Card />
            </Link>
            <Link disabled hover href="#">
                <Card />
            </Link>
            <Link disabled focus hover href="#">
                <Card />
            </Link>
        </Inline>
    )
};

export const External: LinkStory = {
    name: "external",
    render: () => (
        <Link external href="https://www.space.com/spacex-delays-south-korea-military-satellite-launch.html">
            <Card />
        </Link>
    )
};

export const NewTab: LinkStory = {
    name: "new tab",
    render: () => (
        <Link target="_blank" href="#">
            <Card />
        </Link>
    )
};
