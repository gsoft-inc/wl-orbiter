/**
 * @jest-environment node
 */
import { DateRangeInput } from "@components/date-input/index.js";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <DateRangeInput
                presets={[{ text: "Preset 1", startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 7) }]}
                presetsVariant="expanded"
                name="date-range"
            />
        );

    expect(renderOnServer).not.toThrow();
});
