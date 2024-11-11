/**
 * @jest-environment node
 */
import { Item } from "@components/collection/index.ts";
import { Select } from "@components/select/index.ts";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <Select>
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Select>
        );

    expect(renderOnServer).not.toThrow();
});
