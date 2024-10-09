import { SparklesIcon } from "@hopper-ui/icons";
import { Counter } from "@components/counter";
import { Div } from "@components/html";
import { Dot } from "@components/dot";
import { cloneElement } from "react";
import { Field, Label } from "@components/field";
import { Inline, Stack } from "@components/layout";
import { Avatar, IconList, Text } from "@hopper-ui/components";

function Tag({ element, ...rest }) {
    return cloneElement(element, rest);
}

export function createTagTestSuite(element, stories) {
    return stories
        .add("default", () =>
            <Stack>
                <Inline alignY="end">
                    <Tag size="sm" element={element}>Falcon 9</Tag>
                    <Tag element={element}>Falcon 9</Tag>
                </Inline>
                <Tag fluid element={element}>Falcon 9</Tag>
                <Div width="10%">
                    <Tag fluid element={element}>Falcon 9</Tag>
                </Div>
            </Stack>
        )
        .add("icon", () =>
            <Stack>
                <Inline alignY="end">
                    <Tag size="sm" element={element}>
                        <SparklesIcon />
                        <Text>Falcon 9</Text>
                    </Tag>
                    <Tag element={element}>
                        <SparklesIcon />
                        <Text>Falcon 9</Text>
                    </Tag>
                </Inline>
                <Inline alignY="end">
                    <Tag size="sm" element={element}>
                        <IconList>
                            <SparklesIcon /><SparklesIcon /><SparklesIcon />
                        </IconList>
                        <Text>Falcon 9</Text>
                    </Tag>
                    <Tag element={element}>
                        <IconList>
                            <SparklesIcon /><SparklesIcon /><SparklesIcon />
                        </IconList>
                        <Text>Falcon 9</Text>
                    </Tag>
                </Inline>
                <Tag fluid element={element}>
                    <SparklesIcon />
                    <Text>Falcon 9</Text>
                </Tag>
                <Div width="10%">
                    <Tag fluid element={element}>
                        <SparklesIcon />
                        <Text>Falcon 9</Text>
                    </Tag>
                </Div>
                <Inline alignY="end">
                    <Tag size="sm" element={element}>
                        <Text>Falcon 9</Text>
                        <IconList slot="end-icon">
                            <SparklesIcon /><SparklesIcon /><SparklesIcon />
                        </IconList>
                    </Tag>
                    <Tag element={element}>
                        <Text>Falcon 9</Text>
                        <IconList slot="end-icon">
                            <SparklesIcon /><SparklesIcon /><SparklesIcon />
                        </IconList>
                    </Tag>
                </Inline>
                <Tag fluid element={element}>
                    <Text>Falcon 9</Text>
                    <IconList slot="end-icon">
                        <SparklesIcon /><SparklesIcon /><SparklesIcon />
                    </IconList>
                </Tag>
                <Div width="10%">
                    <Tag fluid element={element}>
                        <Text>Falcon 9</Text>
                        <IconList slot="end-icon">
                            <SparklesIcon /><SparklesIcon /><SparklesIcon />
                        </IconList>
                    </Tag>
                </Div>
                <Tag element={element}>
                    <SparklesIcon />
                    <Text>Falcon 9</Text>
                    <IconList slot="end-icon">
                        <SparklesIcon /><SparklesIcon /><SparklesIcon />
                    </IconList>
                </Tag>
                <Tag fluid element={element}>
                    <SparklesIcon />
                    <Text>Falcon 9</Text>
                    <IconList slot="end-icon">
                        <SparklesIcon /><SparklesIcon /><SparklesIcon />
                    </IconList>
                </Tag>
            </Stack>
        )
        .add("dot", () =>
            <Stack>
                <Inline alignY="end">
                    <Tag size="sm" element={element}>
                        <Dot color="primary" />
                        <Text>Falcon 9</Text>
                    </Tag>
                    <Tag element={element}>
                        <Dot color="primary" />
                        <Text>Falcon 9</Text>
                    </Tag>
                </Inline>
                <Tag fluid element={element}>
                    <Dot color="primary" />
                    <Text>Falcon 9</Text>
                </Tag>
                <Div width="10%">
                    <Tag fluid element={element}>
                        <Dot color="primary" />
                        <Text>Falcon 9</Text>
                    </Tag>
                </Div>
            </Stack>
        )
        .add("avatar", () =>
            <Stack>
                <Inline alignY="end">
                    <Tag size="sm" element={element}>
                        <Avatar name="Alan Shepard" />
                        <Text>Alan Shepard</Text>
                    </Tag>
                    <Tag element={element}>
                        <Avatar name="Alan Shepard" />
                        <Text>Alan Shepard</Text>
                    </Tag>
                </Inline>
                <Tag fluid element={element}>
                    <Avatar name="Alan Shepard" />
                    <Text>Alan Shepard</Text>
                </Tag>
                <Div width="10%">
                    <Tag fluid element={element}>
                        <Avatar name="Alan Shepard" />
                        <Text>Alan Shepard</Text>
                    </Tag>
                </Div>
            </Stack>
        )
        .add("alignment", () =>
            <Stack>
                <Tag fluid size="sm" element={element}>
                    <Dot color="primary" />
                    <Text>Falcon 9</Text>
                </Tag>
                <Tag fluid size="sm" element={element}>
                    <Avatar name="Alan Shepard" />
                    <Text>Falcon 9</Text>
                </Tag>
                <Tag size="sm" fluid element={element}>
                    <SparklesIcon />
                    <Text>Falcon 9</Text>
                </Tag>
                <Tag fluid element={element}>
                    <Dot color="primary" />
                    <Text>Falcon 9</Text>
                </Tag>
                <Tag fluid element={element}>
                    <Text>Falcon 9</Text>
                </Tag>
                <Tag fluid element={element}>
                    <SparklesIcon />
                    <Text>Falcon 9</Text>
                </Tag>
                <Div width="10%">
                    <Stack>
                        <Inline>
                            <Tag fluid size="sm" element={element}>
                                <Dot color="primary" />
                                <Text>Falcon 9</Text>
                            </Tag>
                            <Tag fluid element={element}>
                                <Dot color="primary" />
                                <Text>Falcon 9</Text>
                            </Tag>
                        </Inline>
                        <Inline>
                            <Tag fluid size="sm" element={element}>
                                <Text>Falcon 9</Text>
                                <Avatar name="Alan Shepard" />
                            </Tag>
                            <Tag fluid element={element}>
                                <Text>Falcon 9</Text>
                            </Tag>
                        </Inline>
                        <Inline>
                            <Tag size="sm" fluid element={element}>
                                <SparklesIcon />
                                <Text>Falcon 9</Text>
                            </Tag>
                            <Tag fluid element={element}>
                                <SparklesIcon />
                                <Text>Falcon 9</Text>
                            </Tag>
                        </Inline>

                    </Stack>
                </Div>
            </Stack>
        )
        .add("counter", () =>
            <Stack>
                <Inline alignY="end">
                    <Tag size="sm" element={element}>
                        <Text>Falcon 9</Text>
                        <Counter variant="divider">60</Counter>
                    </Tag>
                    <Tag element={element}>
                        <Text>Falcon 9</Text>
                        <Counter variant="divider">60</Counter>
                    </Tag>
                </Inline>
                <Tag fluid element={element}>
                    <Text>Falcon 9</Text>
                    <Counter>60</Counter>
                </Tag>
                <Div width="10%">
                    <Tag fluid element={element}>
                        <Text>Falcon 9</Text>
                        <Counter variant="divider">60</Counter>
                    </Tag>
                </Div>
            </Stack>
        )
        .add("remove button", () =>
            <Stack>
                <Inline alignY="end">
                    <Tag size="sm" onRemove={() => {}} element={element}>
                        Falcon 9
                    </Tag>
                    <Tag onRemove={() => {}} element={element}>
                        Falcon 9
                    </Tag>
                </Inline>
                <Tag fluid onRemove={() => {}} element={element}>
                        Falcon 9
                </Tag>
                <Div width="10%">
                    <Tag fluid onRemove={() => {}} element={element}>
                        Falcon 9
                    </Tag>
                </Div>
            </Stack>
        )
        .add("validation", () =>
            <Stack>
                <Inline alignY="end">
                    <Tag size="sm" onRemove={() => {}} element={element} validationState="invalid">
                        Falcon 9
                    </Tag>
                    <Tag onRemove={() => {}} element={element} validationState="invalid">
                        Falcon 9
                    </Tag>
                </Inline>
                <Tag fluid onRemove={() => {}} element={element} validationState="invalid">
                        Falcon 9
                </Tag>
                <Div width="10%">
                    <Tag fluid onRemove={() => {}} element={element} validationState="invalid">
                        Falcon 9
                    </Tag>
                </Div>
                <Field required validationState="invalid">
                    <Label>Invalid Field</Label>
                    <Tag element={element}>Falcon 9</Tag>
                </Field>
            </Stack>
        )
        .add("zoom", () =>
            <Inline>
                <Div className="zoom-in">
                    <Tag element={element}>Falcon 9</Tag>
                </Div>
                <Div className="zoom-out">
                    <Tag element={element}>Falcon 9</Tag>
                </Div>
            </Inline>
        )
        .add("as link", () =>
            <Inline>
                <Tag as="a" element={element} href="#">Falcon 9</Tag>
                <Tag as="a" element={element} href="#" validationState="invalid">Falcon 9</Tag>
                <Tag as="a" active element={element} href="#">Falcon 9</Tag>
                <Tag as="a" active element={element} href="#" validationState="invalid">Falcon 9</Tag>
                <Tag as="a" focus element={element} href="#">Falcon 9</Tag>
                <Tag as="a" focus element={element} href="#" validationState="invalid">Falcon 9</Tag>
                <Tag as="a" hover element={element} href="#">Falcon 9</Tag>
                <Tag as="a" hover element={element} href="#" validationState="invalid">Falcon 9</Tag>
                <Tag as="a" focus hover element={element} href="#">Falcon 9</Tag>
                <Tag as="a" focus hover element={element} href="#" validationState="invalid">Falcon 9</Tag>
                <Tag as="a" disabled element={element} href="#">Falcon 9</Tag>
                <Tag as="a" disabled element={element} href="#" validationState="invalid">Falcon 9</Tag>
            </Inline>
        )
        .add("as button", () =>
            <Inline>
                <Tag as="button" element={element}>Falcon 9</Tag>
                <Tag as="button" element={element} validationState="invalid">Falcon 9</Tag>
                <Tag as="button" active element={element}>Falcon 9</Tag>
                <Tag as="button" active element={element} validationState="invalid">Falcon 9</Tag>
                <Tag as="button" focus element={element}>Falcon 9</Tag>
                <Tag as="button" focus element={element} validationState="invalid">Falcon 9</Tag>
                <Tag as="button" hover element={element}>Falcon 9</Tag>
                <Tag as="button" hover element={element} validationState="invalid">Falcon 9</Tag>
                <Tag as="button" focus hover element={element}>Falcon 9</Tag>
                <Tag as="button" focus hover element={element} validationState="invalid">Falcon 9</Tag>
                <Tag as="button" disabled element={element}>Falcon 9</Tag>
                <Tag as="button" disabled element={element} validationState="invalid">Falcon 9</Tag>
            </Inline>
        );
}
