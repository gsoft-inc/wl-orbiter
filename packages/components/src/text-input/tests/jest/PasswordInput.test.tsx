import { PasswordInput } from "@components/text-input/index.js";
import { act, waitFor, renderWithTheme } from "@test-utils";
import { createRef } from "react";

// ***** Api *****

test("can focus the input with the focus api", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <PasswordInput
            ref={node => {
                refNode = node;
            }}
            aria-label="Label"
        />
    );

    act(() => {
        refNode.focus();
    });

    await waitFor(() => expect(refNode).toHaveFocus());
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLInputElement>();

    renderWithTheme(
        <PasswordInput ref={ref} aria-label="Label" />
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("INPUT");
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <PasswordInput
            ref={node => {
                refNode = node;
            }}
            aria-label="Label"
        />
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLElement).toBeTruthy();
    expect(refNode.tagName).toBe("INPUT");
});

test("set ref once", async () => {
    const handler = vi.fn();

    renderWithTheme(
        <PasswordInput ref={handler} aria-label="Label" />
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
