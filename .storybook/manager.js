import { Themes } from "./styles/themes.js";
import { addons } from "@storybook/addons";

addons.setConfig({
    theme: Themes.manager,
    panelPosition: "right",
    enableShortcuts: false,
    showToolbar: true
});
