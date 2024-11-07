/**
 * @jest-environment node
 */
import { Card } from "@components/card/index.ts";
import { Content } from "@components/placeholders/index.ts";
import { Heading } from "@components/typography/index.ts";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <Card>
                <Heading>Nasa</Heading>
                <Content>The National Aeronautics and Space Administration is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research.</Content>
            </Card>
        );

    expect(renderOnServer).not.toThrow();
});
