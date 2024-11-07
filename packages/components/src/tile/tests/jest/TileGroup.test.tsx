import { Content } from "@components/placeholders/index.ts";
import { Heading } from "@components/typography/index.ts";
import { Tile, TileGroup } from "@components/tile/index.ts";
import { screen, waitFor, renderWithTheme } from "@test-utils";
import { createRef } from "react";
import { userEvent } from "@testing-library/user-event";

// ***** Behaviors *****

test("when selectionMode is \"single\" and a value is specified, the tile matching the value is checked", async () => {
    renderWithTheme(
        <TileGroup value={["2"]} selectionMode="single">
            <Tile value="1">
                <Heading>1</Heading>
                <Content>1</Content>
            </Tile>
            <Tile value="2" data-testid="tile-2">
                <Heading>2</Heading>
                <Content>2</Content>
            </Tile>
        </TileGroup>
    );

    await waitFor(() => expect(screen.getByTestId("tile-2")).toHaveAttribute("aria-checked", "true"));
});

test("when selectionMode is \"single\" and a default value is specified, the tile matching the value is checked", async () => {
    renderWithTheme(
        <TileGroup defaultValue={["2"]} selectionMode="single">
            <Tile value="1">
                <Heading>1</Heading>
                <Content>1</Content>
            </Tile>
            <Tile value="2" data-testid="tile-2">
                <Heading>2</Heading>
                <Content>2</Content>
            </Tile>
        </TileGroup>
    );

    await waitFor(() => expect(screen.getByTestId("tile-2")).toHaveAttribute("aria-checked", "true"));
});

test("when selectionMode is \"none\" and autofocus is true, the first tile is focused on render", async () => {
    renderWithTheme(
        <TileGroup autoFocus selectionMode="none">
            <Tile data-testid="tile-1">
                <Heading>1</Heading>
                <Content>1</Content>
            </Tile>
            <Tile>
                <Heading>2</Heading>
                <Content>2</Content>
            </Tile>
        </TileGroup>
    );

    await waitFor(() => expect(screen.getByTestId("tile-1")).toHaveFocus());
});

test("when selectionMode is \"single\" and autofocus is true, the first tile is focused on render", async () => {
    renderWithTheme(
        <TileGroup autoFocus selectionMode="single">
            <Tile data-testid="tile-1">
                <Heading>1</Heading>
                <Content>1</Content>
            </Tile>
            <Tile>
                <Heading>2</Heading>
                <Content>2</Content>
            </Tile>
        </TileGroup>
    );

    await waitFor(() => expect(screen.getByTestId("tile-1")).toHaveFocus());
});

test("when selectionMode is \"single\", there is a selected title and autofocus is true, the selected tile is focused on render", async () => {
    renderWithTheme(
        <TileGroup autoFocus defaultValue={["2"]} selectionMode="single">
            <Tile value="1" data-testid="tile-1">
                <Heading>1</Heading>
                <Content>1</Content>
            </Tile>
            <Tile value="2" data-testid="tile-2">
                <Heading>2</Heading>
                <Content>2</Content>
            </Tile>
        </TileGroup>
    );

    await waitFor(() => expect(screen.getByTestId("tile-1")).toHaveAttribute("tabindex", "-1"));
    await waitFor(() => expect(screen.getByTestId("tile-2")).toHaveAttribute("tabindex", "0"));
    await waitFor(() => expect(screen.getByTestId("tile-2")).toHaveFocus());
});

test("when selectionMode is \"multiple\" and autofocus is true, the first tile is focused on render", async () => {
    renderWithTheme(
        <TileGroup autoFocus selectionMode="multiple">
            <Tile data-testid="tile-1">
                <Heading>1</Heading>
                <Content>1</Content>
            </Tile>
            <Tile>
                <Heading>2</Heading>
                <Content>2</Content>
            </Tile>
        </TileGroup>
    );

    await waitFor(() => expect(screen.getByTestId("tile-1")).toHaveFocus());
});

// ***** Aria *****

test("when selectionMode is \"single\" the group role is \"radiogroup\"", async () => {
    renderWithTheme(
        <TileGroup selectionMode="single" data-testid="group">
            <Tile>
                <Heading>1</Heading>
                <Content>1</Content>
            </Tile>
            <Tile>
                <Heading>2</Heading>
                <Content>2</Content>
            </Tile>
        </TileGroup>
    );

    await waitFor(() => expect(screen.getByTestId("group")).toHaveAttribute("role", "radiogroup"));
});

test("when selectionMode is \"single\", the tile role is \"radio\"", async () => {
    renderWithTheme(
        <TileGroup selectionMode="single">
            <Tile data-testid="tile-1">
                <Heading>1</Heading>
                <Content>1</Content>
            </Tile>
            <Tile>
                <Heading>2</Heading>
                <Content>2</Content>
            </Tile>
        </TileGroup>
    );

    await waitFor(() => expect(screen.getByTestId("tile-1")).toHaveAttribute("role", "radio"));
});

