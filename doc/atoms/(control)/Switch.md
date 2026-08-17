# Switch

Toggle control (on/off) with `v-model` support, variant color, size, and disabled state.

**File:** `app/components/atoms/(control)/Switch.vue`
**Import:** `<Switch>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `boolean` | `false` | Current on/off state (use `v-model`). |
| `variant` | `"neutral" \| "info" \| "success" \| "warning" \| "error"` | `"info"` | Track color when on. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Track + thumb dimensions. |
| `disabled` | `boolean` | `false` | Blocks toggling. |
| `label` | `string` | — | `aria-label` for the control. |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `[value: boolean]` | Emitted on toggle (supports `v-model`). |

## Slots

- None.

## Usage

```vue
<script setup lang="ts">
const on = ref(true);
</script>

<template>
    <Switch v-model="on" variant="success" label="Enable notifications" />
    <Switch :model-value="true" size="lg" variant="info" />
    <Switch :model-value="true" disabled />
</template>
```

## Notes
- Renders a native `<button type="button" role="switch">` with `aria-checked`.
- Thumb slides via `transform: translate(...)`; track uses `currentColor` when on, `--color-muted-bg` when off.
- `:disabled="disabled || undefined"` so the attribute is absent unless true.
