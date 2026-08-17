# Checkbox

Boolean toggle with checked + indeterminate states, `v-model` support.

**File:** `app/components/atoms/(control)/Checkbox.vue`
**Import:** `<Checkbox>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `boolean` | `false` | Checked state (bind with `v-model`). |
| `indeterminate` | `boolean` | `false` | Shows a dash instead of a tick. |
| `variant` | `"neutral" \| "info" \| "success" \| "warning" \| "error"` | `"info"` | Color when active. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Box + label size. |
| `disabled` | `boolean` | `false` | Blocks toggling. |
| `label` | `string` | — | Text shown next to the box. |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `[value: boolean]` | Emitted on toggle (supports `v-model`). |

## Slots

- None (use the `label` prop).

## Usage

```vue
<script setup lang="ts">
const agree = ref(true);
</script>

<template>
    <Checkbox v-model="agree" label="I agree" />
    <Checkbox :model-value="true" indeterminate label="Some selected" />
</template>
```

## Notes
- Native `<input type="checkbox">` is visually hidden but keeps semantics, keyboard, and SR support.
- Checked shows a tick; `indeterminate` shows a dash (does not change `modelValue`).
- `:focus-within:focus-visible` shows a `currentColor` outline on keyboard focus only (not mouse click).
