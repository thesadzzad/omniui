# TelInput

Telephone field built on [`Input`](./Input.md) with `type="tel"` and a `PhNumpad` icon (left).

**File:** `app/components/atoms/(input)/TelInput.vue`
**Import:** `<TelInput>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `""` | Field value (bind with `v-model`). |
| `label` | `string` | — | Optional label above the field. |
| `placeholder` | `string` | `"+15550000000"` | Placeholder text. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Padding + font size. |
| `disabled` | `boolean` | `false` | Blocks input. |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `[value: string]` | Emitted on input (supports `v-model`). |

## Slots

- None (left `PhNumpad` icon is built in).

## Notes
- Forwards to `Input` with `type="tel"`, `inputmode="numeric"`, `digits-only`, and a `PhNumpad` icon in `icon-left`.
- `digitsOnly` filters in `Input.onInput` and forces the visible DOM value to digits (and at most one leading `+`) only — applies even when used uncontrolled (no `v-model`).
- The `+` is preserved **only** as a single leading character (country code); extra `+` signs and spaces/symbols are stripped.
- Inherits Input's focus behavior (no ring while typing) and disabled state.

## Usage

```vue
<script setup lang="ts">
const tel = ref("");
</script>

<template>
    <TelInput v-model="tel" label="Phone" />
</template>
```
