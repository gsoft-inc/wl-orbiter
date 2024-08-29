import { Button } from "@components/button/index.js";
import { Div } from "@components/html/index.js";
import { Toolbar } from "@components/toolbar/index.js";
import { createRef } from "react";
import { renderWithTheme, screen, waitFor } from "@test-utils";

// ***** Behaviors *****

test("first element is tabbable", async () => {
    renderWithTheme(
        <Toolbar>
            <Button data-testid="element-1">1</Button>
            <Button data-testid="element-2">2</Button>
        </Toolbar>
    );

    await waitFor(() => expect(screen.getByTestId("element-1")).toHaveAttribute("tabindex", "0"));
    await waitFor(() => expect(screen.getByTestId("element-2")).toHaveAttribute("tabindex", "-1"));
});

test("a disabled element is not tabbable", async () => {
    renderWithTheme(
        <Toolbar>
            <Button disabled data-testid="element-1">1</Button>
            <Button data-testid="element-2">2</Button>
        </Toolbar>
    );

    await waitFor(() => expect(screen.getByTestId("element-1")).not.toHaveAttribute("tabindex"));
    await waitFor(() => expect(screen.getByTestId("element-2")).toHaveAttribute("tabindex", "0"));
});

test("when autofocus is true, the first focusable element is focused on render", async () => {
    renderWithTheme(
        <Toolbar autoFocus>
            <Button data-testid="element-1">1</Button>
            <Button>2</Button>
        </Toolbar>
    );

    await waitFor(() => expect(screen.getByTestId("element-1")).toHaveFocus());
});

test("when autofocus is true and the toolbar is disabled, do not autofocuus an element on render", async () => {
    renderWithTheme(
        <Toolbar disabled autoFocus>
            <Button data-testid="element-1">1</Button>
            <Button>2</Button>
        </Toolbar>
    );

    await waitFor(() => expect(screen.getByTestId("element-1")).not.toHaveFocus());
});

test("when autofocus is true and the first focusable element is disabled, the next focusable element is focused on render", async () => {
    renderWithTheme(
        <Toolbar autoFocus>
            <Button disabled>1</Button>
            <Button data-testid="element-2">2</Button>
        </Toolbar>
    );

    await waitFor(() => expect(screen.getByTestId("element-2")).toHaveFocus());
});

test("when autofocus is specified with a delay, the first focusable element is focused after the delay", async () => {
    renderWithTheme(
        <Toolbar autoFocus>
            <Button data-testid="element-1">1</Button>
            <Button>2</Button>
        </Toolbar>
    );

    await waitFor(() => expect(screen.getByTestId("element-1")).toHaveFocus());
});

// ***** Aria *****

test("a toolbar have the \"toolbar\" role", async () => {
    renderWithTheme(
        <Toolbar data-testid="toolbar">
            <Button>1</Button>
            <Button>2</Button>
        </Toolbar>
    );

    await waitFor(() => expect(screen.getByTestId("toolbar")).toHaveAttribute("role", "toolbar"));
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <Toolbar ref={ref}><Div>Hey!</Div></Toolbar>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    await waitFor(() => expect(ref.current instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(ref.current.tagName).toBe("DIV"));
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <Toolbar
            ref={node => {
                refNode = node;
            }}
        >
            <Div>Hey!</Div>
        </Toolbar>
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    await waitFor(() => expect(refNode instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(refNode.tagName).toBe("DIV"));
});

test("set ref once", async () => {
    const handler = vi.fn();

    renderWithTheme(
        <Toolbar ref={handler}>
            <Div>Hey!</Div>
        </Toolbar>
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
