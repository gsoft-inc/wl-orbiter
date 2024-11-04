import { Meta, StoryObj } from "@storybook/react";
import { Div } from "@components/html";
import { Flex, Inline, Stack } from "@components/layout";

const meta = {
    title: "Components/Flex",
    component: Flex,
    id: "flex"
} as Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof Flex>;

export const Horizontal: Story = {
    render: () => (
        <Flex direction="row" gap={80}>
            <Div backgroundColor="sapphire-500" height="4rem" width="4rem" />
            <Div backgroundColor="amanita-500" height="4rem" width="4rem" />
            <Div backgroundColor="moss-500" height="4rem" width="4rem" />
        </Flex>
    )
};

export const Vertical: Story = {
    render: () => (
        <Flex direction="column" gap={80}>
            <Div backgroundColor="sapphire-500" height="4rem" width="4rem" />
            <Div backgroundColor="amanita-500" height="4rem" width="4rem" />
            <Div backgroundColor="moss-500" height="4rem" width="4rem" />
        </Flex>
    )
};

export const Gap: Story = {
    render: () => (
        <Flex direction="row" gap={80}>
            <Div backgroundColor="sapphire-500" height="4rem" width="4rem" />
            <Div backgroundColor="amanita-500" height="4rem" width="4rem" />
            <Div backgroundColor="moss-500" height="4rem" width="4rem" />
        </Flex>
    )
};

export const AlignItems: Story = {
    render: () => (
        <Flex alignItems="center" direction="column" gap={80}>
            <Div backgroundColor="sapphire-500" height="4rem" width="4rem" />
            <Div backgroundColor="amanita-500" height="4rem" width="4rem" />
            <Div backgroundColor="moss-500" height="4rem" width="4rem" />
        </Flex>
    )
};

export const JustifyContent: Story = {
    render: () => (
        <Flex gap={80} justifyContent="center">
            <Div backgroundColor="sapphire-500" height="4rem" width="4rem" />
            <Div backgroundColor="amanita-500" height="4rem" width="4rem" />
            <Div backgroundColor="moss-500" height="4rem" width="4rem" />
        </Flex>
    )
};

export const Wrap: Story = {
    render: () => (
        <Flex gap={40} width="30rem" wrap="wrap">
            <Div backgroundColor="#eef3fd" height={400} width={400} />
            <Div backgroundColor="#dbe6fd" height={400} width={400} />
            <Div backgroundColor="#b6c2ef" height={400} width={400} />
            <Div backgroundColor="#95a9f5" height={400} width={400} />
            <Div backgroundColor="#7689fd" height={400} width={400} />
            <Div backgroundColor="#5D65f6" height={400} width={400} />
            <Div backgroundColor="#4B11fd" height={400} width={400} />
            <Div backgroundColor="#362aae" height={400} width={400} />
            <Div backgroundColor="#1f2151" height={400} width={400} />
            <Div backgroundColor="#0d0f1f" height={400} width={400} />
            <Div backgroundColor="#fbf1f1" height={400} width={400} />
            <Div backgroundColor="#fadfdf" height={400} width={400} />
            <Div backgroundColor="#fdb0af" height={400} width={400} />
            <Div backgroundColor="#f88f8d" height={400} width={400} />
            <Div backgroundColor="#eb6a64" height={400} width={400} />
            <Div backgroundColor="#d93c37" height={400} width={400} />
            <Div backgroundColor="#a91414" height={400} width={400} />
            <Div backgroundColor="#811b15" height={400} width={400} />
            <Div backgroundColor="#461812" height={400} width={400} />
            <Div backgroundColor="#1d0b09" height={400} width={400} />
            <Div backgroundColor="#dbfbea" height={400} width={400} />
            <Div backgroundColor="#cbeedb" height={400} width={400} />
            <Div backgroundColor="#a5cdb8" height={400} width={400} />
            <Div backgroundColor="#78ba9b" height={400} width={400} />
            <Div backgroundColor="#27a57a" height={400} width={400} />
            <Div backgroundColor="#268563" height={400} width={400} />
            <Div backgroundColor="#2b5e48" height={400} width={400} />
            <Div backgroundColor="#27493a" height={400} width={400} />
            <Div backgroundColor="#1a2a23" height={400} width={400} />
            <Div backgroundColor="#0c110e" height={400} width={400} />
        </Flex>
    )
};

export const Reverse: Story = {
    render: () => (
        <Flex gap={80} reverse>
            <Div backgroundColor="sapphire-500" height="4rem" width="4rem" />
            <Div backgroundColor="amanita-500" height="4rem" width="4rem" />
            <Div backgroundColor="moss-500" height="4rem" width="4rem" />
        </Flex>
    )
};

export const Nesting: Story = {
    render: () => (
        <Flex gap={160}>
            <Flex gap={80}>
                <Div backgroundColor="sapphire-500" height="4rem" width="4rem" />
                <Div backgroundColor="sapphire-500" height="4rem" width="4rem" />
            </Flex>
            <Flex direction="column" gap={80}>
                <Div backgroundColor="amanita-500" height="4rem" width="4rem" />
                <Div backgroundColor="amanita-500" height="4rem" width="4rem" />
            </Flex>
            <Flex gap={80}>
                <Div backgroundColor="moss-500" height="4rem" width="4rem" />
                <Div backgroundColor="moss-500" height="4rem" width="4rem" />
            </Flex>
        </Flex>
    )
};

export const FlexInline: Story = {
    render: () => (
        <Inline>
            <Div backgroundColor="sapphire-500" height="4rem" width="4rem" />
            <Div backgroundColor="amanita-500" height="4rem" width="4rem" />
            <Div backgroundColor="moss-500" height="4rem" width="4rem" />
        </Inline>
    )
};

export const FlexStack: Story = {
    render: () => (
        <Stack>
            <Div backgroundColor="sapphire-500" height="4rem" width="4rem" />
            <Div backgroundColor="amanita-500" height="4rem" width="4rem" />
            <Div backgroundColor="moss-500" height="4rem" width="4rem" />
        </Stack>
    )
};
