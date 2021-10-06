import { Button } from "@react-components/button";
import { Div } from "@react-components/html";
import { Field, Label } from "@react-components/field";
import { Fieldset, Form, Row } from "@react-components/form";
import { Stack } from "@react-components/layout";
import { TextInput } from "@react-components/text-input";
import { storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/Fieldset")
        .segment(segment)
        .build();
}

stories()
    .add("default", () =>
        <Form>
            <Fieldset label="Shipping Address">
                <Row>
                    <Field>
                        <Label>First name</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Last name</Label>
                        <TextInput />
                    </Field>
                </Row>
                <Row>
                    <Field>
                        <Label>Address</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Appartment</Label>
                        <TextInput />
                    </Field>
                </Row>
                <Row>
                    <Field>
                        <Label>City</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Province</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Country</Label>
                        <TextInput />
                    </Field>
                </Row>
                <Field>
                    <Label>Postal code</Label>
                    <TextInput />
                </Field>
            </Fieldset>
            <Fieldset label="Billing Address">
                <Row>
                    <Field>
                        <Label>First name</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Last name</Label>
                        <TextInput />
                    </Field>
                </Row>
                <Row>
                    <Field>
                        <Label>Address</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Appartment</Label>
                        <TextInput />
                    </Field>
                </Row>
                <Row>
                    <Field>
                        <Label>City</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Province</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Country</Label>
                        <TextInput />
                    </Field>
                </Row>
                <Field>
                    <Label>Postal code</Label>
                    <TextInput />
                </Field>
            </Fieldset>
            <Button variant="secondary">Submit</Button>
        </Form>
    )
    .add("zoom", () =>
        <Stack>
            <Div className="zoom-in">
                <Fieldset label="Shipping Address">
                    <Row>
                        <Field>
                            <Label>First name</Label>
                            <TextInput />
                        </Field>
                        <Field>
                            <Label>Last name</Label>
                            <TextInput />
                        </Field>
                    </Row>
                </Fieldset>
            </Div>
            <Div className="zoom-out">
                <Fieldset label="Shipping Address">
                    <Row>
                        <Field>
                            <Label>First name</Label>
                            <TextInput />
                        </Field>
                        <Field>
                            <Label>Last name</Label>
                            <TextInput />
                        </Field>
                    </Row>
                </Fieldset>
            </Div>
        </Stack>
    )
    .add("styling", () =>
        <Stack>
            <Fieldset border="sunray-10" label="Shipping Address">
                <Row>
                    <Field>
                        <Label>First name</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Last name</Label>
                        <TextInput />
                    </Field>
                </Row>
            </Fieldset>
            <Fieldset className="border-red" label="Shipping Address">
                <Row>
                    <Field>
                        <Label>First name</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Last name</Label>
                        <TextInput />
                    </Field>
                </Row>
            </Fieldset>
            <Fieldset style={{ border: "1px solid red" }} label="Shipping Address">
                <Row>
                    <Field>
                        <Label>First name</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Last name</Label>
                        <TextInput />
                    </Field>
                </Row>
            </Fieldset>
        </Stack>
    );
