# RadioGroup

Group wrapper that manages a shared `v-model` and renders a set of `Radio`s from an `options` prop.

**File:** `app/components/atoms/(control)/RadioGroup.vue`
**Import:** `<RadioGroup>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string \| number \| boolean \| null` | `null` | Selected value (bind with `v-model`). |
| `options` | `Option[]` | — | Each: `{ value, label?, variant?, disabled? }`. |
| `name` | `string` | — | Native radio group name passed to each Radio. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size applied to all options. |
| `direction` | `"row" \| "col"` | `"col"` | Layout axis. |
| `disabled` | `boolean` | `false` | Disables the whole group (per-option `disabled` also honored). |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `[value]` | Emitted when an option is selected. |

## Slots

- None (options come from the `options` prop).

## Usage

```vue
<script setup lang="ts">
const tier = ref("x");
</script>

<template>
    <RadioGroup
        v-model="tier"
        name="tier"
        :options="[
            { value: 'x', label: 'Starter', variant: 'info' },
            { value: 'y', label: 'Pro', variant: 'success' },
            { value: 'z', label: 'Enterprise', disabled: true },
        ]"
    />
</template>
```

## Notes
- Renders `<Radio>` internally with inherited `modelValue`, `name`, `size`, and per-option `variant`/`disabled`.
- `role="radiogroup"` for accessibility.
- For fully custom markup, use standalone `<Radio>` components instead.
