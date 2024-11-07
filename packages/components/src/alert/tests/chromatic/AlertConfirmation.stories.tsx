import { Alert } from "@components/alert/index.ts";
import { Content } from "@components/placeholders/index.ts";
import { Heading } from "@components/typography/index.ts";
import { Div } from "@components/html/index.ts";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Alert/confirmation",
    component: Alert,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Alert>;

export default meta;

type AlertStory = StoryObj<typeof meta>;

export const DefaultAlert: AlertStory = {
    name: "default",
    render: () => (
        <Alert
            primaryButtonLabel="Yes"
            variant="confirmation"
        >
            <Heading>Launch</Heading>
            <Content>Are you sure you want to launch the space shuttle?</Content>
        </Alert>
    )
};

export const PrimaryButtonDisabled: AlertStory = {
    name: "primary button disabled",
    render: () => (
        <Alert
            primaryButtonLabel="Yes"
            primaryButtonDisabled
            variant="confirmation"
        >
            <Heading>Launch</Heading>
            <Content>Are you sure you want to launch the space shuttle?</Content>
        </Alert>
    )
};

export const SecondaryButton: AlertStory = {
    name: "secondary button",
    render: () => (
        <Alert
            primaryButtonLabel="Launch"
            secondaryButtonLabel="Postpone"
            variant="confirmation"
        >
            <Heading>Launch</Heading>
            <Content>Are you sure you want to launch the space shuttle?</Content>
        </Alert>
    )
};

export const SecondaryButtonDisabled: AlertStory = {
    name: "secondary button disabled",
    render: () => (
        <Alert
            primaryButtonLabel="Launch"
            secondaryButtonLabel="Postpone"
            secondaryButtonDisabled
            variant="confirmation"
        >
            <Heading>Launch</Heading>
            <Content>Are you sure you want to launch the space shuttle?</Content>
        </Alert>
    )
};

export const CancelButton: AlertStory = {
    name: "cancel button",
    render: () => (
        <Alert
            primaryButtonLabel="Yes"
            cancelButtonLabel="No"
            variant="confirmation"
        >
            <Heading>Launch</Heading>
            <Content>Are you sure you want to launch the space shuttle?</Content>
        </Alert>
    )
};

export const All3Buttons: AlertStory = {
    name: "all 3 buttons",
    render: () => (
        <Alert
            primaryButtonLabel="Launch"
            secondaryButtonLabel="Postpone"
            cancelButtonLabel="Cancel"
            variant="confirmation"
        >
            <Heading>Launch</Heading>
            <Content>Are you sure you want to launch the space shuttle?</Content>
        </Alert>
    )
};

export const NotDismissable: AlertStory = {
    name: "not dismissable",
    render: () => (
        <Alert
            primaryButtonLabel="Launch"
            secondaryButtonLabel="Postpone"
            variant="confirmation"
            dismissable={false}
        >
            <Heading>Launch</Heading>
            <Content>Are you sure you want to launch the space shuttle?</Content>
        </Alert>
    )
};

export const ZoomIn: AlertStory = {
    name: "zoom in",
    render: () => (
        <Div className="zoom-in">
            <Alert primaryButtonLabel="Yes" variant="confirmation">
                <Heading>Launch</Heading>
                <Content>Are you sure you want to launch the space shuttle?</Content>
            </Alert>
        </Div>
    )
};

export const ZoomOut: AlertStory = {
    name: "zoom out",
    render: () => (
        <Div className="zoom-out">
            <Alert primaryButtonLabel="Yes" variant="confirmation">
                <Heading>Launch</Heading>
                <Content>Are you sure you want to launch the space shuttle?</Content>
            </Alert>
        </Div>
    )
};