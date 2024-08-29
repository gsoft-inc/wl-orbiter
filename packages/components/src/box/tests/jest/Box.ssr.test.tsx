/**
 * @jest-environment node
 */
import { Box } from "@components/box/index.js";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <Box>Box</Box>
        );

    expect(renderOnServer).not.toThrow();
});
