# omniui

A small, themeable **Vue 3 + Nuxt 4** component library styled with scoped indented **Sass**. Components are auto-imported by filename, so you drop them into any Nuxt page without manual imports or folder-prefix names.

```vue
<Alert variant="success" dismissible @dismiss="onDismiss">Saved.</Alert>
<Banner variant="warning" :duration="5000">Heads up.</Banner>
<Button variant="info" size="lg">Continue</Button>
```

## Features

- **Zero-config imports** — `pathPrefix: false` means `<Avatar>`, `<Banner>`, `<Button>` resolve by filename regardless of folder.
- **Token-driven theming** — every variant maps to CSS custom properties; re-skin by overriding tokens, not components.
- **Scoped indented Sass** — BEM `__` prefixes dropped; `<style scoped>` already isolates.
- **Accessible primitives** — `role`/`aria` on progress and banners, keyboard-focusable controls.

## Install

```bash
bun install          # or: npm install / pnpm install / yarn install
```

> This repo is the library + a live preview app (`app/`). To use the components in your own Nuxt app, copy `app/components/atoms` into your project's `components/` directory (or publish as a package — see *Publishing* below).

## Quick Start (in this repo)

```bash
bun run dev          # preview gallery at http://localhost:3000
```

`app/app.vue` renders every component and variant so you can eyeball them all.

## Using Components

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

## Component Index

| Component | Folder | Highlights |
|-----------|--------|------------|
| `Alert` | `(display)` | variant, title, dismissible |
| `Avatar` | `(display)` | image/initials, shape, status, ring |
| `AvatarGroup` | `(display)` | overlap, `+N` overflow, size inheritance |
| `Badge` | `(display)` | variant, size, dot |
| `Button` | `(control)` | variant, size, disabled |
| `Progress` | `(control)` | value, indeterminate, size |
| `Banner` | `(overlay)` | fixed top, centered, auto-dismiss, slide-up |

Full prop/event/slot reference: **[`doc/`](./doc)**.

## Theming

Colors, radii, and spacing are CSS custom properties defined in `app/components/App.vue` under `[data-theme="dark"]`. Override them globally to re-skin the whole library:

```css
:root {
    --color-bg: #0f0f0f;
    --color-fg: #fafafa;
    --color-info-fg: #8ab4ff;
    --color-info-bg: #1a2233;
    /* … */
}
```

| Group | Tokens |
|-------|--------|
| Base | `--color-bg`, `--color-fg`, `--color-muted-fg/bg`, `--color-accent-fg/bg`, `--color-border` |
| Status | `--color-{neutral,info,success,warning,error}-fg/bg` |
| Radius | `--radius-{sm,md,lg,pill,none}` |
| Spacing | `--space-{xs,sm,md,lg,xl}` |

`variant` props accept `neutral \| info \| success \| warning \| error` and pull the matching `-fg`/`-bg` pair.

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
