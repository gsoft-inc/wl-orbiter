/**
 * @jest-environment node
 */
import { TextLink } from "@components/link/index.ts";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <TextLink external href="#">
                Flight details
            </TextLink>
        );

    expect(renderOnServer).not.toThrow();
});
