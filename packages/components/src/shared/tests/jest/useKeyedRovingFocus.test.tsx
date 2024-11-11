import { Button } from "@components/button/index.ts";
import { Div } from "@components/html/index.ts";
import { ReactNode } from "react";
import { render, screen, waitFor } from "@test-utils";
import { useFocusScope, useKeyedRovingFocus } from "@components/shared/index.ts";

interface RovingFocusProps {
    currentValue?: string;
    children?: ReactNode;
}

function RovingFocus({ currentValue, children }: RovingFocusProps) {
    const [focusScope, setFocusRef] = useFocusScope();

    useKeyedRovingFocus(focusScope, currentValue);

    return (
        <Div ref={setFocusRef}>
            {children}
        </Div>
    );
}

function DynamicRovingFocus({ currentValue, renderDynamicElement, children }: RovingFocusProps & { renderDynamicElement?: boolean }) {
    return (
        <RovingFocus currentValue={currentValue}>
            {children}
            {renderDynamicElement && <Button value="3" data-testid="element-3">3</Button>}
        </RovingFocus>
    );
}


test("when key is null, a disabled element is not tabbable", async () => {
    render(
        <RovingFocus>
            <Button disabled value="1" data-testid="element-1">1</Button>
            <Button value="2" data-testid="element-2">2</Button>
        </RovingFocus>
    );

    await waitFor(() => expect(screen.getByTestId("element-1")).not.toHaveAttribute("tabindex"));
    await waitFor(() => expect(screen.getByTestId("element-2")).toHaveAttribute("tabindex", "0"));
});

test("when key is null and all elements are disabled, no element is tabbable", async () => {
    render(
        <RovingFocus>
            <Button disabled value="1" data-testid="element-1">1</Button>
            <Button disabled value="2" data-testid="element-2">2</Button>
        </RovingFocus>
    );

    await waitFor(() => expect(screen.getByTestId("element-1")).not.toHaveAttribute("tabindex"));
    await waitFor(() => expect(screen.getByTestId("element-2")).not.toHaveAttribute("tabindex"));
});

test("when a key is provided, the matching element is tabbable", async () => {
    render(
        <RovingFocus currentValue="2">
            <Button value="1" data-testid="element-1">1</Button>
            <Button value="2" data-testid="element-2">2</Button>
        </RovingFocus>
    );

    await waitFor(() => expect(screen.getByTestId("element-1")).toHaveAttribute("tabindex", "-1"));
    await waitFor(() => expect(screen.getByTestId("element-2")).toHaveAttribute("tabindex", "0"));
});

test("when a key is provided and the matching element is disabled, no element is tabbable", async () => {
    render(
        <RovingFocus currentValue="2">
            <Button value="1" data-testid="element-1">1</Button>
            <Button disabled value="2" data-testid="element-2">2</Button>
        </RovingFocus>
    );

    await waitFor(() => expect(screen.getByTestId("element-1")).toHaveAttribute("tabindex", "-1"));
    await waitFor(() => expect(screen.getByTestId("element-2")).not.toHaveAttribute("tabindex"));
});

test("a dynamically added element should not change the tabbable element", async () => {
    const { rerender } = render(
        <DynamicRovingFocus currentValue="2">
            <Button value="1" data-testid="element-1">1</Button>
            <Button value="2" data-testid="element-2">2</Button>
        </DynamicRovingFocus>
    );

    rerender(
        <DynamicRovingFocus currentValue="2" renderDynamicElement>
            <Button value="1" data-testid="element-1">1</Button>
            <Button value="2" data-testid="element-2">2</Button>
        </DynamicRovingFocus>
    );

    await waitFor(() => expect(screen.getByTestId("element-1")).toHaveAttribute("tabindex", "-1"));
    await waitFor(() => expect(screen.getByTestId("element-2")).toHaveAttribute("tabindex", "0"));
    await waitFor(() => expect(screen.getByTestId("element-3")).toHaveAttribute("tabindex", "-1"));
});

test("a dynamically added element should be tabbable when the key is null and all the existing elements are disabled", async () => {
    const { rerender } = render(
        <DynamicRovingFocus>
            <Button disabled value="1" data-testid="element-1">1</Button>
            <Button disabled value="2" data-testid="element-2">2</Button>
        </DynamicRovingFocus>
    );

    await waitFor(() => expect(screen.getByTestId("element-1")).not.toHaveAttribute("tabindex"));
    await waitFor(() => expect(screen.getByTestId("element-2")).not.toHaveAttribute("tabindex"));

    rerender(
        <DynamicRovingFocus renderDynamicElement>
            <Button disabled value="1" data-testid="element-1">1</Button>
            <Button disabled value="2" data-testid="element-2">2</Button>
        </DynamicRovingFocus>
    );

    await waitFor(() => expect(screen.getByTestId("element-1")).not.toHaveAttribute("tabindex"));
    await waitFor(() => expect(screen.getByTestId("element-2")).not.toHaveAttribute("tabindex"));
    await waitFor(() => expect(screen.getByTestId("element-3")).toHaveAttribute("tabindex", "0"));
});

test("dynamically removing a non tabbable element keep the current tabbable element", async () => {
    const { rerender } = render(
        <DynamicRovingFocus currentValue="2" renderDynamicElement>
            <Button value="1" data-testid="element-1">1</Button>
            <Button value="2" data-testid="element-2">2</Button>
        </DynamicRovingFocus>
    );

    const element3 = await screen.findByTestId("element-3");
    expect(element3).toBeInTheDocument();
    await waitFor(() => expect(screen.getByTestId("element-2")).toHaveAttribute("tabindex", "0"));
    await waitFor(() => expect(element3).toHaveAttribute("tabindex", "-1"));

    rerender(
        <DynamicRovingFocus currentValue="2">
            <Button value="1" data-testid="element-1">1</Button>
            <Button value="2" data-testid="element-2">2</Button>
        </DynamicRovingFocus>
    );

    await waitFor(() => expect(screen.getByTestId("element-1")).toHaveAttribute("tabindex", "-1"));
    await waitFor(() => expect(screen.getByTestId("element-2")).toHaveAttribute("tabindex", "0"));
});

test("dynamically removing a tabbable element does not set a new tabbable element", async () => {
    const { rerender } = render(
        <DynamicRovingFocus currentValue="3" renderDynamicElement>
            <Button value="1" data-testid="element-1">1</Button>
            <Button value="2" data-testid="element-2">2</Button>
        </DynamicRovingFocus>
    );

    await waitFor(() => expect(screen.getByTestId("element-3")).toHaveAttribute("tabindex", "0"));

    rerender(
        <DynamicRovingFocus currentValue="3">
            <Button value="1" data-testid="element-1">1</Button>
            <Button value="2" data-testid="element-2">2</Button>
        </DynamicRovingFocus>
    );

    await waitFor(() => expect(screen.getByTestId("element-1")).toHaveAttribute("tabindex", "-1"));
    await waitFor(() => expect(screen.getByTestId("element-2")).toHaveAttribute("tabindex", "-1"));
});

test("normalize key to string", async () => {
    render(
        <RovingFocus currentValue="2">
            <Button value={1} data-testid="element-1">1</Button>
            <Button value={2} data-testid="element-2">2</Button>
        </RovingFocus>
    );

    await waitFor(() => expect(screen.getByTestId("element-1")).toHaveAttribute("tabindex", "-1"));
    await waitFor(() => expect(screen.getByTestId("element-2")).toHaveAttribute("tabindex", "0"));
});
