const Tags = [
    {
        title: "1950",
        items: [
            { key: "mercury", value: "Mercury Program", icon: <PlaceholderMajorIcon /> }
        ]
    },
    {
        title: "1960",
        items: [
            { key: "gemini", value: "Gemini Program", icon: <EmailMajorIcon /> }
        ]
    },
    {
        title: "1970",
        items: [
            { key: "apollo", value: "Apollo Program", icon: <NotificationMajorIcon /> },
            { key: "skylab", value: "Skylab", icon: <FileMajorIcon /> },
            { key: "soyuz", value: "Apollo–Soyuz Test Project", icon: <GearMajorIcon /> }
        ]
    },
    {
        title: "2010",
        items: [
            { key: "artemis", value: "Artemis Program", icon: <LightbulbMajorIcon /> }
        ]
    }
];

function TagsPicker() {
    const [selectedKeys, setSelectedKeys] = useState([]);

    const handleSelectionChange = useCallback((event, newKeys) => {
        setSelectedKeys(newKeys);
    }, [setSelectedKeys]);

    const handleRemoveTag = useCallback((event, key) => {
        setSelectedKeys(selectedKeys.filter(x => x !== key));
    }, [selectedKeys, setSelectedKeys]);

    const handleClearTags = useCallback(() => {
        setSelectedKeys([]);
    }, [setSelectedKeys]);

    const denormalizedTags = useMemo(() =>
        Tags.reduce((acc, x) => {
            x.items.forEach(item => {
                acc[item.key] = item;
            });

            return acc;
        }, {})
    , []);

    return (
        <Flex>
            <MenuTrigger closeOnSelect={false}>
                <Button variant="secondary" marginRight={80}>
                    <Text>{selectedKeys.length > 0 ? "Programs" : "All programs"}</Text>
                    {selectedKeys.length > 0 && <Counter variant="divider">{selectedKeys.length}</Counter>}
                    <DisclosureArrow slot="end-icon" />
                </Button>
                <Menu
                    selectionMode="multiple"
                    selectedKeys={selectedKeys}
                    onSelectionChange={handleSelectionChange}
                >
                    {Tags.map(x =>
                        <Section key={x.title} title={x.title}>
                            {x.items.map(y =>
                                <Item key={y.key}>
                                    {y.icon}
                                    <Text>{y.value}</Text>
                                </Item>
                            )}
                        </Section>
                    )}
                </Menu>
            </MenuTrigger>
            <TagList
                onRemove={handleRemoveTag}
                onClear={handleClearTags}
            >
                {selectedKeys.map(x => {
                    const tag = denormalizedTags[x];

                    return (
                        <Item key={tag.key}>
                            {tag.icon}
                            <Text>{tag.value}</Text>
                        </Item>
                    );
                })}
            </TagList>
        </Flex>
    );
}

render(() =>
    <TagsPicker />
);
