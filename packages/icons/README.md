# @orbit-ui/transition-icons

Full documentation available at: https://wl-orbiter-website.netlify.app/

## Maintainers

The following documentation is only for the maintainers of this repository.

### Icons Guidelines

In order to be included in Orbiter an icon must satisfy the following guidelines

- It should not be specific to an app, e.g. Azure specific icons. <img src="https://raw.githubusercontent.com/gsoft-inc/wl-orbiter/master/packages/icons/assets/app-specific-icon.png" width="27">

- It must be used as part of an interface, illustrations and product icons shouldn't be submitted to this library.

- It shouldn't be coloured, any icon that has many colours should be in your codebase.

- An icon shouldn't have any stroke or fill attributes.

### Naming convention

- An icon name should describe it's look and not usage. (e.g. _trash_.svg instead of ~~delete.svg~~)

- An icon should be appended by it's numeric size when an hardcoded dimension (e.g. trash-_32x32_.svg)

- If an icon represents a specific state add it to the file name (e.g. trash-_empty_-32x32.svg)

- Although not ideal when an svg has to be coloured add the colour name (refer to sg-orbiter colour names) after it's name and before it's size (e.g. trash-empty-_accent-4_-24x24.svg)

## License

Copyright © 2023, GSoft inc. This code is licensed under the Apache License, Version 2.0. You may obtain a copy of this license at https://github.com/gsoft-inc/gsoft-license/blob/master/LICENSE.
