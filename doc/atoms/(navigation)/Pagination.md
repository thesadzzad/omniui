# Pagination

Page control with prev/next and ellipsis collapsing for large ranges.

**File:** `app/components/atoms/(navigation)/Pagination.vue`
**Import:** `<Pagination>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `number` | `1` | Current page (bind with `v-model`). |
| `total` | `number` | — | Total page count. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Control size. |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `[value: number]` | Emitted when a page is selected. |

## Usage

```vue
<script setup lang="ts">
const page = ref(1);
</script>

<template>
    <Pagination v-model="page" :total="20" />
</template>
```

## Notes
- Collapses to `1 … n-1 n n+1 … last` when `total > 7`.
- Prev/Next disable at the ends; active page uses `data-active` + `aria-current="page"`.
