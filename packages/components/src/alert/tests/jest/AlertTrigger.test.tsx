import { Alert, AlertTrigger } from "@components/alert/index.ts";
import { Button } from "@components/button/index.ts";
import { Content } from "@components/placeholders/index.ts";
import { Heading } from "@components/typography/index.ts";
import { createRef } from "react";
import { renderWithTheme, screen, waitFor } from "@test-utils";
import userEvent from "@testing-library/user-event";

// ***** Behaviors *****

test("do not dismiss on outside click", async () => {
    renderWithTheme(
        <AlertTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <Alert data-testid="alert" primaryButtonLabel="Primary">
                <Heading>Autopilot</Heading>
                <Content>Are you sure you want to engage autopilot?</Content>
            </Alert>
        </AlertTrigger>
    );

    await userEvent.click(screen.getByTestId("trigger"));

    expect(await screen.findByTestId("alert")).toBeInTheDocument();

    await userEvent.click(document.body);

    expect(await screen.findByTestId("alert")).toBeInTheDocument();
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <AlertTrigger defaultOpen ref={ref}>
            <Button>Trigger</Button>
            <Alert primaryButtonLabel="Primary">
                <Heading>Autopilot</Heading>
                <Content>Are you sure you want to engage autopilot?</Content>
            </Alert>
        </AlertTrigger>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    await waitFor(() => expect(ref.current instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(ref.current.tagName).toBe("DIV"));
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <AlertTrigger
            defaultOpen
            ref={node => {
                refNode = node;
            }}
        >
            <Button>Trigger</Button>
            <Alert primaryButtonLabel="Primary">
                <Heading>Autopilot</Heading>
                <Content>Are you sure you want to engage autopilot?</Content>
            </Alert>
        </AlertTrigger>
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    await waitFor(() => expect(refNode instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(refNode.tagName).toBe("DIV"));
});

test("set ref once", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <AlertTrigger defaultOpen ref={handler}>
            <Button>Trigger</Button>
            <Alert primaryButtonLabel="Primary">
                <Heading>Autopilot</Heading>
                <Content>Are you sure you want to engage autopilot?</Content>
            </Alert>
        </AlertTrigger>
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
