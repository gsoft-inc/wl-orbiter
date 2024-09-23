import { DeletedAvatar } from "@components/avatar";
import { Div } from "@components/html";
import { Inline, Stack } from "@components/layout";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    component: DeletedAvatar,
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
    title: "Chromatic/Avatar-hopper - Deleted"
} as ComponentMeta<typeof DeletedAvatar>;

type DeletedAvatarStory = ComponentStoryObj<typeof DeletedAvatar>;

export const Default: DeletedAvatarStory = {
    storyName: "default",
    render: () => (
        <Inline alignY="center">
            <DeletedAvatar size="xs" aria-label="Neil Armstrong" />
            <DeletedAvatar size="sm" aria-label="Neil Armstrong" />
            <DeletedAvatar aria-label="Neil Armstrong" />
            <DeletedAvatar size="lg" aria-label="Neil Armstrong" />
            <DeletedAvatar size="xl" aria-label="Neil Armstrong" />
        </Inline>
    )
};

export const Zoom: DeletedAvatarStory = {
    storyName: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <DeletedAvatar aria-label="Neil Armstrong" />
            </Div>
            <Div className="zoom-out">
                <DeletedAvatar aria-label="Neil Armstrong" />
            </Div>
        </Stack>
    )
};

export const Styling: DeletedAvatarStory = {
    storyName: "styling",
    render: () => (
        <Inline>
            <DeletedAvatar aria-label="Sally Ride" border="warning" />
            <DeletedAvatar aria-label="Sally Ride" className="border-red" />
            <DeletedAvatar aria-label="Sally Ride" style={{ border: "1px solid red" }} />
        </Inline>
    )
};
