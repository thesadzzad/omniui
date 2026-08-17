# Blockquote

Quoted text with a left rule and optional citation.

**File:** `app/components/atoms/(typography)/Blockquote.vue`
**Import:** `<Blockquote>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cite` | `string` | — | Attribution shown in a `<footer>`. |

## Usage

```vue
<Blockquote cite="Ada Lovelace">
    That brain of mine is something more than merely mortal.
</Blockquote>
```

## Notes
- Renders `<blockquote>` with a `3px` left border (`--color-border`), italic text, and a `— cite` footer when provided.
