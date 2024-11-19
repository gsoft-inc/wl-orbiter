/**
 * @jest-environment node
 */
import { Div } from "@components/html/index.ts";
import { IllustratedMessage } from "@components/illustrated-message/index.ts";
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
