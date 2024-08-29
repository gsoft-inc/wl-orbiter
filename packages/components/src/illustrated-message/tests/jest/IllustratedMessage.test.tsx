import { Div } from "@components/html/index.js";
import { IllustratedMessage } from "@components/illustrated-message/index.js";
import { createRef } from "react";
import { renderWithTheme, waitFor } from "@test-utils";

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <IllustratedMessage ref={ref}>
            <Div slot="image">Image</Div>
        </IllustratedMessage>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("DIV");
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <IllustratedMessage
            ref={node => {
                refNode = node;
            }}
        >
            <Div slot="image">Image</Div>
        </IllustratedMessage>
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLElement).toBeTruthy();
    expect(refNode.tagName).toBe("DIV");
});

test("set ref once", async () => {
    const handler = vi.fn();

    renderWithTheme(
        <IllustratedMessage ref={handler}>
            <Div slot="image">Image</Div>
        </IllustratedMessage>
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
