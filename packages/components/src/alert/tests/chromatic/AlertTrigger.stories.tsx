import { Alert, AlertTrigger } from "@components/alert/index.ts";
import { Button } from "@components/button/index.ts";
import { Content } from "@components/placeholders/index.ts";
import { Heading } from "@components/typography/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/AlertTrigger",
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
