import { Alert } from "@components/alert";
import { Content } from "@components/placeholders";
import { Heading } from "@hopper-ui/components";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Alert-hopper",
    component: Alert,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Alert>;

export default meta;

type AlertHopperStory = StoryObj<typeof meta>;

export const StyledSystem: AlertHopperStory = {
    name: "styled system",
    render: () => (
        <Alert
            primaryButtonLabel="Yes"
            border="warning"
        >
            <Heading border="warning">Launch</Heading>
            <Content border="warning">Are you sure you want to launch the space shuttle?</Content>
        </Alert>
    )
};

export const ClassName: AlertHopperStory = {
    name: "className",
    render: () => (
        <Alert
            primaryButtonLabel="Yes"
            className="border-red"
        >
            <Heading className="border-red">Launch</Heading>
            <Content className="border-red">Are you sure you want to launch the space shuttle?</Content>
        </Alert>
    )
};

export const Styles: AlertHopperStory = {
    name: "styles",
    render: () => (
        <Alert
            primaryButtonLabel="Yes"
            style={{ border: "1px solid red" }}
        >
            <Heading style={{ border: "1px solid red" }}>Launch</Heading>
            <Content style={{ border: "1px solid red" }}>Are you sure you want to launch the space shuttle?</Content>
        </Alert>
    )
};
