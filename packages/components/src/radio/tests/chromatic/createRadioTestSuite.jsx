import { Counter } from "@components/counter/index.js";
import { Div } from "@components/html/index.js";
import { IconList } from "@components/icons/index.js";
import { MailIcon, InfoIcon, WarningIcon } from "@hopper-ui/icons";
import { Flex, Inline, Stack } from "@components/layout/index.js";
import { Text } from "@components/typography/index.js";
import { cloneElement } from "react";

function Radio({ element, ...rest }) {
    return cloneElement(element, rest);
}

export function createRadioTestSuite(element, stories) {
    return stories
        .add("labeled", () =>
            <Stack>
                <Inline alignY="end">
                    <Radio value="any" element={element} size="sm">Milky Way</Radio>
                    <Radio value="any" element={element}>Milky Way</Radio>
                </Inline>
                <Inline alignY="end">
                    <Radio value="any" element={element} size="sm">
                        <Text>Milky Way</Text>
                        <MailIcon />
                    </Radio>
                    <Radio value="any" element={element}>
                        <Text>Milky Way</Text>
                        <MailIcon />
                    </Radio>
                    <Radio disabled value="any" element={element}>
                        <Text>Milky Way</Text>
                        <MailIcon />
                    </Radio>
                </Inline>
                <Inline alignY="end">
                    <Radio value="any" element={element} size="sm">
                        <Text>Milky Way</Text>
                        <IconList>
                            <MailIcon /><MailIcon /><MailIcon />
                        </IconList>
                    </Radio>
                    <Radio value="any" element={element}>
                        <Text>Milky Way</Text>
                        <IconList>
                            <MailIcon /><MailIcon /><MailIcon />
                        </IconList>
                    </Radio>
                </Inline>
                <Inline alignY="end">
                    <Radio value="any" element={element} size="sm">
                        <Text>Milky Way</Text>
                        <Counter>60</Counter>
                    </Radio>
                    <Radio value="any" element={element}>
                        <Text>Milky Way</Text>
                        <Counter>60</Counter>
                    </Radio>
                    <Radio disabled value="any" element={element}>
                        <Text>Milky Way</Text>
                        <Counter>60</Counter>
                    </Radio>
                </Inline>
                <Inline alignY="end">
                    <Radio value="any" element={element} size="sm">
                        <Text>Milky Way</Text>
                        <MailIcon />
                        <Counter>60</Counter>
                    </Radio>
                    <Radio value="any" element={element}>
                        <Text>Milky Way</Text>
                        <MailIcon />
                        <Counter>60</Counter>
                    </Radio>
                </Inline>
            </Stack>
        )
        .add("reverse", () =>
            <Stack>
                <Inline alignY="end">
                    <Radio reverse value="any" element={element} size="sm">Milky Way</Radio>
                    <Radio reverse value="any" element={element}>Milky Way</Radio>
                </Inline>
                <Inline alignY="end">
                    <Radio reverse value="any" element={element} size="sm">
                        <Text>Milky Way</Text>
                        <IconList>
                            <MailIcon /><InfoIcon /><WarningIcon />
                        </IconList>
                    </Radio>
                    <Radio reverse value="any" element={element}>
                        <Text>Milky Way</Text>
                        <IconList>
                            <MailIcon /><InfoIcon /><WarningIcon />
                        </IconList>
                    </Radio>
                </Inline>
                <Inline alignY="end">
                    <Radio reverse value="any" element={element} size="sm">
                        <Text>Milky Way</Text>
                        <Counter>60</Counter>
                    </Radio>
                    <Radio reverse value="any" element={element}>
                        <Text>Milky Way</Text>
                        <Counter>60</Counter>
                    </Radio>
                </Inline>
                <Inline alignY="end">
                    <Radio reverse value="any" element={element} size="sm">
                        <Text>Milky Way</Text>
                        <IconList>
                            <MailIcon /><InfoIcon /><WarningIcon />
                        </IconList>
                        <Counter>60</Counter>
                    </Radio>
                    <Radio reverse value="any" element={element}>
                        <Text>Milky Way</Text>
                        <IconList>
                            <MailIcon /><InfoIcon /><WarningIcon />
                        </IconList>
                        <Counter>60</Counter>
                    </Radio>
                </Inline>
            </Stack>
        )
        .add("validation", () =>
            <Stack>
                <Inline>
                    <Radio validationState="invalid" value="any" element={element} size="sm">Milky Way</Radio>
                    <Radio validationState="invalid" value="any" element={element}>Milky Way</Radio>
                    <Radio validationState="valid" value="any" element={element}>Milky Way</Radio>
                </Inline>
                <Inline>
                    <Radio validationState="invalid" value="any" element={element} size="sm">
                        <Text>Milky Way</Text>
                        <MailIcon />
                    </Radio>
                    <Radio validationState="invalid" value="any" element={element}>
                        <Text>Milky Way</Text>
                        <MailIcon />
                    </Radio>
                    <Radio validationState="invalid" value="any" element={element}>
                        <Text>Milky Way</Text>
                        <Counter>60</Counter>
                    </Radio>
                </Inline>
            </Stack>
        )
        .add("states", () =>
            <Inline>
                <Stack>
                    <Radio active value="any" element={element} size="sm">Milky Way</Radio>
                    <Radio focus value="any" element={element} size="sm">Milky Way</Radio>
                    <Radio hover value="any" element={element} size="sm">Milky Way</Radio>
                    <Radio focus hover value="any" element={element} size="sm">Milky Way</Radio>
                </Stack>
                <Stack>
                    <Radio active value="any" element={element}>Milky Way</Radio>
                    <Radio focus value="any" element={element}>Milky Way</Radio>
                    <Radio hover value="any" element={element}>Milky Way</Radio>
                    <Radio focus hover value="any" element={element}>Milky Way</Radio>
                </Stack>
                <Stack>
                    <Radio disabled value="any" element={element} size="sm">Milky Way</Radio>
                    <Radio disabled active value="any" element={element} size="sm">Milky Way</Radio>
                    <Radio disabled focus value="any" element={element} size="sm">Milky Way</Radio>
                    <Radio disabled hover value="any" element={element} size="sm">Milky Way</Radio>
                    <Radio disabled focus hover value="any" element={element} size="sm">Milky Way</Radio>
                </Stack>
                <Stack>
                    <Radio disabled value="any" element={element}>Milky Way</Radio>
                    <Radio disabled active value="any" element={element}>Milky Way</Radio>
                    <Radio disabled focus value="any" element={element}>Milky Way</Radio>
                    <Radio disabled hover value="any" element={element}>Milky Way</Radio>
                    <Radio disabled focus hover value="any" element={element}>Milky Way</Radio>
                </Stack>
            </Inline>
        )
        .add("overflow", () =>
            <Stack>
                <Flex alignItems="end" maxWidth="16rem">
                    <Radio value="any" element={element}>PA-99-N2 event and possible exoplanet in galaxy</Radio>
                </Flex>
                <Flex alignItems="end" maxWidth="16rem">
                    <Radio value="any" element={element}>
                        <Text>PA-99-N2 event and possible exoplanet in galaxy</Text>
                        <IconList>
                            <MailIcon /><MailIcon />
                        </IconList>
                    </Radio>
                </Flex>
                <Flex alignItems="end" maxWidth="16rem">
                    <Radio value="any" element={element}>
                        <Text>PA-99-N2 event and possible exoplanet in galaxy</Text>
                        <Counter>60</Counter>
                    </Radio>
                </Flex>
            </Stack>
        )
        .add("zoom", () =>
            <Inline>
                <Div className="zoom-in">
                    <Radio value="any" element={element}>Milky Way</Radio>
                </Div>
                <Div className="zoom-out">
                    <Radio value="any" element={element}>Milky Way</Radio>
                </Div>
            </Inline>
        );
}
