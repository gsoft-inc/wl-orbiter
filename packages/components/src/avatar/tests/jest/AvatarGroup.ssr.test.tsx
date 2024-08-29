/**
 * @jest-environment node
 */
import { Avatar, AvatarGroup } from "@components/avatar/index.js";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <AvatarGroup>
                <Avatar name="Elon Musk" />
                <Avatar name="Kimbal Musk" />
            </AvatarGroup>
        );

    expect(renderOnServer).not.toThrow();
});

