import { Content, Header } from "@components/placeholders/index.js";
import { act, fireEvent, screen, waitFor, renderWithTheme } from "@test-utils";

import { Item } from "@components/collection/index.js";
import { Keys } from "@components/shared/index.js";
import { Tabs } from "@components/tabs/index.js";
import { createRef } from "react";
import userEvent from "@testing-library/user-event";

// It's very hard to setup jest with a specific width & height to be able to test collapsed tabs because jsdom doesn't support layout.
// This means that all DOM elements measurements will always return 0 (except for window which will be 1024x768).

// The tests for non collapsed tabs are also inconsistent. Sometimes, tabs are collapsed when they should not. Not sure why.
// Therefore, a "collapsible" prop have been introduce to disable collapsing for tests.

// ***** Behaviors *****

test("first tab is tabbable", async () => {
    renderWithTheme(
        <Tabs aria-label="Tabs" collapsible={false}>
            <Item data-testid="tab-1">
                <Header>Header 1</Header>
                <Content>Content 1</Content>
            </Item>
            <Item data-testid="tab-2">
                <Header>Header 2</Header>
                <Content>Content 2</Content>
            </Item>
        </Tabs>
    );

    await waitFor(() => expect(screen.getByTestId("tab-1")).toHaveAttribute("tabindex", "0"));
    await waitFor(() => expect(screen.getByTestId("tab-2")).toHaveAttribute("tabindex", "-1"));
});

test("selected tab is tabbable", async () => {
    renderWithTheme(
        <Tabs defaultSelectedKey="tab-2" aria-label="Tabs" collapsible={false}>
            <Item key="tab-1" data-testid="tab-1">
                <Header>Header 1</Header>
                <Content>Content 1</Content>
            </Item>
            <Item key="tab-2" data-testid="tab-2">
                <Header>Header 2</Header>
                <Content>Content 2</Content>
            </Item>
        </Tabs>
    );

    await waitFor(() => expect(screen.getByTestId("tab-1")).toHaveAttribute("tabindex", "-1"));
    await waitFor(() => expect(screen.getByTestId("tab-2")).toHaveAttribute("tabindex", "0"));
});

test("a disabled tab is not tabbable", async () => {
    renderWithTheme(
        <Tabs aria-label="Tabs" collapsible={false}>
            <Item disabled data-testid="tab-1">
                <Header>Header 1</Header>
                <Content>Content 1</Content>
            </Item>
            <Item data-testid="tab-2">
                <Header>Header 2</Header>
                <Content>Content 2</Content>
            </Item>
        </Tabs>
    );

    await waitFor(() => expect(screen.getByTestId("tab-1")).not.toHaveAttribute("tabindex"));
    await waitFor(() => expect(screen.getByTestId("tab-2")).toHaveAttribute("tabindex", "0"));
});

test("when manual, focusing a tab doesn't change the active tab", async () => {
    renderWithTheme(
        <Tabs manual aria-label="Tabs" collapsible={false}>
            <Item data-testid="tab-1">
                <Header>Header 1</Header>
                <Content>Content 1</Content>
            </Item>
            <Item data-testid="tab-2">
                <Header>Header 2</Header>
                <Content>Content 2</Content>
            </Item>
        </Tabs>
    );

    act(() => {
        screen.getByTestId("tab-1").focus();
    });

    fireEvent.keyDown(screen.getByTestId("tab-1"), { key: Keys.arrowRight });

    await waitFor(() => expect(screen.getByTestId("tab-2")).toHaveAttribute("aria-selected", "false"));
});

test("when manual, spacebar keypress makes a tab active", async () => {
    renderWithTheme(
        <Tabs manual aria-label="Tabs" collapsible={false}>
            <Item>
                <Header>Header 1</Header>
                <Content>Content 1</Content>
            </Item>
            <Item data-testid="tab-2">
                <Header>Header 2</Header>
                <Content>Content 2</Content>
            </Item>
        </Tabs>
    );

    fireEvent.keyDown(screen.getByTestId("tab-2"), { key: Keys.space });

    await waitFor(() => expect(screen.getByTestId("tab-2")).toHaveAttribute("aria-selected", "true"));
});

test("when manual, enter keypress makes a tab active", async () => {
    renderWithTheme(
        <Tabs manual aria-label="Tabs" collapsible={false}>
            <Item>
                <Header>Header 1</Header>
                <Content>Content 1</Content>
            </Item>
            <Item data-testid="tab-2">
                <Header>Header 2</Header>
                <Content>Content 2</Content>
            </Item>
        </Tabs>
    );

    fireEvent.keyDown(screen.getByTestId("tab-2"), { key: Keys.enter });

    await waitFor(() => expect(screen.getByTestId("tab-2")).toHaveAttribute("aria-selected", "true"));
});

