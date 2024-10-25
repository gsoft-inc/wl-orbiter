import { Link } from "@components/link";
import { Inline } from "@components/layout";
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
        <Card>
            <Link href="#" />
        </Card>
    )
};

export const States: LinkStory = {
    name: "states",
    render: () => (
        <Inline wrap>
            <Card>
                <Link active href="#" />
            </Card>
            <Card>
                <Link focus href="#" />
            </Card>
            <Card>
                <Link hover href="#" />
            </Card>
            <Card>
                <Link focus hover href="#" />
            </Card>
        </Inline>
    )
};

export const DisabledStates: LinkStory = {
    name: "disabled states",
    render: () => (
        <Inline wrap>
            <Card>
                <Link disabled href="#" />
            </Card>
            <Card>
                <Link disabled active href="#" />
            </Card>
            <Card>
                <Link disabled focus href="#" />
            </Card>
            <Card>
                <Link disabled hover href="#" />
            </Card>
            <Card>
                <Link disabled focus hover href="#" />
            </Card>
        </Inline>
    )
};

export const External: LinkStory = {
    name: "external",
    render: () => (
        <Card>
            <Link external href="https://www.space.com/spacex-delays-south-korea-military-satellite-launch.html" />
        </Card>
    )
};

export const NewTab: LinkStory = {
    name: "new tab",
    render: () => (
        <Card>
            <Link target="_blank" href="#" />
        </Card>
    )
};
