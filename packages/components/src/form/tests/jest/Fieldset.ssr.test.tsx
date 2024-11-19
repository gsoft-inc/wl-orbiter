/**
 * @jest-environment node
 */
import { Field, Label } from "@components/field/index.ts";
import { Fieldset } from "@components/form/index.ts";
import { TextInput } from "@components/text-input/index.ts";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <Fieldset
                label="Full Name"
            >
                <Field>
                    <Label>First name</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>Last name</Label>
                    <TextInput />
                </Field>
            </Fieldset>
        );

    expect(renderOnServer).not.toThrow();
});
