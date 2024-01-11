/**
 * @jest-environment node
 */
import { CheckmarkIcon } from "@hopper-ui/icons";
import { IconList } from "@components/icons";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <IconList >
                <CheckmarkIcon />
                <CheckmarkIcon />
            </IconList>
        );

    expect(renderOnServer).not.toThrow();
});
