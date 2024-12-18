import { AnonymousAvatar } from "@components/avatar/index.ts";
import { createRef } from "react";
import { renderWithTheme, screen, waitFor } from "@test-utils";

// ***** Aria *****

test("when an aria-label is provided, the aria-label attribute matches the provided aria-label", async () => {
    renderWithTheme(
        <AnonymousAvatar aria-label="Maye Musk" />
    );

    expect(await screen.findByLabelText("Maye Musk")).not.toBeNull();
});


// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <AnonymousAvatar aria-label="Elon Musk" ref={ref} />
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("DIV");
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <AnonymousAvatar
            aria-label="Elon Musk"
            ref={node => {
                refNode = node;
            }}
        />
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLElement).toBeTruthy();
    expect(refNode.tagName).toBe("DIV");
});

test("set ref once", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <AnonymousAvatar aria-label="Elon Musk" ref={handler} />
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
