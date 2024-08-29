/**
 * @jest-environment node
 */
import { Div } from "@components/html/index.js";
import { Inline } from "@components/layout/index.js";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <Inline >
                <Div>Alpha</Div>
                <Div>Bravo</Div>
                <Div>Charlie</Div>
            </Inline>
        );

    expect(renderOnServer).not.toThrow();
});
