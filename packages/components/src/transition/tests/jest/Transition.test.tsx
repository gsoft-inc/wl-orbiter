import { Transition } from "@components/transition/index.ts";
import { createRef } from "react";
import { renderWithTheme, screen, waitFor } from "@test-utils";

// ***** Behaviors *****

test("when no enter transition is specified, render the element on show", async () => {
    renderWithTheme(
        <Transition show>
            <span data-testid="content">Content</span>
        </Transition>
    );

    expect(await screen.findByTestId("content")).toBeInTheDocument();
});

test("when no leave transition is specified, remove the element on hide", async () => {
    const { rerender } = renderWithTheme(
        <Transition show>
            <span data-testid="content">Content</span>
        </Transition>
    );

    expect(await screen.findByTestId("content")).toBeInTheDocument();

    rerender(
        <Transition show={false}>
            <span data-testid="content">Content</span>
        </Transition>
    );

    await waitFor(() => expect(screen.queryByTestId("content")).not.toBeInTheDocument());
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <Transition show ref={ref}>Content</Transition>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    await waitFor(() => expect(ref.current instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(ref.current.tagName).toBe("DIV"));
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <Transition
            show
            ref={node => {
                refNode = node;
            }}
        >
            Tooltip
        </Transition>
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    await waitFor(() => expect(refNode instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(refNode.tagName).toBe("DIV"));
});

test("set ref once", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <Transition show ref={handler}>Content</Transition>
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
