import { Paragraph } from "@components/typography";
import { Modal, ModalTrigger } from "@components/modal";
import { Content } from "@components/placeholders";
import { Button, Heading } from "@hopper-ui/components";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/ModalTrigger-hopper",
    component: ModalTrigger
} as Meta<typeof ModalTrigger>;

export default meta;

type ModalTriggerStory = StoryObj<typeof meta>;

export const Default: ModalTriggerStory = {
    name: "default",
    render: () => (
        <ModalTrigger>
            <Button variant="secondary">Open</Button>
            <Modal>
                <Heading>Iconic Arecibo Observatory collapses</Heading>
                <Content>
                    <Paragraph>This year, the National Science Foundation (NSF) said farewell to the iconic Arecibo Observatory in Puerto Rico after two major cable failures led to the radio telescope's collapse. The 57-year old structure was once the largest radio dish telescope in the world, and researchers have used its capabilities to make significant breakthroughs in astronomy. The Arecibo Observatory also served as the dramatic backdrop to films like "Contact" and "Goldeneye." </Paragraph>
                    <Paragraph>The facility suffered two cable failures this year, and then in early December, the suspended platform above the radio dish came crashing down.</Paragraph>
                    <Paragraph>The news about Arecibo's structural damage and subsequent decommissioning was disheartening for the local community, too. Field trips to its visitors' center are a ''rite of passage'' for Puerto Rican children.</Paragraph>
                </Content>
            </Modal>
        </ModalTrigger>
    )
};

export const DefaultOpen: ModalTriggerStory = {
    name: "default open",
    render: () => (
        <ModalTrigger defaultOpen>
            <Button variant="secondary">Open</Button>
            <Modal>
                <Heading>Iconic Arecibo Observatory collapses</Heading>
                <Content>
                    <Paragraph>This year, the National Science Foundation (NSF) said farewell to the iconic Arecibo Observatory in Puerto Rico after two major cable failures led to the radio telescope's collapse. The 57-year old structure was once the largest radio dish telescope in the world, and researchers have used its capabilities to make significant breakthroughs in astronomy. The Arecibo Observatory also served as the dramatic backdrop to films like "Contact" and "Goldeneye." </Paragraph>
                    <Paragraph>The facility suffered two cable failures this year, and then in early December, the suspended platform above the radio dish came crashing down.</Paragraph>
                    <Paragraph>The news about Arecibo's structural damage and subsequent decommissioning was disheartening for the local community, too. Field trips to its visitors' center are a ''rite of passage'' for Puerto Rican children.</Paragraph>
                </Content>
                <Button variant="secondary">Close</Button>
            </Modal>
        </ModalTrigger>
    )
};

export const NotDismissable: ModalTriggerStory = {
    name: "not dismissable",
    render: () => (
        <ModalTrigger dismissable={false} defaultOpen>
            <Button variant="secondary">Open</Button>
            <Modal>
                <Heading>Iconic Arecibo Observatory collapses</Heading>
                <Content>
                    <Paragraph>This year, the National Science Foundation (NSF) said farewell to the iconic Arecibo Observatory in Puerto Rico after two major cable failures led to the radio telescope's collapse. The 57-year old structure was once the largest radio dish telescope in the world, and researchers have used its capabilities to make significant breakthroughs in astronomy. The Arecibo Observatory also served as the dramatic backdrop to films like "Contact" and "Goldeneye." </Paragraph>
                    <Paragraph>The facility suffered two cable failures this year, and then in early December, the suspended platform above the radio dish came crashing down.</Paragraph>
                    <Paragraph>The news about Arecibo's structural damage and subsequent decommissioning was disheartening for the local community, too. Field trips to its visitors' center are a ''rite of passage'' for Puerto Rican children.</Paragraph>
                </Content>
            </Modal>
        </ModalTrigger>
    )
};
