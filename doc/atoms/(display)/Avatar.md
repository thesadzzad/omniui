# Avatar

User avatar with image-or-initials fallback, shape, presence status, and an optional ring.

**File:** `app/components/atoms/(display)/Avatar.vue`
**Import:** `<Avatar>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | — | Used for initials fallback and `alt` text. |
| `src` | `string` | — | Image URL. If absent, initials are shown. |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Avatar diameter. |
| `shape` | `"circle" \| "square" \| "squircle"` | `"circle"` | Corner treatment. |
| `status` | `"online" \| "busy" \| "away" \| "offline"` | — | Presence dot in the corner. |
| `ring` | `boolean` | `false` | Adds a `var(--color-error-fg)` ring + padding. |

## Slots

- default — overrides the rendered content (image/initials).

## Usage

```vue
<Avatar name="Ada Lovelace" size="lg" status="online" />
<Avatar src="/me.png" size="xl" shape="square" ring />
<Avatar name="Grace Hopper" size="md" status="away" />
```

## Notes
- Initials are derived from `name` (first letters of up to two words).
- `ring` uses `--color-error-fg` (per design decision), not a separate ring token.
- `status` renders a small dot positioned at the bottom-right.
