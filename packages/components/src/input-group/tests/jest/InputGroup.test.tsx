import { Field, Label } from "@components/field/index.ts";
import { InputGroup } from "@components/input-group/index.ts";
import { Text } from "@components/typography/index.ts";
import { TextInput } from "@components/text-input/index.ts";
import { screen, waitFor, renderWithTheme } from "@test-utils";
import { createRef } from "react";
import { userEvent } from "@testing-library/user-event";

// ***** Behaviors *****

test("when in a field, clicking on the field label focus the input", async () => {
    renderWithTheme(
        <Field>
            <Label data-testid="label">Label</Label>
            <InputGroup>
                <Text>Text</Text>
                <TextInput aria-label="Label" data-testid="input" />
            </InputGroup>
        </Field>
    );

    await userEvent.click(screen.getByTestId("label"));

    await waitFor(() => expect(screen.getByTestId("input")).toHaveFocus());
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <InputGroup ref={ref}>
            <Text>Text</Text>
            <TextInput aria-label="Label" />
        </InputGroup>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("DIV");
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <InputGroup
            ref={node => {
                refNode = node;
            }}
        >
            <Text>Text</Text>
            <TextInput aria-label="Label" />
        </InputGroup>
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLElement).toBeTruthy();
    expect(refNode.tagName).toBe("DIV");
});

test("set ref once", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <InputGroup ref={handler}>
            <Text>Text</Text>
            <TextInput aria-label="Label" />
        </InputGroup>
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
