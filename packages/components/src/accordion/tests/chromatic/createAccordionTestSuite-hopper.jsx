import { AccordionHeader, useAccordionContext } from "@components/accordion";
import { Content } from "@components/placeholders";
import { Counter } from "@components/counter";
import { Div } from "@components/html";
import { H1, H3, Text } from "@components/typography";
import { InfoIcon } from "@hopper-ui/icons";
import { Item } from "@components/collection";
import { Stack } from "@components/layout";
import { cloneElement } from "react";
import { mergeProps } from "@components/shared";

function Accordion({ element, ...rest }) {
    return cloneElement(element, rest);
}

export function createAccordionTestSuite(element, stories) {
    return stories
        .add("default", () =>
            <Accordion element={element}>
                <Item>
                    <H3>Mars</H3>
                    <Content>
                        Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System (in adherence with the IAU's controversial 2006 definition of planet),
                        being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".[17][18] The latter refers
                        to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye.
                        [19] Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth.
                    </Content>
                </Item>
                <Item>
                    <H3>Jupiter</H3>
                    <Content>
                        Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half
                        times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has
                        been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be
                        bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.
                        Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half
                        times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has
                        been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be
                        bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.
                        Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half
                        times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has
                        been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be
                        bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.
                        Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half
                        times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has
                        been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be
                        bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.
                    </Content>
                </Item>
                <Item>
                    <H3>Venus</H3>
                    <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                </Item>
            </Accordion>
        )
        .add("icon", () =>
            <Accordion element={element}>
                <Item>
                    <H3>
                        <InfoIcon />
                        <Text>Mars</Text>
                    </H3>
                    <Content>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.</Content>
                </Item>
                <Item>
                    <H3>
                        <InfoIcon />
                        <Text>Jupiter</Text>
                    </H3>
                    <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                </Item>
                <Item>
                    <H3>
                        <InfoIcon />
                        <Text>Venus</Text>
                    </H3>
                    <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                </Item>
            </Accordion>
        )
        .add("counter", () =>
            <Accordion element={element}>
                <Item>
                    <H3>
                        <Text>Mars</Text>
                        <Counter>8</Counter>
                    </H3>
                    <Content>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.</Content>
                </Item>
                <Item>
                    <H3>
                        <Text>Jupiter</Text>
                        <Counter>9</Counter>
                    </H3>
                    <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                </Item>
                <Item>
                    <H3>
                        <Text>Venus</Text>
                        <Counter>10</Counter>
                    </H3>
                    <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                </Item>
            </Accordion>
        )
        .add("expanded keys with manual keys", () =>
            <Stack>
                <Accordion element={element} defaultExpandedKeys={["jupiter"]}>
                    <Item key="mars">
                        <H3>Mars</H3>
                        <Content>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.</Content>
                    </Item>
                    <Item key="jupiter">
                        <H3>Jupiter</H3>
                        <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                    </Item>
                    <Item key="venus">
                        <H3>Venus</H3>
                        <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                    </Item>
                </Accordion>
                <Accordion element={element} expansionMode="multiple" expandedKeys={["mars", "venus"]}>
                    <Item key="mars">
                        <H3>Mars</H3>
                        <Content>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.</Content>
                    </Item>
                    <Item key="jupiter">
                        <H3>Jupiter</H3>
                        <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                    </Item>
                    <Item key="venus">
                        <H3>Venus</H3>
                        <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                    </Item>
                </Accordion>
            </Stack>
        )
        .add("expanded keys with generated keys", () =>
            <Stack>
                <Accordion element={element} defaultExpandedKeys={["1"]}>
                    <Item>
                        <H3>Mars</H3>
                        <Content>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.</Content>
                    </Item>
                    <Item>
                        <H3>Jupiter</H3>
                        <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                    </Item>
                    <Item>
                        <H3>Venus</H3>
                        <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                    </Item>
                </Accordion>
                <Accordion element={element} expansionMode="multiple" expandedKeys={["0", "2"]}>
                    <Item>
                        <H3>Mars</H3>
                        <Content>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.</Content>
                    </Item>
                    <Item>
                        <H3>Jupiter</H3>
                        <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                    </Item>
                    <Item>
                        <H3>Venus</H3>
                        <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                    </Item>
                </Accordion>
            </Stack>
        )
        .add("narrow container", () =>
            <Div width="200px">
                <Accordion element={element}>
                    <Item>
                        <H3>Mars</H3>
                        <Content>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.</Content>
                    </Item>
                    <Item>
                        <H3>Jupiter</H3>
                        <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                    </Item>
                    <Item>
                        <H3>Venus</H3>
                        <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                    </Item>
                </Accordion>
            </Div>
        )
        .add("states", () =>
            <Stack>
                <Accordion element={element}>
                    <Item active>
                        <H3>Uranus</H3>
                        <Content>Uranus is the seventh planet from the Sun.</Content>
                    </Item>
                    <Item focus>
                        <H3>Mars</H3>
                        <Content>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.</Content>
                    </Item>
                    <Item hover>
                        <H3>Jupiter</H3>
                        <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                    </Item>
                    <Item focus hover>
                        <H3>Venus</H3>
                        <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                    </Item>
                </Accordion>
                <Accordion element={element}>
                    <Item disabled>
                        <H3>Uranus</H3>
                        <Content>Uranus is the seventh planet from the Sun.</Content>
                    </Item>
                    <Item disabled active>
                        <H3>Mars</H3>
                        <Content>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.</Content>
                    </Item>
                    <Item disabled focus>
                        <H3>Jupiter</H3>
                        <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                    </Item>
                    <Item disabled hover>
                        <H3>Venus</H3>
                        <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                    </Item>
                    <Item disabled focus hover>
                        <H3>Saturn</H3>
                        <Content>Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter.</Content>
                    </Item>
                </Accordion>
            </Stack>
        )
        .add("dynamic items", () =>
            <Stack>
                <Accordion element={element}>
                    {["1", "2", "3"].map(x => (
                        <Item key={x}>
                            <H3>{`Header ${x}`}</H3>
                            <Content>{`Content ${x}`}</Content>
                        </Item>
                    ))}
                </Accordion>
            </Stack>
        )
        .add("custom component", () => {
            const ActiveHeader = ({ header, children, ...rest }) => {
                const { expandedKeys } = useAccordionContext();
                const { key } = header;

                return (
                    <AccordionHeader
                        {...mergeProps(
                            rest,
                            {
                                style: { backgroundColor: expandedKeys.includes(key) ? "blue" : "red" },
                                header,
                                headingType: H1,
                                headingProps: { padding: "10px" }
                            }
                        )}
                    >
                        {children}
                    </AccordionHeader>
                );
            };

            return (
                <Accordion defaultExpandedKeys={["1"]} element={element}>
                    <Item>
                        <ActiveHeader>Mars</ActiveHeader>
                        <Content>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.</Content>
                    </Item>
                    <Item>
                        <ActiveHeader>Jupiter</ActiveHeader>
                        <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                    </Item>
                    <Item>
                        <H3>Venus</H3>
                        <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                    </Item>
                </Accordion>
            );
        })
        .add("zoom", () =>
            <Stack>
                <Div className="zoom-in">
                    <Accordion element={element}>
                        <Item>
                            <H3>Mars</H3>
                            <Content>
                                Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System (in adherence with the IAU's controversial 2006 definition of planet),
                                being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".[17][18] The latter refers
                                to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye.
                                [19] Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth.
                            </Content>
                        </Item>
                        <Item>
                            <H3>Jupiter</H3>
                            <Content>
                                Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half
                                times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has
                                been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be
                                bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.
                                Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half
                                times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has
                                been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be
                                bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.
                                Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half
                                times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has
                                been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be
                                bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.
                                Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half
                                times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has
                                been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be
                                bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.
                            </Content>
                        </Item>
                        <Item>
                            <H3>Venus</H3>
                            <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                        </Item>
                    </Accordion>
                </Div>
                <Div className="zoom-out">
                    <Accordion element={element}>
                        <Item>
                            <H3>Mars</H3>
                            <Content>
                                Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System (in adherence with the IAU's controversial 2006 definition of planet),
                                being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".[17][18] The latter refers
                                to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye.
                                [19] Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth.
                            </Content>
                        </Item>
                        <Item>
                            <H3>Jupiter</H3>
                            <Content>
                                Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half
                                times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has
                                been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be
                                bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.
                                Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half
                                times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has
                                been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be
                                bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.
                                Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half
                                times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has
                                been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be
                                bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.
                                Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half
                                times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has
                                been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be
                                bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.
                            </Content>
                        </Item>
                        <Item>
                            <H3>Venus</H3>
                            <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                        </Item>
                    </Accordion>
                </Div>
            </Stack>
        );
}
