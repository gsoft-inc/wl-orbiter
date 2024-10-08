import { Content } from "@components/placeholders";
import { Alert, AlertTrigger } from "@components/alert";
import { Button, Heading } from "@hopper-ui/components";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/AlertTrigger-hopper",
    component: AlertTrigger
} as ComponentMeta<typeof AlertTrigger>;

type AlertTriggerStory = ComponentStoryObj<typeof AlertTrigger>;

export const Default: AlertTriggerStory = {
    storyName: "default",
    render: () => (
        <AlertTrigger>
            <Button variant="secondary">Open</Button>
            <Alert primaryButtonLabel="Yes">
                <Heading>Launch</Heading>
                <Content>Are you sure you want to launch the space shuttle?</Content>
            </Alert>
        </AlertTrigger>
    )
};

export const DefaultOpen: AlertTriggerStory = {
    storyName: "default open",
    render: () => (
        <AlertTrigger defaultOpen>
            <Button variant="secondary">Open</Button>
            <Alert primaryButtonLabel="Yes">
                <Heading>Launch</Heading>
                <Content>Are you sure you want to launch the space shuttle?</Content>
            </Alert>
        </AlertTrigger>
    )
};
