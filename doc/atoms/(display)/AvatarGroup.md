# AvatarGroup

Stacked, overlapping row of avatars with a `+N` overflow bubble when count exceeds `max`.

**File:** `app/components/atoms/(display)/AvatarGroup.vue`
**Import:** `<AvatarGroup>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `max` | `number` | — | Max avatars shown before collapsing into `+N`. |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Size applied to children that don't set their own. |

## Slots

- default — avatar nodes (typically `<Avatar>`).

## Behavior

- Children lacking their own `size` inherit the group `size` via `cloneVNode`.
- Overflow avatars beyond `max` are hidden; a `+N` bubble shows the remaining count.
- Overlap is achieved with negative margin + a `box-shadow` ring matching `--color-bg`.

## Usage

```vue
<AvatarGroup :max="4" size="lg">
    <Avatar name="Ada Lovelace" />
    <Avatar name="Alan Turing" />
    <Avatar name="Grace Hopper" />
    <Avatar name="Katherine Johnson" />
    <Avatar name="Linus Torvalds" />
</AvatarGroup>
```

## Notes
- The `+N` bubble reuses the same size as the group.
- Relies on `cloneVNode` from Vue; children are not mutated in place.
