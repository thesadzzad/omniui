# NavigationMenu

List of navigation links, vertical or horizontal.

**File:** `app/components/atoms/(navigation)/NavigationMenu.vue`
**Import:** `<NavigationMenu>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `{ label: string; to?: string; active?: boolean; disabled?: boolean }[]` | — | Menu entries. |
| `orientation` | `"horizontal" \| "vertical"` | `"vertical"` | Layout direction. |

## Usage

```vue
<NavigationMenu
    :items="[
        { label: 'Overview', active: true },
        { label: 'Guides', to: '#' },
    ]"
/>
```

## Notes
- Each item is an [`Anchor`](./Anchor.md) atom with `data-active` styling (bg + bold).
