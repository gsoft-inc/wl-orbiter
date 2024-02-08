# @workleap/orbiter-ui

## 3.2.0

### Minor Changes

- c98d16e00: Removed the "as" prop from the ThemeProvider. The ThemeProvider now creates 1 wrapping div instead of 2.

### Patch Changes

- Updated dependencies [c98d16e00]
  - @orbit-ui/transition-components@3.2.0

## 3.1.1

### Patch Changes

- Updated dependencies [381a9c55d]
  - @orbit-ui/transition-components@3.1.1

## 3.1.0

### Patch Changes

- Updated dependencies [fa1814550]
  - @orbit-ui/transition-components@3.1.0

## 3.0.3

### Patch Changes

- Updated dependencies [92915be6a]
  - @orbit-ui/transition-components@3.0.3

## 3.0.2

### Patch Changes

- Updated dependencies [1e24525e9]
- Updated dependencies [1ec1ed454]
  - @orbit-ui/transition-components@3.0.2

## 3.0.1

### Patch Changes

- Updated dependencies [2d4001fb9]
  - @orbit-ui/transition-components@3.0.1

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

### Patch Changes

- Updated dependencies [4ecec6d48]
  - @orbit-ui/transition-components@3.0.0

## 2.2.2

### Patch Changes

- Updated dependencies [388522eeb]
  - @orbit-ui/transition-components@2.2.2

## 2.2.1

### Patch Changes

- Updated dependencies [6781a7049]
- Updated dependencies [a4f2cc02e]
  - @orbit-ui/transition-components@2.2.1

## 2.2.0

### Patch Changes

- Updated dependencies [bf02c00dd]
  - @orbit-ui/transition-components@2.2.0

## 2.1.0

### Patch Changes

- Updated dependencies [7af49cfa6]
  - @orbit-ui/transition-components@2.1.0

## 2.0.0

### Major Changes

- 69375f1cb: Initial Release of Orbiter

### Patch Changes

- Updated dependencies [69375f1cb]
  - @orbit-ui/transition-components@2.0.0
  - @orbit-ui/transition-css@2.0.0
  - @orbit-ui/transition-icons@2.0.0
