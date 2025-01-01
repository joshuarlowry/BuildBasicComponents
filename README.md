# Building reusable inputs

## Background
This is a project to explore building reusable inputs for React. The goal is to demonstrate how to decouple core business logic for controls from their ending view (using MUI and Tailwind).

Additionally, I've added a few tests to ensure the core logic is working as expected. This structure would enable us to test the core logic without having to click test the UI. Additionally, fixes can cascade to all styles.

## Usage

### Start
Starting the project uses the `start` target in the Makefile. A server will be started on port 5173 using Vite.

```bash
make start
```
### Linting
Linting is performed using ESLint with the recommended React configuration. This helps maintain consistent code style and catch potential issues early. Run the following command to check for linting issues:

```bash
make lint
```
### Linting Fix
To automatically fix linting issues that can be resolved without manual intervention, use the following command:

```bash
make lint-fix
```