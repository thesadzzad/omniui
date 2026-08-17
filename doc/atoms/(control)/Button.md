# Button

Action button with variant color, size, and disabled state.

**File:** `app/components/atoms/(control)/Button.vue`
**Import:** `<Button>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"neutral" \| "info" \| "success" \| "warning" \| "error"` | `"neutral"` | Color theme. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Padding + font size. |
| `disabled` | `boolean` | `false` | Disables interaction (native `disabled`). |

## Slots

- default — button label/content.

## Usage

```vue
<Button variant="success">Save</Button>
<Button size="lg" variant="info">Continue</Button>
<Button disabled>Unavailable</Button>
```

## Notes
- Renders a native `<button type="button">`.
- `:disabled="disabled || undefined"` so the attribute is absent unless true.
- Hover dims via `opacity`; focus shows a `currentColor` outline.
