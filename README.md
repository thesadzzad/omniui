# omniui

A small, themeable **Vue 3 + Nuxt 4** component library styled with scoped indented **Sass**. Components are auto-imported by filename, so you drop them into any Nuxt page without manual imports or folder-prefix names.

```vue
<Alert variant="success" dismissible @dismiss="onDismiss">Saved.</Alert>
<Banner variant="warning" :duration="5000">Heads up.</Banner>
<Button variant="info" size="lg">Continue</Button>
```

## Get Started

No import statements needed — Nuxt auto-imports every `.vue` under `components/`:

```vue
<script setup lang="ts">
const onDismiss = () => console.log("dismissed");
</script>

<template>
    <AvatarGroup :max="4" size="lg">
        <Avatar name="Ada Lovelace" status="online" />
        <Avatar name="Alan Turing" status="busy" />
    </AvatarGroup>

    <Stack direction="row" gap="sm" align="center">
        <Button variant="success">Save</Button>
        <Button variant="neutral" disabled>Cancel</Button>
    </Stack>

    <Progress :value="60" variant="success" />
</template>
```

Run the live preview gallery to see every component and variant:

```bash
bun run dev          # http://localhost:3000 — app/app.vue renders all atoms
```

## Install

```bash
bun install          # or: npm install / pnpm install / yarn install
```

> This repo is the library + a live preview app (`app/`). To use the components in your own Nuxt app, copy `app/components/atoms` into your project's `components/` directory (or publish as a package — see *Publishing* in the [docs](./doc)).

## Usage

- **Zero-config imports** — `pathPrefix: false` means `<Avatar>`, `<Banner>`, `<Button>` resolve by filename regardless of folder.
- **Token-driven theming** — every variant maps to CSS custom properties; re-skin by overriding tokens, not components. Colors, radii, and spacing live in `app/components/App.vue` under `[data-theme="dark"]`:

    | Group | Tokens |
    |-------|--------|
    | Base | `--color-bg`, `--color-fg`, `--color-muted-fg/bg`, `--color-accent-fg/bg`, `--color-border` |
    | Status | `--color-{neutral,info,success,warning,error}-fg/bg` |
    | Radius | `--radius-{sm,md,lg,pill,none}` |
    | Spacing | `--space-{xs,sm,md,lg,xl}` |

    `variant` props accept `neutral | info | success | warning | error` and pull the matching `-fg`/`-bg` pair. Override globally to re-skin the whole library:

    ```css
    :root {
        --color-info-fg: #8ab4ff;
        --color-info-bg: #1a2233;
    }
    ```

- **Scoped indented Sass** — BEM `__` prefixes dropped; `<style scoped>` already isolates.
- **Accessible primitives** — `role`/`aria` on progress and banners, keyboard-focusable controls.

## Doc

Per-component reference, organized by category (mirrors `app/components/atoms/<category>/`):

- **atoms / (display)** — [Alert](./doc/atoms/(display)/Alert.md), [Avatar](./doc/atoms/(display)/Avatar.md), [AvatarGroup](./doc/atoms/(display)/AvatarGroup.md), [Badge](./doc/atoms/(display)/Badge.md)
- **atoms / (control)** — [Button](./doc/atoms/(control)/Button.md), [Progress](./doc/atoms/(control)/Progress.md)
- **atoms / (overlay)** — [Banner](./doc/atoms/(overlay)/Banner.md)

Full index and conventions: **[doc/README.md](./doc/README.md)**.

## Build

```bash
bun run build
bun run preview
```

## Project Layout

```
app/
  app.vue                 live preview gallery
  components/
    App.vue               token definitions ([data-theme])
    atoms/
      (display)/           Avatar, AvatarGroup, Badge, Alert
      (control)/           Button, Progress
      (overlay)/           Banner
      (typography)/        (reserved)
doc/                      per-component docs (see doc/README.md)
nuxt.config.ts            components: [{ path: '~/components', pathPrefix: false }]
```

## Publishing (optional)

To consume as a dependency rather than copying files:

1. Build/transpile `app/components/atoms` to a distributable (e.g. with `@nuxt/module-builder` or a library bundler).
2. Export an install plugin that registers the components, or ship them as auto-import sources.

This repo currently ships the source; packaging is left to your release workflow.

## License

MIT — do whatever, attribute if you're feeling generous.
