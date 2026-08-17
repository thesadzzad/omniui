# Breadcrumb

Trail of links showing location hierarchy. Last item is the current page.

**File:** `app/components/atoms/(navigation)/Breadcrumb.vue`
**Import:** `<Breadcrumb>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `{ label: string; to?: string }[]` | — | Crumb list. Last item is current (no link). |
| `separator` | `string` | `"/"` | Glyph between crumbs. |

## Usage

```vue
<Breadcrumb :items="[
    { label: 'Home', to: '/' },
    { label: 'Library' },
]" />
```

## Notes
- Wrapped in `<nav aria-label="Breadcrumb">`. Current crumb gets `data-current` and `font-weight: 600`.
- Internal crumbs render via the [`Anchor`](./Anchor.md) atom.
