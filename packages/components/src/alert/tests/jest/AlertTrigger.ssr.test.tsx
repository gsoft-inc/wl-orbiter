/**
 * @jest-environment node
 */
import { Alert, AlertTrigger } from "@components/alert/index.ts";
import { Button } from "@components/button/index.ts";
import { Content } from "@components/placeholders/index.ts";
import { Heading } from "@components/typography/index.ts";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <AlertTrigger>
                <Button>Trigger</Button>
                <Alert primaryButtonLabel="Primary">
                    <Heading>Autopilot</Heading>
                    <Content>Are you use sure you want to engage autopilot?</Content>
                </Alert>
            </AlertTrigger>
        );

    expect(renderOnServer).not.toThrow();
});

