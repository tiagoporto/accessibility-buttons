<p align="center"><img src="./public/img/logos/accessibility-buttons-logo.svg" alt="Accessibility Buttons" width="600" /></p>

[![version](https://img.shields.io/npm/v/accessibility-buttons?style=flat-square)](https://www.npmjs.com/package/accessibility-buttons)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/accessibility-buttons)
[![Downloads](https://img.shields.io/npm/dm/accessibility-buttons.svg?style=flat-square)](https://www.npmjs.com/package/accessibility-buttons)
[![npm bundle size](https://img.shields.io/bundlephobia/min/accessibility-buttons?style=flat-square)](https://bundlephobia.com/package/accessibility-buttons)

<!-- ![npm type definitions](https://img.shields.io/npm/types/gerador-validador-cpf.svg?style=flat-square) -->

Web component for adding/removing contrast and increasing/decreasing font size, enhancing the user experience for everyone.

## ▶️ Demo

<https://tiagoporto.github.io/accessibility-buttons/>

## ✅ Status

[![Docs GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/accessibility-buttons/check-docs.yml?branch=main&label=docs&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/accessibility-buttons/actions/workflows/check-docs.yml?query=branch%3Amain)
[![Checks GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/accessibility-buttons/checks.yml?branch=main&label=checks&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/accessibility-buttons/actions/workflows/checks.yml?query=branch%3Amain)
[![Tests GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/accessibility-buttons/unit-tests.yml?branch=main&label=unit%20tests&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/accessibility-buttons/actions/workflows/unit-tests.yml?query=branch%3Amain)
[![E2E Tests GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/accessibility-buttons/e2e-tests.yml?branch=main&label=e2e%20tests&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/accessibility-buttons/actions/workflows/e2e-tests.yml?query=branch%3Amain)
[![Coverage Status](https://img.shields.io/coverallsCoverage/github/tiagoporto/accessibility-buttons.svg?logo=coveralls&style=flat-square)](https://coveralls.io/github/tiagoporto/accessibility-buttons)

![Website](https://img.shields.io/website?logo=githubpages&style=flat-square&url=https://tiagoporto.com/accessibility-buttons)
[![W3C Validation](https://img.shields.io/w3c-validation/html.svg?style=flat-square&targetUrl=https://tiagoporto.com/accessibility-buttons/)](https://validator.nu/?doc=https%3A%2F%2Ftiagoporto.github.io%2Faccessibility-buttons)

## 🧰 Stack

![node](https://img.shields.io/badge/Nodejs-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white)
![nvm](https://img.shields.io/badge/nvm-%23333?style=for-the-badge&logo=nvm)
![pnpm](https://img.shields.io/badge/pnpm-%231A191B?style=for-the-badge&logo=pnpm)
![vs code](https://img.shields.io/badge/VS%20Code-0078d7.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTIzLjE1IDIuNTg3IDE4LjIxLjIxYTEuNDk0IDEuNDk0IDAgMCAwLTEuNzA1LjI5bC05LjQ2IDguNjMtNC4xMi0zLjEyOGEuOTk5Ljk5OSAwIDAgMC0xLjI3Ni4wNTdMLjMyNyA3LjI2MUExIDEgMCAwIDAgLjMyNiA4Ljc0TDMuODk5IDEyIC4zMjYgMTUuMjZhMSAxIDAgMCAwIC4wMDEgMS40NzlMMS42NSAxNy45NGEuOTk5Ljk5OSAwIDAgMCAxLjI3Ni4wNTdsNC4xMi0zLjEyOCA5LjQ2IDguNjNhMS40OTIgMS40OTIgMCAwIDAgMS43MDQuMjlsNC45NDItMi4zNzdBMS41IDEuNSAwIDAgMCAyNCAyMC4wNlYzLjkzOWExLjUgMS41IDAgMCAwLS44NS0xLjM1MnptLTUuMTQ2IDE0Ljg2MUwxMC44MjYgMTJsNy4xNzgtNS40NDh2MTAuODk2eiIvPjwvc3ZnPg==)
![windsurf](https://img.shields.io/badge/windsurf%20ai%20plugin-000000.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjI5NyIgdmlld0JveD0iMCAwIDUxMiAyOTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01MDcuMjggMC4xNDI2MjNINTAyLjRDNDc2LjcyMSAwLjEwMjYzIDQ1NS44ODIgMjAuODk5IDQ1NS44ODIgNDYuNTc0NVYxNTAuNDE2QzQ1NS44ODIgMTcxLjE1MyA0MzguNzQzIDE4Ny45NSA0MTguMzQ0IDE4Ny45NUM0MDYuMjI0IDE4Ny45NSAzOTQuMTI1IDE4MS44NTEgMzg2Ljk0NSAxNzEuNjEzTDI4MC44ODkgMjAuMTM5MUMyNzIuMDg5IDcuNTYxMzMgMjU3Ljc3IDAuMDYyNjM3MyAyNDIuMjcxIDAuMDYyNjM3M0MyMTguMDkxIDAuMDYyNjM3MyAxOTYuMzMyIDIwLjYxOTEgMTk2LjMzMiA0NS45OTQ2VjE1MC40MzZDMTk2LjMzMiAxNzEuMTczIDE3OS4zMzMgMTg3Ljk3IDE1OC43OTQgMTg3Ljk3QzE0Ni42MzQgMTg3Ljk3IDEzNC41NTUgMTgxLjg3MSAxMjcuMzc1IDE3MS42MzNMOC42OTk2NiAyLjEyMjI4QzYuMDE5NzYgLTEuNzE3MDUgMCAwLjE4MjYxNyAwIDQuODYxOFY5NS40MjZDMCAxMDAuMDA1IDEuMzk5OTUgMTA0LjQ0NCA0LjAxOTg0IDEwOC4yMDRMMTIwLjgxNSAyNzQuOTk1QzEyNy43MTUgMjg0Ljg1MyAxMzcuODk1IDI5Mi4xNzIgMTQ5LjYzNCAyOTQuODMxQzE3OS4wMTMgMzAxLjUxIDIwNi4wNTIgMjc4Ljg5NCAyMDYuMDUyIDI1MC4wNzlWMTQ1LjY5N0MyMDYuMDUyIDEyNC45NjEgMjIyLjg1MSAxMDguMTY0IDI0My41OSAxMDguMTY0SDI0My42NUMyNTYuMTUgMTA4LjE2NCAyNjcuODcgMTE0LjI2MyAyNzUuMDQ5IDEyNC41MDFMMzgxLjEyNSAyNzUuOTU1QzM4OS45NDUgMjg4LjU1MiA0MDMuNTI0IDI5Ni4wMzEgNDE5LjcyNCAyOTYuMDMxQzQ0NC40NDMgMjk2LjAzMSA0NjUuNjIyIDI3NS40NTUgNDY1LjYyMiAyNTAuMDk5VjE0NS42NzdDNDY1LjYyMiAxMjQuOTQxIDQ4Mi40MjEgMTA4LjE0NCA1MDMuMTYgMTA4LjE0NEg1MDcuM0M1MDkuOSAxMDguMTQ0IDUxMiAxMDYuMDQ0IDUxMiAxMDMuNDQ1VjQuODQxOEM1MTIgMi4yNDIyNiA1MDkuOSAwLjE0MjYyMyA1MDcuMyAwLjE0MjYyM0g1MDcuMjhaIiBmaWxsPSIjMDBhNTkxIi8+Cjwvc3ZnPgo=)

![git](https://img.shields.io/badge/git-%23F05032?style=for-the-badge&logo=git&logoColor=white)
![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-%23FE5196?style=for-the-badge&logo=conventional%20commits&logoColor=white)
![Semantic Release](https://img.shields.io/badge/Semantic%20Release-%23494949?style=for-the-badge&logo=semantic-release)

![Web Component](https://img.shields.io/badge/web%20components-%23FFF?style=for-the-badge&logo=webcomponents.org)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS](https://img.shields.io/badge/css-%23663399?style=for-the-badge&logo=css)

<!--
![PWA](https://img.shields.io/badge/pwa-%235A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
![PostCSS](https://img.shields.io/badge/postcss-%23DD3A0A?style=for-the-badge&logo=postcss)
![Autoprefixer](https://img.shields.io/badge/autoprefixer-%23DD3735?style=for-the-badge&logo=autoprefixer&logoColor=white) -->

![Rollup](https://img.shields.io/badge/rollup-%231B1B1F?style=for-the-badge&logo=rollup.js)
![Jest](https://img.shields.io/badge/jest-%23C21325?style=for-the-badge&logo=jest)
![Testing Library](https://img.shields.io/badge/testing%20library-%231C1A1D?style=for-the-badge&logo=testing-library)
![Playwright](https://img.shields.io/badge/Playwright-%23242526?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2OSAyNjciPgogIDxwYXRoIGZpbGw9IiMyZWFkMzMiIGQ9Ik0xNTEuNywxOTIuM3YtMjIuNGwtNjIuMywxNy43czQuNi0yNi44LDM3LjEtMzZjOS45LTIuOCwxOC4zLTIuOCwyNS4yLTEuNFY1OC4xaDMxLjJjLTMuNC0xMC41LTYuNy0xOC42LTkuNC0yNC4yLTQuNi05LjMtOS4yLTMuMS0xOS45LDUuOC03LjUsNi4zLTI2LjQsMTkuNi01NC45LDI3LjMtMjguNSw3LjctNTEuNSw1LjYtNjEuMSw0LTEzLjYtMi4zLTIwLjctNS4zLTIwLjEsNSwuNiw5LjEsMi44LDIzLjMsNy43LDQyLDEwLjgsNDAuNSw0Ni40LDExOC42LDExMy44LDEwMC40LDE3LjYtNC43LDMwLTE0LjEsMzguNi0yNi4xaC0yNlpNNTEuMSwxMTguNWw0Ny45LTEyLjZzLTEuNCwxOC40LTE5LjMsMjMuMWMtMTcuOSw0LjctMjguNS0xMC41LTI4LjUtMTAuNVoiLz4KICA8cGF0aCBmaWxsPSIjZTI1NzRjIiBkPSJNMzMxLjgsNTkuMmMtMTIuNCwyLjItNDIuMyw0LjktNzkuMi01LTM2LjktOS45LTYxLjQtMjcuMi03MS4xLTM1LjMtMTMuNy0xMS41LTE5LjgtMTkuNS0yNS43LTcuNC01LjMsMTAuNy0xMiwyOC4xLTE4LjUsNTIuNC0xNC4xLDUyLjctMjQuNywxNjMuOCw2Mi42LDE4Ny4yLDg3LjIsMjMuNCwxMzMuNy03OC4yLDE0Ny44LTEzMC45LDYuNS0yNC4zLDkuNC00Mi43LDEwLjItNTQuNi45LTEzLjUtOC4zLTkuNS0yNi02LjVaTTE1Ni41LDEwMi44czEzLjctMjEuNCwzNy4xLTE0LjhjMjMuMyw2LjYsMjUuMSwzMi40LDI1LjEsMzIuNGwtNjIuMi0xNy43Wk0yMTMuNCwxOTguN2MtNDEtMTItNDcuMy00NC43LTQ3LjMtNDQuN2wxMTAuMiwzMC44cy0yMi4yLDI1LjgtNjIuOCwxMy45Wk0yNTIuNCwxMzEuNXMxMy43LTIxLjQsMzctMTQuN2MyMy4zLDYuNiwyNS4xLDMyLjQsMjUuMSwzMi40bC02Mi4yLTE3LjdaIi8+Cjwvc3ZnPg==)
![Chromatic](https://img.shields.io/badge/chromatic-%23FFF?style=for-the-badge&logo=chromatic)

![EditorConfig](https://img.shields.io/badge/EditorConfig-%23E0EFEF.svg?style=for-the-badge&logo=editorconfig&logoColor=black)
![Prettier](https://img.shields.io/badge/Prettier-1A2B34.svg?style=for-the-badge&logo=prettier)
![Eslint](https://img.shields.io/badge/ESLint-%234B32C3.svg?style=for-the-badge&logo=eslint&logoColor=white)
![Stylelint](https://img.shields.io/badge/Stylelint-%231B3A4B.svg?style=for-the-badge&logo=stylelint&logoColor=white)
![Remark](https://img.shields.io/badge/Remark-%230A0E0F.svg?style=for-the-badge&logo=remark&logoColor=d80303)
![Husky](https://img.shields.io/badge/%F0%9F%90%B6%20Husky-%23161618.svg?style=for-the-badge)
![Lint Staged](https://img.shields.io/badge/%F0%9F%9A%AB%20Lint%20Staged-%23fef9f9.svg?style=for-the-badge)
![Commitlint](https://img.shields.io/badge/Commitlint-%23000.svg?style=for-the-badge&logo=commitlint&logoColor=white)

![Coveralls](https://img.shields.io/badge/coveralls-%233F5767?style=for-the-badge&logo=coveralls)
![Dependabot](https://img.shields.io/badge/dependabot-%23025E8C?style=for-the-badge&logo=dependabot&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Github%20Pages-%23222222?style=for-the-badge&logo=githubpages&logoColor=white)

## 📦 Install

```bash
npm install accessibility-buttons --save
```

## ⚙️ Usage

```js
// js
import 'accessibility-buttons/ContrastButton'
import 'accessibility-buttons/FontSizeButton'
```

```html
<!-- html -->
<a11y-contrast-button></a11y-contrast-button>
<a11y-font-size-button></a11y-font-size-button>
```

[Check full documentation](packages/accessibility-buttons/README.md)

## 🛠 Development

### Pre-requirements

- [git](https://git-scm.com)
- [nvm](https://github.com/nvm-sh/nvm)

### Install node

```bash
nvm install
```

### Install Dependencies

```bash
npm install
```

### Running dev server

```bash
npm run dev
```

## 🤝 Contributing

[Check how to contribute](https://github.com/tiagoporto/.github/blob/main/CONTRIBUTING.md).

## 🤜🤛 Donating

This project was developed in my free time. Any donations are greatly appreciated.

[![GITHUB Sponsor](https://img.shields.io/badge/-github-black?logo=github)](https://github.com/sponsors/tiagoporto)
[![Paypal Donate](https://img.shields.io/badge/PayPal-blue?logo=paypal)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YTDUQ8RZ2G4Q8&lc=BR&item_name=tiagoporto&item_number=geradorcpf&currency_code=BRL&bn=PP%2dDonationsBF:btn_donateCC_LG%2egif:NonHosted)
![Bitcoin](https://img.shields.io/badge/bitcoin-14iqQcwYPLBceRURHuFosGTDXxMmt3cLDp-yellow.svg?logo=bitcoin)

## 📄 License

Accessibility Buttons © 2015 by Tiago Porto is licensed under [MIT License](LICENSE).
