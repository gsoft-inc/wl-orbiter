import { Content } from "@components/placeholders";
import { Alert, AlertTrigger } from "@components/alert";
import { Button, Heading } from "@hopper-ui/components";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/AlertTrigger-hopper",
    component: AlertTrigger,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof AlertTrigger>;

export default meta;

type AlertTriggerStory = StoryObj<typeof meta>;

export const Default: AlertTriggerStory = {
    name: "default",
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
    name: "default open",
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
