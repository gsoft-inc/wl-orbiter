import { Image } from "@components/image/index.ts";
import { createRef } from "react";
import { renderWithTheme, waitFor } from "@test-utils";

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <Image ref={ref} src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("IMG");
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <Image
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            ref={node => {
                refNode = node;
            }}
        />
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLElement).toBeTruthy();
    expect(refNode.tagName).toBe("IMG");
});

test("set ref once", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <Image
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            ref={handler}
        />
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
