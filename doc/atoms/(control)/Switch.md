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
| `label` | `string` | **required** | Accessible name (`aria-label`) for the control. Required to satisfy WCAG 4.1.2 — the switch must always have a non-empty accessible name. |

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
    <Switch :model-value="true" size="lg" variant="info" label="Large toggle" />
    <Switch :model-value="true" disabled label="Disabled toggle" />
</template>
```

## Notes
- Renders a native `<button type="button" role="switch">` with `aria-checked`.
- `label` is required (no default) so the control always exposes a non-empty accessible name via `aria-label`.
- Thumb slides via `left` (from `0.15em` to `calc(100% - thumb - 0.15em)`); track uses `currentColor` when on, `--color-muted-bg` when off.
- `:disabled="disabled || undefined"` so the attribute is absent unless true.
