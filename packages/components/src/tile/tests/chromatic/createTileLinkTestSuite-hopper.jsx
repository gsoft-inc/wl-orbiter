import { Content } from "@components/placeholders";
import { Div } from "@components/html";
import { Heading } from "@components/typography";
import { Illustration } from "@components/illustration";
import { Image } from "@components/image";
import { Inline, Stack } from "@components/layout";
import { Nasa } from "./assets";
import { cloneElement } from "react";

function TileLink({ element, ...rest }) {
    return cloneElement(element, rest);
}

export function createTileLinkTestSuite(element, stories) {
    return stories
        .add("default", () =>
            <TileLink href="https://www.google.com" element={element}>
                <Heading>Fuel</Heading>
                <Content>Fuel configuration and level</Content>
            </TileLink>
        )
        .add("external", () =>
            <TileLink href="https://www.google.com" external element={element}>
                <Heading>Fuel</Heading>
                <Content>Fuel configuration and level</Content>
            </TileLink>
        )
        .add("states", () =>
            <Stack>
                <Inline>
                    <TileLink active href="https://www.google.com" element={element}>
                        <Heading>Map</Heading>
                        <Content>View space map</Content>
                    </TileLink>
                    <TileLink focus href="https://www.google.com" element={element}>
                        <Heading>Map</Heading>
                        <Content>View space map</Content>
                    </TileLink>
                    <TileLink hover href="https://www.google.com" element={element}>
                        <Heading>Map</Heading>
                        <Content>View space map</Content>
                    </TileLink>
                    <TileLink focus hover href="https://www.google.com" element={element}>
                        <Heading>Map</Heading>
                        <Content>View space map</Content>
                    </TileLink>
                </Inline>
                <Inline>
                    <TileLink disabled href="https://www.google.com" element={element}>
                        <Heading>Map</Heading>
                        <Content>View space map</Content>
                    </TileLink>
                    <TileLink disabled active href="https://www.google.com" element={element}>
                        <Heading>Map</Heading>
                        <Content>View space map</Content>
                    </TileLink>
                    <TileLink disabled hover href="https://www.google.com" element={element}>
                        <Heading>Map</Heading>
                        <Content>View space map</Content>
                    </TileLink>
                    <TileLink disabled focus href="https://www.google.com" element={element}>
                        <Heading>Map</Heading>
                        <Content>View space map</Content>
                    </TileLink>
                </Inline>
            </Stack>
        )
        .add("illustration", () =>
            <TileLink element={element} href="https://www.google.com">
                <Illustration backgroundColor="red">
                    <Image src={Nasa} width="100px" alt="Nasa Logo" />
                </Illustration>
                <Heading>Fuel</Heading>
                <Content>Fuel configuration and level</Content>
            </TileLink>
        )
        .add("zoom", () =>
            <Stack>
                <Div className="zoom-in">
                    <TileLink href="https://www.google.com" element={element}>
                        <Heading>Fuel</Heading>
                        <Content>Fuel configuration and level</Content>
                    </TileLink>
                </Div>
                <Div className="zoom-out">
                    <TileLink href="https://www.google.com" element={element}>
                        <Heading>Fuel</Heading>
                        <Content>Fuel configuration and level</Content>
                    </TileLink>
                </Div>
            </Stack>
        )
        .add("styling", () =>
            <Stack>
                <TileLink border="sunken-treasure-900" href="https://www.google.com" element={element}>
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </TileLink>
                <TileLink className="border-red" href="https://www.google.com" element={element}>
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </TileLink>
                <TileLink style={{ border: "1px solid red" }} href="https://www.google.com" element={element}>
                    <Heading>Fuel</Heading>
                    <Content>Fuel configuration and level</Content>
                </TileLink>
            </Stack>
        );
}
