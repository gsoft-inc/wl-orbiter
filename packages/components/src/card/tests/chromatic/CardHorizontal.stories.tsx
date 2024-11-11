import { Button, ButtonGroup } from "@components/button/index.ts";
import { Card } from "@components/card/index.ts";
import { Content, Header } from "@components/placeholders/index.ts";
import { Div, LI, UL } from "@components/html/index.ts";
import { Heading, Paragraph } from "@components/typography/index.ts";
import { Illustration } from "@components/illustration/index.ts";
import { Image } from "@components/image/index.ts";
import { Inline, Stack } from "@components/layout/index.ts";
import { Item } from "@components/collection/index.ts";
import { Nasa } from "./assets/index.tsx";
import { Switch } from "@components/switch/index.ts";
import { Tabs } from "@components/tabs/index.ts";
import { TextLink } from "@components/link/index.ts";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Card/horizontal",
    component: Card,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Card>;

export default meta;

type CardStory = StoryObj<typeof meta>;

export const Default: CardStory = {
    name: "default",
    render: () => (
        <Stack>
            <Inline>
                <Card size="xs" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card size="sm" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
            </Inline>
            <Inline>
                <Card size="lg" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card size="xl" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
            </Inline>
            <Card fluid orientation="horizontal">
                <Heading>Nasa</Heading>
                <Content>The National Aeronautics and Space Administration</Content>
            </Card>
        </Stack>
    )
};

export const Variant: CardStory = {
    name: "variant",
    render: () => (
        <Stack>
            <Inline>
                <Card variant="elevated" size="xs" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card variant="elevated" size="sm" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card variant="elevated" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
            </Inline>
            <Inline>
                <Card variant="elevated" size="lg" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card variant="elevated" size="xl" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
            </Inline>
            <Card variant="elevated" fluid orientation="horizontal">
                <Heading>Nasa</Heading>
                <Content>The National Aeronautics and Space Administration</Content>
            </Card>
        </Stack>
    )
};

export const Illustration1: CardStory = {
    name: "illustration 1",
    render: () => (
        <Stack>
            <Inline>
                <Card size="xs" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card size="sm" orientation="horizontal">
                    <Illustration color="sunken-treasure-100">
                        <Image src={Nasa} alt="Nasa" />
                    </Illustration>
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card orientation="horizontal">
                    <Illustration color="sunken-treasure-100">
                        <Image src={Nasa} alt="Nasa" />
                    </Illustration>
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
            </Inline>
            <Inline>
                <Card size="lg" orientation="horizontal">
                    <Illustration color="sunken-treasure-100">
                        <Image src={Nasa} alt="Nasa" />
                    </Illustration>
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card size="xl" orientation="horizontal">
                    <Illustration color="sunken-treasure-100">
                        <Image src={Nasa} alt="Nasa" />
                    </Illustration>
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
            </Inline>
        </Stack>
    )
};

export const Illustration2: CardStory = {
    name: "illustration 2",
    render: () => (
        <Stack>
            <Card fluid orientation="horizontal">
                <Illustration color="sunken-treasure-100" width="200px">
                    <Image src={Nasa} alt="Nasa" />
                </Illustration>
                <Heading>Nasa</Heading>
                <Content>The National Aeronautics and Space Administration</Content>
            </Card>
            <Card height="250px" orientation="horizontal">
                <Illustration color="sunken-treasure-100">
                    <Image src={Nasa} alt="Nasa" />
                </Illustration>
                <Heading>Nasa</Heading>
                <Content>The National Aeronautics and Space Administration</Content>
            </Card>
        </Stack>
    )
};

export const TextHeader: CardStory = {
    name: "text header",
    render: () => (
        <Stack>
            <Inline>
                <Card size="xs" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Header>2021/01/01</Header>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card size="sm" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Header>2021/01/01</Header>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Header>2021/01/01</Header>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
            </Inline>
            <Inline>
                <Card size="lg" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Header>2021/01/01</Header>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card size="xl" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Header>2021/01/01</Header>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
            </Inline>
            <Card fluid orientation="horizontal">
                <Heading>Nasa</Heading>
                <Header>2021/01/01</Header>
                <Content>The National Aeronautics and Space Administration</Content>
            </Card>
        </Stack>
    )
};

