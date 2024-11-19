import { SparklesIcon } from "@hopper-ui/icons";
import { GalaxyLargeImage } from "./assets/index.ts";
import { IconLink, IconLinkAsButton, Link, TextLink, TextLinkAsButton } from "@components/link/index.ts";
import { Image } from "@components/image/index.ts";
import { Inline } from "@components/layout/index.ts";
import { Text } from "@components/typography/index.ts";
import { Meta, StoryObj } from "@storybook/react";
import { RouterLink } from "./RouterLink.tsx";

const meta = {
    title: "Components/Link",
    component: Link,
    id: "link"
} as Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
    render: () => (
        <TextLink href="#">Flight details</TextLink>
    )
};

export const Icon: Story = {
    render: () => (
        <Inline alignY="center">
            <TextLink href="#" size="sm">
                <Text>Flight details</Text>
                <SparklesIcon />
            </TextLink>
            <TextLink href="#">
                <Text>Flight details</Text>
                <SparklesIcon />
            </TextLink>
        </Inline>
    )
};

export const StartIcon: Story = {
    render: () => (
        <TextLink href="#">
            <SparklesIcon slot="start-icon" />
            <Text>Flight details</Text>
        </TextLink>
    )
};


export const External: Story = {
    render: () => (
        <TextLink external href="#">Flight details</TextLink>
    )
};

export const Variants: Story = {
    render: () => (
        <Inline>
            <TextLink href="#" variant="accent">Accent</TextLink>
            <TextLink href="#" variant="negative">Negative</TextLink>
        </Inline>
    )
};

export const Disabled: Story = {
    render: () => (
        <TextLink disabled href="#">Flight details</TextLink>
    )
};

export const Size: Story = {
    render: () => (
        <Inline alignY="center">
            <TextLink href="#" size="sm">Flight details</TextLink>
            <TextLink href="#">Flight details</TextLink>
        </Inline>
    )
};

export const Button: Story = {
    render: () => (
        <TextLinkAsButton>Flight details</TextLinkAsButton>
    )
};


export const ReactRouter: Story = {
    render: () => {
        return <RouterLink as={TextLink} to="/flight-details">Flight details</RouterLink>;
    }
};

export const LinkIconLink: Story = {
    render: () => (
        <Inline alignY="center">
            <IconLink aria-label="Add" href="#" ><SparklesIcon /></IconLink>
        </Inline >
    )
};

export const IconLinkButton: Story = {
    render: () => (
        <IconLinkAsButton><SparklesIcon /></IconLinkAsButton>
    )
};

export const BasicLinkImage: Story = {
    render: () => (
        <Link href="#">
            <Image alt="SpaceX launch" src={GalaxyLargeImage} />
        </Link>
    )
};

export const BasicLinkShape: Story = {
    render: () => (
        <Inline>
            <Link focus href="#" shape="rounded">
                <Image alt="SpaceX launch" height="100px" src={GalaxyLargeImage} width="100px" />
            </Link>
            <Link focus href="#" shape="circular">
                <Image alt="SpaceX launch" height="100px" src={GalaxyLargeImage} width="100px" />
            </Link>
            <Link focus href="#" shape="box">
                <Image alt="SpaceX launch" height="100px" src={GalaxyLargeImage} width="100px" />
            </Link>
        </Inline>
    )
};
