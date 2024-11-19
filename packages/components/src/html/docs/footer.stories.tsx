import { Meta, StoryObj } from "@storybook/react";
import { HtmlFooter, Article, UL, LI } from "@components/html/index.ts";
import { Paragraph, H1 } from "@components/typography/index.ts";

const meta = {
    title: "Html elements/Footer",
    component: HtmlFooter,
    id: "html-footer"
} as Meta<typeof HtmlFooter>;

export default meta;

type Story = StoryObj<typeof HtmlFooter>;

export const Example: Story = {
    render: () => (
        <Article>
            <H1>What does an aerospace engineer do?</H1>
            <UL>
                <LI>Research and development</LI>
                <LI>Testing</LI>
                <LI>Production and maintenance</LI>
            </UL>
            <HtmlFooter color="neutral-weak">
                <Paragraph>© 2021 Orbiter</Paragraph>
            </HtmlFooter>
        </Article>
    )
};
