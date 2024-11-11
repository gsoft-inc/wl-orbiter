/**
 * @jest-environment node
 */
import { Button } from "@components/button/index.ts";
import { Content } from "@components/placeholders/index.ts";
import { Dialog, DialogTrigger } from "@components/dialog/index.ts";
import { Heading } from "@components/typography/index.ts";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <DialogTrigger dismissable>
                <Button>Trigger</Button>
                <Dialog>
                    <Heading>Iconic Arecibo Observatory collapses</Heading>
                    <Content>This year, the National Science Foundation (NSF) said farewell to the iconic Arecibo Observatory in Puerto Rico after two major cable failures led to the radio telescope's collapse.</Content>
                </Dialog>
            </DialogTrigger>
        );

    expect(renderOnServer).not.toThrow();
});
