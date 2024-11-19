/**
 * @jest-environment node
 */
import { Button } from "@components/button/index.ts";
import { Content } from "@components/placeholders/index.ts";
import { Heading } from "@components/typography/index.ts";
import { Popover, PopoverTrigger } from "@components/popover/index.ts";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <PopoverTrigger dismissable>
                <Button>Trigger</Button>
                <Popover>
                    <Heading>Space News</Heading>
                    <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
                </Popover>
            </PopoverTrigger>
        );

    expect(renderOnServer).not.toThrow();
});
