/**
 * @jest-environment node
 */
import { Field, Label } from "@components/field/index.js";
import { InputGroup } from "@components/input-group/index.js";
import { Text } from "@components/typography/index.js";
import { TextInput } from "@components/text-input/index.js";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <Field>
                <Label>Label</Label>
                <InputGroup>
                    <Text>Text</Text>
                    <TextInput aria-label="Label" />
                </InputGroup>
            </Field>
        );

    expect(renderOnServer).not.toThrow();
});
