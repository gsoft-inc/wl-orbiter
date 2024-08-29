/**
 * @jest-environment node
 */
import { Button } from "@components/button/index.js";
import { Tooltip, TooltipTrigger } from "@components/tooltip/index.js";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <TooltipTrigger>
                <Button disabled>Trigger</Button>
                <Tooltip>Content</Tooltip>
            </TooltipTrigger>
        );

    expect(renderOnServer).not.toThrow();
});
