import { CrossButton } from "@components/button/index.js";
import { act, waitFor, renderWithTheme } from "@test-utils";
import { createRef } from "react";

// ***** Api *****

test("can focus the button with the focus api", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <CrossButton
            ref={node => {
                refNode = node;
            }}
            aria-label="Clear"
        />
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
        <CrossButton aria-label="Clear" ref={ref} />
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    await waitFor(() => expect(ref.current instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(ref.current.tagName).toBe("BUTTON"));
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <CrossButton
            ref={node => {
                refNode = node;
            }}
            aria-label="Clear"
        />
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    await waitFor(() => expect(refNode instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(refNode.tagName).toBe("BUTTON"));
});

test("set ref once", async () => {
    const handler = vi.fn();

    renderWithTheme(
        <CrossButton ref={handler} aria-label="Clear" />
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
