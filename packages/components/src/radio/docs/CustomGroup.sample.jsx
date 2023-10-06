const TagButton = as(Tag, "button");

function CustomComponent({ value, children, ...rest }) {
    const [{ checked: isChecked, onCheck, ...checkableProps }] = useCheckableProps({ value });

    const handleCheck = useCallback(
        event => {
            onCheck(event, value);
        },
        [value, onCheck]
    );

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
        <RadioGroup gap={80} orientation="horizontal">
            <CustomComponent value="mars">Mars</CustomComponent>
            <CustomComponent value="jupiter">Jupiter</CustomComponent>
            <CustomComponent value="pluton">Pluton</CustomComponent>
        </RadioGroup>
    );
});
