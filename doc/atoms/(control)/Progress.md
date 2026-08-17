# Progress

Progress bar with determinate (`value`) and indeterminate (animated) modes.

**File:** `app/components/atoms/(control)/Progress.vue`
**Import:** `<Progress>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Fill percentage, clamped to `0–100`. |
| `variant` | `"neutral" \| "info" \| "success" \| "warning" \| "error"` | `"info"` | Bar color. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Track height. |
| `indeterminate` | `boolean` | `false` | Animated sliding bar (ignores `value`). |

## Slots

- None.

## Usage

```vue
<Progress :value="60" variant="success" />
<Progress indeterminate variant="info" />
<Progress :value="100" size="lg" variant="error" />
```

## Notes
- `role="progressbar"` with `aria-valuenow/min/max` (omitted when indeterminate).
- Determinate fill width is set via inline `style`; clamped to `0–100`.
- Indeterminate uses a sliding keyframe (`progress-indeterminate`) over a 40% width bar.
- Track background uses `--color-muted-bg`; fill uses `currentColor`.
