import { ComponentProps } from "react";
import { Source as StorybookSource } from "@storybook/addon-docs";

type SourceProps = ComponentProps<typeof StorybookSource>;

export const Source = (props: SourceProps) => {
    const { language = "tsx", ...otherProps } = props;

    return <StorybookSource
        language={language}
        dark
        {...otherProps}
    />;
};
