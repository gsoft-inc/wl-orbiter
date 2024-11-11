/**
 * @jest-environment node
 */
import { Button } from "@components/button/index.ts";
import { Item } from "@components/collection/index.ts";
import { Menu, MenuTrigger } from "@components/menu/index.ts";
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
