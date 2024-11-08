import { Meta, StoryObj } from "@storybook/react";
import { Main, HtmlHeader as Header } from "@components/html";
import { Paragraph, H1 } from "@components/typography";

const meta = {
    title: "Html elements/Main",
    component: Main,
    id: "html-main"
} as Meta<typeof Main>;

export default meta;

type Story = StoryObj<typeof Main>;

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
