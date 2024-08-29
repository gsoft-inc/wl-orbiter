/**
 * @jest-environment node
 */
import { Field, HelpMessage, Label } from "@components/field/index.js";
import { TextInput } from "@components/text-input/index.js";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <Field id="foo" >
                <Label >Where to?</Label>
                <TextInput />
                <HelpMessage>Enter a destination</HelpMessage>
            </Field>
        );

    expect(renderOnServer).not.toThrow();
});
