# Caption

Tiny muted secondary text (e.g. hints, footnotes).

**File:** `app/components/atoms/(typography)/Caption.vue`
**Import:** `<Caption>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | — | Text content (or use the default slot). |

## Usage

```vue
<Caption>All fields are required.</Caption>
<Caption>Shown after the form.</Caption>
```

## Notes
- Renders a `<small>`. Font 0.75rem, color `--color-muted-fg`.
