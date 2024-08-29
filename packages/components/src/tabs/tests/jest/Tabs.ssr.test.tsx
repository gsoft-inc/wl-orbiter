/**
 * @jest-environment node
 */
import { Content, Header } from "@components/placeholders/index.js";
import { Item } from "@components/collection/index.js";
import { Tabs } from "@components/tabs/index.js";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <Tabs aria-label="Tabs" collapsible={false}>
                <Item>
                    <Header>Header 1</Header>
                    <Content>Content 1</Content>
                </Item>
                <Item>
                    <Header>Header 2</Header>
                    <Content>Content 2</Content>
                </Item>
            </Tabs>
        );

    expect(renderOnServer).not.toThrow();
});
