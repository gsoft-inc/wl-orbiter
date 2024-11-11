import { Content } from "@components/placeholders/index.ts";
import { Heading } from "@components/typography/index.ts";
import { TileLink } from "@components/tile/index.ts";
import { createRef } from "react";
import { renderWithTheme, waitFor } from "@test-utils";

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <TileLink ref={ref}>
            <Heading>Fuel</Heading>
            <Content>Fuel configuration and level</Content>
        </TileLink>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    await waitFor(() => expect(ref.current instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(ref.current.tagName).toBe("A"));
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <TileLink
            ref={node => {
                refNode = node;
            }}
        >
            <Heading>Fuel</Heading>
            <Content>Fuel configuration and level</Content>
        </TileLink>
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    await waitFor(() => expect(refNode instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(refNode.tagName).toBe("A"));
});

test("set ref once", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <TileLink ref={handler}>
            <Heading>Fuel</Heading>
            <Content>Fuel configuration and level</Content>
        </TileLink>
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
