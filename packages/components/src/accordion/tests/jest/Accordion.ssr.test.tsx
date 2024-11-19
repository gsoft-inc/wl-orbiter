/**
 * @jest-environment node
 */
import { Accordion } from "@components/accordion/index.ts";
import { Content } from "@components/placeholders/index.ts";
import { H3 } from "@components/typography/index.ts";
import { Item } from "@components/collection/index.ts";
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

