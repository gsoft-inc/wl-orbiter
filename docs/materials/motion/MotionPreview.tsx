import "./MotionPreview.css";

import { Field, Label } from "@components/field";

import { Button } from "@components/button";
import { Div } from "@components/html";
import { Inline } from "@components/layout";
import { Item } from "@components/collection";
import { Select } from "@components/select";
import { SyntheticEvent, useState } from "react";

export function MotionPreview() {
    const [isAnimated, setAnimated] = useState(false);
    const [duration, setDuration] = useState("duration-1");
    const [easing, setEasing] = useState("expressive");

    const handleClick = () => {
        setAnimated(!isAnimated);
    };

    const handleSelectDuration = (_: SyntheticEvent, selectedKey: string) => {
        setDuration(selectedKey);
    };

    const handleSelectEasing = (_: SyntheticEvent, selectedKey: string) => {
        setEasing(selectedKey);
    };

    return (
        <>
            <Inline marginBottom={160} alignY="end">
                <Field>
                    <Label data-testid="label">Easing</Label>
                    <Select placeholder="Easing" aria-label="Easing" defaultSelectedKey={easing} onSelectionChange={handleSelectEasing}>
                        <Item key="focus">Focus</Item>
                        <Item key="productive">Productive</Item>
                        <Item key="expressive">Expressive</Item>
                    </Select>
                </Field>
                <Field>
                    <Label data-testid="label">Duration</Label>
                    <Select placeholder="Duration" aria-label="Duration" defaultSelectedKey={duration} onSelectionChange={handleSelectDuration}>
                        <Item key="duration-1">100ms</Item>
                        <Item key="duration-2">200ms</Item>
                        <Item key="duration-3">300ms</Item>
                        <Item key="duration-4">500ms</Item>
                        <Item key="duration-5">800ms</Item>
                    </Select>
                </Field>
                <Button variant="primary" onClick={handleClick}>Play this motion</Button>
            </Inline>
            <Div style={{ "--o-ui-sb-duration": `var(--o-ui-easing-${duration})`, "--o-ui-sb-easing": `var(--o-ui-easing-${easing})` } as any} className={`mt6 o-ui-sb-object ${isAnimated ? "o-ui-sb-object-animated" : ""}`} />
        </>
    );
}
