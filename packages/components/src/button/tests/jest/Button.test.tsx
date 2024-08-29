import { act, screen, waitFor, renderWithTheme } from "@test-utils";
import { Button } from "@components/button/index.js";
import { createRef } from "react";
import userEvent from "@testing-library/user-event";

// ***** Behaviors *****

test("when autofocus is true, the button is focused on render", async () => {
    renderWithTheme(
        <Button autoFocus variant="secondary" data-testid="button">Cutoff</Button>
    );

    await waitFor(() => expect(screen.getByTestId("button")).toHaveFocus());
});

test("when autofocus is true and the button is disabled, the button is not focused on render", async () => {
    renderWithTheme(
        <Button
            disabled
            autoFocus
            variant="secondary"
            data-testid="button"
        >Cutoff</Button>
    );

    await waitFor(() => expect(screen.getByTestId("button")).not.toHaveFocus());
});

test("when autofocus is specified with a delay, the button is focused after the delay", async () => {
    renderWithTheme(
        <Button
            autoFocus
            variant="secondary"
            data-testid="button"
        >Cutoff</Button>
    );

    expect(screen.getByTestId("button")).not.toHaveFocus();

    await waitFor(() => expect(screen.getByTestId("button")).toHaveFocus());
});

test("when loading is true, the button should prevent onClick", async () => {
    const handler = vi.fn();

    renderWithTheme(
        <Button
            loading
            onClick={handler}
            data-testid="button"
        >
            Loading Button
        </Button>
    );

    await userEvent.click(screen.getByTestId("button"));

    await waitFor(() => expect(handler).not.toHaveBeenCalled());
});

// ***** Aria *****

test("when no type is specified, the type is default to \"button\"", async () => {
    renderWithTheme(
        <Button
            variant="secondary"
            data-testid="button"
        >Cutoff</Button>
    );

    await waitFor(() => expect(screen.getByTestId("button")).toHaveAttribute("type", "button"));
});

test("when type is specified, the type is forwarded", async () => {
    renderWithTheme(
        <Button
            type="submit"
            variant="secondary"
            data-testid="button"
        >Cutoff</Button>
    );

    await waitFor(() => expect(screen.getByTestId("button")).toHaveAttribute("type", "submit"));
});

// ***** Api *****

test("can focus the button with the focus api", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <Button
            variant="secondary"
            ref={node => {
                refNode = node;
            }}
        >Cutoff</Button>
    );

    act(() => {
        refNode.focus();
    });

    await waitFor(() => expect(refNode).toHaveFocus());
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLButtonElement>();

    renderWithTheme(
        <Button variant="secondary" ref={ref}>Cutoff</Button>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    await waitFor(() => expect(ref.current instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(ref.current.tagName).toBe("BUTTON"));
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <Button
            variant="secondary"
            ref={node => {
                refNode = node;
            }}
        >Cutoff</Button>
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    await waitFor(() => expect(refNode instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(refNode.tagName).toBe("BUTTON"));
});

test("set ref once", async () => {
    const handler = vi.fn();

    renderWithTheme(
        <Button variant="secondary" ref={handler}>Cutoff</Button>
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
