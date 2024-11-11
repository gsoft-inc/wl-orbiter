/**
 * @jest-environment node
 */
import { Content } from "@components/placeholders/index.ts";
import { Heading } from "@components/typography/index.ts";
import { Tile } from "@components/tile/index.ts";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <Tile autoFocus>
                <Heading>Fuel</Heading>
                <Content>Fuel configuration and level</Content>
            </Tile>
        );

    expect(renderOnServer).not.toThrow();
});
