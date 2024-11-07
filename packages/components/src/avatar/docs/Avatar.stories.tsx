import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup, AnonymousAvatar, DeletedAvatar } from "@components/avatar/index.ts";
import { ChrisHadfield } from "./assets";
import { Inline } from "@components/layout/index.ts";

const meta = {
    title: "Components/Avatar",
    component: Avatar,
    id: "avatar",
    parameters: {
        a11y: {
            config: {
                rules: [
                    { id: "color-contrast", enabled: false }
                ]
            }
        }
    }
} as Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    render: () => (
        <Avatar name="Alan Shepard" />
    )
};

export const LocalImage: Story = {
    render: () => (
        <Avatar name="Chris Hadfield" src={ChrisHadfield} />
    )
};

export const RemoteImage: Story = {
    render: () => (
        <Avatar name="Chris Hadfield" src="https://raw.githubusercontent.com/gsoft-inc/wl-orbiter/master/packages/components/src/avatar/docs/assets/hadfield.png" />
    )
};

export const Size: Story = {
    render: () => (
        <Inline alignY="center">
            <Avatar name="Chris Hadfield" size="xs" src={ChrisHadfield} />
            <Avatar name="Chris Hadfield" size="sm" src={ChrisHadfield} />
            <Avatar name="Chris Hadfield" size="md" src={ChrisHadfield} />
            <Avatar name="Chris Hadfield" size="lg" src={ChrisHadfield} />
            <Avatar name="Chris Hadfield" size="xl" src={ChrisHadfield} />
            <Avatar name="Chris Hadfield" size="2xl" src={ChrisHadfield} />
        </Inline>
    )
};

export const DeletedAvatarStory: Story = {
    render: () => (
        <Inline alignY="center">
            <DeletedAvatar aria-label="Deleted user" size="xs" />
            <DeletedAvatar aria-label="Deleted user" size="sm" />
            <DeletedAvatar aria-label="Deleted user" size="md" />
            <DeletedAvatar aria-label="Deleted user" size="lg" />
            <DeletedAvatar aria-label="Deleted user" size="xl" />
            <DeletedAvatar aria-label="Deleted user" size="2xl" />
        </Inline>
    )
};

export const AnonymousAvatarStory: Story = {
    render: () => (
        <Inline alignY="center">
            <AnonymousAvatar aria-label="Anonymous user" size="xs" />
            <AnonymousAvatar aria-label="Anonymous user" size="sm" />
            <AnonymousAvatar aria-label="Anonymous user" size="md" />
            <AnonymousAvatar aria-label="Anonymous user" size="lg" />
            <AnonymousAvatar aria-label="Anonymous user" size="xl" />
            <AnonymousAvatar aria-label="Anonymous user" size="2xl" />
        </Inline>
    )
};

export const AvatarGroupStory: Story = {
    render: () => (
        <AvatarGroup>
            <Avatar name="Alan Shepard" />
            <DeletedAvatar aria-label="Deleted user" />
            <AnonymousAvatar aria-label="Anonymous user" />
            <Avatar name="Chris Hadfield" src={ChrisHadfield} />
        </AvatarGroup>
    )
};

export const AvatarGroupRemainings: Story = {
    render: () => (
        <AvatarGroup>
            <Avatar name="Sally Ride" />
            <Avatar name="Alan Shepard" />
            <Avatar name="Chris Hadfield" src={ChrisHadfield} />
            <Avatar name="Christa McAuliffe" />
            <Avatar name="Neil Armstrong" />
            <DeletedAvatar aria-label="Deleted user" />
            <AnonymousAvatar aria-label="Anonymous user" />
        </AvatarGroup>
    )
};
