# Opinionated Microsoft Live Share template

> A template for setting up a Microsoft Teams Live Share app, with _opinions_

## Goals

1. Teams app that uses Live Share
1. Fine-tune a project structure
1. Investigate viability of storybook for in-browser testing

##### Let's go with yarn

> <small>I need this note or I'll forget every time</small>

## Dependencies

What particular dependencies are necessary for.

| Package name                                                                                                                         | Info                               |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| <small>`fluid-framework`<br/>`@fluidframework/azure-client`<br/> `@microsoft/live-share-sdk`<br/> `@microsoft/teams-js`<br/></small> | For building Teams Live Share apps |
| <small>`@fluentui/react-components`</small>                                                                                          | Teams CSS-in-JS styling            |
| <small>`storybook`</small>                                                                                                           | Browser testing                    |

---

## Ready, set, go

### Setup

```sh

yarn create vite # Using React framework & ts variant

yarn

yarn dev

```

### Initial clean-up

1. Rename `main.tsx` to `index.tsx`, and update `index.html`
1. Remove assets in `src` and `public`, plus their references
1. Change `<title>` in index.html
