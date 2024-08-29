/**
 * @jest-environment node
 */
import { Button } from "@components/button/index.js";
import { Content } from "@components/placeholders/index.js";
import { Heading } from "@components/typography/index.js";
import { Popover, PopoverTrigger } from "@components/popover/index.js";
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
