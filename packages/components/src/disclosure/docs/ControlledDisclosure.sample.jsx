() => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenChange = useCallback((event, newValue) => {
        setIsOpen(newValue);
        console.log(newValue);
    }, [setIsOpen]);

    return (
        <Disclosure
            open={isOpen}
            onOpenChange={handleOpenChange}
        >
            <TextLinkAsButton>
                <Text>EVE Online</Text>
                <AngleDownIcon transform={`rotate(${isOpen ? 0 : 180}deg)`} />
            </TextLinkAsButton>
            <Div>
                Eve Online is a space-based, persistent world massively multiplayer online role-playing game (MMORPG) developed and published by CCP Games.
                Players of Eve Online can participate in a number of in-game professions and activities, including mining, piracy, manufacturing, trading, exploration,
                and combat (both player versus environment and player versus player). The game contains a total of 7,800 star systems that can be visited by players.
            </Div>
        </Disclosure>
    );
};
