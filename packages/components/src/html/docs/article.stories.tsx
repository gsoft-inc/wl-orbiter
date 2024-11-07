import { Meta, StoryObj } from "@storybook/react";
import { Article } from "@components/html/index.ts";
import { H1, H2, Paragraph } from "@components/typography/index.ts";

const meta = {
    title: "Html elements/Article",
    component: Article,
    id: "html-article"
} as Meta<typeof Article>;

export default meta;

type Story = StoryObj<typeof Article>;

export const Example: Story = {
    render: () => (
        <Article color="neutral-weak">
            <H1>Weather forecast for Boca Chica</H1>
            <Article>
                <H2>03 March 2021</H2>
                <Paragraph>Perfectly sunny for a space launch.</Paragraph>
            </Article>
        </Article>
    )
};
