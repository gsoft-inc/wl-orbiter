import { Apollo11Poster, BlueOrigin, Nasa, SpaceX } from "./assets/index.js";
import { Heading, Paragraph } from "@components/typography/index.js";

import { Button } from "@components/button/index.js";
import { Card } from "@components/card/index.js";
import { Content } from "@components/placeholders/index.js";
import { Div } from "@components/html/index.js";
import { Illustration } from "@components/illustration/index.js";
import { Image } from "@components/image/index.js";
import { Modal } from "@components/modal/index.js";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/Modal",
    component: Modal
} as ComponentMeta<typeof Modal>;

type ModalStory = ComponentStoryObj<typeof Modal>;

export const Default: ModalStory = {
    storyName: "default",
    render:  () => (
        <Modal>
            <Heading>Iconic Arecibo Observatory collapses</Heading>
            <Content>
                <Paragraph size="sm">This year, the National Science Foundation (NSF) said farewell to the iconic Arecibo Observatory in Puerto Rico after two major cable failures led to the radio telescope's collapse. The 57-year old structure was once the largest radio dish telescope in the world, and researchers have used its capabilities to make significant breakthroughs in astronomy. The Arecibo Observatory also served as the dramatic backdrop to films like "Contact" and "Goldeneye."</Paragraph>
                <Paragraph size="sm">The facility suffered two cable failures this year, and then in early December, the suspended platform above the radio dish came crashing down.</Paragraph>
                <Paragraph size="sm">The news about Arecibo's structural damage and subsequent decommissioning was disheartening for the local community, too. Field trips to its visitors' center are a ''rite of passage'' for Puerto Rican children.</Paragraph>
            </Content>
        </Modal>
    )
};

export const ModalImage: ModalStory = {
    storyName: "image",
    render:  () => (
        <Modal>
            <Image src={Apollo11Poster} alt="Apollo 11" />
            <Heading>Iconic Arecibo Observatory collapses</Heading>
            <Content>
                <Paragraph size="sm">This year, the National Science Foundation (NSF) said farewell to the iconic Arecibo Observatory in Puerto Rico after two major cable failures led to the radio telescope's collapse. The 57-year old structure was once the largest radio dish telescope in the world, and researchers have used its capabilities to make significant breakthroughs in astronomy. The Arecibo Observatory also served as the dramatic backdrop to films like "Contact" and "Goldeneye."</Paragraph>
                <Paragraph size="sm">The facility suffered two cable failures this year, and then in early December, the suspended platform above the radio dish came crashing down.</Paragraph>
                <Paragraph size="sm">The news about Arecibo's structural damage and subsequent decommissioning was disheartening for the local community, too. Field trips to its visitors' center are a ''rite of passage'' for Puerto Rican children.</Paragraph>
            </Content>
        </Modal>
    )
};

export const ModalIllustration: ModalStory = {
    storyName: "illustration",
    render:  () => (
        <Modal>
            <Illustration color="sunken-treasure-100">
                <Image src={Nasa} alt="Nasa" />
            </Illustration>
            <Heading>Iconic Arecibo Observatory collapses</Heading>
            <Content>
                <Paragraph size="sm">This year, the National Science Foundation (NSF) said farewell to the iconic Arecibo Observatory in Puerto Rico after two major cable failures led to the radio telescope's collapse. The 57-year old structure was once the largest radio dish telescope in the world, and researchers have used its capabilities to make significant breakthroughs in astronomy. The Arecibo Observatory also served as the dramatic backdrop to films like "Contact" and "Goldeneye."</Paragraph>
                <Paragraph size="sm">The facility suffered two cable failures this year, and then in early December, the suspended platform above the radio dish came crashing down.</Paragraph>
                <Paragraph size="sm">The news about Arecibo's structural damage and subsequent decommissioning was disheartening for the local community, too. Field trips to its visitors' center are a ''rite of passage'' for Puerto Rican children.</Paragraph>
            </Content>
        </Modal>
    )
};