export const ComponentAlignmentHeader: CardStory = {
    name: "component alignment header",
    render: () => (
        <Stack>
            <Inline>
                <Card size="xs" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Header>
                        <Switch aria-label="lorem" />
                    </Header>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card size="sm" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Header>
                        <Switch aria-label="lorem" />
                    </Header>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Header>
                        <Switch aria-label="lorem" />
                    </Header>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
            </Inline>
            <Inline>
                <Card size="lg" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Header>
                        <Switch aria-label="lorem" />
                    </Header>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card size="xl" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Header>
                        <Switch aria-label="lorem" />
                    </Header>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
            </Inline>
            <Card fluid orientation="horizontal">
                <Heading>Nasa</Heading>
                <Header>
                    <Switch aria-label="lorem" />
                </Header>
                <Content>The National Aeronautics and Space Administration</Content>
            </Card>
        </Stack>
    )
};

export const LinkHeader: CardStory = {
    name: "link header",
    render: () => (
        <Stack>
            <Inline>
                <Card size="xs" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Header>
                        <TextLink href="https://www.nasa.gov">Website</TextLink>
                    </Header>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card size="sm" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Header>
                        <TextLink href="https://www.nasa.gov">Website</TextLink>
                    </Header>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Header>
                        <TextLink href="https://www.nasa.gov">Website</TextLink>
                    </Header>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
            </Inline>
            <Inline>
                <Card size="lg" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Header>
                        <TextLink href="https://www.nasa.gov">Website</TextLink>
                    </Header>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card size="xl" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Header>
                        <TextLink href="https://www.nasa.gov">Website</TextLink>
                    </Header>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
            </Inline>
            <Card fluid orientation="horizontal">
                <Heading>Nasa</Heading>
                <Header>
                    <TextLink href="https://www.nasa.gov">Website</TextLink>
                </Header>
                <Content>The National Aeronautics and Space Administration</Content>
            </Card>
        </Stack>
    )
};

export const RichContent: CardStory = {
    name: "rich content",
    render: () => (
        <Stack>
            <Inline>
                <Card size="xs" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>
                        <Paragraph>
                            <TextLink href="https://www.nasa.gov" external>The National Aeronautics and Space Administration</TextLink>
                        </Paragraph>
                        <UL>
                            <LI>Space Shuttle program</LI>
                            <LI>International Space Station</LI>
                        </UL>
                    </Content>
                </Card>
                <Card size="sm" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>
                        <Paragraph>
                            <TextLink href="https://www.nasa.gov" external>The National Aeronautics and Space Administration</TextLink>
                        </Paragraph>
                        <UL>
                            <LI>Space Shuttle program</LI>
                            <LI>International Space Station</LI>
                        </UL>
                    </Content>
                </Card>
                <Card orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>
                        <Paragraph>
                            <TextLink href="https://www.nasa.gov" external>The National Aeronautics and Space Administration</TextLink>
                        </Paragraph>
                        <UL>
                            <LI>Space Shuttle program</LI>
                            <LI>International Space Station</LI>
                        </UL>
                    </Content>
                </Card>
            </Inline>
            <Inline>
                <Card size="lg" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>
                        <Paragraph>
                            <TextLink href="https://www.nasa.gov" external>The National Aeronautics and Space Administration</TextLink>
                        </Paragraph>
                        <UL>
                            <LI>Space Shuttle program</LI>
                            <LI>International Space Station</LI>
                        </UL>
                    </Content>
                </Card>
                <Card size="xl" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>
                        <Paragraph>
                            <TextLink href="https://www.nasa.gov" external>The National Aeronautics and Space Administration</TextLink>
                        </Paragraph>
                        <UL>
                            <LI>Space Shuttle program</LI>
                            <LI>International Space Station</LI>
                        </UL>
                    </Content>
                </Card>
            </Inline>
            <Card fluid orientation="horizontal">
                <Heading>Nasa</Heading>
                <Content>
                    <Paragraph>
                        <TextLink href="https://www.nasa.gov" external>The National Aeronautics and Space Administration</TextLink>
                    </Paragraph>
                    <UL>
                        <LI>Space Shuttle program</LI>
                        <LI>International Space Station</LI>
                    </UL>
                </Content>
            </Card>
        </Stack>
    )
};

