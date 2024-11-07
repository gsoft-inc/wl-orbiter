import { Meta, StoryObj } from "@storybook/react";
import { HtmlSection } from "@components/html/index.ts";
import { Paragraph, H1, H2 } from "@components/typography/index.ts";

const meta = {
    title: "Html elements/Section",
    component: HtmlSection,
    id: "html-section"
} as Meta<typeof HtmlSection>;

export default meta;

type Story = StoryObj<typeof HtmlSection>;

export const Example: Story = {
    render: () => (
        <body>
            <H1>Blue Origin</H1>
            <HtmlSection color="neutral-weak">
                <H2>Our vision</H2>
                <Paragraph>Blue Origin was founded by Jeff Bezos with the vision of enabling a future where millions of people are living and working in space to benefit Earth.</Paragraph>
            </HtmlSection>
        </body>
    )
};
