# Alert

Inline notification block with an optional title and dismiss button.

**File:** `app/components/atoms/(display)/Alert.vue`
**Import:** `<Alert>` (auto-imported by filename)

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"neutral" \| "info" \| "success" \| "warning" \| "error"` | `"info"` | Color theme; maps to status tokens. |
| `title` | `string` | — | Optional bold heading above the slot content. |
| `dismissible` | `boolean` | `false` | Shows a close button when `true`. |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `dismiss` | `[]` | Emitted when the dismiss button is clicked. |

## Slots

- default — alert body text/content.

## Usage

```vue
<Alert variant="success" title="Saved" dismissible @dismiss="onDismiss">
    Your changes were saved successfully.
</Alert>

<Alert variant="warning">
    Please review before continuing.
</Alert>
```

## Notes
- Dismiss button styling uses `currentColor` with a subtle hover tint.
- When not dismissible, no close control is rendered.
