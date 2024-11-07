import { Alert } from "@components/alert/index.ts";
import { Content } from "@components/placeholders/index.ts";
import { Heading } from "@hopper-ui/components";
import { Div } from "@components/html/index.ts";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Alert-hopper/destructive",
    component: Alert,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Alert>;

export default meta;

type AlertDestructiveHopperStory = StoryObj<typeof meta>;

export const Default: AlertDestructiveHopperStory = {
    name: "default",
    render: () => (
        <Alert
            primaryButtonLabel="Yes"
            variant="destructive"
        >
            <Heading>Launch</Heading>
            <Content>Are you sure you want to launch the space shuttle?</Content>
        </Alert>
    )
};

export const PrimaryButtonDisabled: AlertDestructiveHopperStory = {
    name: "primary button disabled",
    render: () => (
        <Alert
            primaryButtonLabel="Yes"
            primaryButtonDisabled
            variant="destructive"
        >
            <Heading>Launch</Heading>
            <Content>Are you sure you want to launch the space shuttle?</Content>
        </Alert>
    )
};

export const SecondaryButton: AlertDestructiveHopperStory = {
    name: "secondary button",
    render: () => (
        <Alert
            primaryButtonLabel="Launch"
            secondaryButtonLabel="Postpone"
            variant="destructive"
        >
            <Heading>Launch</Heading>
            <Content>Are you sure you want to launch the space shuttle?</Content>
        </Alert>
    )
};

export const SecondaryButtonDisabled: AlertDestructiveHopperStory = {
    name: "secondary button disabled",
    render: () => (
        <Alert
            primaryButtonLabel="Launch"
            secondaryButtonLabel="Postpone"
            secondaryButtonDisabled
            variant="destructive"
        >
            <Heading>Launch</Heading>
            <Content>Are you sure you want to launch the space shuttle?</Content>
        </Alert>
    )
};

export const CancelButton: AlertDestructiveHopperStory = {
    name: "cancel button",
    render: () => (
        <Alert
            primaryButtonLabel="Yes"
            cancelButtonLabel="No"
            variant="destructive"
        >
            <Heading>Launch</Heading>
            <Content>Are you sure you want to launch the space shuttle?</Content>
        </Alert>
    )
};

export const All3Buttons: AlertDestructiveHopperStory = {
    name: "all 3 buttons",
    render: () => (
        <Alert
            primaryButtonLabel="Launch"
            secondaryButtonLabel="Postpone"
            cancelButtonLabel="Cancel"
            variant="destructive"
        >
            <Heading>Launch</Heading>
            <Content>Are you sure you want to launch the space shuttle?</Content>
        </Alert>
    )
};

export const NotDismissable: AlertDestructiveHopperStory = {
    name: "not dismissable",
    render: () => (
        <Alert
            primaryButtonLabel="Launch"
            secondaryButtonLabel="Postpone"
            variant="destructive"
            dismissable={false}
        >
            <Heading>Launch</Heading>
            <Content>Are you sure you want to launch the space shuttle?</Content>
        </Alert>
    )
};

export const ZoomIn: AlertDestructiveHopperStory = {
    name: "zoom in",
    render: () => (
        <Div className="zoom-in">
            <Alert primaryButtonLabel="Yes" variant="destructive">
                <Heading>Launch</Heading>
                <Content>Are you sure you want to launch the space shuttle?</Content>
            </Alert>
        </Div>
    )
};

export const ZoomOut: AlertDestructiveHopperStory = {
    name: "zoom out",
    render: () => (
        <Div className="zoom-out">
            <Alert primaryButtonLabel="Yes" variant="destructive">
                <Heading>Launch</Heading>
                <Content>Are you sure you want to launch the space shuttle?</Content>
            </Alert>
        </Div>
    )
};
