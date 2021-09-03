<h1 align="center">
<a href="https://github.com/windicss/windicss/wiki">
  <img src="https://next.windicss.org/assets/logo.svg" alt="Windi CSS Logo" height="120" width="120"/><br>
</a>
  Windi CSS
  <br/>
  +
</h1>
<h5 align="center">WindiCSS Web APIs for Browsers.</h5>
<h5 align="center">Check out APIs <a href="#APIs">here</a> untill it available on official WindiCSS.</h5>

<p align="center">
  <a href="https://www.npmjs.com/package/windicss"><img src="https://img.shields.io/npm/v/windicss.svg?color=0EA5E9" alt="Npm Version"></a>
  <a href="https://www.npmjs.com/package/windicss"><img src="https://img.shields.io/npm/dt/windicss.svg?color=1388bd" alt="Total Downloads"></a>
  <a href="https://github.com/windicss/windicss/actions"><img src="https://img.shields.io/github/workflow/status/windicss/windicss/Node.js%20CI" alt="Build Status"></a>
  <a href="https://codecov.io/gh/windicss/windicss"><img src="https://img.shields.io/codecov/c/github/windicss/windicss/dev.svg?sanitize=true" alt="Coverage"></a>
  <br>
  <a href="https://discord.gg/aRYWm8r8Eq"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord&logoColor=white&label=&color=7289da" alt="Discord Chat"></a>
  <br>
</p>

<p align="center">Next generation utility-first CSS framework.</p>

<p align="center">
If you are already familiar with Tailwind CSS, think about Windi CSS as an <b>on-demanded</b> alternative to Tailwind, which provides faster load times, <b>fully compatible with Tailwind v2.0</b> and with a bunch of additional cool features.
</p>

[windi css]: https://windicss.org
[website]: https://windicss.org
[video comparison]: https://twitter.com/antfu7/status/1361398324587163648

## Why Windi CSS? 🤔

A quote from the author should illustrate his motivation to create [Windi CSS]:

> When my project became larger and there were about dozens of components, the initial compilation time reached 3s, and hot updates took more than 1s with Tailwind CSS. - [@voorjaar](https://github.com/voorjaar)

By scanning your HTML and CSS and generating utilities on demand, [Windi CSS] is able to provide [faster load times][video comparison] and a speedy HMR in development, and does not require purging in production.

Read more about it in the [Introduction](https://windicss.org/guide/).

## Integrations

Windi CSS provides first-class integrations for your favorite tools, select yours and get started.

| Frameworks | Package | Version |
| :-- | :-- | :-- |
| CLI | [Built-in](https://windicss.org/guide/cli) | ![](https://img.shields.io/npm/v/windicss?label=&color=0EA5E9) |
| VSCode Extension | [windicss-intellisense](https://github.com/windicss/windicss-intellisense) | ![](https://img.shields.io/visual-studio-marketplace/v/voorjaar.windicss-intellisense.svg?label=&color=1388bd) |
| Vite | [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss) | ![](https://img.shields.io/npm/v/vite-plugin-windicss?label=&color=0EA5E9) |
| Rollup | [rollup-plugin-windicss](https://github.com/windicss/vite-plugin-windicss/tree/main/packages/rollup-plugin-windicss) | ![](https://img.shields.io/npm/v/rollup-plugin-windicss?label=&color=1388bd) |
| Webpack | [windicss-webpack-plugin](https://github.com/windicss/windicss-webpack-plugin) | ![](https://img.shields.io/npm/v/windicss-webpack-plugin?label=&color=1388bd) |
| Nuxt | [nuxt-windicss](https://github.com/windicss/nuxt-windicss-module) | ![](https://img.shields.io/npm/v/nuxt-windicss-module?label=&color=1388bd) |
| Svelte | [svelte-windicss-preprocess](https://github.com/windicss/svelte-windicss-preprocess) | ![](https://img.shields.io/npm/v/svelte-windicss-preprocess?label=&color=1388bd) |
| StencilJS | [stencil-windicss](https://github.com/codeperate/stencil-windicss)<sup>Community</sup> | ![](https://img.shields.io/npm/v/@codeperate/stencil-windicss?label=&color=1388bd) |
| Web APIs | [Web-APIs]()<sup>Community</sup> | 0.2.2 |

<div id="APIs"></div>

## CDN Links for Browser/JavaScipt IIFE APIs  🛠

- config: [https://unpkg.com/windicss-with-web-api@0.2.2/dist/config/index.iife.js](https://unpkg.com/windicss-with-web-api@0.2.2/dist/config/index.iife.js).
- helpers: [https://unpkg.com/windicss-with-web-api@0.2.2/dist/helpers/index.iife.js](https://unpkg.com/windicss-with-web-api@0.2.2/dist/helpers/index.iife.js).
- lib: [https://unpkg.com/windicss-with-web-api@0.2.2/dist/lib/index.iife.js](https://unpkg.com/windicss-with-web-api@0.2.2/dist/lib/index.iife.js).
- plugin: [https://unpkg.com/windicss-with-web-api@0.2.2/dist/plugin/index.iife.js](https://unpkg.com/windicss-with-web-api@0.2.2/dist/plugin/index.iife.js).
- utils: [https://unpkg.com/windicss-with-web-api@0.2.2/dist/utils/index.iife.js](https://unpkg.com/windicss-with-web-api@0.2.2/dist/utils/index.iife.js).
#### Example Links [Live WindCSS in browser compilation]


- **HTML demo link:** https://codesandbox.io/s/html-windicss-live-playground-b2kbh
- **React demo link:** https://codesandbox.io/s/react-windicss-live-playground-5j7xr

**UNPKG CDN link:** https://unpkg.com/browse/windicss-with-web-api@0.2.2/

## Plugins 🛠

Check out [plugins available for windicss](https://github.com/windicss/plugins).

## Documentation 📖

Check [the documentation website][website].

## Discussions

We’re using [GitHub Discussions](https://github.com/windicss/windicss/discussions) as a place to connect with other members of our community. You are free to ask questions and share ideas, so enjoy yourself.

## Contributing

If you're interested in contributing to windicss, please read our [contributing docs](https://github.com/windicss/windicss/blob/main/CONTRIBUTING.md) **before submitting a pull request**.

## Sponsors

<a href="https://opencollective.com/windicss" target="_blank">
    <img src="https://opencollective.com/windicss/sponsors.svg">
</a>

## Backers
<a href="https://opencollective.com/windicss" target="_blank">
    <img src="https://opencollective.com/windicss/backers.svg">
</a>

## License

Distributed under the [MIT License](https://github.com/windicss/windicss/blob/main/LICENSE).
