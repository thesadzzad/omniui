# omniui

A Nuxt 4 + Vue 3 component library built with scoped indented **Sass**. Atoms are organized into bracketed category folders and auto-imported by filename (no folder prefix), so a component is used as `<Alert>`, `<Banner>`, `<Button>`, etc.

## Stack

- **Nuxt 4** (app in `app/`)
- **Vue 3** `<script setup>` + TypeScript
- **Sass** (`lang="sass"`, indented syntax) — BEM `__` prefixes dropped since `<style scoped>` isolates
- **bun** package manager

## Setup

```bash
bun install
```

## Development Server

```bash
bun run dev
```

Open `http://localhost:3000` — `app/app.vue` renders a live preview gallery of every component and variant.

## Build

```bash
bun run build
bun run preview
```

## Component Organization

Components live in `app/components/atoms/<category>/`, where `<category>` is one of:

| Folder | Contents |
|--------|----------|
| `(display)` | Avatar, AvatarGroup, Badge |
| `(control)` | Button, Progress |
| `(overlay)` | Alert, Banner |
| `(typography)` | (reserved) |
| `molecules/`, `organisms/`, `templates/`, `pages/` | Nuxt scaffolds (currently empty) |

Auto-import is configured with `pathPrefix: false` in `nuxt.config.ts`, so moving a file between folders never changes its usage name.

## Design Tokens

Colors, radii, and spacing are defined as CSS custom properties in `app/components/App.vue` under `[data-theme="dark"]`:

- Colors: `--color-bg`, `--color-fg`, `--color-muted-fg/bg`, `--color-accent-fg/bg`, `--color-border`
- Status: `--color-{neutral,info,success,warning,error}-fg/bg`
- Radii: `--radius-{sm,md,lg,pill,none}`
- Spacing: `--space-{xs,sm,md,lg,xl}`

Variant props on components map directly to these status tokens.

## Documentation

Per-component docs live in [`doc/`](./doc), mirroring the component folder layout:

```
doc/atoms/(display)/   Alert, Avatar, AvatarGroup, Badge
doc/atoms/(control)/   Button, Progress
doc/atoms/(overlay)/   Banner
```

See [`doc/README.md`](./doc/README.md) for the index.
