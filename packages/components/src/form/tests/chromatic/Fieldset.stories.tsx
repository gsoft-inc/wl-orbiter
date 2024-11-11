import { Button } from "@components/button/index.ts";
import { Div } from "@components/html/index.ts";
import { Field, Label } from "@components/field/index.ts";
import { Fieldset, Form } from "@components/form/index.ts";
import { Inline, Stack } from "@components/layout/index.ts";
import { TextInput } from "@components/text-input/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Fieldset",
    component: Fieldset,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Fieldset>;

export default meta;

type FieldsetStory = StoryObj<typeof meta>;

export const Default: FieldsetStory = {
    name: "default",
    render: () => (
        <Form>
            <Fieldset label="Shipping Address">
                <Inline>
                    <Field>
                        <Label>First name</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Last name</Label>
                        <TextInput />
                    </Field>
                </Inline>
                <Inline>
                    <Field>
                        <Label>Address</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Appartment</Label>
                        <TextInput />
                    </Field>
                </Inline>
                <Inline>
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
                </Inline>
                <Field>
                    <Label>Postal code</Label>
                    <TextInput />
                </Field>
            </Fieldset>
            <Fieldset label="Billing Address">
                <Inline>
                    <Field>
                        <Label>First name</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Last name</Label>
                        <TextInput />
                    </Field>
                </Inline>
                <Inline>
                    <Field>
                        <Label>Address</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Appartment</Label>
                        <TextInput />
                    </Field>
                </Inline>
                <Inline>
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
                </Inline>
                <Field>
                    <Label>Postal code</Label>
                    <TextInput />
                </Field>
            </Fieldset>
            <Button variant="secondary">Submit</Button>
        </Form>
    )
};

export const Zoom: FieldsetStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <Fieldset label="Shipping Address">
                    <Inline>
                        <Field>
                            <Label>First name</Label>
                            <TextInput />
                        </Field>
                        <Field>
                            <Label>Last name</Label>
                            <TextInput />
                        </Field>
                    </Inline>
                </Fieldset>
            </Div>
            <Div className="zoom-out">
                <Fieldset label="Shipping Address">
                    <Inline>
                        <Field>
                            <Label>First name</Label>
                            <TextInput />
                        </Field>
                        <Field>
                            <Label>Last name</Label>
                            <TextInput />
                        </Field>
                    </Inline>
                </Fieldset>
            </Div>
        </Stack>
    )
};

export const Styling: FieldsetStory = {
    name: "styling",
    render: () => (
        <Stack>
            <Fieldset border="warning" label="Shipping Address">
                <Inline>
                    <Field>
                        <Label>First name</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Last name</Label>
                        <TextInput />
                    </Field>
                </Inline>
            </Fieldset>
            <Fieldset className="border-red" label="Shipping Address">
                <Inline>
                    <Field>
                        <Label>First name</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Last name</Label>
                        <TextInput />
                    </Field>
                </Inline>
            </Fieldset>
            <Fieldset style={{ border: "1px solid red" }} label="Shipping Address">
                <Inline>
                    <Field>
                        <Label>First name</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Last name</Label>
                        <TextInput />
                    </Field>
                </Inline>
            </Fieldset>
        </Stack>
    )
};
