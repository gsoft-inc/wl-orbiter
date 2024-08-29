import { Tooltip } from "@components/tooltip/index.js";
import { createRef } from "react";
import { renderWithTheme, screen, waitFor } from "@test-utils";

// ***** Aria *****

test("when an id is provided, the tooltip id attribute match the provided id", async () => {
    renderWithTheme(
        <Tooltip id="foo" data-testid="tooltip">Content</Tooltip>
    );

    await waitFor(() => expect(screen.getByTestId("tooltip")).toHaveAttribute("id", "foo"));
});

test("a tooltip have the \"tooltip\" role", async () => {
    renderWithTheme(
        <Tooltip data-testid="tooltip">Content</Tooltip>
    );

    await waitFor(() => expect(screen.getByTestId("tooltip")).toHaveAttribute("role", "tooltip"));
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <Tooltip ref={ref}>Content</Tooltip>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    await waitFor(() => expect(ref.current instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(ref.current.tagName).toBe("DIV"));
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <Tooltip
            ref={node => {
                refNode = node;
            }}
        >
            Tooltip
        </Tooltip>
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    await waitFor(() => expect(refNode instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(refNode.tagName).toBe("DIV"));
});

test("set ref once", async () => {
    const handler = vi.fn();

    renderWithTheme(
        <Tooltip ref={handler}>Content</Tooltip>
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
