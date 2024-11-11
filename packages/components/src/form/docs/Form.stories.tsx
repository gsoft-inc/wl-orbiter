import { Button, ButtonGroup } from "@components/button/index.ts";
import { Checkbox } from "@components/checkbox/index.ts";
import { ErrorMessage, Field, HelpMessage, Label } from "@components/field/index.ts";
import { Fieldset, Form } from "@components/form/index.ts";
import { Flex, Grid, Inline, repeat } from "@components/layout/index.ts";
import { PasswordInput, TextInput } from "@components/text-input/index.ts";
import { Meta, StoryObj } from "@storybook/react";
import { useFormik } from "formik";

const meta = {
    title: "Components/Form",
    component: Form,
    id: "form"
} as Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof Form>;

export const VerticalLayout: Story = {
    render: () => (
        <Form>
            <Field required>
                <Label>Username</Label>
                <TextInput placeholder="john@spacex.com" />
            </Field>
            <Field required>
                <Label>Password</Label>
                <PasswordInput />
                <HelpMessage>I bet it's a strong one!</HelpMessage>
            </Field>
            <Field>
                <Checkbox>Remember me</Checkbox>
            </Field>
            <Button type="submit" variant="secondary">Login</Button>
        </Form>
    )
};

export const InlineLayoutFlex: Story = {
    render: () => (
        <Form fluid>
            <Inline>
                <Field>
                    <Label required>First name</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label required>Last name</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label required>Username</Label>
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
            <Button type="submit" variant="secondary">Submit</Button>
        </Form>
    )
};

export const InlineLayoutGrid: Story = {
    render: () => (
        <Form fluid>
            <Grid templateColumns={{ base: "1fr", md: repeat(3, "1fr") }}>
                <Field>
                    <Label required>First name</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label required>Last name</Label>
                    <TextInput />
                </Field>
                <Field>
                    <Label required>Username</Label>
                    <TextInput />
                </Field>
            </Grid>
            <Grid templateColumns={{ base: "1fr", md: ["2fr", "1fr", "1fr"] }}>
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
            </Grid>
            <Field>
                <Checkbox>Agree to terms and conditions</Checkbox>
            </Field>
            <Button type="submit" variant="secondary">Submit</Button>
        </Form>
    )
};

export const FormFieldset: Story = {
    render: () => (
        <Form>
            <Fieldset label="Shipping Address">
                <Flex
                    direction={{
                        base: "column",
                        sm: "row"
                    }}
                >
                    <Field required>
                        <Label>First name</Label>
                        <TextInput />
                    </Field>
                    <Field required>
                        <Label>Last name</Label>
                        <TextInput />
                    </Field>
                </Flex>
                <Flex
                    direction={{
                        base: "column",
                        sm: "row"
                    }}
                >
                    <Field required>
                        <Label>Address</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Appartment</Label>
                        <TextInput />
                    </Field>
                </Flex>
                <Field required>
                    <Label>Postal code</Label>
                    <TextInput />
                </Field>
            </Fieldset>
            <Fieldset label="Billing Address">
                <Flex
                    direction={{
                        base: "column",
                        sm: "row"
                    }}
                >
                    <Field required>
                        <Label>First name</Label>
                        <TextInput />
                    </Field>
                    <Field required>
                        <Label>Last name</Label>
                        <TextInput />
                    </Field>
                </Flex>
                <Flex
                    direction={{
                        base: "column",
                        sm: "row"
                    }}
                >
                    <Field required>
                        <Label>Address</Label>
                        <TextInput />
                    </Field>
                    <Field>
                        <Label>Appartment</Label>
                        <TextInput />
                    </Field>
                </Flex>
                <Field required>
                    <Label>Postal code</Label>
                    <TextInput />
                </Field>
            </Fieldset>
            <Button variant="secondary">Submit</Button>
        </Form>
    )
};

export const Fluid: Story = {
    render: () => (
        <Form fluid>
            <Field>
                <Label>Where to?</Label>
                <TextInput />
            </Field>
            <Button variant="secondary">Submit</Button>
        </Form>
    )
};

export const Disabled: Story = {
    render: () => (
        <Form disabled>
            <Field>
                <Label>Where to?</Label>
                <TextInput />
            </Field>
            <Button variant="secondary">Submit</Button>
        </Form>
    )
};

export const ButtonAlignment: Story = {
    render: () => (
        <Inline gap={480}>
            <Form>
                <Field>
                    <Label>Where to?</Label>
                    <TextInput />
                </Field>
                <ButtonGroup align="center">
                    <Button variant="secondary">Reset</Button>
                    <Button>Submit</Button>
                </ButtonGroup>
            </Form>
            <Form>
                <Field>
                    <Label>Where to?</Label>
                    <TextInput />
                </Field>
                <ButtonGroup align="end">
                    <Button>Submit</Button>
                </ButtonGroup>
            </Form>
        </Inline>
    )
};

export const Formik: Story = {
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const formik = useFormik({
            initialValues: {
                firstName: "",
                lastName: "",
                userName: "",
                agreeTerms: false
            },
            validate: values => {
                return Object.keys(values).reduce((acc, x) => {
                    if (!values[x]) {
                        acc[x] = `${x} is required.`;
                    }

                    return acc;
                }, {});
            },
            onSubmit: (values, actions) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));

                    actions.setSubmitting(false);
                    actions.resetForm();
                }, 10000);
            }
        });

        const getValidationState = fieldId => {
            return formik.touched[fieldId]
                ? formik.errors[fieldId] ? "invalid" : "valid"
                : null;
        };

        return (
            <Form onSubmit={formik.handleSubmit} >
                <Field id="firstName" validationState={getValidationState("firstName")}>
                    <Label required>First name</Label>
                    <TextInput onChange={event => { console.log(event.target.value); formik.handleChange(event); }} value={formik.values.firstName} />
                    <ErrorMessage>{formik.errors.firstName}</ErrorMessage>
                </Field>
                <Field id="lastName" validationState={getValidationState("lastName")}>
                    <Label required>Last name</Label>
                    <TextInput onChange={formik.handleChange} value={formik.values.lastName} />
                    <ErrorMessage>{formik.errors.lastName}</ErrorMessage>
                </Field>
                <Field id="userName" validationState={getValidationState("userName")}>
                    <Label required>Username</Label>
                    <TextInput onChange={formik.handleChange} value={formik.values.userName} />
                    <ErrorMessage>{formik.errors.userName}</ErrorMessage>
                </Field>
                <Field id="agreeTerms" validationState={getValidationState("agreeTerms")} >
                    <Checkbox checked={formik.values.agreeTerms} onChange={formik.handleChange}>Agree to terms and conditions</Checkbox>
                </Field>
                <ButtonGroup align="end">
                    <Button onClick={() => formik.resetForm()} variant="secondary">Reset</Button>
                    <Button loading={formik.isSubmitting} type="submit">Submit</Button>
                </ButtonGroup>
            </Form >
        );
    }
};