export const ButtonStory: CardStory = {
    name: "button",
    render: () => (
        <Stack>
            <Inline>
                <Card size="xs" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                    <Button>Visit</Button>
                </Card>
                <Card size="sm" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                    <Button>Visit</Button>
                </Card>
                <Card orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                    <Button>Visit</Button>
                </Card>
            </Inline>
            <Inline>
                <Card size="lg" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                    <Button>Visit</Button>
                </Card>
                <Card size="xl" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                    <Button>Visit</Button>
                </Card>
            </Inline>
            <Card fluid orientation="horizontal">
                <Heading>Nasa</Heading>
                <Content>The National Aeronautics and Space Administration</Content>
                <Button>Visit</Button>
            </Card>
        </Stack>
    )
};

export const ButtonGroupStory: CardStory = {
    name: "button group",
    render: () => (
        <Stack>
            <Inline>
                <Card size="xs" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                    <ButtonGroup>
                        <Button>Next</Button>
                        <Button>Visit</Button>
                    </ButtonGroup>
                </Card>
                <Card size="sm" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                    <ButtonGroup>
                        <Button>Next</Button>
                        <Button>Visit</Button>
                    </ButtonGroup>
                </Card>
                <Card orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                    <ButtonGroup>
                        <Button>Next</Button>
                        <Button>Visit</Button>
                    </ButtonGroup>
                </Card>
            </Inline>
            <Inline>
                <Card size="lg" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                    <ButtonGroup>
                        <Button>Next</Button>
                        <Button>Visit</Button>
                    </ButtonGroup>
                </Card>
                <Card size="xl" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                    <ButtonGroup>
                        <Button>Next</Button>
                        <Button>Visit</Button>
                    </ButtonGroup>
                </Card>
            </Inline>
            <Card fluid orientation="horizontal">
                <Heading>Nasa</Heading>
                <Content>The National Aeronautics and Space Administration</Content>
                <ButtonGroup>
                    <Button>Next</Button>
                    <Button>Visit</Button>
                </ButtonGroup>
            </Card>
        </Stack>
    )
};

export const AllSections1: CardStory = {
    name: "all sections 1",
    render: () => (
        <Stack>
            <Inline>
                <Card size="xs" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Header>
                        <TextLink href="https://www.nasa.gov">Website</TextLink>
                    </Header>
                    <Content>The National Aeronautics and Space Administration</Content>
                    <ButtonGroup>
                        <Button>Next</Button>
                        <Button>Visit</Button>
                    </ButtonGroup>
                </Card>
                <Card size="sm" orientation="horizontal">
                    <Illustration color="sunken-treasure-100">
                        <Image src={Nasa} alt="Nasa" />
                    </Illustration>
                    <Heading>Nasa</Heading>
                    <Header>
                        <TextLink href="https://www.nasa.gov">Website</TextLink>
                    </Header>
                    <Content>The National Aeronautics and Space Administration</Content>
                    <ButtonGroup>
                        <Button>Next</Button>
                        <Button>Visit</Button>
                    </ButtonGroup>
                </Card>
                <Card orientation="horizontal">
                    <Illustration color="sunken-treasure-100">
                        <Image src={Nasa} alt="Nasa" />
                    </Illustration>
                    <Heading>Nasa</Heading>
                    <Header>
                        <TextLink href="https://www.nasa.gov">Website</TextLink>
                    </Header>
                    <Content>The National Aeronautics and Space Administration</Content>
                    <ButtonGroup>
                        <Button>Next</Button>
                        <Button>Visit</Button>
                    </ButtonGroup>
                </Card>
            </Inline>
            <Inline>
                <Card size="lg" orientation="horizontal">
                    <Illustration color="sunken-treasure-100">
                        <Image src={Nasa} alt="Nasa" />
                    </Illustration>
                    <Heading>Nasa</Heading>
                    <Header>
                        <TextLink href="https://www.nasa.gov">Website</TextLink>
                    </Header>
                    <Content>The National Aeronautics and Space Administration</Content>
                    <ButtonGroup>
                        <Button>Next</Button>
                        <Button>Visit</Button>
                    </ButtonGroup>
                </Card>
                <Card size="xl" orientation="horizontal">
                    <Illustration color="sunken-treasure-100">
                        <Image src={Nasa} alt="Nasa" />
                    </Illustration>
                    <Heading>Nasa</Heading>
                    <Header>
                        <TextLink href="https://www.nasa.gov">Website</TextLink>
                    </Header>
                    <Content>The National Aeronautics and Space Administration</Content>
                    <ButtonGroup>
                        <Button>Next</Button>
                        <Button>Visit</Button>
                    </ButtonGroup>
                </Card>
            </Inline>
        </Stack>
    )
};

