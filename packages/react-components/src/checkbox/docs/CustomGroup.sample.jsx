function CustomComponent({
    value,
    children,
    ...rest
}) {
    const [{ checked: isChecked, onCheck, ...checkableProps }] = useCheckableProps({ value });

    const handleCheck = useCallback(event => {
        onCheck(event, value);
    }, [value, onCheck]);

    return (
        <Tag
            {...rest}
            {...checkableProps}
            as="button"
            value={value}
            onClick={handleCheck}
            className={isChecked ? "o-ui-white o-ui-bg-primary-6" : "o-ui-bg-secondary-6"}
            aria-checked={isChecked}
        >
            {children}
        </Tag>
    );
}

render(() => {
    return (
        <CheckboxGroup gap={2}>
            <CustomComponent value="milky-way">Milky Way</CustomComponent>
            <CustomComponent value="andromeda">Andromeda</CustomComponent>
            <CustomComponent value="medusa">Medusa</CustomComponent>
        </CheckboxGroup>
    );
});
