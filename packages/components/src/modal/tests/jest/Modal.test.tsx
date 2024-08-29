import { Content } from "@components/placeholders/index.js";
import { Heading } from "@components/typography/index.js";
import { Modal } from "@components/modal/index.js";
import { createRef } from "react";
import { renderWithTheme, waitFor } from "@test-utils";

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <Modal ref={ref}>
            <Heading>Iconic Arecibo Observatory collapses</Heading>
            <Content>This year, the National Science Foundation (NSF) said farewell to the iconic Arecibo Observatory in Puerto Rico after two major cable failures led to the radio telescope's collapse.</Content>
        </Modal>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    await waitFor(() => expect(ref.current instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(ref.current.tagName).toBe("SECTION"));
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <Modal
            ref={node => {
                refNode = node;
            }}
        >
            <Heading>Iconic Arecibo Observatory collapses</Heading>
            <Content>This year, the National Science Foundation (NSF) said farewell to the iconic Arecibo Observatory in Puerto Rico after two major cable failures led to the radio telescope's collapse.</Content>
        </Modal>
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    await waitFor(() => expect(refNode instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(refNode.tagName).toBe("SECTION"));
});

test("set ref once", async () => {
    const handler = vi.fn();

    renderWithTheme(
        <Modal ref={handler}>
            <Heading>Iconic Arecibo Observatory collapses</Heading>
            <Content>This year, the National Science Foundation (NSF) said farewell to the iconic Arecibo Observatory in Puerto Rico after two major cable failures led to the radio telescope's collapse.</Content>
        </Modal>
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