test("when selectionMode is \"multiple\", the group role is \"group\"", async () => {
    renderWithTheme(
        <TileGroup selectionMode="multiple" data-testid="group">
            <Tile>
                <Heading>1</Heading>
                <Content>1</Content>
            </Tile>
            <Tile>
                <Heading>2</Heading>
                <Content>2</Content>
            </Tile>
        </TileGroup>
    );

    await waitFor(() => expect(screen.getByTestId("group")).toHaveAttribute("role", "group"));
});

test("when selectionMode is \"multiple\", the tile role is \"checkbox\"", async () => {
    renderWithTheme(
        <TileGroup selectionMode="multiple">
            <Tile data-testid="tile-1">
                <Heading>1</Heading>
                <Content>1</Content>
            </Tile>
            <Tile>
                <Heading>2</Heading>
                <Content>2</Content>
            </Tile>
        </TileGroup>
    );

    await waitFor(() => expect(screen.getByTestId("tile-1")).toHaveAttribute("role", "checkbox"));
});

// ***** Api *****

test("when selectionMode is \"single\", call onChange when a tile is selected", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <TileGroup onChange={handler} selectionMode="single">
            <Tile value="1" data-testid="tile-1">
                <Heading>1</Heading>
                <Content>1</Content>
            </Tile>
            <Tile value="2">
                <Heading>2</Heading>
                <Content>2</Content>
            </Tile>
        </TileGroup>
    );

    await userEvent.click(screen.getByTestId("tile-1"));

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything(), ["1"]));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

test("when selectionMode is \"single\", call onChange when then selected tile change", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <TileGroup onChange={handler} selectionMode="single">
            <Tile value="1" data-testid="tile-1">
                <Heading>1</Heading>
                <Content>1</Content>
            </Tile>
            <Tile value="2" data-testid="tile-2">
                <Heading>2</Heading>
                <Content>2</Content>
            </Tile>
        </TileGroup>
    );

    await userEvent.click(screen.getByTestId("tile-1"));

    await userEvent.click(screen.getByTestId("tile-2"));

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything(), ["2"]));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(2));
});

test("when selectionMode is \"multiple\", call onChange when a tile is selected", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <TileGroup onChange={handler} selectionMode="multiple">
            <Tile value="1" data-testid="tile-1">
                <Heading>1</Heading>
                <Content>1</Content>
            </Tile>
            <Tile value="2" data-testid="tile-2">
                <Heading>2</Heading>
                <Content>2</Content>
            </Tile>
        </TileGroup>
    );

    await userEvent.click(screen.getByTestId("tile-1"));

    await userEvent.click(screen.getByTestId("tile-2"));

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything(), ["1", "2"]));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(2));
});

test("when selectionMode is \"multiple\", call onChange when a tile is unselected", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <TileGroup onChange={handler} selectionMode="multiple">
            <Tile value="1" data-testid="tile-1">
                <Heading>1</Heading>
                <Content>1</Content>
            </Tile>
            <Tile value="2" data-testid="tile-2">
                <Heading>2</Heading>
                <Content>2</Content>
            </Tile>
        </TileGroup>
    );

    await userEvent.click(screen.getByTestId("tile-1"));
    await userEvent.click(screen.getByTestId("tile-2"));
    await userEvent.click(screen.getByTestId("tile-1"));

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything(), ["2"]));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(3));
});

test("when selectionMode is \"single\" call the tile onChange handler when a tile is selected", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <TileGroup selectionMode="single">
            <Tile onChange={handler} value="1" data-testid="tile-1">
                <Heading>1</Heading>
                <Content>1</Content>
            </Tile>
            <Tile value="2">
                <Heading>2</Heading>
                <Content>2</Content>
            </Tile>
        </TileGroup>
    );

    await userEvent.click(screen.getByTestId("tile-1"));

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything(), true));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

test("when selectionMode is \"multiple\", call the tile onChange handler when a tile is selected", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <TileGroup selectionMode="multiple">
            <Tile onChange={handler} value="1" data-testid="tile-1">
                <Heading>1</Heading>
                <Content>1</Content>
            </Tile>
            <Tile value="2">
                <Heading>2</Heading>
                <Content>2</Content>
            </Tile>
        </TileGroup>
    );

    await userEvent.click(screen.getByTestId("tile-1"));

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything(), true));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <TileGroup ref={ref}>
            <Tile value="1">
                <Heading>1</Heading>
                <Content>1</Content>
            </Tile>
            <Tile value="2">
                <Heading>2</Heading>
                <Content>2</Content>
            </Tile>
        </TileGroup>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    await waitFor(() => expect(ref.current instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(ref.current.tagName).toBe("DIV"));
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <TileGroup
            ref={node => {
                refNode = node;
            }}
        >
            <Tile value="1">
                <Heading>1</Heading>
                <Content>1</Content>
            </Tile>
            <Tile value="2">
                <Heading>2</Heading>
                <Content>2</Content>
            </Tile>
        </TileGroup>
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    await waitFor(() => expect(refNode instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(refNode.tagName).toBe("DIV"));
});

test("set ref once", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <TileGroup ref={handler}>
            <Tile value="1">
                <Heading>1</Heading>
                <Content>1</Content>
            </Tile>
            <Tile value="2">
                <Heading>2</Heading>
                <Content>2</Content>
            </Tile>
        </TileGroup>
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