export const AllSections2: CardStory = {
    name: "all sections 2",
    render: () => (
        <Card fluid orientation="horizontal">
            <Illustration color="sunken-treasure-100">
                <Image src={Nasa} alt="Nasa" width="200px" />
            </Illustration>
            <Heading>Nasa</Heading>
            <Header>
                <TextLink href="https://www.nasa.gov">Website</TextLink>
            </Header>
            <Content>The National Aeronautics and Space Administration</Content>
            <ButtonGroup>
                <Button>Next</Button>
                <Button>Visit</Button>
            </ButtonGroup>
        </Card>
    )
};

export const TabsStory: CardStory = {
    name: "tabs",
    render: () => (
        <Stack>
            <Inline>
                <Card size="xs" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>
                        <Tabs aria-label="Nasa">
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
                <Card size="sm" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>
                        <Tabs aria-label="Nasa">
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
                <Card orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>
                        <Tabs aria-label="Nasa">
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
            </Inline>
            <Inline>
                <Card size="lg" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>
                        <Tabs aria-label="Nasa">
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
                <Card size="xl" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>
                        <Tabs aria-label="Nasa">
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
            </Inline>
            <Card fluid orientation="horizontal">
                <Heading>Nasa</Heading>
                <Content>
                    <Tabs aria-label="Nasa">
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
        </Stack>
    )
};

export const TabsAndButton: CardStory = {
    name: "tabs & button",
    render: () => (
        <Stack>
            <Inline>
                <Card size="xs" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>
                        <Tabs aria-label="Nasa">
                            <Item key="vision">
                                <Header>Vision</Header>
                                <Content>We reach for new heights and reveal the unknown for the benefit of humankind</Content>
                            </Item>
                            <Item key="mission">
                                <Header>Mission</Header>
                                <Content>Drive advances in science, technology, aeronautics, and space exploration to enhance knowledge, education, innovation, economic vitality and stewardship of Earth</Content>
                            </Item>
                        </Tabs>
                        <Button>Next</Button>
                    </Content>
                </Card>
                <Card size="sm" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>
                        <Tabs aria-label="Nasa">
                            <Item key="vision">
                                <Header>Vision</Header>
                                <Content>We reach for new heights and reveal the unknown for the benefit of humankind</Content>
                            </Item>
                            <Item key="mission">
                                <Header>Mission</Header>
                                <Content>Drive advances in science, technology, aeronautics, and space exploration to enhance knowledge, education, innovation, economic vitality and stewardship of Earth</Content>
                            </Item>
                        </Tabs>
                        <Button>Next</Button>
                    </Content>
                </Card>
                <Card orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>
                        <Tabs aria-label="Nasa">
                            <Item key="vision">
                                <Header>Vision</Header>
                                <Content>We reach for new heights and reveal the unknown for the benefit of humankind</Content>
                            </Item>
                            <Item key="mission">
                                <Header>Mission</Header>
                                <Content>Drive advances in science, technology, aeronautics, and space exploration to enhance knowledge, education, innovation, economic vitality and stewardship of Earth</Content>
                            </Item>
                        </Tabs>
                        <Button>Next</Button>
                    </Content>
                </Card>
            </Inline>
            <Inline>
                <Card size="lg" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>
                        <Tabs aria-label="Nasa">
                            <Item key="vision">
                                <Header>Vision</Header>
                                <Content>We reach for new heights and reveal the unknown for the benefit of humankind</Content>
                            </Item>
                            <Item key="mission">
                                <Header>Mission</Header>
                                <Content>Drive advances in science, technology, aeronautics, and space exploration to enhance knowledge, education, innovation, economic vitality and stewardship of Earth</Content>
                            </Item>
                        </Tabs>
                        <Button>Next</Button>
                    </Content>
                </Card>
                <Card size="xl" orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>
                        <Tabs aria-label="Nasa">
                            <Item key="vision">
                                <Header>Vision</Header>
                                <Content>We reach for new heights and reveal the unknown for the benefit of humankind</Content>
                            </Item>
                            <Item key="mission">
                                <Header>Mission</Header>
                                <Content>Drive advances in science, technology, aeronautics, and space exploration to enhance knowledge, education, innovation, economic vitality and stewardship of Earth</Content>
                            </Item>
                        </Tabs>
                        <Button>Next</Button>
                    </Content>
                </Card>
            </Inline>
        </Stack>
    )
};

