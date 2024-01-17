() => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelectionChange = useCallback((event, keys) => {
        setIsOpen(true);
    }, [setIsOpen]);

    const handleModalClose = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    return (
        <>
            <MenuTrigger>
                <IconButton variant="secondary" aria-label="View tasks">
                    <KebabIcon />
                </IconButton>
                <Menu onSelectionChange={handleSelectionChange}>
                    <Item key="launch">Launch...</Item>
                    <Item key="eject">Eject...</Item>
                    <Item key="land">Land...</Item>
                </Menu>
            </MenuTrigger>
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
};