test("when horizontal, right arrow keypress select the next tab", async () => {
    renderWithTheme(
        <Tabs aria-label="Tabs" collapsible={false}>
            <Item data-testid="tab-1">
                <Header>Header 1</Header>
                <Content>Content 1</Content>
            </Item>
            <Item data-testid="tab-2">
                <Header>Header 2</Header>
                <Content>Content 2</Content>
            </Item>
            <Item>
                <Header>Header 3</Header>
                <Content>Content 3</Content>
            </Item>
        </Tabs>
    );

    act(() => {
        screen.getByTestId("tab-1").focus();
    });

    fireEvent.keyDown(screen.getByTestId("tab-1"), { key: Keys.arrowRight });

    await waitFor(() => expect(screen.getByTestId("tab-2")).toHaveAttribute("aria-selected", "true"));
});

test("when horizontal, left arrow keypress select the next tab", async () => {
    renderWithTheme(
        <Tabs aria-label="Tabs" collapsible={false}>
            <Item data-testid="tab-1">
                <Header>Header 1</Header>
                <Content>Content 1</Content>
            </Item>
            <Item>
                <Header>Header 2</Header>
                <Content>Content 2</Content>
            </Item>
            <Item data-testid="tab-3">
                <Header>Header 3</Header>
                <Content>Content 3</Content>
            </Item>
        </Tabs>
    );

    act(() => {
        screen.getByTestId("tab-1").focus();
    });

    fireEvent.keyDown(screen.getByTestId("tab-1"), { key: Keys.arrowLeft });

    await waitFor(() => expect(screen.getByTestId("tab-3")).toHaveAttribute("aria-selected", "true"));
});

test("when vertical, down arrow keypress select the next tab", async () => {
    renderWithTheme(
        <Tabs orientation="vertical" aria-label="Tabs" collapsible={false}>
            <Item data-testid="tab-1">
                <Header>Header 1</Header>
                <Content>Content 1</Content>
            </Item>
            <Item data-testid="tab-2">
                <Header>Header 2</Header>
                <Content>Content 2</Content>
            </Item>
            <Item>
                <Header>Header 3</Header>
                <Content>Content 3</Content>
            </Item>
        </Tabs>
    );

    act(() => {
        screen.getByTestId("tab-1").focus();
    });

    fireEvent.keyDown(screen.getByTestId("tab-1"), { key: Keys.arrowDown });

    await waitFor(() => expect(screen.getByTestId("tab-2")).toHaveAttribute("aria-selected", "true"));
});

test("when vertical, up arrow keypress select the next tab", async () => {
    renderWithTheme(
        <Tabs orientation="vertical" aria-label="Tabs" collapsible={false}>
            <Item data-testid="tab-1">
                <Header>Header 1</Header>
                <Content>Content 1</Content>
            </Item>
            <Item>
                <Header>Header 2</Header>
                <Content>Content 2</Content>
            </Item>
            <Item data-testid="tab-3">
                <Header>Header 3</Header>
                <Content>Content 3</Content>
            </Item>
        </Tabs>
    );

    act(() => {
        screen.getByTestId("tab-1").focus();
    });

    fireEvent.keyDown(screen.getByTestId("tab-1"), { key: Keys.arrowUp });

    await waitFor(() => expect(screen.getByTestId("tab-3")).toHaveAttribute("aria-selected", "true"));
});

test("when autofocus is true, the first item header is focused on render", async () => {
    renderWithTheme(
        <Tabs autoFocus aria-label="Tabs" collapsible={false}>
            <Item>
                <Header data-testid="header-1">Header 1</Header>
                <Content>Content 1</Content>
            </Item>
            <Item>
                <Header>Header 2</Header>
                <Content>Content 2</Content>
            </Item>
        </Tabs>
    );

    await waitFor(() => expect(screen.getByTestId("header-1")).toHaveFocus());
});

test("when autofocus is true and the first item is disabled, the next item header is focused on render", async () => {
    renderWithTheme(
        <Tabs autoFocus aria-label="Tabs" collapsible={false}>
            <Item disabled>
                <Header>Header 1</Header>
                <Content>Content 1</Content>
            </Item>
            <Item>
                <Header data-testid="header-2">Header 2</Header>
                <Content>Content 2</Content>
            </Item>
        </Tabs>
    );

    await waitFor(() => expect(screen.getByTestId("header-2")).toHaveFocus());
});

