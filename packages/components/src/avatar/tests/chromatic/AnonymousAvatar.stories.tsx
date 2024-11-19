import { AnonymousAvatar } from "@components/avatar/index.ts";
import { Div } from "@components/html/index.ts";
import { Inline, Stack } from "@components/layout/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    component: AnonymousAvatar,
    parameters: {
        a11y: {
            config: {
                rules: [
                    {
                        id: "color-contrast",
                        enabled: false
                    }
                ]
            }
        }
    },
    title: "Chromatic/Avatar - Anonymous"
} as Meta<typeof AnonymousAvatar>;

export default meta;

type AnonymousAvatarStory = StoryObj<typeof meta>;

export const Default: AnonymousAvatarStory = {
    name: "default",
    render: () => (
        <Inline alignY="center">
            <AnonymousAvatar size="xs" aria-label="Neil Armstrong" />
            <AnonymousAvatar size="sm" aria-label="Neil Armstrong" />
            <AnonymousAvatar aria-label="Neil Armstrong" />
            <AnonymousAvatar size="lg" aria-label="Neil Armstrong" />
            <AnonymousAvatar size="xl" aria-label="Neil Armstrong" />
        </Inline>
    )
};

export const Zoom: AnonymousAvatarStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <AnonymousAvatar aria-label="Neil Armstrong" />
            </Div>
            <Div className="zoom-out">
                <AnonymousAvatar aria-label="Neil Armstrong" />
            </Div>
        </Stack>
    )
};

export const Styling: AnonymousAvatarStory = {
    name: "styling",
    render: () => (
        <Inline>
            <AnonymousAvatar aria-label="Sally Ride" border="warning" />
            <AnonymousAvatar aria-label="Sally Ride" className="border-red" />
            <AnonymousAvatar aria-label="Sally Ride" style={{ border: "1px solid red" }} />
        </Inline>
    )
};
