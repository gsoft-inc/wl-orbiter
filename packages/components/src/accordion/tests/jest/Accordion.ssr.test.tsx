/**
 * @jest-environment node
 */
import { Accordion } from "@components/accordion/index.js";
import { Content } from "@components/placeholders/index.js";
import { H3 } from "@components/typography/index.js";
import { Item } from "@components/collection/index.js";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <Accordion>
                <Item>
                    <H3>Header</H3>
                    <Content>Content</Content>
                </Item>
                <Item>
                    <H3>Header</H3>
                    <Content>Content</Content>
                </Item>
                <Item>
                    <H3>Header</H3>
                    <Content>Content</Content>
                </Item>
            </Accordion>
        );

    expect(renderOnServer).not.toThrow();
});

