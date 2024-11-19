/**
 * @jest-environment node
 */
import { Button } from "@components/button/index.ts";
import { Toolbar } from "@components/toolbar/index.ts";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <Toolbar>
                <Button disabled>1</Button>
                <Button>2</Button>
            </Toolbar>
        );

    expect(renderOnServer).not.toThrow();
});