export const HeadingOverflow: CardStory = {
    name: "heading overflow",
    render: () => (
        <Card orientation="horizontal">
            <Heading>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus a purus sit amet volutpat. Ut ac mauris sit amet elit rhoncus dictum. Morbi vehicula, tortor eget congue porta, mi ipsum interdum lectus, non lobortis dui nulla sed nisi.
            </Heading>
            <Content>The National Aeronautics and Space Administration</Content>
        </Card>
    )
};

export const HeadingAlignment: CardStory = {
    name: "heading alignment",
    render: () => (
        <Card orientation="horizontal">
            <Heading>
                Lorem ipsum dolor sit amet
                <Switch aria-label="Lorem" />
            </Heading>
            <Content>The National Aeronautics and Space Administration</Content>
        </Card>
    )
};

export const HeaderOverflow: CardStory = {
    name: "header overflow",
    render: () => (
        <Card orientation="horizontal">
            <Heading>Nasa</Heading>
            <Header>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus a purus sit amet volutpat. Ut ac mauris sit amet elit rhoncus dictum. Morbi vehicula, tortor eget congue porta, mi ipsum interdum lectus, non lobortis dui nulla sed nisi.
            </Header>
            <Content>The National Aeronautics and Space Administration</Content>
        </Card>
    )
};

export const ButtonOverflow: CardStory = {
    name: "button overflow",
    render: () => (
        <Card orientation="horizontal">
            <Heading>Nasa</Heading>
            <Content>The National Aeronautics and Space Administration</Content>
            <ButtonGroup>
                <Button>Lorem ipsum dolor sit amet.</Button>
                <Button>Lorem ipsum dolor sit amet.</Button>
                <Button>Lorem ipsum dolor sit amet.</Button>
            </ButtonGroup>
        </Card>
    )
};

export const EverythingOverflow: CardStory = {
    name: "everything overflow",
    render: () => (
        <Card orientation="horizontal">
            <Heading>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus a purus sit amet volutpat. Ut ac mauris sit amet elit rhoncus dictum. Morbi vehicula, tortor eget congue porta, mi ipsum interdum lectus, non lobortis dui nulla sed nisi.
            </Heading>
            <Header>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus a purus sit amet volutpat. Ut ac mauris sit amet elit rhoncus dictum. Morbi vehicula, tortor eget congue porta, mi ipsum interdum lectus, non lobortis dui nulla sed nisi.
            </Header>
            <Content>The National Aeronautics and Space Administration</Content>
            <ButtonGroup>
                <Button>Lorem ipsum dolor sit amet.</Button>
                <Button>Lorem ipsum dolor sit amet.</Button>
                <Button>Lorem ipsum dolor sit amet.</Button>
            </ButtonGroup>
        </Card>
    )
};

export const Zoom: CardStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <Card orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
            </Div>
            <Div className="zoom-out">
                <Card orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
            </Div>
        </Stack>
    )
};
