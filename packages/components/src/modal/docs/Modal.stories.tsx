import { Button, ButtonGroup } from "@components/button";
import { Card } from "@components/card";
import { Overlay } from "@components/overlay";
import { Content, Footer, Header } from "@components/placeholders";
import { ET, Planet, SpacePortrait, SpacePortraitHorizontal, TheMartian } from "./assets";
import { Heading, Paragraph } from "@components/typography";
import { Illustration } from "@components/illustration";
import { Image } from "@components/image";
import { Modal, ModalTrigger, useModalTriggerContext } from "@components/modal";
import { TextLink } from "@components/link";
import { forwardRef, useCallback, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Modal",
    component: Modal,
    id: "modal"
} as Meta<typeof Modal>;

export default meta;

type ModalStory = StoryObj<typeof meta>;

export const Default: ModalStory = {
    render: () => (
        <ModalTrigger>
            <Button variant="secondary">Open</Button>
            <Modal>
                <Heading>Cloud City</Heading>
                <Content>
                    <Paragraph size="sm">Cloud City was a completely man-made tibanna gas mining colony staff hovering over the gas giant Bespin, occupied by millions of workers, tourists and support staff. Located in Bespin's Life Zone, the station had no need for airlocks or life support systems, with the atmosphere comprised mostly of oxygen and acceptable levels of gravity and temperature.</Paragraph>
                    <Paragraph size="sm">The station was situated 59,000 kilometers above Bespin's core, while its disk was approximately 16.2 kilometers in diameter. 36,000 repulsorlift engines and tractor beam generators kept the giant city floating above the planet. It contained 392 levels, along with platforms and rooms for residents and visitors.</Paragraph>
                </Content>
            </Modal>
        </ModalTrigger>
    )
};

export const ImageStory: ModalStory = {
    render: () => (
        <ModalTrigger>
            <Button variant="secondary">Open</Button>
            <Modal>
                <Image alt="City over clouds" src={{ base: SpacePortraitHorizontal, sm: SpacePortrait }} />
                <Heading>Cloud City</Heading>
                <Content>
                    <Paragraph size="sm">Cloud City was a completely man-made tibanna gas mining colony staff hovering over the gas giant Bespin, occupied by millions of workers, tourists and support staff. Located in Bespin's Life Zone, the station had no need for airlocks or life support systems, with the atmosphere comprised mostly of oxygen and acceptable levels of gravity and temperature.</Paragraph>
                    <Paragraph size="sm">The station was situated 59,000 kilometers above Bespin's core, while its disk was approximately 16.2 kilometers in diameter. 36,000 repulsorlift engines and tractor beam generators kept the giant city floating above the planet. It contained 392 levels, along with platforms and rooms for residents and visitors.</Paragraph>
                </Content>
            </Modal>
        </ModalTrigger>
    )
};

export const IllustrationStory: ModalStory = {
    render: () => (
        <ModalTrigger>
            <Button variant="secondary">Open</Button>
            <Modal>
                <Illustration backgroundColor="primary-weak">
                    <Image alt="Planet Logo" src={Planet} />
                </Illustration>
                <Heading>Cloud City</Heading>
                <Content>
                    <Paragraph size="sm">Cloud City was a completely man-made tibanna gas mining colony staff hovering over the gas giant Bespin, occupied by millions of workers, tourists and support staff. Located in Bespin's Life Zone, the station had no need for airlocks or life support systems, with the atmosphere comprised mostly of oxygen and acceptable levels of gravity and temperature.</Paragraph>
                    <Paragraph size="sm">The station was situated 59,000 kilometers above Bespin's core, while its disk was approximately 16.2 kilometers in diameter. 36,000 repulsorlift engines and tractor beam generators kept the giant city floating above the planet. It contained 392 levels, along with platforms and rooms for residents and visitors.</Paragraph>
                </Content>
            </Modal>
        </ModalTrigger>
    )
};

export const Choice: ModalStory = {
    render: () => (
        <ModalTrigger>
            <Button variant="secondary">Open</Button>
            <Modal>
                <Heading>Which of the following movie is the greatest space movie?</Heading>
                <Content>
                    <Card>
                        <Image alt="E.T. poster" src={ET} />
                        <Heading>E.T.</Heading>
                        <Content>"E.T. phone home,"" mutters the titular character as he attempts to contact his home planet, and audiences around the world fell in love. The timeless story of an intimate friendship between a boy and his alien friend, “E.T.” has resonated with generations of families, and is widely considered one of the greatest films of all time.</Content>
                        <Button variant="secondary" >Choose</Button>
                    </Card>
                    <Card>
                        <Image alt="The Martian poster" src={TheMartian} />
                        <Heading>The Martian</Heading>
                        <Content>Based on the popular novel, “The Martian” is about mankind joining for a singular mission: save astronaut Mark Watney, who was abandoned on Mars after the rest of his crew made an emergency exit during a dust storm.</Content>
                        <Button variant="secondary" >Choose</Button>
                    </Card>
                </Content>
            </Modal>
        </ModalTrigger>
    )
};

