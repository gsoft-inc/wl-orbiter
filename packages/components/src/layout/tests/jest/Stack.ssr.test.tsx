/**
 * @jest-environment node
 */
import { Div } from "@components/html";
import { Stack } from "@components/layout";
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
