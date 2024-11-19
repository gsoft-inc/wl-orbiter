import { Meta, StoryObj } from "@storybook/react";
import { HtmlHeader as Header, Main } from "@components/html/index.ts";
import { Paragraph, H1 } from "@components/typography/index.ts";

const meta = {
    title: "Html elements/Header",
    component: Header,
    id: "html-header"
} as Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof Header>;

export const Example: Story = {
    render: () => (
        <body>
            <Header>
                <H1>Walking On The Moon</H1>
            </Header>
            <Main color="neutral-weak">
                <Paragraph>Walking on the Moon is classic Sting moment, with his band The Police turning out one of their most groovy reggae-inspired hits to the background of space exploration.</Paragraph>
            </Main>
        </body>
    )
};

