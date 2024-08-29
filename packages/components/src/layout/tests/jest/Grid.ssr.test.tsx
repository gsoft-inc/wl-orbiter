/**
 * @jest-environment node
 */
import { Div } from "@components/html/index.js";
import { Grid } from "@components/layout/index.js";
import { renderToString } from "react-dom/server";
import { throwOnConsoleLogs } from "@test-utils";

test("can render on the server", () => {
    throwOnConsoleLogs();

    const renderOnServer = () =>
        renderToString(
            <Grid >
                <Div>Alpha</Div>
                <Div>Bravo</Div>
                <Div>Charlie</Div>
            </Grid>
        );

    expect(renderOnServer).not.toThrow();
});
