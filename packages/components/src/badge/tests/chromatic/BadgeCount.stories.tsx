import { Badge } from "@components/badge/index.ts";
import { Div } from "@components/html/index.ts";
import { Inline } from "@components/layout/index.ts";
import { CircleBadge, IconBadge, SquareBadge } from "./BadgeUtils";
import { Text } from "@components/typography/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    component: Badge,
    title: "Chromatic/Badge/count"
} as Meta<typeof Badge>;

export default meta;

type BadgeStory = StoryObj<typeof meta>;

export const Default: BadgeStory = {
    name: "default",
    render: () => (
        <Inline gap={400}>
            <SquareBadge>
                <Text>5</Text>
            </SquareBadge>
            <SquareBadge>
                <Text>5+</Text>
            </SquareBadge>
            <SquareBadge>
                <Text>50</Text>
            </SquareBadge>
            <SquareBadge>
                <Text>500</Text>
            </SquareBadge>
            <SquareBadge>
                <Text>500+</Text>
            </SquareBadge>
        </Inline>
    )
};

export const Overlap: BadgeStory = {
    name: "overlap",
    render: () => (
        <Inline gap={400}>
            <SquareBadge>
                <Text>50</Text>
            </SquareBadge>
            <CircleBadge>
                <Text>50</Text>
            </CircleBadge>
            <IconBadge>
                <Text>50</Text>
            </IconBadge>
        </Inline>
    )
};

export const Zoom: BadgeStory = {
    name: "zoom",
    render: () => (
        <Inline gap={400}>
            <Div className="zoom-in">
                <SquareBadge>
                    <Text>5</Text>
                </SquareBadge>
            </Div>
            <Div className="zoom-out">
                <SquareBadge>
                    <Text>5</Text>
                </SquareBadge>
            </Div>
        </Inline>
    )
};

export const Styling: BadgeStory = {
    name: "styling",
    render: () => (
        <Inline gap={400}>
            <SquareBadge border="warning">
                <Text>100</Text>
            </SquareBadge>
            <SquareBadge className="border-red">
                <Text>100</Text>
            </SquareBadge>
            <SquareBadge style={{ border: "1px solid red" }}>
                <Text>100</Text>
            </SquareBadge>
        </Inline>
    )
};