export const ModalChoice: ModalStory = {
    storyName: "choice",
    render:  () => (
        <Modal>
            <Heading>Space agencies</Heading>
            <Content>
                <Card>
                    <Image src={SpaceX} alt="SpaceX" />
                    <Heading>Space X</Heading>
                    <Content> It's about believing in the future and thinking that the future will be better than the past.</Content>
                    <Button variant="secondary">Choose</Button>
                </Card>
                <Card>
                    <Image src={BlueOrigin} alt="Blue Origin" />
                    <Heading>Blue Origin</Heading>
                    <Content>We're committed to building a road to space so our children can build the future.</Content>
                    <Button variant="secondary">Choose</Button>
                </Card>
            </Content>
        </Modal>
    )
};

export const ChoiceWithText: ModalStory = {
    storyName: "choice with text",
    render:  () => (
        <Modal>
            <Heading>Space agencies</Heading>
            <Content>
                <Paragraph size="sm">Which of the following space agency do you prefer?</Paragraph>
                <Card>
                    <Image src={SpaceX} alt="SpaceX" />
                    <Heading>Space X</Heading>
                    <Content>It's about believing in the future and thinking that the future will be better than the past.</Content>
                    <Button variant="secondary">Choose</Button>
                </Card>
                <Card>
                    <Image src={BlueOrigin} alt="Blue Origin" />
                    <Heading>Blue Origin</Heading>
                    <Content>We're committed to building a road to space so our children can build the future.</Content>
                    <Button variant="secondary">Choose</Button>
                </Card>
            </Content>
        </Modal>
    )
};

export const ChoiceWithContentBetweenCards: ModalStory = {
    storyName: "choice with content between cards",
    render:  () => (
        <Modal>
            <Heading>Space agencies</Heading>
            <Content>
                <Paragraph size="sm">Which of the following space agency do you prefer?</Paragraph>
                <Card>
                    <Image src={SpaceX} alt="SpaceX" />
                    <Heading>Space X</Heading>
                    <Content>It's about believing in the future and thinking that the future will be better than the past.</Content>
                    <Button variant="secondary">Choose</Button>
                </Card>
                <Paragraph size="sm">Thank you for participating.</Paragraph>
                <Card>
                    <Image src={BlueOrigin} alt="Blue Origin" />
                    <Heading>Blue Origin</Heading>
                    <Content>We're committed to building a road to space so our children can build the future.</Content>
                    <Button variant="secondary">Choose</Button>
                </Card>
            </Content>
        </Modal>
    )
};

export const StyledSystemStyleProp: ModalStory = {
    storyName: "styled system styleProp",
    render:  () => (
        <Modal border="warning">
            <Heading>Iconic Arecibo Observatory collapses</Heading>
            <Content>
                <Paragraph size="sm">This year, the National Science Foundation (NSF) said farewell to the iconic Arecibo Observatory in Puerto Rico after two major cable failures led to the radio telescope's collapse. The 57-year old structure was once the largest radio dish telescope in the world, and researchers have used its capabilities to make significant breakthroughs in astronomy. The Arecibo Observatory also served as the dramatic backdrop to films like "Contact" and "Goldeneye."</Paragraph>
                <Paragraph size="sm">The facility suffered two cable failures this year, and then in early December, the suspended platform above the radio dish came crashing down.</Paragraph>
                <Paragraph size="sm">The news about Arecibo's structural damage and subsequent decommissioning was disheartening for the local community, too. Field trips to its visitors' center are a ''rite of passage'' for Puerto Rican children.</Paragraph>
            </Content>
        </Modal>
    )
};

