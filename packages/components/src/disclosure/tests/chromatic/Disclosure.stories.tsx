import { Disclosure, useDisclosureContext } from "@components/disclosure";
import { Flex, FlexProps, Stack } from "@components/layout";
import { ArrowDownIcon, ArrowRightIcon } from "@hopper-ui/icons";
import { Button } from "@components/button";
import { Div } from "@components/html";
import { TextLinkAsButton } from "@components/link";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Disclosure",
    component: Disclosure
} as Meta<typeof Disclosure>;

export default meta;

type DisclosureStory = StoryObj<typeof meta>;

const Trigger = ({ children, ...rest }: FlexProps) => {
    const { isOpen } = useDisclosureContext();

    return (
        <Flex
            {...rest}
            alignItems="center"
        >
            {children}
            {isOpen ? <ArrowDownIcon /> : <ArrowRightIcon />}
        </Flex>
    );
};

export const Default: DisclosureStory = {
    name: "default",
    render: () => (
        <Disclosure>
            <Button variant="secondary">Mars</Button>
            <Div>
            Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System (in adherence with the IAU's controversial 2006 definition of planet),
            being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".[17][18] The latter refers
            to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye.
            [19] Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth.
            </Div>
        </Disclosure>
    )
};

export const Opened: DisclosureStory = {
    name: "opened",
    render: () => (
        <Stack>
            <Disclosure open>
                <Button variant="secondary">Mars</Button>
                <Div>Mars is the fourth planet from the Sun and the second-smallest planet.</Div>
            </Disclosure>
            <Disclosure defaultOpen>
                <Button variant="secondary">Mars</Button>
                <Div>Mars is the fourth planet from the Sun and the second-smallest planet.</Div>
            </Disclosure>
        </Stack>
    )
};

export const CustomTrigger: DisclosureStory = {
    name: "custom trigger",
    render: () => (
        <Stack>
            <Disclosure>
                <Trigger>Mars</Trigger>
                <Div>Mars is the fourth planet from the Sun and the second-smallest planet.</Div>
            </Disclosure>
            <Disclosure defaultOpen>
                <Trigger>Mars</Trigger>
                <Div>Mars is the fourth planet from the Sun and the second-smallest planet.</Div>
            </Disclosure>
        </Stack>
    )
};

export const TextLink: DisclosureStory = {
    name: "text link",
    render: () => (
        <Disclosure>
            <TextLinkAsButton>Mars</TextLinkAsButton>
            <Div>Mars is the fourth planet from the Sun and the second-smallest planet.</Div>
        </Disclosure>
    )
};

export const FunctionalContent: DisclosureStory = {
    name: "functional content",
    render: () => (
        <Disclosure defaultOpen>
            {(() => {
                return (
                    <>
                        <Button variant="secondary">Mars</Button>
                        <Div>Mars is the fourth planet from the Sun and the second-smallest planet.</Div>
                    </>
                );
            })()}
        </Disclosure>
    )
};

