# @orbit-ui/transition-components

## 3.0.1

### Patch Changes

- 2d4001fb9: Fixed input and textarea text size

## 3.0.0

### Major Changes

- 4ecec6d48: - All icons have been moved to the `@hopper-ui/icons` package.

  - Icons used in orbiter components have been replaced with the new ones.
  - Icons used to be 20x20, now they are either 16x16, 24x24 or 32x32. When using a Hopper icon inside an orbiter component, you do not need to change anything. The orbiter component will automatically scale the icon to the correct size.

  ## BREAKING CHANGES

  - All icons have been moved to the `@hopper-ui/icons` package.

    - All imports needs to be updated to `@hopper-ui/icons`.
    - Since we are completely swapping the icon set, most of the icon names have changed. You can find the new names in the [icon documentation](https://hopper.workleap.design/icons/react-icons/library).

  - `createIcon` from the `@hopper-ui/icons` package now requires 4 parameters instead of 1. The 16x16 icon source, the 24x24 icon source, the 32x32 icon source and the icon name.

## 2.2.2

### Patch Changes

- 388522eeb: Added missing token for neutral surface active color.

## 2.2.1

### Patch Changes

- 6781a7049: Fix for heading small line height token
- a4f2cc02e: Token update

## 2.2.0

### Minor Changes

- bf02c00dd: Added:

  - fontFamily is now available on all components that use the style system
  - Added a list of all available semantic values for the styled-system in the tokens page

  Update:

  - Tokens are now updated with their latest value. No breaking changes to be expected
  - Semantic elevation tokens are now working correctly

## 2.1.0

### Minor Changes

- 7af49cfa6: Added 'standalone', 'in-card' and 'heading variants to Tabs.

## 2.0.0

### Major Changes

- 69375f1cb: Initial Release of Orbiter

### Patch Changes

- Updated dependencies [69375f1cb]
  - @orbit-ui/transition-icons@2.0.0
