import { Alert } from "@components/alert";
import { Content } from "@components/placeholders";
import { Heading } from "@hopper-ui/components";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Alert-hopper/confirmation",
    component: Alert
} as Meta<typeof Alert>;

export default meta;

type AlertConfirmationHopperStory = StoryObj<typeof meta>;

export const Default: AlertConfirmationHopperStory = {
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

export const PrimaryButtonDisabled: AlertConfirmationHopperStory = {
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

export const SecondaryButton: AlertConfirmationHopperStory = {
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

export const SecondaryButtonDisabled: AlertConfirmationHopperStory = {
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

export const CancelButton: AlertConfirmationHopperStory = {
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

export const All3Buttons: AlertConfirmationHopperStory = {
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

export const NotDismissable: AlertConfirmationHopperStory = {
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

export const ZoomIn: AlertConfirmationHopperStory = {
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

export const ZoomOut: AlertConfirmationHopperStory = {
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
