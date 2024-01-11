---
"@orbit-ui/transition-components": major
"@workleap/orbiter-ui": major
---

- All icons have been moved to the `@hopper-ui/icons` package.
- Icons used in orbiter components have been replaced with the new ones.
- Icons used to be 20x20, now they are either 16x16, 24x24 or 32x32. When using a Hopper icon inside an orbiter component, you do not need to change anything. The orbiter component will automatically scale the icon to the correct size.

## BREAKING CHANGES

- All icons have been moved to the `@hopper-ui/icons` package.
  - All imports needs to be updated to `@hopper-ui/icons`.
  - Since we are completely swapping the icon set, most of the icon names have changed. You can find the new names in the [icon documentation](https://hopper.workleap.design/icons/react-icons/library).

- `createIcon` from the `@hopper-ui/icons` package now requires 4 parameters instead of 1. The 16x16 icon source, the 24x24 icon source, the 32x32 icon source and the icon name.
