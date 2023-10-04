# @orbit-ui/transition-components

Full documentation available at: https://wl-orbiter-website.netlify.app/

## Add a new component

Adding a new component package involve a few extra steps:

- [Understand the components guidelines](#component-guidelines)
- [Write storybook stories](#write-storybook-stories)
- [Write tests](#tests)
- [Update the documentation](#update-the-documentation)
- [Include the component in the bundle](#include-the-component-in-the-bundle)

### Write storybook stories

As mentionned in the [contributing guide](../../CONTRIBUTING.md), Storybook is use to *develop*, *document* and *test* a component.

To develop and document, we leverage the [CSF](https://storybook.js.org/docs/formats/component-story-format/) and [MDX](https://storybook.js.org/docs/formats/mdx-syntax/) features of Storybook.

To test, we rely on a third party called [Chromatic](https://www.chromaticqa.com/) that fully integrate with Storybook to provide visual testing capabilities.

#### Develop and document

Development stories are written for 2 purposes:

- For the developper to test a component use case in a isolated story during the development lifecycle.
- For the design team to try the component behaviors.

Documentation stories are written... well for documentation purpose!

To define a story once for development and documentation a story must be written with [CSF](https://storybook.js.org/docs/formats/component-story-format/) in an `*.stories.mdx` file. The name of the file should match the component name.

A story must:

- Be located in the `Components` top level section of the Storybook navigation menu.
- The second level segment must be the capitalized name of the component.

Here's an exemple for the button component:

```jsx
// Button.stories.mdx

<Meta title="Components/Button" />
```

A component stories must provide:

- A story named *default* that render the component default state.

The stories must be located in a `docs` folder next to the `src` folder of your component. Storybook is configured to load the following component stories: `packages/components/src/*/docs/**.stories.mdx`.

```
/packages
    /components
        /buttons
            /docs
                Button.stories.mdx
            /src
```

#### Tests

Before reading the following sections, please read [our introduction to Orbiter testing practices](../../CONTRIBUTING.md#testing).

##### Visual testing

Specific stories for Chromatic are written to validate the specifications of a component with automated visual tests. The specifications stories are validated [every night](https://circleci.com/gh/gsoft-inc) with [Chromatic](https://www.chromaticqa.com/) for visual regression issues.

Storybook is a fantastic tool for visual testing because a story is essentially a test specification. When it does make sense, multiple specifications can be bundled together in a story to save on Chromatic snapshots (which are not cheap!).

Specifications stories must be written with the [storiesOf API](https://storybook.js.org/docs/formats/storiesof-api/) in a `*.chroma.jsx` file.

A specifications story must:

- Be located in the `Chromatic` top level section of the Storybook navigation menu.
- The second level segment must be the capitalized name of the component (same as the development stories).

Here's an example:

```javascript
// Button.chroma.jsx

import { paramsBuilder, storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/Button")
        .segment(segment)
        .parameters(
            paramsBuilder()
                .build()
            )
        .build();
}

stories("/segment")
    .add("story-name",
         () =>
            ...
    )
```

The stories must be located in a `tests/chromatic` folder next to the `src` folder of your component. Storybook is configured to load the following tests specifications: `packages/components/src/*/tests/chromatic/**.chroma.[jsx|tsx]`.

```
/packages
    /components
        /buttons
            /src
            /tests
                /chromatic
                    Button.chroma.jsx
```

Every component should have a test for "zoom" and "styling". Have a look at the existing tests to learn more.

For more information about the Storybook automated visual tests workflow, read the following [blog post](https://blog.hichroma.com/the-delightful-storybook-workflow-b322b76fd07) and the following [introduction to visual testing](https://storybook.js.org/tutorials/visual-testing-handbook/react/en/introduction/).

##### Interaction testing

Since visual testing tools like Chromatic can't help much for interaction testing we rely on Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for those. Similar to visual testing, interaction tests are validated [every night](https://circleci.com/gh/gsoft-inc).

*NOTE: You should always prefer a visual test with Chromatic over an interaction test with Jest and React Testing Library. Chromatic tests are much quicker to write and easier to maintain.*

Interaction tests must:

- Be written  in a `*.test.[jsx|tsx]` file.
- Be located in a `tests/jest` folder next to the `src` folder of your component.

```
/packages
    /components
        /buttons
            /src
            /tests
                /jest
                    Button.test.jsx
```

Here's an example:

```javascript
// Button.test.jsx

test("call onChange when the button is selected", () => {
    ....
});
```

Usually, interaction tests are split into 4 distinct regions: *Behaviors*, *Aria*, *Api* and *Refs*.

## Component guidelines

Every Orbiter custom components must share a consistent API and a similar design. Please read carefully the following guidelines before you develop a new component or update an existing one.

### Common functionnalities

All components should:
- Use Orbiter's [tokens](https://wl-orbiter-website.netlify.app//?path=/docs/tokens--page)
- Support Orbiter's [color schemes](https://wl-orbiter-website.netlify.app//?path=/docs/color-schemes--page)
- Implement Orbiter's [style props](https://wl-orbiter-website.netlify.app//?path=/docs/style-props--page)
- Support Orbiter's [responsive styles](https://wl-orbiter-website.netlify.app//?path=/docs/responsive-styles--page)

### Design

#### Functional components

All components should be developed as functional components.

#### Hooks

All components should leverage React hooks.

#### Styling

An Orbiter component shouldn't use any CSS in JS properties.

All styling should be done with native CSS and use our foundation CSS variables when possible

#### Controlled & Auto-controlled

A component should always be develop to offer a [controlled](https://reactjs.org/docs/forms.html) and [auto-controlled](https://reactjs.org/docs/uncontrolled-components.html) usage.

A *controlled* component gives a lot of flexibility to the consumer and is well fit for a lot of use cases but also involve additional code. We believe a component should be flexible but also painless to use. That's why a component should also offer an *auto-controlled* mode for basic use cases who don't requires controlling the props.

#### Never stop event propagation

A component shouldn't stop the propagation of an event. Instead, other parts of the code should determine whether or not it should handle the event.

For more information, read the following [blog post](https://css-tricks.com/dangers-stopping-event-propagation/).

#### Handler event argument

Every component should provide the initiating event as the first argument when calling a user event handler.

```jsx
const handleChange = event => {
    if (!isNil(onValueChange)) {
        onValueChange(event, event.target.value);
    }
});
```

#### Do the component stuff before calling the event handler

Before calling the user event handler always execute all the component logic related to the event.

```jsx
const handleChange = event => {
    const newValue = event.target.value;

    // Call setValue before calling onValueChange.
    setValue(newValue);

    if (!isNil(onValueChange)) {
        onValueChange(event, newValue);
    }
});
```

#### Spread props

Unhandled props should always be spread on the root element of the component. If it's not practical to spread the props on the root element, consider adding an additional prop for the root element props (like `wrapperProps`) and spread those props on the root element.

```jsx
function MyComponent({ className, children ...rest }) {
    return (
        <Div className={className} {...rest}>
            {children}
        </Div>
    );
}
```

#### Slots

All "slotable" components should accept an optionnal slot property.

#### As prop

A component should always accept an `as` prop and apply it to the root element of the component. The `as` prop allow the consumer to specify the type of the element to render. A default value should always be provided.

The following usage should be possible for all components:

```jsx
<Button as="link" href="#>Click me!</Button>
```

> This is not true anymore, component public interface doesn't accept `as` prop anymore. Instead, when needed, the `as()` function should be used. That being said, since our internals are still dependend on the `as` prop, every components should still accept the prop internally.

#### Ref

A component should always accept a `ref` prop and apply it to the root element of the component.

> If the component have a wrapper element, like the text input component, the ref could instead be rendered on the input element. When the ref is not rendered on the root element, add a `wrapperProps` prop which accept a ref for the wrapper element.

### Developer experience

#### Props and Typings

Every component and functions should provide static typings with [TypeScript](https://www.typescriptlang.org/).

### Component props naming

#### Event handlers props

Event handler props should be prefix by `on` and be in the present tense.

Ex:

- Prefer `onChange` to `onChanged`
- Prefer `onItemClick` to `onItemClicked`

#### Boolean props

A boolean prop shouldn't be prefix with `is`.

Ex:

- Prefer `open` to `isOpen`
- Prefer `disabled` to `isDisabled`

#### Prefer simpler props name

When there is no possible *ambiguities*, prefer a simpler prop name.

For example, prefer `icon` to `inputIcon`.

#### Initial values props name

Auto-controlled components will usually expose initial values props. Those props should be prefix with `default`.

Ex:

- `defaultOpen`
- `defaultStartDate`
- `defaultValues`

### Accessibility

All components should follow [WAI-ARIA practices](https://www.w3.org/WAI/ARIA/apg/) when applicable.

## License

Copyright © 2023, GSoft inc. This code is licensed under the Apache License, Version 2.0. You may obtain a copy of this license at https://github.com/gsoft-inc/gsoft-license/blob/master/LICENSE.



