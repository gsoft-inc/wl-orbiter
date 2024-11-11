/**
 * @jest-environment node
 */
import { Content } from "@components/placeholders/index.ts";
import { Heading } from "@components/typography/index.ts";
import { TileLink } from "@components/tile/index.ts";
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
