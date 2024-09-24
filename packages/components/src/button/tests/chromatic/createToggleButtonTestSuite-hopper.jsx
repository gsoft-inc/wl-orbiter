import { Div } from "@components/html";
import { Inline, Stack } from "@components/layout";
import { LightbulbIcon } from "@hopper-ui/icons";
import { Text } from "@components/typography";
import { cloneElement } from "react";

function ToggleButton({ element, ...rest }) {
    return cloneElement(element, rest);
}

export function createToggleButtonTestSuite(element, stories) {
    return stories
        .add("default", () =>
            <Stack>
                <Inline alignY="end">
                    <ToggleButton size="sm" element={element}>Cutoff</ToggleButton>
                    <ToggleButton element={element}>Cutoff</ToggleButton>
                </Inline>
                <ToggleButton element={element}>
                    <Text>Cutoff</Text>
                    <LightbulbIcon />
                </ToggleButton>
                <Inline alignY="end">
                    <ToggleButton size="sm" element={element}>Aa</ToggleButton>
                    <ToggleButton element={element}>Aa</ToggleButton>
                </Inline>
                <Inline alignY="end">
                    <ToggleButton checked element={element}>Aa</ToggleButton>
                    <ToggleButton active element={element}>Aa</ToggleButton>
                    <ToggleButton focus element={element}>Aa</ToggleButton>
                    <ToggleButton hover element={element}>Aa</ToggleButton>
                    <ToggleButton focus hover element={element}>Aa</ToggleButton>
                    <ToggleButton disabled element={element}>Aa</ToggleButton>
                </Inline>
            </Stack>
        )
        .add("states", () =>
            <Inline alignY="end">
                <ToggleButton checked element={element}>Cutoff</ToggleButton>
                <ToggleButton active element={element}>Cutoff</ToggleButton>
                <ToggleButton focus element={element}>Cutoff</ToggleButton>
                <ToggleButton hover element={element}>Cutoff</ToggleButton>
                <ToggleButton focus hover element={element}>Cutoff</ToggleButton>
                <ToggleButton disabled element={element}>Cutoff</ToggleButton>
            </Inline>
        )
        .add("checked", () =>
            <Inline>
                <ToggleButton checked element={element}>Cutoff</ToggleButton>
                <ToggleButton defaultChecked element={element}>Cutoff</ToggleButton>
                <ToggleButton checked element={element}>
                    <Text>Cutoff</Text>
                    <LightbulbIcon />
                </ToggleButton>
            </Inline>
        )
        .add("zoom", () =>
            <Inline>
                <Div className="zoom-in">
                    <ToggleButton element={element}>Cutoff</ToggleButton>
                </Div>
                <Div className="zoom-out">
                    <ToggleButton element={element}>Cutoff</ToggleButton>
                </Div>
            </Inline>
        );
}
