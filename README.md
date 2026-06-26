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
ENV=stage npx playwright test
