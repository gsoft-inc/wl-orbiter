import { Alert } from "@components/alert/index.ts";
import { Content } from "@components/placeholders/index.ts";
import { Heading } from "@components/typography/index.ts";
import { createRef } from "react";
import { renderWithTheme, screen, waitFor } from "@test-utils";

// ***** Behaviors *****

test("when autoFocusButton value is \"primary\", autofocus the primary button on render", async () => {
    renderWithTheme(
        <Alert autoFocusButton="primary" primaryButtonLabel="Primary" secondaryButtonLabel="Secondary" cancelButtonLabel="Cancel">
            <Heading>Autopilot</Heading>
            <Content>Are you sure you want to engage autopilot?</Content>
        </Alert>
    );

    await waitFor(() => expect(screen.getByRole("button", { name: "Primary" })).toHaveFocus());
});

test("when autoFocusButton value is \"secondary\", autofocus the secondary button on render", async () => {
    renderWithTheme(
        <Alert autoFocusButton="secondary" primaryButtonLabel="Primary" secondaryButtonLabel="Secondary" cancelButtonLabel="Cancel">
            <Heading>Autopilot</Heading>
            <Content>Are you sure you want to engage autopilot?</Content>
        </Alert>
    );

    await waitFor(() => expect(screen.getByRole("button", { name: "Secondary" })).toHaveFocus());
});

test("when autoFocusButton value is \"cancel\", autofocus the cancel button on render", async () => {
    renderWithTheme(
        <Alert autoFocusButton="cancel" primaryButtonLabel="Primary" secondaryButtonLabel="Secondary" cancelButtonLabel="Cancel">
            <Heading>Autopilot</Heading>
            <Content>Are you sure you want to engage autopilot?</Content>
        </Alert>
    );

    await waitFor(() => expect(screen.getByRole("button", { name: "Cancel" })).toHaveFocus());
});

test("when autoFocusButton value is not defined, autofocus the primary button", async () => {
    renderWithTheme(
        <Alert primaryButtonLabel="Primary" secondaryButtonLabel="Secondary" cancelButtonLabel="Cancel">
            <Heading>Autopilot</Heading>
            <Content>Are you sure you want to engage autopilot?</Content>
        </Alert>
    );

    await waitFor(() => expect(screen.getByRole("button", { name: "Primary" })).toHaveFocus());
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <Alert ref={ref} primaryButtonLabel="Primary">
            <Heading>Autopilot</Heading>
            <Content>Are you sure you want to engage autopilot?</Content>
        </Alert>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    await waitFor(() => expect(ref.current instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(ref.current.tagName).toBe("SECTION"));
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <Alert
            primaryButtonLabel="Primary"
            ref={node => {
                refNode = node;
            }}
        >
            <Heading>Autopilot</Heading>
            <Content>Are you sure you want to engage autopilot?</Content>
        </Alert>
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    await waitFor(() => expect(refNode instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(refNode.tagName).toBe("SECTION"));
});

test("set ref once", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <Alert ref={handler} primaryButtonLabel="Primary">
            <Heading>Autopilot</Heading>
            <Content>Are you sure you want to engage autopilot?</Content>
        </Alert>
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
