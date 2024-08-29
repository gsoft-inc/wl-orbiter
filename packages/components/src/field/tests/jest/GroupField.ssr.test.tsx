/**
 * @jest-environment node
 */
import { Checkbox, CheckboxGroup } from "@components/checkbox/index.js";
import { GroupField, Label } from "@components/field/index.js";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <GroupField id="foo">
                <Label>Your favorite galaxy?</Label>
                <CheckboxGroup>
                    <Checkbox value="milky-way" >Milky Way</Checkbox>
                    <Checkbox value="andromeda">Andromeda</Checkbox>
                    <Checkbox value="medusa">Medusa</Checkbox>
                </CheckboxGroup>
            </GroupField>
        );

    expect(renderOnServer).not.toThrow();
});
