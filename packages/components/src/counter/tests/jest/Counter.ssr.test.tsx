/**
 * @jest-environment node
 */
import { Counter } from "@components/counter/index.js";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <Counter>15</Counter>
        );

    expect(renderOnServer).not.toThrow();
});
