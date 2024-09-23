import { AnonymousAvatar } from "@components/avatar";
import { Div } from "@components/html";
import { Inline, Stack } from "@components/layout";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
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
} as ComponentMeta<typeof AnonymousAvatar>;

type AnonymousAvatarStory = ComponentStoryObj<typeof AnonymousAvatar>;

export const Default: AnonymousAvatarStory = {
    storyName: "default",
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
    storyName: "zoom",
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
    storyName: "styling",
    render: () => (
        <Inline>
            <AnonymousAvatar aria-label="Sally Ride" border="warning" />
            <AnonymousAvatar aria-label="Sally Ride" className="border-red" />
            <AnonymousAvatar aria-label="Sally Ride" style={{ border: "1px solid red" }} />
        </Inline>
    )
};
