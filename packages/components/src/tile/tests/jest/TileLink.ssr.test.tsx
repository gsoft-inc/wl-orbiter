/**
 * @jest-environment node
 */
import { Content } from "@components/placeholders/index.js";
import { Heading } from "@components/typography/index.js";
import { TileLink } from "@components/tile/index.js";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <TileLink>
                <Heading>Fuel</Heading>
                <Content>Fuel configuration and level</Content>
            </TileLink>
        );

    expect(renderOnServer).not.toThrow();
});
