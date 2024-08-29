/**
 * @jest-environment node
 */
import { Item } from "@components/collection/index.js";
import { Listbox } from "@components/listbox/index.js";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <Listbox>
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
            </Listbox>
        );

    expect(renderOnServer).not.toThrow();
});
