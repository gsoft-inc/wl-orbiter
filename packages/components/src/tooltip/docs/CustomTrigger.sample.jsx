const CustomTrigger = forwardRef((props, ref) => {
    const { isOpen } = useTooltipTriggerContext();

    return (
        <IconButton
            {...props}
            variant={isOpen ? "primary" : "secondary"}
            aria-label="Email"
            ref={ref}
        >
            <CalendarIcon />
        </IconButton>
    );
});

render(
    <TooltipTrigger>
        <CustomTrigger />
        <Tooltip>Send an email to the orbiteral space station.</Tooltip>
    </TooltipTrigger>
);
