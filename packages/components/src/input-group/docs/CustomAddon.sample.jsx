const FlexText = as(Flex, Text);

function CustomAddon({ children, ...props }) {
    const [inputGroupAddonProps] = useInputGroupAddonProps();

    return (
        <FlexText
            {...mergeProps(
                props,
                {
                    alignItems: "center",
                    height: "2.5rem",
                    border: "#ADACAC",
                    padding: "0px 10px",
                    style: {
                        borderTopRightRadius: "var(--o-ui-input-border-radius)",
                        borderBottomRightRadius: "var(--o-ui-input-border-radius)"
                    }
                },
                inputGroupAddonProps
            )}
        >
            {children}
        </FlexText>
    );
}

render(() => {
    return (
        <InputGroup>
            <TextInput aria-label="Url" />
            <CustomAddon>.space</CustomAddon>
        </InputGroup>
    );
});
