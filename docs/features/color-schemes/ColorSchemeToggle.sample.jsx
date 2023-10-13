function ColorSchemeToggle() {
    const { colorScheme, setColorScheme } = useColorSchemeContext();

    const handleClick = useCallback(() => {
        setColorScheme(colorScheme === "light" ? "dark" : "light");
    }, [colorScheme, setColorScheme]);

    return (
        <Button variant="secondary" onClick={handleClick}>Toggle</Button>
    );
}

render(() => {
    const { colorScheme: parentColorScheme } = useColorSchemeContext();

    return (
        <ThemeProvider colorScheme={parentColorScheme}>
            <Div backgroundColor="neutral" padding={2}>
                <ColorSchemeToggle />
            </Div>
        </ThemeProvider>
    );
});
