import { Button } from "@components/button/index.ts";
import { Tooltip, TooltipTrigger } from "@components/tooltip/index.ts";
import { Transition } from "@components/transition/index.ts";
import { fireEvent, screen, waitFor, renderWithTheme } from "@test-utils";
import { createRef } from "react";
import userEvent from "@testing-library/user-event";

beforeAll(() => {
    // @ts-ignore
    Transition.disableAnimation = true;
});

// ***** Behaviors *****

test("when the trigger is disabled, open on trigger hover", async () => {
    renderWithTheme(
        <TooltipTrigger>
            <Button disabled data-testid="trigger">Trigger</Button>
            <Tooltip data-testid="tooltip">Content</Tooltip>
        </TooltipTrigger>
    );

    // userEvent.hover() doesn't fire when the element is disabled.
    fireEvent.mouseEnter(screen.getByTestId("trigger"));

    expect(await screen.findByTestId("tooltip")).toBeInTheDocument();
});

test("when the trigger is disabled, close on trigger leave", async () => {
    renderWithTheme(
        <TooltipTrigger>
            <Button disabled data-testid="trigger">Trigger</Button>
            <Tooltip data-testid="tooltip">Content</Tooltip>
        </TooltipTrigger>
    );

    // userEvent.hover() doesn't fire when the element is disabled.
    fireEvent.mouseEnter(screen.getByTestId("trigger"));

    expect(await screen.findByTestId("tooltip")).toBeInTheDocument();

    // fireEvent.mouseLeave() doesn't fire when the element is disabled, so we take its parent
    // eslint-disable-next-line testing-library/no-node-access
    fireEvent.mouseLeave(screen.getByTestId("trigger").parentElement);

    await waitFor(() => expect(screen.queryByTestId("tooltip")).not.toBeInTheDocument());
});

function getOverlayArrow(element: HTMLElement) {
    return element.querySelector(".o-ui-overlay-arrow");
}

test("when hovering the overlay arrow, close on overlay leave", async () => {
    renderWithTheme(
        <TooltipTrigger data-testid="overlay">
            <Button data-testid="trigger">Trigger</Button>
            <Tooltip>Content</Tooltip>
        </TooltipTrigger>
    );

    await userEvent.hover(screen.getByTestId("trigger"));

    expect(await screen.findByRole("tooltip")).toBeInTheDocument();

    await userEvent.hover(getOverlayArrow(screen.getByTestId("overlay")));

    expect(await screen.findByRole("tooltip")).toBeInTheDocument();

    await userEvent.unhover(getOverlayArrow(screen.getByTestId("overlay")));

    await waitFor(() => expect(screen.queryByRole("tooltip")).not.toBeInTheDocument());
});

test("when hovering the tooltip, do not close if hovering the trigger", async () => {
    renderWithTheme(
        <TooltipTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <Tooltip>Content</Tooltip>
        </TooltipTrigger>
    );

    await userEvent.hover(screen.getByTestId("trigger"));

    expect(await screen.findByRole("tooltip")).toBeInTheDocument();

    await userEvent.hover(screen.getByRole("tooltip"));

    expect(await screen.findByRole("tooltip")).toBeInTheDocument();

    await userEvent.hover(screen.getByTestId("trigger"));

    expect(screen.getByRole("tooltip")).toBeInTheDocument();
});

test("when unhovering the tooltip, close tooltip", async () => {
    renderWithTheme(
        <TooltipTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <Tooltip>Content</Tooltip>
        </TooltipTrigger>
    );

    await userEvent.hover(screen.getByTestId("trigger"), { });

    await screen.findByRole("tooltip");

    await userEvent.unhover(screen.getByRole("tooltip"));

    await waitFor(() => expect(screen.queryByRole("tooltip")).not.toBeInTheDocument());
});

// ***** Aria *****

test("when an id is provided for the tooltip, it is used as the tooltip id", async () => {
    renderWithTheme(
        <TooltipTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <Tooltip id="tooltip-id" data-testid="tooltip">Content</Tooltip>
        </TooltipTrigger>
    );

    await userEvent.hover(screen.getByTestId("trigger"));

    await waitFor(() => expect(screen.getByTestId("tooltip")).toHaveAttribute("id", "tooltip-id"));
});

test("when no tooltip id is provided, a tooltip id is autogenerated", async () => {
    renderWithTheme(
        <TooltipTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <Tooltip data-testid="tooltip">Content</Tooltip>
        </TooltipTrigger>
    );

    await userEvent.hover(screen.getByTestId("trigger"));

    await waitFor(() => expect(screen.getByTestId("tooltip")).toHaveAttribute("id"));
});

test("when a tooltip is visible, the tooltip trigger aria-describedby match the tooltip id", async () => {
    renderWithTheme(
        <TooltipTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <Tooltip id="tooltip-id" data-testid="tooltip">Content</Tooltip>
        </TooltipTrigger>
    );

    await userEvent.hover(screen.getByTestId("trigger"));

    await waitFor(() => expect(screen.getByTestId("trigger")).toHaveAttribute("aria-describedby", "tooltip-id"));
});

// ***** Api *****

test("call onOpenChange when the tooltip appears", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <TooltipTrigger onOpenChange={handler}>
            <Button data-testid="trigger">Trigger</Button>
            <Tooltip data-testid="tooltip">Content</Tooltip>
        </TooltipTrigger>
    );

    await userEvent.hover(screen.getByTestId("trigger"));

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything(), true));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

test("call onOpenChange when the tooltip disappear", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <TooltipTrigger onOpenChange={handler}>
            <Button data-testid="trigger">Trigger</Button>
            <Tooltip data-testid="tooltip">Content</Tooltip>
        </TooltipTrigger>
    );

    await userEvent.hover(screen.getByTestId("trigger"));

    await userEvent.unhover(screen.getByTestId("trigger"));

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything(), false));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(2));
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <TooltipTrigger ref={ref}>
            <Button data-testid="trigger">Trigger</Button>
            <Tooltip>Content</Tooltip>
        </TooltipTrigger>
    );

    await userEvent.hover(screen.getByTestId("trigger"));

    await waitFor(() => expect(ref.current).not.toBeNull());

    await waitFor(() => expect(ref.current instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(ref.current.tagName).toBe("DIV"));
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <TooltipTrigger
            ref={node => {
                refNode = node;
            }}
        >
            <Button data-testid="trigger">Trigger</Button>
            <Tooltip>Content</Tooltip>
        </TooltipTrigger>
    );

    await userEvent.hover(screen.getByTestId("trigger"));

    await waitFor(() => expect(refNode).not.toBeNull());

    await waitFor(() => expect(refNode instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(refNode.tagName).toBe("DIV"));
});

test("set ref once", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <TooltipTrigger ref={handler}>
            <Button data-testid="trigger">Trigger</Button>
            <Tooltip>Content</Tooltip>
        </TooltipTrigger>
    );

    await userEvent.hover(screen.getByTestId("trigger"));

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
