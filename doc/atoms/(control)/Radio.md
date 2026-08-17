# Radio

Single radio control for use inside a group. Selects its `value` into a shared `v-model`.

**File:** `app/components/atoms/(control)/Radio.vue`
**Import:** `<Radio>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string \| number \| boolean \| null` | `null` | Currently selected value (bind with `v-model`). |
| `value` | `string \| number \| boolean` | — | This option's value. |
| `name` | `string` | — | Native radio group name. |
| `variant` | `"neutral" \| "info" \| "success" \| "warning" \| "error"` | `"info"` | Color when checked. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Dot + label size. |
| `disabled` | `boolean` | `false` | Blocks selection. |
| `label` | `string` | — | Text shown next to the dot. |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `[value]` | Emitted with this option's `value` on select (supports `v-model`). |

## Slots

- None (use the `label` prop).

## Usage

```vue
<script setup lang="ts">
const plan = ref("a");
</script>

<template>
    <Radio v-model="plan" value="a" name="plan" label="Free" />
    <Radio v-model="plan" value="b" name="plan" label="Pro" variant="success" />
    <Radio v-model="plan" value="c" name="plan" label="Disabled" disabled />
</template>
```

## Notes
- Native `<input type="radio">` is visually hidden but keeps real semantics, keyboard, and screen-reader support.
- Checked state is `modelValue === value`; clicking emits `value` upward.
- `&:focus-within` shows a `currentColor` outline for keyboard focus.
