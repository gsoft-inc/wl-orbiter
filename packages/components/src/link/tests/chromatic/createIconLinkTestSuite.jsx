import { AddIcon } from "@hopper-ui/icons";
import { Div } from "@components/html/index.js";
import { Inline, Stack } from "@components/layout/index.js";
import { cloneElement } from "react";

function IconLink({ element, ...rest }) {
    return cloneElement(element, rest);
}

export function createIconLinkTestSuite(element, stories) {
    return stories
        .add("default", () =>
            <Inline alignY="end">
                <IconLink href="#" aria-label="Add" element={element}><AddIcon /></IconLink>
            </Inline>
        )
        .add("primary", () =>
            <Inline alignY="end">
                <IconLink variant="primary" aria-label="Add" href="#" element={element}><AddIcon /></IconLink>
            </Inline>
        )
        .add("accent", () =>
            <Inline alignY="end">
                <IconLink variant="accent" aria-label="Add" href="#" element={element}><AddIcon /></IconLink>
            </Inline>
        )
        .add("negative", () =>
            <Inline alignY="end">
                <IconLink variant="negative" aria-label="Add" href="#" element={element}><AddIcon /></IconLink>
            </Inline>
        )
        .add("inherit color", () =>
            <Inline alignY="end" color="primary">
                <IconLink color="inherit" aria-label="Add" href="#" element={element}><AddIcon /></IconLink>
            </Inline>
        )
        .add("states", () =>
            <Stack>
                <Inline alignY="end">
                    <IconLink active aria-label="Add" href="#" element={element}><AddIcon /></IconLink>
                </Inline>
                <Inline alignY="end">
                    <IconLink focus aria-label="Add" href="#" element={element}><AddIcon /></IconLink>
                </Inline>
                <Inline alignY="end">
                    <IconLink hover aria-label="Add" href="#" element={element}><AddIcon /></IconLink>
                </Inline>
                <Inline alignY="end">
                    <IconLink focus hover aria-label="Add" href="#" element={element}><AddIcon /></IconLink>
                </Inline>
            </Stack>
        )
        .add("disabled states", () =>
            <Stack>
                <Inline alignY="end">
                    <IconLink disabled aria-label="Add" href="#" element={element}><AddIcon /></IconLink>
                </Inline>
                <Inline alignY="end">
                    <IconLink disabled active aria-label="Add" href="#" element={element}><AddIcon /></IconLink>
                </Inline>
                <Inline alignY="end">
                    <IconLink disabled focus aria-label="Add" href="#" element={element}><AddIcon /></IconLink>
                </Inline>
                <Inline alignY="end">
                    <IconLink disabled hover aria-label="Add" href="#" element={element}><AddIcon /></IconLink>
                </Inline>
                <Inline alignY="end">
                    <IconLink disabled focus hover aria-label="Add" href="#" element={element}><AddIcon /></IconLink>
                </Inline>
            </Stack>
        )
        .add("external", () =>
            <IconLink external href="https://www.space.com/spacex-delays-south-korea-military-satellite-launch.html" aria-label="Add" element={element}><AddIcon /></IconLink>
        )
        .add("new tab", () =>
            <IconLink target="_blank" href="#" aria-label="Add" element={element}><AddIcon /></IconLink>
        )
        .add("zoom", () =>
            <Stack>
                <Div className="zoom-in">
                    <IconLink href="#" aria-label="Add" element={element}><AddIcon /></IconLink>
                </Div>
                <Div className="zoom-out">
                    <IconLink href="#" aria-label="Add" element={element}><AddIcon /></IconLink>
                </Div>
            </Stack>
        );
}

