import { Button } from "@components/button";
import { Div } from "@components/html";
import { Inline } from "@components/layout";
import { cloneElement } from "react";
import { createButtonTestSuite } from "./createButtonTestSuite-hopper";
import { storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/Button-hopper")
        .segment(segment)
        .build();
}
function WarningBackground({ button, ...rest }) {
    return (
        <Div color="sunken-treasure-600" backgroundColor="koi-25">
            {cloneElement(button, rest)}
        </Div>
    );
}
createButtonTestSuite(<Button variant="primary" />, stories("/primary"));
createButtonTestSuite(<Button variant="secondary" />, stories("/secondary"));
createButtonTestSuite(<WarningBackground button={<Button variant="secondary" inherit />} />, stories("/secondary (inherit)"));
createButtonTestSuite(<Button variant="tertiary" />, stories("/tertiary"));
createButtonTestSuite(<WarningBackground button={<Button variant="tertiary" inherit />} />, stories("/tertiary (inherit)"));
createButtonTestSuite(<Button variant="upsell" />, stories("/upsell"));
createButtonTestSuite(<Button variant="negative" />, stories("/negative"));

stories()
    .add("styling", () =>
        <Inline>
            <Button border="sunken-treasure-600" variant="secondary">Button</Button>
            <Button className="bg-red" variant="secondary">Button</Button>
            <Button style={{ backgroundColor: "red" }} variant="secondary">Button</Button>
        </Inline>
    );
