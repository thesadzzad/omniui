# Anchor

Styled anchor. Use `to` for the href; `external` adds `target="_blank"` + `rel="noopener"`.

> Named `Anchor` (not `Link`) to avoid colliding with Nuxt's built-in `<Link>` head component.

**File:** `app/components/atoms/(navigation)/Anchor.vue`
**Import:** `<Anchor>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `to` | `string` | `"#"` | Href target. |
| `external` | `boolean` | `false` | Open in new tab + `rel="noopener noreferrer"`. |
| `disabled` | `boolean` | `false` | Greyed out, non-interactive. |

## Usage

```vue
<Anchor to="/docs">Docs</Anchor>
<Anchor to="https://nuxt.com" external>Nuxt</Anchor>
```

## Notes
- Renders a real `<a>`. `disabled` uses `pointer-events: none` + `aria-disabled`.
- Used internally by `Breadcrumb` and `NavigationMenu`.
