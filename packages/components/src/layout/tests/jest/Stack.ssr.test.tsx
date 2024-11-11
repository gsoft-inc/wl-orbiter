/**
 * @jest-environment node
 */
import { Div } from "@components/html/index.ts";
import { Stack } from "@components/layout/index.ts";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <Stack >
                <Div>Alpha</Div>
                <Div>Bravo</Div>
                <Div>Charlie</Div>
            </Stack>
        );

    expect(renderOnServer).not.toThrow();
});
