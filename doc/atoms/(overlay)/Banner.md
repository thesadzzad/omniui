# Banner

Fixed, full-width top notification bar with centered text, an optional action, and a dismiss button. Supports auto-dismiss after a `duration`.

**File:** `app/components/atoms/(overlay)/Banner.vue`
**Import:** `<Banner>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"neutral" \| "info" \| "success" \| "warning" \| "error"` | `"info"` | Color theme. |
| `dismissible` | `boolean` | `false` | Shows the dismiss (X) button. |
| `duration` | `number` | — | Milliseconds before auto-dismiss (self-hides + emits `dismiss`). |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `dismiss` | `[]` | Emitted on manual dismiss or when `duration` elapses. |

## Slots

- default — banner message.
- `#icon` — overrides the leading variant icon.
- `#action` — custom control(s) placed before the dismiss button (e.g. a CTA).
- `#dismiss` — overrides the dismiss button content.

## Layout

- `position: fixed; top: 0; left: 0; right: 0` — pinned to the top edge, full viewport width, `border-radius: 0`.
- Grid `1fr auto 1fr`: icon (left), centered text (middle), actions (right, `justify-content: flex-end`).

## Usage

```vue
<Banner variant="info" dismissible :duration="4000" @dismiss="onDismiss">
    A new version is available.
</Banner>

<Banner variant="warning" dismissible>
    Please review before continuing.
</Banner>
```

## Notes
- No `title` prop — banner text is the slot only.
- Dismiss button has **no background** (transparent at rest and hover); just the `currentColor` X glyph.
- On dismiss (manual or timer) the banner self-hides via `v-if="!dismissed"` wrapped in a `<Transition name="banner-slide">` that slides it up (`translateY(-100%)`) and fades out.
- Because it is `position: fixed`, it overlaps page content at the top — add top padding to the page if needed.
