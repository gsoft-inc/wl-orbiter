() => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedKey, setSelectedKey] = useState("earth");

    const handleSelectionChange = useCallback((event, newValue) => {
        setSelectedKey(newValue);
        console.log(newValue);
    }, [setSelectedKey]);

    const handleOpenChange = useCallback((event, newValue) => {
        setIsOpen(newValue);
        console.log(newValue);
    }, [setIsOpen]);

    return (
        <Select
            open={isOpen}
            selectedKey={selectedKey}
            placeholder="Planets"
            onSelectionChange={handleSelectionChange}
            onOpenChange={handleOpenChange}
        >
            <Item key="earth">Earth</Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="mars">Mars</Item>
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
        </Select>
    );
};
