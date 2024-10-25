import { Div, LI, OL, UL } from "@components/html";
import { ErrorMessage, HelpMessage, ValidMessage } from "@components/field";
import { QuestionIcon, InfoIcon, WarningIcon } from "@hopper-ui/icons";
import { Inline, Stack } from "@components/layout";
import { Paragraph } from "@components/typography";
import { TextLink } from "@components/link";
import { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";

const meta = {
    title: "Chromatic/FieldMessage",
    component: HelpMessage,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof HelpMessage>;

export default meta;

type HelpMessageStory = StoryObj<typeof meta>;

function Align({ children }: { children: ReactNode }) {
    return (
        <Inline alignY="center" gap={0} whiteSpace="pre-wrap">
            {children}
        </Inline>
    );
}

export const Default: HelpMessageStory = {
    name: "default",
    render: () => (
        <HelpMessage>
            Enter your final destination. Here's a <TextLink href="https://www.google.com/sky" external>space map</TextLink>.
        </HelpMessage>
    )
};

export const Icon: HelpMessageStory = {
    name: "icon",
    render: () => (
        <HelpMessage>
            <Align>
                <QuestionIcon /> Enter your final destination. Here's a <TextLink href="https://www.google.com/sky" external>space map</TextLink>.
            </Align>
        </HelpMessage>
    )
};


export const FieldMessageParagraph: HelpMessageStory = {
    name: "paragraph",
    render: () => (
        <HelpMessage>
            <Paragraph>
                If two pieces of the same type of <TextLink href="#">metal touch</TextLink> in space they <TextLink href="https://www.sharegate.com" external>will permanently</TextLink> bond.
            </Paragraph>
        </HelpMessage>
    )
};

export const List: HelpMessageStory = {
    name: "list",
    render: () => (
        <Inline>
            <HelpMessage>
                <UL>
                    <LI>Celestial</LI>
                    <LI>Dark matter</LI>
                    <LI>Eclipse</LI>
                </UL>
            </HelpMessage>
            <HelpMessage>
                <OL>
                    <LI>Celestial</LI>
                    <LI>Dark matter</LI>
                    <LI>Eclipse</LI>
                </OL>
            </HelpMessage>
        </Inline>
    )
};

export const Wrappers: HelpMessageStory = {
    name: "wrappers",
    render: () => (
        <HelpMessage>
            <Div>
                <Div>
                    Enter your final destination. Here's a <TextLink href="https://www.google.com/sky" external>space map</TextLink>.
                </Div>
            </Div>
        </HelpMessage>
    )
};

export const Complex: HelpMessageStory = {
    name: "complex",
    render: () => (
        <HelpMessage>
            <Align>
                <QuestionIcon /> Enter your final destination. Here's a <TextLink href="https://www.google.com/sky" external>space map</TextLink>.
            </Align>
            <Paragraph>
                If two pieces of the same type of <TextLink href="#">metal touch</TextLink> in space they <TextLink href="https://www.sharegate.com" external>will permanently</TextLink> bond.
            </Paragraph>
            <UL>
                <LI>Celestial</LI>
                <LI>Dark matter</LI>
                <LI>Eclipse</LI>
            </UL>
        </HelpMessage>
    )
};

export const Fluid: HelpMessageStory = {
    name: "fluid",
    render: () => (
        <HelpMessage fluid>
            If two pieces of the same type of <TextLink href="#">metal touch</TextLink> in space they <TextLink href="https://www.sharegate.com" external>will permanently</TextLink> bond.
        </HelpMessage>
    )
};

export const Help: HelpMessageStory = {
    name: "help",
    render: () => (
        <HelpMessage>
            <Align>
                <QuestionIcon /> Enter your final destination. Here's a <TextLink href="https://www.google.com/sky" external>space map</TextLink>.
            </Align>
        </HelpMessage>
    )
};

export const Error: HelpMessageStory = {
    name: "error",
    render: () => (
        <ErrorMessage>
            <Align>
                <WarningIcon /> This is not a valid destination. Here's a <TextLink href="https://www.google.com/sky" external>space map</TextLink>.
            </Align>
        </ErrorMessage>
    )
};

export const Valid: HelpMessageStory = {
    name: "valid",
    render: () => (
        <ValidMessage>
            <Align>
                <InfoIcon /> Thank you! Here's your <TextLink href="https://www.sharegate.com" external>receipt</TextLink>.
            </Align>
        </ValidMessage>
    )
};

export const Zoom: HelpMessageStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <HelpMessage>
                    Enter your final destination. Here's a <TextLink href="https://www.google.com/sky" external>space map</TextLink>.
                </HelpMessage>
            </Div>
            <Div className="zoom-out">
                <HelpMessage>
                    Enter your final destination. Here's a <TextLink href="https://www.google.com/sky" external>space map</TextLink>.
                </HelpMessage>
            </Div>
        </Stack>
    )
};

export const Styling: HelpMessageStory = {
    name: "styling",
    render: () => (
        <Inline>
            <ValidMessage border="warning">Thank you!</ValidMessage>
            <ValidMessage className="bg-red">Thank you!</ValidMessage>
            <ValidMessage style={{ background: "red" }}>Thank you!</ValidMessage>
        </Inline>
    )
};
