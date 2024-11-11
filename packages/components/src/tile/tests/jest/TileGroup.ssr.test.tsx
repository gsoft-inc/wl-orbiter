/**
 * @jest-environment node
 */
import { Content } from "@components/placeholders/index.ts";
import { Heading } from "@components/typography/index.ts";
import { Tile, TileGroup } from "@components/tile/index.ts";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
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

    expect(renderOnServer).not.toThrow();
});
