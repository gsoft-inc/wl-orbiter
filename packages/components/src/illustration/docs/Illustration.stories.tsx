import { Meta, StoryObj } from "@storybook/react";
import { Illustration } from "@components/illustration/index.ts";
import { Image } from "@components/image/index.ts";
import { Planet } from "./assets";

const meta = {
    title: "Components/Illustration",
    component: Illustration,
    id: "illustration"
} as Meta<typeof Illustration>;

export default meta;

type Story = StoryObj<typeof Illustration>;

export const Default: Story = {
    render: () => (
        <Illustration backgroundColor="primary-weak" height="12rem" padding={160}>
            <Image alt="planet" src={Planet} stroke="primary" />
        </Illustration>
    )
};

export const Vertical: Story = {
    render: () => (
        <div style={{ height: "30rem" }}>
            <Illustration backgroundColor="primary-weak" orientation="vertical" padding={160} width="12rem">
                <Image alt="Planet over another planet" src={Planet} />
            </Illustration>
        </div>
    )
};

export const Shape: Story = {
    render: () => (
        <Illustration backgroundColor="primary-weak" shape="rounded">
            <Image alt="Planet over another planet" src={Planet} />
        </Illustration>
    )
};
