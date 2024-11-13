import React, { ComponentProps } from "react";
import { Canvas as StorybookCanvas } from "@storybook/blocks";

interface Props extends ComponentProps<typeof StorybookCanvas> { }

export const Canvas = (props: Props) => (
    <StorybookCanvas
        {...props}
        additionalActions={[
            {
                title: "Open in Stackblitz",
                onClick: () => {
                    window.open(
                        "https://stackblitz.com/edit/orbiter-sandbox?file=src%2FComponent.tsx",
                        "_blank"
                    );
                }
            }
        ]}
    />
);
