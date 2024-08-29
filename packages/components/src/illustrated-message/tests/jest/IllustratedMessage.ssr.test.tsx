/**
 * @jest-environment node
 */
import { Div } from "@components/html/index.js";
import { IllustratedMessage } from "@components/illustrated-message/index.js";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <IllustratedMessage>
                <Div slot="image">Image</Div>
            </IllustratedMessage>
        );

    expect(renderOnServer).not.toThrow();
});