export const ClassName: ModalStory = {
    storyName: "className",
    render:  () => (
        <Modal className="border-red">
            <Heading>Iconic Arecibo Observatory collapses</Heading>
            <Content>
                <Paragraph size="sm">This year, the National Science Foundation (NSF) said farewell to the iconic Arecibo Observatory in Puerto Rico after two major cable failures led to the radio telescope's collapse. The 57-year old structure was once the largest radio dish telescope in the world, and researchers have used its capabilities to make significant breakthroughs in astronomy. The Arecibo Observatory also served as the dramatic backdrop to films like "Contact" and "Goldeneye."</Paragraph>
                <Paragraph size="sm">The facility suffered two cable failures this year, and then in early December, the suspended platform above the radio dish came crashing down.</Paragraph>
                <Paragraph size="sm">The news about Arecibo's structural damage and subsequent decommissioning was disheartening for the local community, too. Field trips to its visitors' center are a ''rite of passage'' for Puerto Rican children.</Paragraph>
            </Content>
        </Modal>
    )
};

export const ZoomIn: ModalStory = {
    storyName: "zoom in",
    render:  () => (
        <Div className="zoom-in">
            <Modal>
                <Heading>Iconic Arecibo Observatory collapses</Heading>
                <Content>
                    <Paragraph size="sm">This year, the National Science Foundation (NSF) said farewell to the iconic Arecibo Observatory in Puerto Rico after two major cable failures led to the radio telescope's collapse. The 57-year old structure was once the largest radio dish telescope in the world, and researchers have used its capabilities to make significant breakthroughs in astronomy. The Arecibo Observatory also served as the dramatic backdrop to films like "Contact" and "Goldeneye."</Paragraph>
                    <Paragraph size="sm">The facility suffered two cable failures this year, and then in early December, the suspended platform above the radio dish came crashing down.</Paragraph>
                    <Paragraph size="sm">The news about Arecibo's structural damage and subsequent decommissioning was disheartening for the local community, too. Field trips to its visitors' center are a ''rite of passage'' for Puerto Rican children.</Paragraph>
                </Content>
            </Modal>
        </Div>
    )
};

export const ZoomOut: ModalStory = {
    storyName: "zoom out",
    render:  () => (
        <Div className="zoom-out">
            <Modal>
                <Heading>Iconic Arecibo Observatory collapses</Heading>
                <Content>
                    <Paragraph size="sm">This year, the National Science Foundation (NSF) said farewell to the iconic Arecibo Observatory in Puerto Rico after two major cable failures led to the radio telescope's collapse. The 57-year old structure was once the largest radio dish telescope in the world, and researchers have used its capabilities to make significant breakthroughs in astronomy. The Arecibo Observatory also served as the dramatic backdrop to films like "Contact" and "Goldeneye."</Paragraph>
                    <Paragraph size="sm">The facility suffered two cable failures this year, and then in early December, the suspended platform above the radio dish came crashing down.</Paragraph>
                    <Paragraph size="sm">The news about Arecibo's structural damage and subsequent decommissioning was disheartening for the local community, too. Field trips to its visitors' center are a ''rite of passage'' for Puerto Rican children.</Paragraph>
                </Content>
            </Modal>
        </Div>
    ) };

export const StyledSystem: ModalStory = {
    storyName: "styled system",
    render:  () => (
        <Modal style={{ border: "1px solid red" }}>
            <Heading>Iconic Arecibo Observatory collapses</Heading>
            <Content>
                <Paragraph size="sm">This year, the National Science Foundation (NSF) said farewell to the iconic Arecibo Observatory in Puerto Rico after two major cable failures led to the radio telescope's collapse. The 57-year old structure was once the largest radio dish telescope in the world, and researchers have used its capabilities to make significant breakthroughs in astronomy. The Arecibo Observatory also served as the dramatic backdrop to films like "Contact" and "Goldeneye."</Paragraph>
                <Paragraph size="sm">The facility suffered two cable failures this year, and then in early December, the suspended platform above the radio dish came crashing down.</Paragraph>
                <Paragraph size="sm">The news about Arecibo's structural damage and subsequent decommissioning was disheartening for the local community, too. Field trips to its visitors' center are a ''rite of passage'' for Puerto Rican children.</Paragraph>
            </Content>
        </Modal>
    )
};
