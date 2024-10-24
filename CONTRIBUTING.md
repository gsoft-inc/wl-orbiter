# Contributing

The following documentation is only for the maintainers of this repository.

- [Monorepo setup](#monorepo-setup)
- [Installation](#installation)
- [Develop a component](#develop-a-component)
- [Update docs](#update-docs)
- [Release the packages](#release-the-packages)
- [Release docs](#release-docs)
- [Available commands](#commands)
- [Testing](#testing)
- [CI](#ci)
- [Add a new package to the monorepo](#add-a-new-package-to-the-monorepo)
- [Gotchas to remember](#gotchas-to-remember)

## Monorepo setup

This repository is managed as a monorepo that is composed of many npm packages.

For more information on monorepo:

- [Babel Github](https://github.com/babel/babel/blob/master/doc/design/monorepo.md)
- [Google](https://www.google.com/search?q=monorepo)

### Pnpm workspace

This monorepo is using Pnpm workspace feature to handle the installation of the npm dependencies and manage the packages inter-dependencies.

## Installation

This project use Pnpm as a package manager. Therefore, you must install Pnpm:

```
npm install -g pnpm
```

For more options to install Pnpm, view https://pnpm.io/installation.

To install the project, open a terminal at the root of the workspace and execute the following command:

```bash
pnpm i
```

The installation should take up to 5 minutes.

During the installation you will encoutered several missing *peerDependencies* warnings. Ignore those warnings, this is happening because the *devDependencies* of this monorepo are defined at the root of the workspace.

## Develop a component

The following documentation is a brief overview of the tools and processes involved in the development of a component. For more information, please read the [React components documentation](/packages/components).

### Adding or modifying an icon

Orbiter is using hopper-ui icon components, please refer to the [Hopper documentation](https://github.com/gsoft-inc/wl-hopper).

### Storybook

Every components must be developed and documented in [Storybook](https://storybook.js.org).

Storybook is a convenient sandbox that help the developpers write organized and isolated stories that match the specifications of the component. Storybook also facilitate functionnal testing and integrate very well with automated visual testing technologies.

The resulting Storybook *playbook* will represent a catalog of all the Sharegate design system components and will be available online for the design team.

For more informations about automated visual tests, read the [Testings](#testing) section.

### Start developing

To start developing, [open a terminal in VSCode](https://code.visualstudio.com/docs/editor/integrated-terminal#_managing-multiple-terminals) and execute the following command at the root of the workspace:

```bash
pnpm start
```

Any updates to the packages or Storybook's stories will automatically re-compile the packages and refresh the Storybook app accordingly.

### Start Storybook in docs mode.

To start developing in docs mode, [open a terminal in VSCode](https://code.visualstudio.com/docs/editor/integrated-terminal#_managing-multiple-terminals) and execute the following command at the root of the workspace:

```bash
pnpm start-sb-docs
```

Basically the only difference is that the process will be start with the `--docs` arguments.

Any updates to the packages or Storybook's stories will automatically re-compile the packages and refresh the Storybook app accordingly.

## Release the packages

When you are ready to release the packages, you must follow the following steps:
1. Run `pnpm new-version` to bump the version of the packages that have been updated since the previous release. You will be prompted to select the type of release (major, minor or patch) for each package and to enter release notes. If you prefer writing the release notes in a text editor, enter a placeholder line in the command line, and the you can modify the file generated before committing it.
2. Commit the newly generated file in your branch and submit a new Pull Request(PR). Changesets will automatically detect the changes and post a message in your pull request telling you that once the PR closes, the versions will be released.
3. Merge the Pull request into master. A Github action will automatically trigger and update the version of the packages and publish them to npm.
4. Create a new Github release associated to the tag created previously
5. Optionally deploy Storybook and the document Website

### Alpha release

Sometimes it's useful to publish an alpha version to test the packages installation or share a preview.

Before you release, make sure you are in the `master` branch or a branch with a name matching the `feature/*` pattern, have **write access** to every selected npm packages and that you are [logged in to npm](https://docs.npmjs.com/logging-in-to-an-npm-enterprise-registry-from-the-command-line).

To release an alpha version, open a terminal at the root of the workspace and execute the following commands:

```bash
pnpm release-alpha
```

When Pnpm version prompt pop, you should pick a version number matching your future main version. E.g. if you plan on publishing your changes as version `19.0.0` once they are done, your alpha version should be `19.0.0-alpha.1`.

If you need to publish a subsequent alpha package for the same version, do not select any Pnpm suggestion. Instead, select **"Custom Prelease"** and then enter **"alpha"**. By doing so, the new alpha package version will be `19.0.0-alpha.2`.

### Troubleshooting

#### Github

Make sure you're Git is clean (No pending changes).

#### npm

Make sure you have **write access** to the selected npm packages.

If you are using 2FA, make sure you specified a valid OTP.

#### Compilation

If the packages failed to compile, it's easier to debug without executing the full release flow everytime. To do so, instead, execute the following command:

```bash
pnpm build
```

By default, packages compilation output will be in their respective *dist* directory. For more details, read the [packages](/packages) README file.

## Release docs

Orbiter documentation is host on Netlify. 2 sites are available, a currated site for the official documentation (https://wl-orbiter-website.netlify.app/) and a raw site containing every Storybook stories (https://sg-storybook.netlify.com).

Login to [Netlify](https://app.netlify.com) and make sure you have access to the **sg-orbiter** and **sg-storybook** sites of the GSoft team.

Netlify is configured to automatically deploy (unpublished) both sites everytime **a new commit is done in an opened PR** or **a PR is merged back into master**.

To publish a site:

- Login to [Netlify](https://app.netlify.com)
- Find the latest deploy of your site
- Click on the deploy link to access it's overview
- Click on the "Publish deploy" button

### Troubleshoot

If you encounter any errors when building or publishing a site, login to [Netlify](https://app.netlify.com) and go to the deploy settings of the site. Make sure the `Build command` and the `Publish directory` properties are valid.

The `Build command` property should match a script of the root `package.json` file and the `Publish directory` property should be a relative path matching a folder of the solution containing the static site to deploy **after build**.

### Local CLI deploy

A Netlify deploy can be started locally with a CLI command. This is useful if you are working in a branch and want to share a preview of your work with someone else.

To deploy a draft to the **sg-storybook** site, open a terminal at the root of the workspace and execute the following commands:

```bash
pnpm deploy-netlify-sb-preview
```

The draft link will be available in the terminal (ex. https://616dab5c22680800ccd47d6f--sg-storybook.netlify.app).

If you encountered any problem with the CLI command, make sure the site `App ID` of **sg-storybook** site match the `--site` parameter of the script `deploy-netlify-sb-preview` in the [package.json](package.json) file.

## Commands

All commands are available in the [package.json](package.json) file. Here's a list of the commands you might need to use frequently. The following commands must be executed in a terminal opened at the root of the workspace.

### start

Compile all the packages & start Storybook.

```bash
pnpm start
```

### start-sb-docs

Compile all the packages & start Storybook in docs mode.

```bash
pnpm start-sb-docs
```

### build

Build all the packages and Storybook for production.

```bash
pnpm build
```

### reset

Reset the monorepo installation. The following will be deleted:

- All the *node_modules* directories
- All the *pnpm-lock.yaml* files
- All the compiled & cache folders

```bash
pnpm reset
```

If you encounter the following error:

```bash
C:\Dev\20_gsoft\sg-orbiter\node_modules\rimraf\bin.js:47
      throw er
      ^

[Error: EPERM: operation not permitted, unlink 'XXX\sg-orbiter\node_modules\@types'] {
```

Close & re-open VSCode and delete manually the *node_modules* folder at the root of the workspace.

### lint

Execute all the linters & validate the TypeScript types.

```bash
pnpm lint
```

### typecheck

Validate the TypeScript types.

```bash
pnpm lint:typecheck
```

### jest

Execute all the Jest tests.

```bash
pnpm jest
```

### deploy-sb-preview

Manually deploy Storybook to Netlify from any branch.

```bash
pnpm deploy-sb-preview
```

### release-alpha

Deploy an alpha version of the packages.

```bash
pnpm release-alpha
```

## Testing

For testing the components we currently rely only on visual testing & interaction testing.

### Visual testing

Visual testing assert on what visually appears on the screen instead of asserting on specifics CSS selectors or DOM elements.

This is a more *black box* and *robust* testing approach since it shouldn't requires to modify the tests if the code refactor haven't change anything visually.

This approach is usually strictly use to assert that the visual of a component do not regress. Since it's easy and very efficient to write a robust test with this approach, we also use it to test the specifications of a component that are related to the behaviors and states.

Therefore, prefer this approach to [interactions](#interaction-testing) and [api testing](#api-testing) when possible.

Setting all the tools to perform automated visual tests involve a lot of time and knowledge. Therefore, we bought a license of [Chromatic QA](https://www.chromaticqa.com). This is the perfect tool for us since it perfectly integrate with Storybook.

For access to our Chromatic QA environment, ask to join the [gsoft-inc](https://github.com/gsoft-inc) organization on Github.

For more information about automated visual testing:

- https://storybook.js.org/tutorials/visual-testing-handbook/react/en/introduction
- https://storybook.js.org/docs/testing/automated-visual-testing
- https://www.youtube.com/watch?v=QE-xQxN9Sps

### Interaction testing

UI is all about interacting with the user. We need to test if a component work properly when those interactions occurs.

This approach is used to cover the interaction behaviors of a component.

Examples:

- Ensure that a given element X is visible when the user click on the element Y.
- Ensure that an handler of the component interface is called when the user on the element Y.

To facilite those tests, we use a combination of [Jest](https://jestjs.io/) and [React testing library](https://testing-library.com/docs/react-testing-library/intro).

For more information about interaction testing:

- https://storybook.js.org/docs/testing/react-ui-testing/#2-interaction-testing

### API testing

API testing is useful to tests the properties of a component that can hardly be tested with visual testing.

Visual testing can easily assert that the `disabled` property of a component visually work as expected. Asserting that the `onChange` handler has been only called once when the user type a value in a textbox is harder.

This is where API testing shine.

To facilite those tests, we use a combination of [Jest](https://jestjs.io/) and [React testing library](https://testing-library.com).

## CI

[Circle CI](https://circleci.com) is the continuous integration platform for this repository. To have access to the CI environment, ask to join the [gsoft-inc](https://github.com/gsoft-inc) on Github.

2 builds are currently configured:

### On commits

On every commits the CI will execute the linters.

### Nightly

Once per night, the CI will execute the automated visual tests. Those tests can't be executed on every commits since visual test snapshots are pricy and limited.

For more information on the automated visual tests, read the [Testing](#testing) section.

### Troubleshooting

#### SSH

To investigate general problems with Circle CI you can [debug with SSH](https://circleci.com/docs/2.0/ssh-access-jobs).

#### Chromatic & Storybook

If Chromatic can't reach the Storybook server, the Storybook potentially can't compile.

Sadly the Chromatic CLI doesn't properly relay Storybook compilation errors. To see the errors, build the Storybook app locally.

## Add a new package to the monorepo

There is a few steps to add a new packages to the monorepo.

Before you add a new package, please read the [GSoft Github guidelines](https://github.com/gsoft-inc/github-guidelines#npm-package-name).

### Create the package

First, create a new folder matching the package name in the [packages](/packages) directory.

Open a terminal, navigate to the newly created directory and execute the following command:

```bash
pnpm init
```

Answer the CLI questions.

Once the *package.json* is generated, please read again the [GSoft Github guidelines](https://github.com/gsoft-inc/github-guidelines#npm-package-name) and make sure the package name, author and license are valid.

Don't forget to add the [npm scope](https://docs.npmjs.com/about-scopes) *"@orbit-ui"* before the package name. For example if the project name is "foo", your package name should be "@orbit-ui/foo".

Make sure the package publish access is *public* by adding the following to the *package.json* file:

```javascript
"publishConfig": {
    "access": "public"
}
```

### Dependencies

npm *dependencies* and *peerDependencies* must be added to the package own *package.json* file.

**However**, the *devDependencies* must be added to the [package.json](package.json) file at the root of the workspace.

Why?

Because packages hoisting is dangerous! When multiple packages of the monorepo requires the same dependencies **but with a different version** there is no garantee on which version will be hoisted to the *node_modules* directory at the root of the workspace and which version will be installed locally. To prevent all kinds of problems, always install the *devDependencies* at the root of the workspace. This ensure that every packages use the same version of the dependencies.

If you are uncertain wether or not you should add a *peerDependencies*, please read the post [dependencies-done-right](https://yarnpkg.com/blog/2018/04/18/dependencies-done-right/) on the Yarn website.

### React components

If you're package is a new component, please read the [React components documentation](/packages/components)

## Add a new Pnpm script

When adding a new script, there is a few rules to follow.

### Think in terms of atomic scripts

A script should only do one thing. This practice promote better readability and reusability.

Then you can write top level script that compose all those atomic scripts to provide a functionnality.

Instead of doing:

```javascript
"scripts": {
    "build": "rimraf dist && babel src -d dist"
}
```

Do:

```javascript
"scripts": {
    "build": "pnpm delete & pnpm transpile",
    "delete": "rimraf dist",
    "transpile": "babel src -d dist"
}
```

### A script should be executable from the root of the workspace

Make sure you add a script entry in the [package.json](package.json) file at the root of the workspace even if your script is already define in a package or the website.

### Naming

If a script can be called in batch, separate the discriminant by ":"

Example:

```bash
"scripts": {
    "clean": "run-p clean:*",
    "clean:pkg": "...",
    "clean:sb": "..."
}
```

Otherwise, separare words with "-"

Example:

```bash
"scripts": {
    "deploy-sb": "..."
}
```

## Gotchas to remember

### Chromatic QA & custom font

The Storybook configuration doesn't load the *Interphases* custom font if the app is started by the chromatic CLI because visual tests offer inconsistent results when a custom font is loaded. Not sure why.

### cross-env

The following will not work:

```bash
"prepublishOnly": "cross-env NODE_ENV=production && pnpm build"
```

But the following work:

```bash
"prepublishOnly": "cross-env NODE_ENV=production pnpm build"
```

For other variables that need to be pass accross tasks, please read the following issue: https://github.com/kentcdodds/cross-env/issues/176

### react-testing-library and user actions side effects

Some side effects happens in the browsers following a user actions.

For example, if a user click on a textbox, the textbox will then have focus and be the "active element".

The focus side effect doesn't happen with react-testing-library. For more information view issues [https://github.com/testing-library/jest-dom/issues/53](#53) and [https://github.com/testing-library/jest-dom/issues/59](#59).

The solution to this problem have been to create an higher level abstraction library called [https://github.com/testing-library/user-event](user-event) that will take care of triggering the event AND the side effects.

For more information on the topic view the issue [https://github.com/testing-library/dom-testing-library/issues/107](#107).

### Netlify CI setup

To enable deploy previews on PR, Netlify sg-orbiter and sg-storybook sites have been linked to the sg-orbiter Github repository. Netlify will deploy a preview on every commits for any branches, even for master (which is Netlify production). This beging said, since the sites have been configured with "Auto Publish" disabled, even if a deploy is compiled for production IT IS NOT DEPLOY, it's only available for preview and must be deployed manually.

Having disabled "Auto Publish" is also the reason why our script that publish our sites to production "doesn't work anymore". It still works, the reason why the site doesn't update is because the script will create a new production build but WILL NOT PUBLISH IT, since it's auto publishing is disabled. It must be published manually throught Netlify web interface.

### Storybook props Tables

The Storybook props tables somewhow doesn't play well if our types comes from an external packages (even if it's a package in our own mono-repo). Props from the external packages might not be list in the props tables.

### Updating Jest Snapshots

It's straightforward to spot when a snapshot test fails after a bug has been introduced. When that happens, go ahead and fix the issue and make sure your snapshot tests are passing again.

You can run the command

```bash
pnpm jest --updateSnapshot -u FILENAME
```

So if you want to update the useStyledSystem.test.tsx file

```bash
pnpm jest --updateSnapshot -u useStyledSystem.test.tsx
```
