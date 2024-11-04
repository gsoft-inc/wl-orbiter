import { Button, ButtonGroup } from "@components/button";
import { Card } from "@components/card";
import { Content, Header } from "@components/placeholders";
import { Heading, Paragraph } from "@components/typography";
import { Illustration } from "@components/illustration";
import { Image } from "@components/image";
import { Inline, Stack } from "@components/layout";
import { Item } from "@components/collection";
import { Planet, SpaceLandscape } from "./assets";
import { Tabs } from "@components/tabs";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Card",
    component: Card,
    id: "card"
} as Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    render: () => (
        <Card>
            <Heading>NASA Headquarters</Heading>
            <Content>
                <Paragraph>NASA Headquarters, officially known as Mary W. Jackson NASA Headquarters or NASA HQ and formerly named Two Independence Square, is a low-rise office building in the two-building Independence Square complex at 300 E Street SW in Washington, D.C.</Paragraph>
            </Content>
        </Card>
    )
};

export const Elevated: Story = {
    render: () => (
        <Card variant="elevated">
            <Heading>NASA Headquarters</Heading>
            <Content>
                <Paragraph>NASA Headquarters, officially known as Mary W. Jackson NASA Headquarters or NASA HQ and formerly named Two Independence Square, is a low-rise office building in the two-building Independence Square complex at 300 E Street SW in Washington, D.C.</Paragraph>
            </Content>
        </Card>
    )
};

export const CardImage: Story = {
    render: () => (
        <Card>
            <Image alt="Planet over another one" src={SpaceLandscape} />
            <Heading>NASA Headquarters</Heading>
            <Content>
                <Paragraph>NASA Headquarters, officially known as Mary W. Jackson NASA Headquarters or NASA HQ and formerly named Two Independence Square, is a low-rise office building in the two-building Independence Square complex at 300 E Street SW in Washington, D.C.</Paragraph>
            </Content>
        </Card>
    )
};

export const CardIllustration: Story = {
    render: () => (
        <Card >
            <Illustration backgroundColor="primary-weak">
                <Image alt="Planet over another one" src={Planet} width="100px" />
            </Illustration>
            <Heading>NASA Headquarters</Heading>
            <Content>
                <Paragraph>NASA Headquarters, officially known as Mary W. Jackson NASA Headquarters or NASA HQ and formerly named Two Independence Square, is a low-rise office building in the two-building Independence Square complex at 300 E Street SW in Washington, D.C.</Paragraph>
            </Content>
        </Card>
    )
};

export const CardHeader: Story = {
    render: () => (
        <Card>
            <Heading>NASA Headquarters</Heading>
            <Header>No visitors allowed.</Header>
            <Content>
                <Paragraph>NASA Headquarters, officially known as Mary W. Jackson NASA Headquarters or NASA HQ and formerly named Two Independence Square, is a low-rise office building in the two-building Independence Square complex at 300 E Street SW in Washington, D.C.</Paragraph>
            </Content>
        </Card>
    )
};

export const CardButton: Story = {
    render: () => (
        <Card>
            <Heading>NASA Headquarters</Heading>
            <Header>No visitors allowed.</Header>
            <Content>
                <Paragraph>NASA Headquarters, officially known as Mary W. Jackson NASA Headquarters or NASA HQ and formerly named Two Independence Square, is a low-rise office building in the two-building Independence Square complex at 300 E Street SW in Washington, D.C.</Paragraph>
            </Content>
            <Button variant="secondary">Plan a visit</Button>
        </Card>
    )
};

export const Buttons: Story = {
    render: () => (
        <Card>
            <Heading>NASA Headquarters</Heading>
            <Content>
                <Paragraph>
                    300 E. Street SW, Suite 5R30<br />
                    Washington, DC 20546<br />
                    (202) 358-0001 (Office)<br />
                    (202) 358-4338 (Fax)<br />
                </Paragraph>
                <Paragraph>
                    <em>Any trespassers are going to be sent in space.</em>
                </Paragraph>
            </Content>
            <ButtonGroup>
                <Button variant="secondary">Plan a visit</Button>
                <Button variant="secondary">Cancel a booking</Button>
            </ButtonGroup>
        </Card>
    )
};

