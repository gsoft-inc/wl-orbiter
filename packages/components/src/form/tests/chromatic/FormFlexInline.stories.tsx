import { Button, ButtonGroup } from "@components/button/index.js";
import { Checkbox } from "@components/checkbox/index.js";
import { Div } from "@components/html/index.js";
import { ErrorMessage, Field, HelpMessage, Label } from "@components/field/index.js";
import { Form } from "@components/form/index.js";
import { Inline } from "@components/layout/index.js";
import { TextInput } from "@components/text-input/index.js";
import { TextLinkAsButton } from "@components/link/index.js";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/Form/flex inline",
    component: Form
} as ComponentMeta<typeof Form>;

type FormStory = ComponentStoryObj<typeof Form>;

export const Default: FormStory = {
    storyName: "default",
    render: () => (
        <Form>
            <Field>
                <Label>Gender</Label>
                <TextInput />
            </Field>
            <Inline>
                <Field>
                    <Label>First name</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>Last name</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>Username</Label>
                    <TextInput />
                </Field>
            </Inline>
            <Inline>
                <Field>
                    <Label>City</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>State</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>Zip</Label>
                    <TextInput />
                </Field>
            </Inline>
            <Field>
                <Checkbox>Agree to terms and conditions</Checkbox>
            </Field>
            <ButtonGroup>
                <TextLinkAsButton type="reset">Reset</TextLinkAsButton>
                <Button type="submit" variant="secondary">Submit</Button>
            </ButtonGroup>
        </Form>
    )
};

export const Fluid: FormStory = {
    storyName: "fluid",
    render: () => (
        <Form fluid>
            <Field>
                <Label>Gender</Label>
                <TextInput />
            </Field>
            <Inline>
                <Field>
                    <Label>First name</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>Last name</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>Username</Label>
                    <TextInput />
                </Field>
            </Inline>
            <Inline>
                <Field width="50%">
                    <Label>City</Label>
                    <TextInput />
                </Field>
                <Field width="25%">
                    <Label>State</Label>
                    <TextInput />
                </Field>
                <Field width="25%">
                    <Label>Zip</Label>
                    <TextInput />
                </Field>
            </Inline>
            <Field>
                <Checkbox>Agree to terms and conditions</Checkbox>
            </Field>
            <ButtonGroup>
                <TextLinkAsButton type="reset">Reset</TextLinkAsButton>
                <Button type="submit" variant="secondary">Submit</Button>
            </ButtonGroup>
        </Form>
    )
};


export const FluidFixWidthContainer: FormStory = {
    storyName: "fluid with fix width container",
    render: () => (
        <Div width="24rem">
            <Form fluid>
                <Field>
                    <Label>Gender</Label>
                    <TextInput />
                </Field>
                <Inline>
                    <Field>
                        <Label>First name</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Last name</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Username</Label>
                        <TextInput />
                    </Field>
                </Inline>
                <Inline>
                    <Field width="50%">
                        <Label>City</Label>
                        <TextInput />
                    </Field>
                    <Field width="25%">
                        <Label>State</Label>
                        <TextInput />
                    </Field>
                    <Field width="25%">
                        <Label>Zip</Label>
                        <TextInput />
                    </Field>
                </Inline>
                <Field>
                    <Checkbox>Agree to terms and conditions</Checkbox>
                </Field>
                <ButtonGroup>
                    <TextLinkAsButton type="reset">Reset</TextLinkAsButton>
                    <Button type="submit" variant="secondary">Submit</Button>
                </ButtonGroup>
            </Form>
        </Div>
    )
};

export const Messages: FormStory = {
    storyName: "messages",
    render: () => (
        <Form>
            <Inline>
                <Field>
                    <Label>First name</Label>
                    <TextInput />
                    <HelpMessage>Non helpfull message!</HelpMessage>
                </Field>
                <Field>
                    <Label>Last name</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>Username</Label>
                    <TextInput />
                </Field>
            </Inline>
            <Inline>
                <Field>
                    <Label>City</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label>State</Label>
                    <TextInput />
                </Field>
                <Field validationState="invalid">
                    <Label>Zip</Label>
                    <TextInput />
                    <ErrorMessage>Invalid Zip code!</ErrorMessage>
                </Field>
            </Inline>
            <Field>
                <Checkbox>Agree to terms and conditions</Checkbox>
            </Field>
            <ButtonGroup>
                <TextLinkAsButton type="reset">Reset</TextLinkAsButton>
                <Button type="submit" variant="secondary">Submit</Button>
            </ButtonGroup>
        </Form>
    )
};
