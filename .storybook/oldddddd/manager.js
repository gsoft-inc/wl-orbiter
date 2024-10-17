import { Themes } from "../styles/themes";
import { addons } from "@storybook/manager-api";

addons.setConfig({
    theme: Themes.manager,
    panelPosition: "right",
    enableShortcuts: false,
    showToolbar: true
});
