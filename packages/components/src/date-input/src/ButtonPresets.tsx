import { isNil, useEventCallback } from "../../shared";

import { RadioGroup } from "../../radio";
import { SyntheticEvent } from "react";
import { ToggleButton } from "../../button";

export interface ButtonPresetsProps {
    onSelectionChange: (event: SyntheticEvent, index: number) => void;
    selectedIndex?: number;
    values: string[];
}

export function ButtonPresets({
    onSelectionChange,
    selectedIndex,
    values
}: ButtonPresetsProps) {
    const handleSelectPreset = useEventCallback((event: SyntheticEvent, value: string) => {
        onSelectionChange(event, parseInt(value));
    });

    return (
        <RadioGroup
            aria-label="Date presets"
            className="o-ui-date-input-button-presets"
            gap={80}
            onChange={handleSelectPreset}
            orientation="horizontal"
            value={!isNil(selectedIndex) ? selectedIndex.toString() : null}
        >
            {values.map((x, index) => (
                <ToggleButton
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    size="sm"
                    value={index.toString()}
                    variant="secondary"
                >
                    {x}
                </ToggleButton>
            ))}
        </RadioGroup>
    );
}
