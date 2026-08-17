# Separator

Visual divider line (horizontal or vertical) with an optional centered label.

**File:** `app/components/atoms/(layout)/Separator.vue`
**Import:** `<Separator>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Line direction. |
| `variant` | `"neutral" \| "info" \| "success" \| "warning" \| "error"` | `"neutral"` | Label color (line uses `--color-border`). |
| `label` | `string` | `""` | Optional text centered on the line. |

## Slots

- None (use the `label` prop).

## Usage

```vue
<Separator />                       <!-- plain horizontal rule -->
<Separator label="Or" />           <!-- labeled divider -->
<Separator orientation="vertical" variant="info" />
```

## Notes
- `role="separator"` with `aria-orientation` for accessibility.
- Horizontal: full-width `1px` line; with a `label`, the line splits around the label (label gets a `--color-bg` backing so it sits cleanly on the line).
- Vertical: `1px` wide, stretches to container height (`align-self: stretch`); pair with a flex row.
- The line color is always `--color-border`; `variant` only tints the optional label text.
