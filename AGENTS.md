# Repository Guidelines

# AGENTS
You are a pragmatic full-stack web dev. Output minimal, production-ready code.
Stack:
- Frontend: Vite + React + TypeScript + Tailwind
- Backend (optional later): Express (TypeScript)
Rules:
- Always create or update files directly in this workspace.
- Keep code self-contained and runnable.
- Include clear run/build instructions in README.md.
- Use semantic HTML, accessible components, and sensible file structure.
- Prefer clean, typed APIs and small functions.

## Project Structure & Module Organization
The repository is intentionally clean right now; when adding features, place runtime code in `src/` with one folder per agent (`src/<agent_name>/`). Shared helpers live in `src/common/`. Tests mirror the layout under `tests/`, and fixtures or sample payloads go in `assets/`. Put configuration templates in `config/` and design notes or ADRs in `docs/` so context ships with the code.

## Build, Test, and Development Commands
Create a local environment with `python -m venv .venv && source .venv/bin/activate`, then `pip install -r requirements.txt`. Use a `Makefile` (create or extend as needed) to keep routine tasks one command away: `make lint` should wrap `ruff` and `black --check`, `make test` runs `pytest --cov`, and `make run agent=<name>` starts the agent entry point. Update the targets whenever tooling changes to keep contributors aligned.

## Coding Style & Naming Conventions
Target Python 3.11, 4-space indentation, and explicit type hints on public APIs. Modules and files use `snake_case`, classes `PascalCase`, and constants `UPPER_SNAKE_CASE`. Keep functions concise, prefer dependency injection over globals, and always run `black` (line length 100) plus `ruff` before committing; formatting changes should be committed separately from feature work.

## Testing Guidelines
Author unit tests in `tests/<agent_name>/test_*.py` with descriptive names such as `test_handles_timeout`. Store reusable fixtures in `tests/fixtures/`. Expect ≥90% statement coverage; verify with `pytest --cov=src --cov-report=term-missing`. Mark slow or remote checks with `@pytest.mark.integration` so they can be excluded via `pytest -m "not integration"` during quick feedback loops.

## Commit & Pull Request Guidelines
Follow Conventional Commits (`feat:`, `fix:`, `chore:`) with subjects ≤72 characters. Each commit should bundle code, tests, and docs for a single concern. Pull requests must list the motivation, link relevant issues, attach test output (e.g., `pytest` summary or screenshots), and highlight breaking changes or follow-up tasks. Use draft PRs while work is in progress and request review only after all checks succeed.

## Security & Configuration Tips
Do not commit secrets; keep only sanitized `.env.example` templates. Document required API scopes in `docs/security.md` and validate configuration at startup so agents fail fast on missing settings. Scrub PII from logs before sharing traces outside the team.