export const HeaderStory: ModalStory = {
    render: () => (
        <ModalTrigger>
            <Button variant="secondary">Open</Button>
            <Modal>
                <Heading>Cloud City</Heading>
                <Header>
                    <TextLink external href="https://en.wikipedia.org/wiki/Floating_cities_and_islands_in_fiction" size="sm">Wikipedia</TextLink>
                </Header>
                <Content>
                    <Paragraph size="sm">Cloud City was a completely man-made tibanna gas mining colony staff hovering over the gas giant Bespin, occupied by millions of workers, tourists and support staff. Located in Bespin's Life Zone, the station had no need for airlocks or life support systems, with the atmosphere comprised mostly of oxygen and acceptable levels of gravity and temperature.</Paragraph>
                    <Paragraph size="sm">The station was situated 59,000 kilometers above Bespin's core, while its disk was approximately 16.2 kilometers in diameter. 36,000 repulsorlift engines and tractor beam generators kept the giant city floating above the planet. It contained 392 levels, along with platforms and rooms for residents and visitors.</Paragraph>
                </Content>
            </Modal>
        </ModalTrigger>
    )
};

export const FooterStory: ModalStory = {
    render: () => (
        <ModalTrigger>
            <Button variant="secondary">Open</Button>
            <Modal>
                <Heading>Cloud City</Heading>
                <Content>
                    <Paragraph size="sm">Cloud City was a completely man-made tibanna gas mining colony staff hovering over the gas giant Bespin, occupied by millions of workers, tourists and support staff. Located in Bespin's Life Zone, the station had no need for airlocks or life support systems, with the atmosphere comprised mostly of oxygen and acceptable levels of gravity and temperature.</Paragraph>
                    <Paragraph size="sm">The station was situated 59,000 kilometers above Bespin's core, while its disk was approximately 16.2 kilometers in diameter. 36,000 repulsorlift engines and tractor beam generators kept the giant city floating above the planet. It contained 392 levels, along with platforms and rooms for residents and visitors.</Paragraph>
                </Content>
                <Footer>Copyright 2021</Footer>
            </Modal>
        </ModalTrigger>
    )
};

export const ButtonStory: ModalStory = {
    render: () => (
        <ModalTrigger>
            <Button variant="secondary">Open</Button>
            <Modal>
                <Heading>Cloud City</Heading>
                <Content>
                    <Paragraph size="sm">Cloud City was a completely man-made tibanna gas mining colony staff hovering over the gas giant Bespin, occupied by millions of workers, tourists and support staff. Located in Bespin's Life Zone, the station had no need for airlocks or life support systems, with the atmosphere comprised mostly of oxygen and acceptable levels of gravity and temperature.</Paragraph>
                    <Paragraph size="sm">The station was situated 59,000 kilometers above Bespin's core, while its disk was approximately 16.2 kilometers in diameter. 36,000 repulsorlift engines and tractor beam generators kept the giant city floating above the planet. It contained 392 levels, along with platforms and rooms for residents and visitors.</Paragraph>
                </Content>
                <Button>Choose</Button>
            </Modal>
        </ModalTrigger>
    )
};

export const ButtonGroupStory: ModalStory = {
    render: () => (
        <ModalTrigger>
            <Button variant="secondary">Open</Button>
            <Modal>
                <Heading>Cloud City</Heading>
                <Content>
                    <Paragraph size="sm">Cloud City was a completely man-made tibanna gas mining colony staff hovering over the gas giant Bespin, occupied by millions of workers, tourists and support staff. Located in Bespin's Life Zone, the station had no need for airlocks or life support systems, with the atmosphere comprised mostly of oxygen and acceptable levels of gravity and temperature.</Paragraph>
                    <Paragraph size="sm">The station was situated 59,000 kilometers above Bespin's core, while its disk was approximately 16.2 kilometers in diameter. 36,000 repulsorlift engines and tractor beam generators kept the giant city floating above the planet. It contained 392 levels, along with platforms and rooms for residents and visitors.</Paragraph>
                </Content>
                <ButtonGroup>
                    <Button variant="secondary">Select</Button>
                    <Button>Next</Button>
                </ButtonGroup>
            </Modal>
        </ModalTrigger>
    )
};

