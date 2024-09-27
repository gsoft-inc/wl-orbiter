import { Div } from "@components/html";
import { Content, Heading } from "@hopper-ui/components";
import { cloneElement } from "react";

function Alert({ element, ...rest }) {
    return cloneElement(element, rest);
}

export function createTestSuite(element, stories) {
    return stories
        .add("default", () =>
            <Alert
                primaryButtonLabel="Yes"
                element={element}
            >
                <Heading>Launch</Heading>
                <Content>Are you sure you want to launch the space shuttle?</Content>
            </Alert>
        )
        .add("primary button disabled", () =>
            <Alert
                primaryButtonLabel="Yes"
                primaryButtonDisabled
                element={element}
            >
                <Heading>Launch</Heading>
                <Content>Are you sure you want to launch the space shuttle?</Content>
            </Alert>
        )
        .add("secondary button", () =>
            <Alert
                primaryButtonLabel="Launch"
                secondaryButtonLabel="Postpone"
                element={element}
            >
                <Heading>Launch</Heading>
                <Content>Are you sure you want to launch the space shuttle?</Content>
            </Alert>
        )
        .add("secondary button disabled", () =>
            <Alert
                primaryButtonLabel="Launch"
                secondaryButtonLabel="Postpone"
                secondaryButtonDisabled
                element={element}
            >
                <Heading>Launch</Heading>
                <Content>Are you sure you want to launch the space shuttle?</Content>
            </Alert>
        )
        .add("cancel button", () =>
            <Alert
                primaryButtonLabel="Yes"
                cancelButtonLabel="No"
                element={element}
            >
                <Heading>Launch</Heading>
                <Content>Are you sure you want to launch the space shuttle?</Content>
            </Alert>
        )
        .add("all 3 buttons", () =>
            <Alert
                primaryButtonLabel="Launch"
                secondaryButtonLabel="Postpone"
                cancelButtonLabel="Cancel"
                element={element}
            >
                <Heading>Launch</Heading>
                <Content>Are you sure you want to launch the space shuttle?</Content>
            </Alert>
        )
        .add("not dismissable", () =>
            <Alert
                primaryButtonLabel="Launch"
                secondaryButtonLabel="Postpone"
                element={element}
                dismissable={false}
            >
                <Heading>Launch</Heading>
                <Content>Are you sure you want to launch the space shuttle?</Content>
            </Alert>
        )
        .add("zoom in", () =>
            <Div className="zoom-in">
                <Alert primaryButtonLabel="Yes" element={element}>
                    <Heading>Launch</Heading>
                    <Content>Are you sure you want to launch the space shuttle?</Content>
                </Alert>
            </Div>
        )
        .add("zoom out", () =>
            <Div className="zoom-out">
                <Alert primaryButtonLabel="Yes" element={element}>
                    <Heading>Launch</Heading>
                    <Content>Are you sure you want to launch the space shuttle?</Content>
                </Alert>
            </Div>
        );
}
