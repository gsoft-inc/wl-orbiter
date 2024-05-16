# @orbit-ui/transition-components

## 4.2.2

### Patch Changes

- a5b632082: Updated dependency on Hopper - fixed breaking changes caused by Hopper, see [https://github.com/gsoft-inc/wl-hopper/pull/261](https://github.com/gsoft-inc/wl-hopper/pull/261)

## 4.2.1

### Patch Changes

- 04900c01b: Fixed a typing issue when using a size on Autocomplete

## 4.2.0

### Minor Changes

- a64e9fd79: Updated Fluid button behaviour regarding icon and counter

## 4.1.1

### Patch Changes

- 6cfd22898: Fix focus size in Firefox

## 4.1.0

### Minor Changes

- 27ec1d00b: Added a 2xl variant to Avatar

## 4.0.1

### Patch Changes

- 9ddb577c8: Avatar Initials color is now the right one

## 4.0.0

### Major Changes

- 6dddca86e: - Alert is now dismissable by default. This is potentially a breaking change if you we're not expecting the alert to be closable. To fix this, either add `dismissable={false}` to the Alert, or handle the `onClose` event handler.

  - Dialog small size has been slightly reduced by 84px.

## 3.3.0

### Minor Changes

- c11b045e1: Added support for size prop on TextInput / SearchInput and PasswordInput

## 3.2.7

### Patch Changes

- 2f178cc61: Exported types that were not being exported (ButtonVariant, ToggleButtonVariant, LinkVariant and TileOrientation)

## 3.2.6

### Patch Changes

- 49d0798e1: Modify the Typescript typings for the as function

## 3.2.5

### Patch Changes

- 47b07b656: Internal changes.

## 3.2.3

### Patch Changes

- c5c13d67c: Add tag slot to the tag component

## 3.2.2

### Patch Changes

- 573db6381: Update documentation links in component's jsdoc
- ba32d933b: Fixed intellisence for border-radius, font-family and line-height in the styled system

## 3.2.1

### Patch Changes

- a9762fcd0: Add slot "toolbar" to the toolbar component

## 3.2.0

### Minor Changes

- c98d16e00: Removed the "as" prop from the ThemeProvider. The ThemeProvider now creates 1 wrapping div instead of 2.

## 3.1.1

### Patch Changes

- 381a9c55d: Added object-fit cover to avatars in order to fit image that aren't square

## 3.1.0

### Minor Changes

- fa1814550: - Fixed TextArea doesn't honor the rows property
  - Fixed NumberInput component does not trigger onValueChange on Blur with null Value
  - Fixed Conflict between HTML table border property and Styled System border property in Table component
  - Fixed Switches don't handle the fluid props passed by the Form, resulting in forwarding fluid to a DOM element that doesn't accept the property
  - Removed console.log that were accidentally released

## 3.0.3

### Patch Changes

- 92915be6a: Tile Component follows Hopper design

## 3.0.2

### Patch Changes

- 1e24525e9: DialogTrigger's zIndex default value has been bumped from 1 to 10000 to better reflect the expected zIndex value of Dialogs
- 1ec1ed454: XS Avatar design update: only one letter is now shown as per design.

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
