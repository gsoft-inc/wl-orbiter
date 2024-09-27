import { CheckmarkIcon } from "@hopper-ui/icons";
import { Div } from "@components/html";
import { Inline, Stack } from "@hopper-ui/components";
import { cloneElement } from "react";

function ToggleIconButton({ element, ...rest }) {
    return cloneElement(element, rest);
}

export function createToggleIconButtonTestSuite(element, stories) {
    return stories
        .add("default", () =>
            <Stack>
                <Inline alignY="end">
                    <ToggleIconButton size="sm" aria-label="Activate" element={element}><CheckmarkIcon /></ToggleIconButton>
                    <ToggleIconButton aria-label="Activate" element={element}><CheckmarkIcon /></ToggleIconButton>
                </Inline>
                <Inline alignY="end">
                    <ToggleIconButton checked aria-label="Activate" element={element}><CheckmarkIcon /></ToggleIconButton>
                    <ToggleIconButton active aria-label="Activate" element={element}><CheckmarkIcon /></ToggleIconButton>
                    <ToggleIconButton focus aria-label="Activate" element={element}><CheckmarkIcon /></ToggleIconButton>
                    <ToggleIconButton hover aria-label="Activate" element={element}><CheckmarkIcon /></ToggleIconButton>
                    <ToggleIconButton focus hover aria-label="Activate" element={element}><CheckmarkIcon /></ToggleIconButton>
                    <ToggleIconButton disabled aria-label="Activate" element={element}><CheckmarkIcon /></ToggleIconButton>
                </Inline>
            </Stack>
        )
        .add("checked", () =>
            <Inline>
                <ToggleIconButton checked aria-label="Activate" element={element}><CheckmarkIcon /></ToggleIconButton>
                <ToggleIconButton defaultChecked aria-label="Activate" element={element}><CheckmarkIcon /></ToggleIconButton>
            </Inline>
        )
        .add("zoom", () =>
            <Inline>
                <Div className="zoom-in">
                    <ToggleIconButton aria-label="Activate" element={element}><CheckmarkIcon /></ToggleIconButton>
                </Div>
                <Div className="zoom-out">
                    <ToggleIconButton aria-label="Activate" element={element}><CheckmarkIcon /></ToggleIconButton>
                </Div>
            </Inline>
        );
}
