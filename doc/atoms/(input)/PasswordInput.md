# PasswordInput

Password field built on [`Input`](./Input.md) with a `PhFingerprint` icon (left) and a show/hide `PhEye`/`PhEyeSlash` toggle (right).

**File:** `app/components/atoms/(input)/PasswordInput.vue`
**Import:** `<PasswordInput>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `""` | Field value (bind with `v-model`). |
| `label` | `string` | — | Optional label above the field. |
| `placeholder` | `string` | `"Enter password"` | Placeholder text. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Padding + font size. |
| `disabled` | `boolean` | `false` | Blocks input and hides the toggle. |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `[value: string]` | Emitted on input (supports `v-model`). |

## Slots

- None (left `PhFingerprint` icon and right reveal button are built in).

## Usage

```vue
<script setup lang="ts">
const password = ref("");
</script>

<template>
    <PasswordInput v-model="password" label="Password" />
</template>
```

## Notes
- Toggles `type` between `password` and `text` via internal `revealed` state.
- Left icon is `PhFingerprint`; right is the reveal toggle `PhEye`/`PhEyeSlash`.
- Reveal button has `pointer-events: auto` (overrides Input's non-interactive `.icon`) so it stays clickable, and `:focus-visible` for keyboard a11y.
- Disabled state hides the reveal toggle.
