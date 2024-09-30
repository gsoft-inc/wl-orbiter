import { Switch } from "@components/switch";
import { Inline } from "@hopper-ui/components";
import { createTestSuite } from "./createTestSuite-hopper";
import { paramsBuilder, storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/Switch-hopper")
        .segment(segment)
        .parameters(paramsBuilder()
            .chromaticDelay(100)
            .build())
        .build();
}

createTestSuite(<Switch />, stories("/unchecked"));

createTestSuite(<Switch defaultChecked />, stories("/checked"));

stories()
    .add("styling", () =>
        <Inline>
            <Switch border="warning">Engines</Switch>
            <Switch className="border-red">Engines</Switch>
            <Switch style={{ border: "1px solid red" }}>Engines</Switch>
        </Inline>
    );
