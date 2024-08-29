import { Form, FormProps } from "@components/form/index.js";
import { createRef, forwardRef } from "react";
import { renderWithTheme, waitFor } from "@test-utils";

const BasicForm = forwardRef<HTMLElement, Omit<FormProps, "children">>((props, ref) => {
    return (
        <Form
            {...props}
            ref={ref}
        >
            <input type="text" />
        </Form>
    );
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <BasicForm ref={ref} />
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("FORM");
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <BasicForm
            ref={node => {
                refNode = node;
            }}
        />
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLElement).toBeTruthy();
    expect(refNode.tagName).toBe("FORM");
});

test("set ref once", async () => {
    const handler = vi.fn();

    renderWithTheme(
        <BasicForm ref={handler} />
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
