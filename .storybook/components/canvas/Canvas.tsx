import { ComponentProps } from "react";
import { Canvas as StorybookCanvas } from "@storybook/blocks";
import { Inline } from "@components";
import { Stackblitz } from "./assets/index.tsx";
import { Image } from "@components/image/index.ts";

interface Props extends ComponentProps<typeof StorybookCanvas> { }

export const Canvas = (props: Props) => (
    <StorybookCanvas
        {...props}
        additionalActions={[
            {
                title: (
                    <Inline gap="inline-sm">
                        <Image src={Stackblitz} alt="Stackblitz" width="10px" height="auto" />
                        Open Orbiter Sandbox
                    </Inline>
                ),
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
