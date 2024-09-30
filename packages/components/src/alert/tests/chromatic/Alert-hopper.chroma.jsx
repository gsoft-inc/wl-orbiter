import { Alert } from "@components/alert";
import { Content } from "@components/placeholders";
import { Heading } from "@hopper-ui/components";
import { createTestSuite } from "./createTestSuite-hopper";
import { storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/Alert-hopper")
        .segment(segment)
        .build();
}

createTestSuite(<Alert variant="confirmation" />, stories("/confirmation"));

createTestSuite(<Alert variant="destructive" />, stories("/destructive"));

stories()
    .add("styled system", () =>
        <Alert
            primaryButtonLabel="Yes"
            border="warning"
        >
            <Heading border="warning">Launch</Heading>
            <Content border="warning">Are you sure you want to launch the space shuttle?</Content>
        </Alert>
    )
    .add("className", () =>
        <Alert
            primaryButtonLabel="Yes"
            className="border-red"
        >
            <Heading className="border-red">Launch</Heading>
            <Content className="border-red">Are you sure you want to launch the space shuttle?</Content>
        </Alert>
    )
    .add("styles", () =>
        <Alert
            primaryButtonLabel="Yes"
            style={{ border: "1px solid red" }}
        >
            <Heading style={{ border: "1px solid red" }}>Launch</Heading>
            <Content style={{ border: "1px solid red" }}>Are you sure you want to launch the space shuttle?</Content>
        </Alert>
    );
