import { NumberInput } from "@react-components/number-input";
import { act, render, waitFor } from "@testing-library/react";
import { createRef } from "react";

// ***** Api *****

test("can focus the input with the focus api", async () => {
    let refNode = null;

    render(
        <NumberInput
            ref={node => {
                refNode = node;
            }}
        />
    );

    act(() => {
        refNode.focus();
    });

    await waitFor(() => expect(refNode).toHaveFocus());
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef();

    render(
        <NumberInput ref={ref} />
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("INPUT");
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode = null;

    render(
        <NumberInput
            ref={node => {
                refNode = node;
            }}
        />
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLElement).toBeTruthy();
    expect(refNode.tagName).toBe("INPUT");
});

test("set ref once", async () => {
    const handler = jest.fn();

    render(
        <NumberInput ref={handler} />
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
