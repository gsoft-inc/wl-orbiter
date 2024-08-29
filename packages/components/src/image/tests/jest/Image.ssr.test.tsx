/**
 * @jest-environment node
 */
import { Image } from "@components/image/index.js";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        );

    expect(renderOnServer).not.toThrow();
});
