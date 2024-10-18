import { Inline, Stack } from "@components/layout";
import { Div } from "@components/html";
import { EditIcon } from "@hopper-ui/icons";
import { NumberInput } from "@components/number-input";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/NumberInput",
    component: NumberInput,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof NumberInput>;

export default meta;

type NumberInputStory = StoryObj<typeof meta>;

export const Default: NumberInputStory = {
    name: "default",
    render: () => (
        <Stack>
            <NumberInput placeholder="Age" />
            <NumberInput loading placeholder="Age" />
            <NumberInput disabled placeholder="Age" />
            <NumberInput readOnly placeholder="Age" />
            <Div>
                <NumberInput fluid placeholder="Age" />
            </Div>
            <Div width="10%">
                <NumberInput fluid placeholder="Age" />
            </Div>
            <Div>
                <NumberInput loading fluid placeholder="Age" />
            </Div>
        </Stack>
    )
};

export const IntegerValue: NumberInputStory = {
    name: "integer value",
    render: () => (
        <NumberInput defaultValue={12} step={1} placeholder="Age" />
    )
};

export const DecimalValue: NumberInputStory = {
    name: "decimal value",
    render: () => (
        <NumberInput defaultValue={12.10} step={0.1} placeholder="Grams" />
    )
};

export const Icon: NumberInputStory = {
    name: "icon",
    render: () => (
        <Stack>
            <NumberInput icon={<EditIcon />} placeholder="Age" />
            <NumberInput loading icon={<EditIcon />} placeholder="Age" />
            <NumberInput disabled icon={<EditIcon />} placeholder="Age" />
            <NumberInput readOnly icon={<EditIcon />} placeholder="Age" />
            <NumberInput fluid icon={<EditIcon />} placeholder="Age" />
            <Div width="10%">
                <NumberInput fluid icon={<EditIcon />} placeholder="Age" />
            </Div>
            <NumberInput loading fluid icon={<EditIcon />} placeholder="Age" />
        </Stack>
    )
};


export const Validation: NumberInputStory = {
    name: "validation",
    render: () => (
        <Inline>
            <NumberInput validationState="invalid" placeholder="Age" />
            <NumberInput validationState="valid" placeholder="Age" />
        </Inline>
    )
};

export const Zoom: NumberInputStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <NumberInput placeholder="Age" />
            </Div>
            <Div className="zoom-out">
                <NumberInput placeholder="Age" />
            </Div>
        </Stack>
    )
};

export const Styling: NumberInputStory = {
    name: "styling",
    render: () => (
        <Inline>
            <NumberInput border="warning" placeholder="Age" />
            <NumberInput className="border-red" placeholder="Age" />
            <NumberInput style={{ border: "1px solid red" }} placeholder="Age" />
            <NumberInput wrapperProps={{ className: "border-red" }} placeholder="Age" />
            <NumberInput wrapperProps={{ style: { border: "1px solid red" } }} placeholder="Age" />
        </Inline>
    )
};
