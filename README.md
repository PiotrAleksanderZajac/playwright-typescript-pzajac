# Playwright TypeScript Automation Framework

A modular, scalable end‑to‑end automation framework built with **Playwright**, **TypeScript**, and a clean fixture‑based architecture.  
Supports **UI tests**, **API tests**, **role‑based authentication**, and **environment configuration** (dev/stage/prod).

---

## Features

- **Playwright + TypeScript** setup
- **Global setup** generating storageState for multiple roles (admin/user)
- **UI tests** with custom fixtures (`authPage`)
- **API tests** with environment‑based routing
- **Environment loader** (`config/dev.ts`, `config/stage.ts`, `config/prod.ts`)
- **Parallel execution** across browsers and roles
- **Clean project structure** ready for scaling
- **Fully isolated fixtures** for UI and API layers

---

## Getting Started

### Prerequisites

Before running the framework, make sure you have:

- Node.js 22 LTS (or newer)
- npm
- Git

### Clone the repository

```bash
git clone https://github.com/PiotrAleksanderZajac/playwright-typescript-pzajac.git
cd playwright-typescript-pzajac
```

### Install dependencies

```bash
npm install
```

### Install Playwright browsers

```bash
npx playwright install
```

> **Note**
>
> This step is required after the initial setup and whenever the Playwright version is updated.

### Verify the installation

Run the following commands to verify that everything has been installed correctly:

```bash
npm run lint
npm test
```

If all checks pass, the framework is ready to use.

---

## Development Workflow

1. Create a feature branch.
2. Make your changes.
3. Run:

```bash
npm run lint
npm run format:check (in case any format issue fix them using command npm run format ).
npm test
```

4. Commit your changes.
5. Open a Pull Request.
6. Wait for GitHub Actions to complete before merging.

---

## Running tests

Run all tests:
npx playwright test

Run UI tests only:
npx playwright test tests/ui

Run API tests only:
npx playwright test tests/api

Open HTML report:
npx playwright show-report

Other:
npm run test:ui
npm run test:api
npm run test:headed
npm run test:debug

---

## Environments

config/dev.ts
config/stage.ts
config/prod.ts

Switch environment:
ENV=stage npx playwright test //unix
$env:ENV='stage'; npx playwright test --list
