/**
 * @jest-environment node
 */
import { Button } from "@components/button/index.ts";
import { Content } from "@components/placeholders/index.ts";
import { Disclosure } from "@components/disclosure/index.ts";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <Disclosure>
                <Button>Header</Button>
                <Content>Content</Content>
            </Disclosure>
        );

    expect(renderOnServer).not.toThrow();
});
