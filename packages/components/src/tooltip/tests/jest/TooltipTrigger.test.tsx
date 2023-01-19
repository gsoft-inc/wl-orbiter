import { Button } from "@components/button";
import { Tooltip, TooltipTrigger } from "@components/tooltip";
import { Transition } from "@components/transition";
import { act, fireEvent, waitFor } from "@testing-library/react";
import { createRef } from "react";
import { renderWithTheme } from "@jest-utils";
import userEvent from "@testing-library/user-event";

beforeAll(() => {
    // @ts-ignore
    Transition.disableAnimation = true;
});

// ***** Behaviors *****

test("when the trigger is disabled, open on trigger hover", async () => {
    const { getByTestId } = renderWithTheme(
        <TooltipTrigger>
            <Button disabled data-testid="trigger">Trigger</Button>
            <Tooltip data-testid="tooltip">Content</Tooltip>
        </TooltipTrigger>
    );

    act(() => {
        // userEvent.hover() doesn't fire when the element is disabled.
        fireEvent.mouseEnter(getByTestId("trigger"));
    });

    await waitFor(() => expect(getByTestId("tooltip")).toBeInTheDocument());
});

test("when the trigger is disabled, close on trigger leave", async () => {
    const { getByTestId, queryByTestId } = renderWithTheme(
        <TooltipTrigger>
            <Button disabled data-testid="trigger">Trigger</Button>
            <Tooltip data-testid="tooltip">Content</Tooltip>
        </TooltipTrigger>
    );

    act(() => {
        // userEvent.hover() doesn't fire when the element is disabled.
        fireEvent.mouseEnter(getByTestId("trigger"));
    });

    await waitFor(() => expect(getByTestId("tooltip")).toBeInTheDocument());

    act(() => {
        // fireEvent.mouseLeave() doesn't fire when the element is disabled, so we take its parent
        // eslint-disable-next-line testing-library/no-node-access
        fireEvent.mouseLeave(getByTestId("trigger").parentElement);
    });

    await waitFor(() => expect(queryByTestId("tooltip")).not.toBeInTheDocument());
});

// ***** Aria *****

test("when an id is provided for the tooltip, it is used as the tooltip id", async () => {
    const { getByTestId } = renderWithTheme(
        <TooltipTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <Tooltip id="tooltip-id" data-testid="tooltip">Content</Tooltip>
        </TooltipTrigger>
    );

    act(() => {
        userEvent.hover(getByTestId("trigger"));
    });

    await waitFor(() => expect(getByTestId("tooltip")).toHaveAttribute("id", "tooltip-id"));
});

test("when no tooltip id is provided, a tooltip id is autogenerated", async () => {
    const { getByTestId } = renderWithTheme(
        <TooltipTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <Tooltip data-testid="tooltip">Content</Tooltip>
        </TooltipTrigger>
    );

    act(() => {
        userEvent.hover(getByTestId("trigger"));
    });

    await waitFor(() => expect(getByTestId("tooltip")).toHaveAttribute("id"));
});

test("when a tooltip is visible, the tooltip trigger aria-describedby match the tooltip id", async () => {
    const { getByTestId } = renderWithTheme(
        <TooltipTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <Tooltip id="tooltip-id" data-testid="tooltip">Content</Tooltip>
        </TooltipTrigger>
    );

    act(() => {
        userEvent.hover(getByTestId("trigger"));
    });

    await waitFor(() => expect(getByTestId("trigger")).toHaveAttribute("aria-describedby", "tooltip-id"));
});

// ***** Api *****

test("call onOpenChange when the tooltip appears", async () => {
    const handler = jest.fn();

    const { getByTestId } = renderWithTheme(
        <TooltipTrigger onOpenChange={handler}>
            <Button data-testid="trigger">Trigger</Button>
            <Tooltip data-testid="tooltip">Content</Tooltip>
        </TooltipTrigger>
    );

    act(() => {
        userEvent.hover(getByTestId("trigger"));
    });

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything(), true));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

test("call onOpenChange when the tooltip disappear", async () => {
    const handler = jest.fn();

    const { getByTestId } = renderWithTheme(
        <TooltipTrigger onOpenChange={handler}>
            <Button data-testid="trigger">Trigger</Button>
            <Tooltip data-testid="tooltip">Content</Tooltip>
        </TooltipTrigger>
    );

    act(() => {
        userEvent.hover(getByTestId("trigger"));
    });

    act(() => {
        userEvent.unhover(getByTestId("trigger"));
    });

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything(), false));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(2));
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    const { getByTestId } = renderWithTheme(
        <TooltipTrigger ref={ref}>
            <Button data-testid="trigger">Trigger</Button>
            <Tooltip>Content</Tooltip>
        </TooltipTrigger>
    );

    act(() => {
        userEvent.hover(getByTestId("trigger"));
    });

    await waitFor(() => expect(ref.current).not.toBeNull());

    await waitFor(() => expect(ref.current instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(ref.current.tagName).toBe("DIV"));
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    const { getByTestId } = renderWithTheme(
        <TooltipTrigger
            ref={node => {
                refNode = node;
            }}
        >
            <Button data-testid="trigger">Trigger</Button>
            <Tooltip>Content</Tooltip>
        </TooltipTrigger>
    );

    act(() => {
        userEvent.hover(getByTestId("trigger"));
    });

    await waitFor(() => expect(refNode).not.toBeNull());

    await waitFor(() => expect(refNode instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(refNode.tagName).toBe("DIV"));
});

test("set ref once", async () => {
    const handler = jest.fn();

    const { getByTestId } = renderWithTheme(
        <TooltipTrigger ref={handler}>
            <Button data-testid="trigger">Trigger</Button>
            <Tooltip>Content</Tooltip>
        </TooltipTrigger>
    );

    act(() => {
        userEvent.hover(getByTestId("trigger"));
    });

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