export const Orientation: Story = {
    render: () => (
        <Card orientation="horizontal">
            <Illustration backgroundColor="primary-weak">
                <Image alt="Planet over another one" src={Planet} />
            </Illustration>
            <Heading>NASA</Heading>
            <Content>
                <Paragraph>
                    300 E. Street SW, Suite 5R30<br />
                    Washington, DC 20546<br />
                    (202) 358-0001 (Office)<br />
                    (202) 358-4338 (Fax)
                </Paragraph>
                <Paragraph>
                    <em>Please note that we are moving from December 12th to December 23rd.</em>
                </Paragraph>
            </Content>
        </Card>
    )
};

export const Size: Story = {
    render: () => (
        <Stack>
            <Inline>
                <Card size="xs">
                    <Heading>NASA Headquarters</Heading>
                    <Content>
                        300 E. Street SW, Suite 5R30<br />
                        Washington, DC 20546<br />
                        (202) 358-0001 (Office)<br />
                        (202) 358-4338 (Fax)
                    </Content>
                </Card>
                <Card size="sm">
                    <Heading>NASA Headquarters</Heading>
                    <Content>
                        300 E. Street SW, Suite 5R30<br />
                        Washington, DC 20546<br />
                        (202) 358-0001 (Office)<br />
                        (202) 358-4338 (Fax)
                    </Content>
                </Card>
                <Card>
                    <Heading>NASA Headquarters</Heading>
                    <Content>
                        300 E. Street SW, Suite 5R30<br />
                        Washington, DC 20546<br />
                        (202) 358-0001 (Office)<br />
                        (202) 358-4338 (Fax)
                    </Content>
                </Card>
            </Inline>
            <Inline>
                <Card size="lg">
                    <Heading>NASA Headquarters</Heading>
                    <Content>
                        300 E. Street SW, Suite 5R30<br />
                        Washington, DC 20546<br />
                        (202) 358-0001 (Office)<br />
                        (202) 358-4338 (Fax)
                    </Content>
                </Card>
                <Card size="xl">
                    <Heading>NASA Headquarters</Heading>
                    <Content>
                        300 E. Street SW, Suite 5R30<br />
                        Washington, DC 20546<br />
                        (202) 358-0001 (Office)<br />
                        (202) 358-4338 (Fax)
                    </Content>
                </Card>
            </Inline>
        </Stack>
    )
};

export const Fluid: Story = {
    render: () => (
        <Card fluid orientation="horizontal">
            <Illustration backgroundColor="primary-weak" width={1280}>
                <Image alt="Planet over another one" src={Planet} />
            </Illustration>
            <Heading>NASA</Heading>
            <Content>
                <Paragraph>
                    300 E. Street SW, Suite 5R30<br />
                    Washington, DC 20546<br />
                    (202) 358-0001 (Office)<br />
                    (202) 358-4338 (Fax)
                </Paragraph>
                <Paragraph>
                    <em>Please note that we are moving from December 12th to December 23rd.</em>
                </Paragraph>
            </Content>
        </Card>
    )
};

export const CardTabs: Story = {
    render: () => (
        <Card>
            <Heading>NASA</Heading>
            <Content>
                <Paragraph>The National Aeronautics and Space Administration is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research.</Paragraph>
                <Tabs aria-label="NASA">
                    <Item key="vision">
                        <Header>Vision</Header>
                        <Content>We reach for new heights and reveal the unknown for the benefit of humankind</Content>
                    </Item>
                    <Item key="mission">
                        <Header>Mission</Header>
                        <Content>Drive advances in science, technology, aeronautics, and space exploration to enhance knowledge, education, innovation, economic vitality and stewardship of Earth</Content>
                    </Item>
                </Tabs>
            </Content>
        </Card>
    )
};
