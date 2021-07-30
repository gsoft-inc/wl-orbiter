import { Illustration } from "@react-components/illustration";
import { createRef } from "react";
import { render, waitFor } from "@testing-library/react";

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef();

    render(
        <Illustration ref={ref}>
            <div slot="image">Image</div>
        </Illustration>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("DIV");
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode = null;

    render(
        <Illustration
            ref={node => {
                refNode = node;
            }}
        >
            <div slot="image">Image</div>
        </Illustration>
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLElement).toBeTruthy();
    expect(refNode.tagName).toBe("DIV");
});

test("set ref once", async () => {
    const handler = jest.fn();

    render(
        <Illustration ref={handler}>
            <div slot="image">Image</div>
        </Illustration>
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});