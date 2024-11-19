import { DeletedAvatar } from "@components/avatar/index.ts";
import { Div } from "@components/html/index.ts";
import { Inline, Stack } from "@components/layout/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
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
    title: "Chromatic/Avatar - Deleted"
} as Meta<typeof DeletedAvatar>;

export default meta;

type DeletedAvatarStory = StoryObj<typeof meta>;

export const Default: DeletedAvatarStory = {
    name: "default",
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
    name: "zoom",
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
    name: "styling",
    render: () => (
        <Inline>
            <DeletedAvatar aria-label="Sally Ride" border="warning" />
            <DeletedAvatar aria-label="Sally Ride" className="border-red" />
            <DeletedAvatar aria-label="Sally Ride" style={{ border: "1px solid red" }} />
        </Inline>
    )
};
