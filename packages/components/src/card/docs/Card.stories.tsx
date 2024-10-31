import { Button as OrbiterButton, ButtonGroup } from "@components/button";
import { Card } from "@components/card";
import { Content, Header as OrbiterHeader } from "@components/placeholders";
import { Heading, Paragraph } from "@components/typography";
import { Illustration as OrbiterIllustration } from "@components/illustration";
import { Image as OrbiterImage } from "@components/image";
import { Inline, Stack } from "@components/layout";
import { Item } from "@components/collection";
import { Planet, SpaceLandscape } from "./assets";
import { Tabs as OrbiterTabs } from "@components/tabs";
import { Meta, StoryObj } from "@storybook/react/*";

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

export const Image: Story = {
    render: () => (
        <Card>
            <OrbiterImage alt="Planet over another one" src={SpaceLandscape} />
            <Heading>NASA Headquarters</Heading>
            <Content>
                <Paragraph>NASA Headquarters, officially known as Mary W. Jackson NASA Headquarters or NASA HQ and formerly named Two Independence Square, is a low-rise office building in the two-building Independence Square complex at 300 E Street SW in Washington, D.C.</Paragraph>
            </Content>
        </Card>
    )
};

export const Illustration: Story = {
    render: () => (
        <Card >
            <OrbiterIllustration backgroundColor="primary-weak">
                <OrbiterImage alt="Planet over another one" src={Planet} width="100px" />
            </OrbiterIllustration>
            <Heading>NASA Headquarters</Heading>
            <Content>
                <Paragraph>NASA Headquarters, officially known as Mary W. Jackson NASA Headquarters or NASA HQ and formerly named Two Independence Square, is a low-rise office building in the two-building Independence Square complex at 300 E Street SW in Washington, D.C.</Paragraph>
            </Content>
        </Card>
    )
};

export const Header: Story = {
    render: () => (
        <Card>
            <Heading>NASA Headquarters</Heading>
            <OrbiterHeader>No visitors allowed.</OrbiterHeader>
            <Content>
                <Paragraph>NASA Headquarters, officially known as Mary W. Jackson NASA Headquarters or NASA HQ and formerly named Two Independence Square, is a low-rise office building in the two-building Independence Square complex at 300 E Street SW in Washington, D.C.</Paragraph>
            </Content>
        </Card>
    )
};

export const Button: Story = {
    render: () => (
        <Card>
            <Heading>NASA Headquarters</Heading>
            <OrbiterHeader>No visitors allowed.</OrbiterHeader>
            <Content>
                <Paragraph>NASA Headquarters, officially known as Mary W. Jackson NASA Headquarters or NASA HQ and formerly named Two Independence Square, is a low-rise office building in the two-building Independence Square complex at 300 E Street SW in Washington, D.C.</Paragraph>
            </Content>
            <OrbiterButton variant="secondary">Plan a visit</OrbiterButton>
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
                <OrbiterButton variant="secondary">Plan a visit</OrbiterButton>
                <OrbiterButton variant="secondary">Cancel a booking</OrbiterButton>
            </ButtonGroup>
        </Card>
    )
};

export const Orientation: Story = {
    render: () => (
        <Card orientation="horizontal">
            <OrbiterIllustration backgroundColor="primary-weak">
                <OrbiterImage alt="Planet over another one" src={Planet} />
            </OrbiterIllustration>
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
            <OrbiterIllustration backgroundColor="primary-weak" width={1280}>
                <OrbiterImage alt="Planet over another one" src={Planet} />
            </OrbiterIllustration>
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

export const Tabs: Story = {
    render: () => (
        <Card>
            <Heading>NASA</Heading>
            <Content>
                <Paragraph>The National Aeronautics and Space Administration is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research.</Paragraph>
                <OrbiterTabs aria-label="NASA">
                    <Item key="vision">
                        <OrbiterHeader>Vision</OrbiterHeader>
                        <Content>We reach for new heights and reveal the unknown for the benefit of humankind</Content>
                    </Item>
                    <Item key="mission">
                        <OrbiterHeader>Mission</OrbiterHeader>
                        <Content>Drive advances in science, technology, aeronautics, and space exploration to enhance knowledge, education, innovation, economic vitality and stewardship of Earth</Content>
                    </Item>
                </OrbiterTabs>
            </Content>
        </Card>
    )
};
