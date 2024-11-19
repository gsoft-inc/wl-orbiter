import { Avatar } from "@components/avatar/index.ts";
import { Div } from "@components/html/index.ts";
import { Inline, Stack } from "@components/layout/index.ts";
import { Meta, StoryObj } from "@storybook/react";
import { Astronaut, Person } from "./assets/index.ts";

const meta = {
    title: "Chromatic/Avatar",
    component: Avatar,
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
        },
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Avatar>;

export default meta;

type AvatarStory = StoryObj<typeof meta>;

export const LocalImage: AvatarStory = {
    name: "local image",
    render: () => (
        <Inline alignY="center">
            <Avatar src={Person} size="xs" name="Neil Armstrong" />
            <Avatar src={Person} size="sm" name="Neil Armstrong" />
            <Avatar src={Person} name="Neil Armstrong" />
            <Avatar src={Person} size="lg" name="Neil Armstrong" />
            <Avatar src={Person} size="xl" name="Neil Armstrong" />
            <Avatar src={Person} size="2xl" name="Neil Armstrong" />
        </Inline>
    )
};

export const LocalImageRectangle: AvatarStory = {
    name: "local image rectangle",
    render: () => (
        <Inline alignY="center">
            <Avatar src={Astronaut} size="xs" name="Neil Armstrong" />
            <Avatar src={Astronaut} size="sm" name="Neil Armstrong" />
            <Avatar src={Astronaut} name="Neil Armstrong" />
            <Avatar src={Astronaut} size="lg" name="Neil Armstrong" />
            <Avatar src={Astronaut} size="xl" name="Neil Armstrong" />
            <Avatar src={Astronaut} size="2xl" name="Neil Armstrong" />
        </Inline>
    )
};

export const RemoteImage: AvatarStory = {
    name: "remote image",
    parameters: {
        chromatic: { delay: 500 }
    },
    render: () => (
        <Avatar size="xl" name="Neil Armstrong" src="https://randomuser.me/api/portraits/men/10.jpg" />
    )
};

export const FailingRemoteSrc: AvatarStory = {
    name: "failing remote src",
    render: () => (
        <Inline alignY="center">
            <Avatar size="xs" src="https://www.google.com" name="Neil Armstrong" />
            <Avatar size="sm" src="https://www.google.com" name="Neil Armstrong" />
            <Avatar src="https://www.google.com" name="Neil Armstrong" />
            <Avatar size="lg" src="https://www.google.com" name="Neil Armstrong" />
            <Avatar size="xl" src="https://www.google.com" name="Neil Armstrong" />
            <Avatar size="2xl" src="https://www.google.com" name="Neil Armstrong" />
        </Inline>
    )
};

export const Initials: AvatarStory = {
    name: "initials",
    render: () => (
        <Stack>
            <Inline alignY="center">
                <Avatar size="xs" name="Neil Armstrong" />
                <Avatar size="sm" name="Neil Armstrong" />
                <Avatar name="Neil Armstrong" />
                <Avatar size="lg" name="Neil Armstrong" />
                <Avatar size="xl" name="Neil Armstrong" />
                <Avatar size="2xl" name="Neil Armstrong" />
            </Inline>
            <Inline>
                <Avatar name="Sally Ride" />
                <Avatar name="Alan Shepard" />
                <Avatar name="Chris Hadfield" />
                <Avatar name="Christa McAuliffe" />
            </Inline>
        </Stack>
    )
};

export const EmptySrc: AvatarStory = {
    name: "empty src",
    render: () => (
        <Inline alignY="center">
            <Avatar src="" size="xs" name="Neil Armstrong" />
            <Avatar src="" size="sm" name="Neil Armstrong" />
            <Avatar src="" name="Neil Armstrong" />
            <Avatar src="" size="lg" name="Neil Armstrong" />
            <Avatar src="" size="xl" name="Neil Armstrong" />
        </Inline>
    )
};

export const Zoom: AvatarStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <Avatar src={Person} name="Neil Armstrong" />
            </Div>
            <Div className="zoom-out">
                <Avatar src={Person} name="Neil Armstrong" />
            </Div>
        </Stack>
    )
};

export const Styling: AvatarStory = {
    name: "styling",
    render: () => (
        <Inline>
            <Avatar name="Sally Ride" border="warning" />
            <Avatar name="Sally Ride" className="border-red" />
            <Avatar name="Sally Ride" style={{ border: "1px solid red" }} />
        </Inline>
    )
};