test("when autofocus is true and there is a selected key, the header of the item matching the selected key is focused on render", async () => {
    renderWithTheme(
        <Tabs defaultSelectedKey="header-2" autoFocus aria-label="Tabs" collapsible={false}>
            <Item>
                <Header>Header 1</Header>
                <Content>Content 1</Content>
            </Item>
            <Item key="header-2">
                <Header data-testid="header-2">Header 2</Header>
                <Content>Content 2</Content>
            </Item>
        </Tabs>
    );

    await waitFor(() => expect(screen.getByTestId("header-2")).toHaveFocus());
});

test("when autofocus is specified with a delay, the first item header is focused after the delay", async () => {
    renderWithTheme(
        <Tabs autoFocus aria-label="Tabs" collapsible={false}>
            <Item>
                <Header data-testid="header-1">Header 1</Header>
                <Content>Content 1</Content>
            </Item>
            <Item>
                <Header>Header 2</Header>
                <Content>Content 2</Content>
            </Item>
        </Tabs>
    );

    expect(screen.getByTestId("header-1")).not.toHaveFocus();

    await waitFor(() => expect(screen.getByTestId("header-1")).toHaveFocus());
});

// ***** Aria *****

test("when an id is provided, the tab id attribute match the provided id", async () => {
    renderWithTheme(
        <Tabs id="foo" aria-label="Tabs" data-testid="tabs" collapsible={false}>
            <Item>
                <Header>Header 1</Header>
                <Content>Content 1</Content>
            </Item>
        </Tabs>
    );

    await waitFor(() => expect(screen.getByTestId("tabs")).toHaveAttribute("id", "foo"));
});

test("when a root id is provided, it is used to compose the tab and panel ids", async () => {
    renderWithTheme(
        <Tabs id="foo" aria-label="Tabs" collapsible={false}>
            <Item>
                <Header data-testid="header">Header 1</Header>
                <Content data-testid="content">Content 1</Content>
            </Item>
        </Tabs>
    );

    const header = await screen.findByTestId("header");
    const content = await screen.findByTestId("content");

    await waitFor(() => expect(header).toHaveAttribute("id", "foo-tab-0"));
    await waitFor(() => expect(header).toHaveAttribute("aria-controls", "foo-panel-0"));
    await waitFor(() => expect(content).toHaveAttribute("id", "foo-panel-0"));
    await waitFor(() => expect(content).toHaveAttribute("aria-labelledby", "foo-tab-0"));
});

test("when an header id is provided, it is assigned to the tab id", async () => {
    renderWithTheme(
        <Tabs aria-label="Tabs" collapsible={false}>
            <Item>
                <Header id="tab-header" data-testid="header">Header 1</Header>
                <Content data-testid="content">Content 1</Content>
            </Item>
        </Tabs>
    );

    const header = await screen.findByTestId("header");
    const content = await screen.findByTestId("content");

    await waitFor(() => expect(header).toHaveAttribute("id", "tab-header"));
    await waitFor(() => expect(content).toHaveAttribute("aria-labelledby", "tab-header"));
});

test("when a content id is provided, it is assigned to the content id", async () => {
    renderWithTheme(
        <Tabs aria-label="Tabs" collapsible={false}>
            <Item>
                <Header data-testid="header">Header 1</Header>
                <Content id="tab-content" data-testid="content">Content 1</Content>
            </Item>
        </Tabs>
    );

    const header = await screen.findByTestId("header");
    const content = await screen.findByTestId("content");

    await waitFor(() => expect(header).toHaveAttribute("aria-controls", "tab-content"));
    await waitFor(() => expect(content).toHaveAttribute("id", "tab-content"));
});

test("when the root id is auto generated, it is used to compose the tab and panel ids", async () => {
    renderWithTheme(
        <Tabs aria-label="Tabs" collapsible={false}>
            <Item>
                <Header data-testid="header">Header 1</Header>
                <Content data-testid="content">Content 1</Content>
            </Item>
        </Tabs>
    );

    const header = await screen.findByTestId("header");
    const content = await screen.findByTestId("content");

    await waitFor(() => expect(header).toHaveAttribute("id"));
    await waitFor(() => expect(header).toHaveAttribute("aria-controls", content.getAttribute("id")));
    await waitFor(() => expect(content).toHaveAttribute("id"));
    await waitFor(() => expect(content).toHaveAttribute("aria-labelledby", header.getAttribute("id")));
});

