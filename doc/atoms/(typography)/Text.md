# Text

Paragraph text with small/medium/large size options.

> Named `Text` (not `Body`) to avoid colliding with Nuxt's built-in `<Body>` head component.

**File:** `app/components/atoms/(typography)/Text.vue`
**Import:** `<Text>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Font size. |

## Usage

```vue
<Text>Lorem ipsum dolor sit amet.</Text>
<Text size="lg">Larger copy.</Text>
```

## Notes
- Renders a `<p>` with `line-height: 1.6`. Color is `--color-fg`.
