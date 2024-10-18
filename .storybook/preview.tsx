// import { viewport, withHopperProvider } from "./storybook-addon/index";
import { viewport } from "./storybook-addon/index";
import { withBackgroundMatchingColorScheme, withCenteredCanvas, withDocsContainer, withThemeProvider } from "./decorators";

import "@components/index.css";
import "./styles";

import {
    Description,
    Stories,
    Subtitle,
    Title
} from "@storybook/blocks";
import type { Preview } from "@storybook/react";

import "@hopper-ui/tokens/fonts.css";
import "./stories.css";
import { isChromatic } from "./env";
import { Themes } from "./styles/themes";

if (!isChromatic) {
    // Custom font makes chromatic inconsistent and cause "false positive". View https://www.chromatic.com/docs/resource-loading#loading-custom-fonts.
    import("@css/fonts.css");
} else {
    import("./styles/chromatic.css");
}

const preview: Preview = {
    parameters: {
        backgrounds: {
            disable: true
        },
        // TODO: this has been commented as this was not present in orbiter before. Changing this affects all screenshots
        // layout: "fullscreen", // This removes the padding around the preview
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        viewport,

        docs: {
            theme: Themes.docs,
            inlineStories: true,
            components: {
                blockquote: Highlight
            },
        },
        // docs: { // only needed while the documentation is not available
        //     page: () => {
        //         return (
        //             <>
        //                 <Title />
        //                 <Subtitle />
        //                 <Description />
        //                 <Stories title="Usage" />
        //             </>
        //         );
        //     }
        // },
        options: {
            storySort: {
                method: "alphabetical",
                order: [
                    "Installation",
                    "Platforms",
                    "Features", [
                        "Style props",
                        "Responsive styles",
                        "Theming",
                        "Color schemes",
                        "Slots",
                        "As"
                    ],
                    "Materials", [
                        "Icons",
                        "Motion"
                    ],
                    "Layout",
                    "Components",
                    "Content",
                    "Placeholders",
                    "Html elements",
                    "Chromatic"
                ]
            }
        },
    },
    globalTypes: {
        locale: {
            description: "Internationalization locale",
            defaultValue: "en-US",
            toolbar: {
                title: "Locale",
                icon: "globe",
                items: [
                    { value: "en-US", right: "US", title: "English" },
                    { value: "fr-CA", right: "FR", title: "Français" }
                ],
                dynamicTitle: true
            }
        },
        theme: {
            description: "Global theme for components",
            defaultValue: "light",
            toolbar: {
                title: "Theme",
                icon: "circlehollow",
                items: [
                    { value: "light", title: "Light" },
                    { value: "dark", title: "Dark" }
                ],
                dynamicTitle: true
            }
        }
    },
    decorators: [withCenteredCanvas, withThemeProvider, withBackgroundMatchingColorScheme],
};

export default preview;
