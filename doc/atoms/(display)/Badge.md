# Badge

Compact status/label pill with variant color, size, and optional dot.

**File:** `app/components/atoms/(display)/Badge.vue`
**Import:** `<Badge>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"neutral" \| "info" \| "success" \| "warning" \| "error"` | `"neutral"` | Color theme. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Pill padding + font size. |
| `dot` | `boolean` | `false` | Shows a leading status dot (uses `currentColor`). |

## Slots

- default — badge label.

## Usage

```vue
<Badge variant="success">Active</Badge>
<Badge variant="info" size="sm">Small</Badge>
<Badge variant="success" dot>Live</Badge>
```

## Notes
- Pill shape uses `--radius-pill`.
- `dot` is purely decorative (`aria-hidden`); pair with text for meaning.
