# AI Agent Rules

## Development Environment
- **Nix Shell**: Always use the Nix development shell for project commands (e.g., `yarn`, `node`, building, testing, starting the dev server).
- **Execution**: Prefix commands with `nix develop --command <command>` (e.g., `nix develop --command yarn install`) to ensure they run with the correct dependency and tool versions.
- **Error Handling**: If you encounter any problems, errors, or unexpected behavior when using the Nix development shell, stop immediately, report the issue to the user, and ask for help.
