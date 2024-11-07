/**
 * @jest-environment node
 */
import { Div } from "@components/html/index.ts";
import { Illustration } from "@components/illustration/index.ts";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <Illustration>
                <Div slot="image">Image</Div>
            </Illustration>
        );

    expect(renderOnServer).not.toThrow();
});
