/**
 * @jest-environment node
 */
import { AddIcon } from "@hopper-ui/icons";
import { IconLink } from "@components/link/index.ts";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <IconLink external href="#" aria-label="Add">
                <AddIcon />
            </IconLink>
        );

    expect(renderOnServer).not.toThrow();
});
