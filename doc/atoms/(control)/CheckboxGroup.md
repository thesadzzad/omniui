# CheckboxGroup

Group wrapper that manages a shared array `v-model` and renders `Checkbox`es from an `options` prop. Toggling an option adds/removes its `value` from the array.

**File:** `app/components/atoms/(control)/CheckboxGroup.vue`
**Import:** `<CheckboxGroup>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `(string \| number \| boolean)[]` | `[]` | Selected values (bind with `v-model`). |
| `options` | `Option[]` | — | Each: `{ value, label?, variant?, disabled? }`. |
| `name` | `string` | — | Passed to each Checkbox. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size applied to all options. |
| `direction` | `"row" \| "col"` | `"col"` | Layout axis. |
| `disabled` | `boolean` | `false` | Disables the whole group. |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `[value[]]` | Emitted with the new selection array on toggle. |

## Slots

- None (options come from the `options` prop).

## Usage

```vue
<script setup lang="ts">
const tags = ref(["a", "c"]);
</script>

<template>
    <CheckboxGroup
        v-model="tags"
        name="tags"
        :options="[
            { value: 'a', label: 'Design', variant: 'info' },
            { value: 'b', label: 'Build', variant: 'success' },
            { value: 'c', label: 'Test', disabled: true },
        ]"
    />
</template>
```

## Notes
- Renders `<Checkbox>` internally; an option is checked when its `value` is in `modelValue`.
- Clicking toggles membership (add if absent, remove if present).
- `role="group"` for accessibility.
