# AccordionItem

A single collapsible panel used inside [`Accordion`](./Accordion.md). Header button toggles a `<Transition>`-animated body.

**File:** `app/components/atoms/(layout)/AccordionItem.vue`
**Import:** `<AccordionItem>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Header label (required). |
| `index` | `number` | `0` | Unique id used by the parent `Accordion` to track open state. **Must be unique per item.** |

## Slots

- default — panel body content.

## Usage

```vue
<AccordionItem :index="0" title="Details">
    Any content goes here.
</AccordionItem>
```

## Notes
- Header is a `<button>` with `aria-expanded` for a11y; the caret (`PhCaretDown`) rotates 180° when open.
- Body uses a smooth `grid-template-rows: 0fr → 1fr` height collapse (no JS measuring), so open/close animates `height: auto` fluidly.
- Inherits the open state from the nearest `Accordion` via `inject`.
- The `title` renders via the [`Label`](../(typography)/Label.md) typography atom.
