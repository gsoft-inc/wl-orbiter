import { Alert, AlertTrigger } from "@components/alert/index.ts";
import { Button } from "@components/button/index.ts";
import { Content } from "@components/placeholders/index.ts";
import { Heading } from "@components/typography/index.ts";
import { useCallback, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Alert",
    component: Alert,
    id: "Alert"
} as Meta<typeof Alert>;

export default meta;

type AlertStory = StoryObj<typeof meta>;

export const Default: AlertStory = {
    render: () => (
        <AlertTrigger>
            <Button variant="secondary">Open</Button>
            <Alert primaryButtonLabel="Yes">
                <Heading>Autopilot</Heading>
                <Content>Are you sure you want to engage autopilot?</Content>
            </Alert>
        </AlertTrigger>
    )
};

export const SecondaryButton: AlertStory = {
    render: () => (
        <AlertTrigger>
            <Button variant="secondary">Open</Button>
            <Alert
                primaryButtonLabel="Yes"
                secondaryButtonLabel="Postpone"
            >
                <Heading>Autopilot</Heading>
                <Content>Are you sure you want to engage autopilot?</Content>
            </Alert>
        </AlertTrigger>
    )
};

export const CancelButton: AlertStory = {
    render: () => (
        <AlertTrigger>
            <Button variant="secondary">Open</Button>
            <Alert
                cancelButtonLabel="No"
                primaryButtonLabel="Yes"
            >
                <Heading>Autopilot</Heading>
                <Content>Are you sure you want to engage autopilot?</Content>
            </Alert>
        </AlertTrigger>
    )
};

export const DisabledButton: AlertStory = {
    render: () => (
        <AlertTrigger>
            <Button variant="secondary">Open</Button>
            <Alert
                primaryButtonDisabled
                primaryButtonLabel="Yes"
                secondaryButtonLabel="Postpone"
            >
                <Heading>Autopilot</Heading>
                <Content>Are you sure you want to engage autopilot?</Content>
            </Alert>
        </AlertTrigger>
    )
};

export const Confirmation: AlertStory = {
    render: () => (
        <AlertTrigger>
            <Button variant="secondary">Open</Button>
            <Alert
                cancelButtonLabel="No"
                primaryButtonLabel="Yes"
                variant="confirmation"
            >
                <Heading>Autopilot</Heading>
                <Content>Are you sure you want to engage autopilot?</Content>
            </Alert>
        </AlertTrigger>
    )
};

export const Destructive: AlertStory = {
    render: () => (
        <AlertTrigger>
            <Button variant="secondary">Open</Button>
            <Alert
                cancelButtonLabel="No"
                primaryButtonLabel="Yes"
                variant="destructive"
            >
                <Heading>Eject</Heading>
                <Content>Are you sure you want to eject into the void?</Content>
            </Alert>
        </AlertTrigger>
    )
};

export const Undismissable: AlertStory = {
    render: () => (
        <AlertTrigger>
            <Button variant="secondary">Open</Button>
            <Alert
                cancelButtonLabel="Cancel"
                dismissable={false}
                primaryButtonLabel="Retry"
            >
                <Heading>Network error</Heading>
                <Content>Something went wrong while connecting to NASA network. Please try again in a few minutes.</Content>
            </Alert>
        </AlertTrigger>

    )
};

/* eslint-disable react-hooks/rules-of-hooks */
export const Controlled: AlertStory = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        const handleOpenChange = useCallback((event, newValue) => {
            setIsOpen(newValue);
            console.log(newValue);
        }, [setIsOpen]);

        const handleClose = useCallback(() => {
            setIsOpen(false);
        }, [setIsOpen]);

        return (
            <AlertTrigger
                onOpenChange={handleOpenChange}
                open={isOpen}
            >
                <Button variant="secondary">Open</Button>
                <Alert
                    cancelButtonLabel="No"
                    onCancelButtonClick={handleClose}
                    onPrimaryButtonClick={handleClose}
                    onSecondaryButtonClick={handleClose}
                    primaryButtonLabel="Yes"
                    secondaryButtonLabel="Postpone"
                >
                    <Heading>Autopilot</Heading>
                    <Content>Are you sure you want to engage autopilot?</Content>
                </Alert>
            </AlertTrigger>
        );
    }
};
