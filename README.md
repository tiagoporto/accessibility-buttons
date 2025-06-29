<p align="center"><img src="./public/img//logos/accessibility-buttons-logo.svg" alt="Accessibility Buttons" width="600" /></p>

Buttons to add/remove contrast and increase/decrease font size.

## ✅ Status

[![Docs GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/accessibility-buttons/check-docs.yml?branch=main&label=docs&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/accessibility-buttons/actions/workflows/check-docs.yml?query=branch%3Amain)
[![Checks GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/accessibility-buttons/checks.yml?branch=main&label=checks&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/accessibility-buttons/actions/workflows/checks.yml?query=branch%3Amain)
[![Tests GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/accessibility-buttons/unit-tests.yml?branch=main&label=unit%20tests&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/accessibility-buttons/actions/workflows/unit-tests.yml?query=branch%3Amain)

<!-- [![E2E Tests GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/accessibility-buttons/e2e-tests.yml?branch=main&label=e2e%20tests&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/accessibility-buttons/actions/workflows/e2e-tests.yml?query=branch%3Amain) -->

![Website](https://img.shields.io/website?logo=githubpages&style=flat-square&url=https://tiagoporto.com/accessibility-buttons)
[![W3C Validation](https://img.shields.io/w3c-validation/html.svg?style=flat-square&targetUrl=https://tiagoporto.com/accessibility-buttons/)](https://validator.nu/?doc=https%3A%2F%2Ftiagoporto.github.io%2Faccessibility-buttons)

[![Coverage Status](https://img.shields.io/coverallsCoverage/github/tiagoporto/accessibility-buttons.svg?logo=coveralls&style=flat-square)](https://coveralls.io/github/tiagoporto/accessibility-buttons)

## 🧰 Stack

![node](https://img.shields.io/badge/Nodejs-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white)
![nvm](https://img.shields.io/badge/nvm-%23333?style=for-the-badge&logo=nvm)
![vs code](https://img.shields.io/badge/VS%20Code-0078d7.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTIzLjE1IDIuNTg3IDE4LjIxLjIxYTEuNDk0IDEuNDk0IDAgMCAwLTEuNzA1LjI5bC05LjQ2IDguNjMtNC4xMi0zLjEyOGEuOTk5Ljk5OSAwIDAgMC0xLjI3Ni4wNTdMLjMyNyA3LjI2MUExIDEgMCAwIDAgLjMyNiA4Ljc0TDMuODk5IDEyIC4zMjYgMTUuMjZhMSAxIDAgMCAwIC4wMDEgMS40NzlMMS42NSAxNy45NGEuOTk5Ljk5OSAwIDAgMCAxLjI3Ni4wNTdsNC4xMi0zLjEyOCA5LjQ2IDguNjNhMS40OTIgMS40OTIgMCAwIDAgMS43MDQuMjlsNC45NDItMi4zNzdBMS41IDEuNSAwIDAgMCAyNCAyMC4wNlYzLjkzOWExLjUgMS41IDAgMCAwLS44NS0xLjM1MnptLTUuMTQ2IDE0Ljg2MUwxMC44MjYgMTJsNy4xNzgtNS40NDh2MTAuODk2eiIvPjwvc3ZnPg==)
![windsurf](https://img.shields.io/badge/windsurf%20ai%20plugin-000000.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjI5NyIgdmlld0JveD0iMCAwIDUxMiAyOTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01MDcuMjggMC4xNDI2MjNINTAyLjRDNDc2LjcyMSAwLjEwMjYzIDQ1NS44ODIgMjAuODk5IDQ1NS44ODIgNDYuNTc0NVYxNTAuNDE2QzQ1NS44ODIgMTcxLjE1MyA0MzguNzQzIDE4Ny45NSA0MTguMzQ0IDE4Ny45NUM0MDYuMjI0IDE4Ny45NSAzOTQuMTI1IDE4MS44NTEgMzg2Ljk0NSAxNzEuNjEzTDI4MC44ODkgMjAuMTM5MUMyNzIuMDg5IDcuNTYxMzMgMjU3Ljc3IDAuMDYyNjM3MyAyNDIuMjcxIDAuMDYyNjM3M0MyMTguMDkxIDAuMDYyNjM3MyAxOTYuMzMyIDIwLjYxOTEgMTk2LjMzMiA0NS45OTQ2VjE1MC40MzZDMTk2LjMzMiAxNzEuMTczIDE3OS4zMzMgMTg3Ljk3IDE1OC43OTQgMTg3Ljk3QzE0Ni42MzQgMTg3Ljk3IDEzNC41NTUgMTgxLjg3MSAxMjcuMzc1IDE3MS42MzNMOC42OTk2NiAyLjEyMjI4QzYuMDE5NzYgLTEuNzE3MDUgMCAwLjE4MjYxNyAwIDQuODYxOFY5NS40MjZDMCAxMDAuMDA1IDEuMzk5OTUgMTA0LjQ0NCA0LjAxOTg0IDEwOC4yMDRMMTIwLjgxNSAyNzQuOTk1QzEyNy43MTUgMjg0Ljg1MyAxMzcuODk1IDI5Mi4xNzIgMTQ5LjYzNCAyOTQuODMxQzE3OS4wMTMgMzAxLjUxIDIwNi4wNTIgMjc4Ljg5NCAyMDYuMDUyIDI1MC4wNzlWMTQ1LjY5N0MyMDYuMDUyIDEyNC45NjEgMjIyLjg1MSAxMDguMTY0IDI0My41OSAxMDguMTY0SDI0My42NUMyNTYuMTUgMTA4LjE2NCAyNjcuODcgMTE0LjI2MyAyNzUuMDQ5IDEyNC41MDFMMzgxLjEyNSAyNzUuOTU1QzM4OS45NDUgMjg4LjU1MiA0MDMuNTI0IDI5Ni4wMzEgNDE5LjcyNCAyOTYuMDMxQzQ0NC40NDMgMjk2LjAzMSA0NjUuNjIyIDI3NS40NTUgNDY1LjYyMiAyNTAuMDk5VjE0NS42NzdDNDY1LjYyMiAxMjQuOTQxIDQ4Mi40MjEgMTA4LjE0NCA1MDMuMTYgMTA4LjE0NEg1MDcuM0M1MDkuOSAxMDguMTQ0IDUxMiAxMDYuMDQ0IDUxMiAxMDMuNDQ1VjQuODQxOEM1MTIgMi4yNDIyNiA1MDkuOSAwLjE0MjYyMyA1MDcuMyAwLjE0MjYyM0g1MDcuMjhaIiBmaWxsPSIjMDBhNTkxIi8+Cjwvc3ZnPgo=)

<!-- ![pnpm](https://img.shields.io/badge/pnpm-%231A191B?style=for-the-badge&logo=pnpm) -->

![git](https://img.shields.io/badge/git-%23F05032?style=for-the-badge&logo=git&logoColor=white)
![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-%23FE5196?style=for-the-badge&logo=conventional%20commits&logoColor=white)
![Semantic Release](https://img.shields.io/badge/Semantic%20Release-%23494949?style=for-the-badge&logo=semantic-release)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS](https://img.shields.io/badge/css-%23663399?style=for-the-badge&logo=css)
![PWA](https://img.shields.io/badge/pwa-%235A0FC8?style=for-the-badge&logo=pwa&logoColor=white)

<!-- ![Browserslist](https://img.shields.io/badge/Browserslist-%23FED538.svg?style=for-the-badge&color=%23FFD539&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMC4xIDMyIj48cGF0aCBkPSJNMjIuNCAxMS41Yy0uMS0uMy0uNC0uNi0uNy0uOC4yLjQgMCAuOC0uMyAxLS4zLjEtLjcgMC0uOS0uNS0uMS0uMyAwLS41IDAtLjdoLS4zYy0uOC4zLTEuMiAxLjMtLjkgMi4xLjMuOCAxLjMgMS4yIDIuMS44czEuMi0xLjMuOS0yLjFaIi8+PHBhdGggZD0iTTE5LjQgMTkuMmMzLjEtLjUgNi4xLTEuNiA4LjgtMy4xaC4xYzEuMS0uOSAyLjItMi41LjctMy4zLS43LS40LTEuNCAwLTEuOS40LTIuNS0xLTQuMy0zLjEtNC44LTUuNiAyLjEtLjkgNC41LTEgNi42LS4zLTIuOS0zLjEtNi4zLTMuOC04LjQtMy44LjItLjcuOC0xIDEuNy0xLjktMi43LS42LTYuMSAxLjEtNy4yIDIuMi0uNC0uNS0xLTIuMy0xLTMuMy0xLjQuNC0yLjkgMy4yLTMuMSA0LjQtLjctLjQtMS43LTEuOC0yLjEtMi43LTEgLjgtMS43IDMuNy0xLjYgNS4zLTEuMS0uNC0yLjEtMS4xLTIuOS0yLS43IDIuMi0uMiAzLjcuNSA1LjMtLjguMi0yLjYtLjItMy40LS42LS4zIDIuMiAxLjMgNCAyLjMgNC42LS44LjQtMi4zLjUtMy41LjYuNSAxLjggMi41IDIuOSAzLjggMy42LTEgMS0yIDEuNi0yLjkgMi4xIDEuMyAxLjIgMyAxLjkgNC44IDIuMS0uNC43LTEuMiAyLjMtMS44IDMuMSAxLjIuMyA0LjMgMCA0LjgtLjItLjMgMS41LS41IDIuOSAwIDQgMS0uNSAzLjItMS44IDMuOS0yLjMgMCAxLjYuOCAzLjEgMi4yIDMuOS4yLTEuMSAxLjMtMyAxLjktMy40LjQuNyAyLjIgMi43IDMuNSAyLjcgMC0xLjIuMi0zIC42LTMuNiAxLjEuNyAzLjIgMS42IDQuOS45LS44LS43LTEuNy0yLjQtMS42LTMuMiAyLjYtLjUgNC4yLTIgNC42LTMuOC0yLjcgMS4zLTcuMS44LTkuNS0yLjFabTcuMy01LjNzLjIgMCAuMy4xYy41LjMuNi44LjQgMS4zIDAgLjItLjIuNC0uNS41LTIuNiAxLjUtNS40IDIuMi04LjEgMi42LS43LTEuMS0xLjEtMi42LTEuMS00LjQgMC0yLjggMS42LTQuOSAzLjctNi4xLjcgMi43IDIuNiA0LjkgNS4yIDZaIi8+PC9zdmc+)
![PostCSS](https://img.shields.io/badge/postcss-%23DD3A0A?style=for-the-badge&logo=postcss)
![Autoprefixer](https://img.shields.io/badge/autoprefixer-%23DD3735?style=for-the-badge&logo=autoprefixer&logoColor=white)
![CSS Modules](https://img.shields.io/badge/css%20modules-%23333?style=for-the-badge&logo=css-modules) -->

<!-- ![Rollup](https://img.shields.io/badge/rollup-%231B1B1F?style=for-the-badge&logo=rollup.js) -->

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

## Docs

[English](packages/accessibility-buttons/README.md), [Português(Brasil)](packages/accessibility-buttons/README.pt-br.md)

## 🛠 Development

### Pre-requirements

- [git](https://git-scm.com)
- [nvm](https://github.com/nvm-sh/nvm)

### Install node

```bash
nvm install
```

### Install

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

This project is developed on my free time, any donation is welcome.

[![GITHUB Sponsor](https://img.shields.io/badge/-github-black?logo=github)](https://github.com/sponsors/tiagoporto)
[![Paypal Donate](https://img.shields.io/badge/PayPal-blue?logo=paypal)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YTDUQ8RZ2G4Q8&lc=BR&item_name=tiagoporto&item_number=geradorcpf&currency_code=BRL&bn=PP%2dDonationsBF:btn_donateCC_LG%2egif:NonHosted)
![Bitcoin](https://img.shields.io/badge/bitcoin-14iqQcwYPLBceRURHuFosGTDXxMmt3cLDp-yellow.svg?logo=bitcoin)

## 📄 License

Accessibility Buttons © 2015 by Tiago Porto is licensed under [MIT License](LICENSE).
