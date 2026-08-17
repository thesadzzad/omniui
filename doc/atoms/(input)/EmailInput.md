# EmailInput

Email field built on [`Input`](./Input.md) with a `PhAt` "`@`" icon in the left slot and `type="email"`.

**File:** `app/components/atoms/(input)/EmailInput.vue`
**Import:** `<EmailInput>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `""` | Field value (bind with `v-model`). |
| `label` | `string` | — | Optional label above the field. |
| `placeholder` | `string` | `"name@example.com"` | Placeholder text. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Padding + font size. |
| `disabled` | `boolean` | `false` | Blocks input. |
| `regex` | `RegExp` | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` | Pattern used to validate the value. |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `[value: string]` | Emitted on input (supports `v-model`). |

## Slots

- None (the left `@` icon is built in via Input's `icon-left` slot).

## Usage

```vue
<script setup lang="ts">
const email = ref("");
</script>

<template>
    <EmailInput v-model="email" label="Email" />
</template>
```

## Notes
- Forwards to `Input` with `type="email"` and a `PhAt` icon in `icon-left`.
- Validates against `regex` when the value is non-empty; if it fails, a `role="alert"` warning (`Please enter a valid email address.`) renders below the field. Empty input shows no warning.
- The `regex` prop lets callers supply a stricter/looser pattern.
- Inherits Input's focus behavior (no ring while typing) and disabled state.
