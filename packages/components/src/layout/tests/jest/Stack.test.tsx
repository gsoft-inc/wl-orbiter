import { Div } from "@components/html/index.ts";
import { Stack, StackProps } from "@components/layout/index.ts";
import { createRef, forwardRef } from "react";
import { renderWithTheme, waitFor } from "@test-utils";

const Stacked = forwardRef<HTMLElement, Omit<StackProps, "children">>((props, ref) => {
    return (
        <Stack
            {...props}
            ref={ref}
        >
            <Div>Alpha</Div>
            <Div>Bravo</Div>
            <Div>Charlie</Div>
        </Stack>
    );
});

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <Stacked ref={ref} />
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("DIV");
});

test("using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <Stacked
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
        <Stacked ref={handler} />
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