export const Context: ModalStory = {
    render: () => {
        const ApolloModal = forwardRef(({ ...rest }, ref) => {
            const { close } = useModalTriggerContext();

            return (
                <Modal
                    {...rest}
                    ref={ref}
                >
                    <Heading>Apollo 11 movie</Heading>
                    <Content>
                        <Paragraph>Apollo 11 is a 2019 American documentary film edited, produced and directed by Todd Douglas Miller. It focuses on the 1969 Apollo 11 mission, the first spaceflight from which men walked on the Moon.</Paragraph>
                        <Paragraph>
                            The film consists solely of archival footage, including 70 mm film previously unreleased to the public, and does not feature narration, interviews or modern recreations.
                            The Saturn V rocket, Apollo crew consisting of Buzz Aldrin, Neil Armstrong, and Michael Collins, and Apollo program Earth-based mission operations engineers are prominently featured in the film.
                        </Paragraph>
                    </Content>
                    <Button onClick={close} variant="secondary">
                        Close
                    </Button>
                </Modal>
            );
        });

        return (
            <ModalTrigger>
                <Button variant="secondary">Open</Button>
                <ApolloModal />
            </ModalTrigger>
        );
    }
};

export const CustomClose: ModalStory = {
    render: () => {
        const CustomCloseModal = forwardRef(({ ...rest }, ref) => {
            const { close } = useModalTriggerContext();

            return (
                <Modal
                    {...rest}
                    ref={ref}
                >
                    <Heading>Apollo 11 movie</Heading>
                    <Content>
                        <Paragraph>Apollo 11 is a 2019 American documentary film edited, produced and directed by Todd Douglas Miller. It focuses on the 1969 Apollo 11 mission, the first spaceflight from which men walked on the Moon.</Paragraph>
                        <Paragraph>
                            The film consists solely of archival footage, including 70 mm film previously unreleased to the public, and does not feature narration, interviews or modern recreations.
                            The Saturn V rocket, Apollo crew consisting of Buzz Aldrin, Neil Armstrong, and Michael Collins, and Apollo program Earth-based mission operations engineers are prominently featured in the film.
                        </Paragraph>
                    </Content>
                    <Button onClick={close} variant="secondary">
                        Close
                    </Button>
                </Modal>
            );
        });

        return (
            <ModalTrigger dismissable={false}>
                <Button variant="secondary">Trigger</Button>
                <CustomCloseModal />
            </ModalTrigger>
        );
    }
};

/* eslint-disable react-hooks/rules-of-hooks */
export const Controlled: ModalStory = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        const handleOpenChange = useCallback((event, newValue) => {
            setIsOpen(newValue);
            console.log(newValue);
        }, [setIsOpen]);

        const handleClose = useCallback(() => {
            setIsOpen(false);
        }, [setIsOpen]);

        return (
            <ModalTrigger
                onOpenChange={handleOpenChange}
                open={isOpen}
            >
                <Button variant="secondary">Open</Button>
                <Modal>
                    <Heading>Apollo 11 movie</Heading>
                    <Content>
                        <Paragraph>Apollo 11 is a 2019 American documentary film edited, produced and directed by Todd Douglas Miller. It focuses on the 1969 Apollo 11 mission, the first spaceflight from which men walked on the Moon.</Paragraph>
                        <Paragraph>
                            The film consists solely of archival footage, including 70 mm film previously unreleased to the public, and does not feature narration, interviews or modern recreations.
                            The Saturn V rocket, Apollo crew consisting of Buzz Aldrin, Neil Armstrong, and Michael Collins, and Apollo program Earth-based mission operations engineers are prominently featured in the film.
                        </Paragraph>
                    </Content>
                    <Button onClick={handleClose} variant="secondary">Close</Button>
                </Modal>
            </ModalTrigger>
        );
    }
};

/* eslint-disable react-hooks/rules-of-hooks */
export const CustomTrigger: ModalStory = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        const handleTriggerClick = useCallback(() => {
            setIsOpen(true);
        }, [setIsOpen]);

        const handleModalClose = useCallback(() => {
            setIsOpen(false);
        }, [setIsOpen]);

        return (
            <>
                <Button
                    onClick={handleTriggerClick}
                    variant="secondary"
                >
                    Open
                </Button>
                <Overlay show={isOpen}>
                    <Modal onClose={handleModalClose}>
                        <Heading>Apollo 11 movie</Heading>
                        <Content>
                            <Paragraph>Apollo 11 is a 2019 American documentary film edited, produced and directed by Todd Douglas Miller. It focuses on the 1969 Apollo 11 mission, the first spaceflight from which men walked on the Moon.</Paragraph>
                            <Paragraph>
                                The film consists solely of archival footage, including 70 mm film previously unreleased to the public, and does not feature narration, interviews or modern recreations. The Saturn V rocket, Apollo crew consisting
                                of Buzz Aldrin, Neil Armstrong, and Michael Collins, and Apollo program Earth-based mission operations engineers are prominently featured in the film.
                            </Paragraph>
                        </Content>
                    </Modal>
                </Overlay>
            </>
        );
    }
};
