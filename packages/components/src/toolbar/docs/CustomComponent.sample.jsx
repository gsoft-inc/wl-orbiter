function CustomComponent(props) {
    const [toolbarProps] = useToolbarProps();

    return (
        <HtmlInput
            {...props}
            {...omitProps(toolbarProps, ["orientation"])}
            border="neutral"
            type="text"
        />
    );
}

render(() => {
    return (
        <Toolbar>
            <CustomComponent />
            <RadioGroup>
                <Radio value="mars">Mars</Radio>
                <Radio value="jupiter">Jupiter</Radio>
                <Radio value="pluton">Pluton</Radio>
            </RadioGroup>
        </Toolbar>
    );
});
