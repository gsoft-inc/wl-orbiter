import { Div } from "@components/html/index.js";
import { Flex, FlexProps } from "@components/layout/index.js";
import { createRef, forwardRef } from "react";
import { renderWithTheme, waitFor } from "@test-utils";

const Flexed = forwardRef<HTMLDivElement, Omit<FlexProps, "children">>((props, ref) => {
    return (
        <Flex
            {...props}
            ref={ref}
        >
            <Div>Alpha</Div>
            <Div>Bravo</Div>
            <Div>Charlie</Div>
        </Flex>
    );
});

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLDivElement>();

    renderWithTheme(
        <Flexed ref={ref} />
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLDivElement).toBeTruthy();
    expect(ref.current.tagName).toBe("DIV");
});

test("using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLDivElement = null;

    renderWithTheme(
        <Flexed
            ref={node => {
                refNode = node;
            }}
        />
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLDivElement).toBeTruthy();
    expect(refNode.tagName).toBe("DIV");
});

test("set ref once", async () => {
    const handler = vi.fn();

    renderWithTheme(
        <Flexed ref={handler} />
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
