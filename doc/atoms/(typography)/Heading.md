# Heading

Renders `h1`–`h6` based on `level`, with per-level sizing.

**File:** `app/components/atoms/(typography)/Heading.vue`
**Import:** `<Heading>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `2` | Heading level / semantic tag. |

## Usage

```vue
<Heading :level="1">Page title</Heading>
<Heading :level="3">Section</Heading>
```

## Notes
- Uses `:is="`h${level}`"` so the real semantic tag is emitted (`h1`…`h6`).
- Sizes: h1 2.25rem → h6 0.875rem; weight 700, line-height 1.25.
