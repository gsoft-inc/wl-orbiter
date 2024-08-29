/**
 * @jest-environment node
 */
import { Button } from "@components/button/index.js";
import { Item } from "@components/collection/index.js";
import { Menu, MenuTrigger } from "@components/menu/index.js";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <MenuTrigger>
                <Button>Trigger</Button>
                <Menu>
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Menu>
            </MenuTrigger>
        );

    expect(renderOnServer).not.toThrow();
});
