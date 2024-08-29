import { A } from "@components/html/index.js";
import { createRef } from "react";
import { renderWithTheme, waitFor } from "@test-utils";

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLAnchorElement>();

    renderWithTheme(
        <A ref={ref}>Google</A>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLAnchorElement).toBeTruthy();
    expect(ref.current.tagName).toBe("A");
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <A
            ref={node => {
                refNode = node;
            }}
        >Google</A>
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLElement).toBeTruthy();
    expect(refNode.tagName).toBe("A");
});

test("set ref once", async () => {
    const handler = vi.fn();

    renderWithTheme(
        <A ref={handler}>Google</A>
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
