# Tabs

Tab list with an active-tab indicator. Panels are supplied via the default slot, which receives the active tab `id`.

**File:** `app/components/atoms/(navigation)/Tabs.vue`
**Import:** `<Tabs>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `{ id: string; label: string }[]` | — | Tab definitions. |
| `modelValue` | `string` | first tab id | Active tab id. |

## Slots

- default — receives `{ active: string }`; render the panel for the active id.

## Usage

```vue
<Tabs :tabs="[{ id: 'a', label: 'One' }, { id: 'b', label: 'Two' }]">
    <template #default="{ active }">
        <div v-if="active === 'a'">Panel one</div>
        <div v-else>Panel two</div>
    </template>
</Tabs>
```

## Notes
- Tablist uses `role="tablist"` / `role="tab"` / `aria-selected`. Active tab shows a bottom border accent.
- Active state is provided to children via Vue `provide` (id string) for advanced use.
