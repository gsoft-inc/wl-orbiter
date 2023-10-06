const TagButton = as(Tag, "button");

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
        <TagButton
            {...rest}
            {...checkableProps}
            value={value}
            onClick={handleCheck}
            color={isChecked ? "white" : undefined}
            backgroundColor={isChecked ? "alias-accent" : "alias-warning-light"}
            aria-checked={isChecked}
        >
            {children}
        </TagButton>
    );
}

render(() => {
    return (
        <CheckboxGroup gap={80}>
            <CustomComponent value="milky-way">Milky Way</CustomComponent>
            <CustomComponent value="andromeda">Andromeda</CustomComponent>
            <CustomComponent value="medusa">Medusa</CustomComponent>
        </CheckboxGroup>
    );
});
