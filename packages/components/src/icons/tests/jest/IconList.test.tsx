import { IconList, IconListProps } from "@components/icons";
import { CheckmarkIcon } from "@hopper-ui/icons";
import { createRef, forwardRef } from "react";
import { renderWithTheme, waitFor } from "@test-utils";

const Icons = forwardRef<HTMLElement, Omit<IconListProps, "children">>((props, ref) => {
    return (
        <IconList
            {...props}
            ref={ref}
        >
            <CheckmarkIcon />
            <CheckmarkIcon />
        </IconList>
    );
});

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <Icons ref={ref} />
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("SPAN");
});

test("using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <Icons
            ref={node => {
                refNode = node;
            }}
        />
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLElement).toBeTruthy();
    expect(refNode.tagName).toBe("SPAN");
});

test("set ref once", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <Icons ref={handler} />
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
