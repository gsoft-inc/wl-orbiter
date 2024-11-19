import { Label, LabelProps } from "@components/field/index.ts";
import { createRef, forwardRef } from "react";
import { renderWithTheme, waitFor } from "@test-utils";

const FieldLabel = forwardRef<HTMLElement, Omit<LabelProps, "children">>((props, ref) => {
    return (
        <Label
            {...props}
            ref={ref}
        >
            Hey!
        </Label>
    );
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <FieldLabel ref={ref} />
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("LABEL");
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <FieldLabel
            ref={node => {
                refNode = node;
            }}
        />
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLElement).toBeTruthy();
    expect(refNode.tagName).toBe("LABEL");
});

test("set ref once", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <FieldLabel ref={handler} />
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
