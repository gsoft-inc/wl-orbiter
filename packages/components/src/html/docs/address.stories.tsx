import { Address } from "@components/html";
import { TextLink } from "@components/link";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Html elements/Address",
    component: Address,
    id: "html-address"
} as Meta<typeof Address>;

export default meta;

type Story = StoryObj<typeof Address>;

export const Example: Story = {
    render: () => (
        <Address color="neutral-weak">
            <TextLink href="mailto:media@spacex.com">media@spacex.com</TextLink>
            <br />
            <TextLink href="tel:+13103636000">(310) 363-6000</TextLink>
        </Address>
    )
};
