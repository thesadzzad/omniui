# Input

Text input field with `v-model`, label, icon slots/props, size, and disabled states.

**File:** `app/components/atoms/(input)/Input.vue`
**Import:** `<Input>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `""` | Field value (bind with `v-model`). |
| `type` | `string` | `"text"` | Native input type (`text`, `email`, `password`, …). |
| `placeholder` | `string` | — | Placeholder text. |
| `label` | `string` | — | Optional label above the field. |
| `inputmode` | `string` | — | Native `inputmode` hint (e.g. `"numeric"`). |
| `digitsOnly` | `boolean` | `false` | Strips everything except digits and a single leading `+` on input (corrects the DOM value too). |
| `iconLeft` | `Component` | — | Icon component rendered in the left inset. |
| `iconRight` | `Component` | — | Icon component rendered in the right inset. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Padding + font size. |
| `disabled` | `boolean` | `false` | Blocks input. |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `[value: string]` | Emitted on input (supports `v-model`). |

## Slots

- `#icon-left` — custom content in the left inset (overrides the `iconLeft` prop).
- `#icon-right` — custom content in the right inset (overrides the `iconRight` prop).

## Icons (props)

Pass a Phosphor (or any) component directly:

```vue
<Input v-model="q" placeholder="Search" :icon-left="PhUser" :icon-right="PhMagnifyingGlass" />
```

`iconLeft` / `iconRight` render inside the existing left/right insets (they add the same padding as slot icons). Slots take precedence if both are provided.

## Usage

```vue
<script setup lang="ts">
const name = ref("");
</script>

<template>
    <Input v-model="name" label="Name" placeholder="Enter your name" />
    <Input v-model="name" size="lg" placeholder="Large" />
</template>
```

## Notes
- Native `<input>` kept for full semantics, keyboard, and screen-reader support.
- Focus shows no ring/outline while typing (`:focus-visible` only sets `outline: none`).
- The default border uses `--color-border`.
- The `label` prop renders via the [`Label`](../(typography)/Label.md) typography atom (`muted`).
