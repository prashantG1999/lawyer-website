# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 📐 Code Architecture Overview
This repository follows a standard modern web stack built with **React**, **TypeScript**, and **Vite**.

The architecture is modular, dividing concerns between development tooling, application logic, and component implementation. Key structural points include:

*   **Type Checking**: The project uses multiple `tsconfig` files (`tsconfig.app.json`, `tsconfig.node.json`) to separate configuration for application code versus build/tooling code, which is crucial for maintaining type safety across different parts of the stack.
*   **Component Development**: React components are expected to be developed using TypeScript, leveraging modern hooks and a functional component pattern.
*   **Styling & Assets**: Styling and assets are managed via a standard structure, likely involving a specific module for component styling (details to be confirmed by examining the `src/` directory).
*   **Linting/Safety**: The ESLint configuration is highly advanced, suggesting the use of type-aware rules via `tseslint.configs.recommendedTypeChecked` and specific React plugins (`eslint-plugin-react-x`, `eslint-plugin-react-dom`). When modifying code, adhering to the defined ESLint rules is mandatory.

## 🛠️ Common Development Commands
These commands are assumed to be available via `npm run` scripts and are essential for maintaining the codebase.

*   **Development Server**: `npm run dev`
    *   Starts the local development server with Hot Module Replacement (HMR).
*   **Build Production**: `npm run build`
    *   Bundles the application for production deployment.
*   **Lint Codebase**: `npm run lint`
    *   Runs static analysis checks against the source code, ensuring adherence to defined style and type rules.
*   **Run Tests**: `npm run test`
    *   Executes the test suite.
*   **Single Test**: *[Action Required]*
    *   If the testing framework supports it (e.g., Jest/Vitest), run individual tests using the defined CLI command pattern (e.g., `npm run test -- --path ./src/components/Button.tsx`).

## 📘 Key Technical Guidance
1.  **TypeScript Configuration**: Always respect the separate `tsconfig` files. The distinction between app code and node/utility code is structural and affects type resolution.
2.  **Linting Best Practices**: Given the advanced ESLint setup, prioritize maintaining strong type annotations and adhering to the rules provided by `eslint-plugin-react-x` and `eslint-plugin-react-dom`.
3.  **Modularity**: The system is designed to be highly modular, with clear separation between application logic and component implementation.

---
```markdown
***
**⚠️ IMPORTANT DISCLAIMER**
This file was programmatically generated based on initial file analysis and the existing `README.md`. Developers **MUST** validate the exact command names and required scripts (e.g., in `package.json`) before relying on this document. It is a guide, not a definitive source of truth.
***
```