test("when the header id is auto generated, it is assigned to the tab id", async () => {
    renderWithTheme(
        <Tabs aria-label="Tabs" collapsible={false}>
            <Item>
                <Header data-testid="header">Header 1</Header>
                <Content data-testid="content">Content 1</Content>
            </Item>
        </Tabs>
    );

    const header = await screen.findByTestId("header");
    const content = await screen.findByTestId("content");

    await waitFor(() => expect(header).toHaveAttribute("id"));
    await waitFor(() => expect(content).toHaveAttribute("aria-labelledby", header.getAttribute("id")));
});

test("when the content id is auto generated, it is assigned to the tab id", async () => {
    renderWithTheme(
        <Tabs aria-label="Tabs" collapsible={false}>
            <Item>
                <Header data-testid="header">Header 1</Header>
                <Content data-testid="content">Content 1</Content>
            </Item>
        </Tabs>
    );

    const header = await screen.findByTestId("header");
    const content = await screen.findByTestId("content");

    await waitFor(() => expect(content).toHaveAttribute("id"));
    await waitFor(() => expect(header.getAttribute("aria-controls")).toBe(content.getAttribute("id")));
});

test("a tab headers container have the \"tablist\" role", async () => {
    renderWithTheme(
        <Tabs aria-label="Tabs" collapsible={false}>
            <Item>
                <Header>Header 1</Header>
                <Content>Content 1</Content>
            </Item>
        </Tabs>
    );

    expect(await screen.findByRole("tablist")).toBeInTheDocument();
});

test("a tab header have the \"tab\" role", async () => {
    renderWithTheme(
        <Tabs aria-label="Tabs" collapsible={false}>
            <Item>
                <Header data-testid="header">Header 1</Header>
                <Content>Content 1</Content>
            </Item>
        </Tabs>
    );

    await waitFor(() => expect(screen.getByTestId("header")).toHaveAttribute("role", "tab"));
});

// ***** Api *****

test("call onSelectionChange when the active tab change", async () => {
    const handler = vi.fn();

    renderWithTheme(
        <Tabs onSelectionChange={handler} aria-label="Tabs" collapsible={false}>
            <Item>
                <Header>Header 1</Header>
                <Content>Content 1</Content>
            </Item>
            <Item data-testid="tab-2">
                <Header>Header 2</Header>
                <Content>Content 2</Content>
            </Item>
        </Tabs>
    );

    fireEvent.click(screen.getByTestId("tab-2"));

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything(), "1"));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

test("call onSelectionChange once when a tab is clicked", async () => {
    const handler = vi.fn();

    renderWithTheme(
        <Tabs onSelectionChange={handler} aria-label="Tabs" collapsible={false}>
            <Item>
                <Header>Header 1</Header>
                <Content>Content 1</Content>
            </Item>
            <Item data-testid="tab-2">
                <Header>Header 2</Header>
                <Content>Content 2</Content>
            </Item>
        </Tabs>
    );

    await userEvent.click(screen.getByTestId("tab-2"));

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

test("dont' call onSelectionChange when the active tab is clicked", async () => {
    const handler = vi.fn();

    renderWithTheme(
        <Tabs onSelectionChange={handler} aria-label="Tabs" collapsible={false}>
            <Item>
                <Header>Header 1</Header>
                <Content>Content 1</Content>
            </Item>
            <Item data-testid="tab-2">
                <Header>Header 2</Header>
                <Content>Content 2</Content>
            </Item>
        </Tabs>
    );

    await userEvent.click(screen.getByTestId("tab-2"));

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));

    await userEvent.click(screen.getByTestId("tab-2"));

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

test("dont call onSelectionChange when a tab is disabled", async () => {
    const handler = vi.fn();

    renderWithTheme(
        <Tabs onSelectionChange={handler} aria-label="Tabs" collapsible={false}>
            <Item>
                <Header>Header 1</Header>
                <Content>Content 1</Content>
            </Item>
            <Item disabled data-testid="tab-2">
                <Header>Header 2</Header>
                <Content>Content 2</Content>
            </Item>
        </Tabs>
    );

    fireEvent.click(screen.getByTestId("tab-2"));

    await waitFor(() => expect(handler).not.toHaveBeenCalled());
});

// ***** Refs *****

test("header ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <Tabs aria-label="Tabs" collapsible={false}>
            <Item>
                <Header ref={ref}>Header</Header>
                <Content>Content</Content>
            </Item>
        </Tabs>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    await waitFor(() => expect(ref.current instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(ref.current.tagName).toBe("BUTTON"));
});

test("content ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <Tabs aria-label="Tabs" collapsible={false}>
            <Item>
                <Header>Header</Header>
                <Content ref={ref}>Content</Content>
            </Item>
        </Tabs>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    await waitFor(() => expect(ref.current instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(ref.current.tagName).toBe("DIV"));
});
