# Accordion

Disclosure container for [`AccordionItem`](./AccordionItem.md) panels. Manages which items are open.

**File:** `app/components/atoms/(layout)/Accordion.vue`
**Import:** `<Accordion>`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `multiple` | `boolean` | `false` | Allow more than one panel open at a time. |

## Usage

```vue
<template>
    <Accordion>
        <AccordionItem :index="0" title="First">…</AccordionItem>
        <AccordionItem :index="1" title="Second">…</AccordionItem>
    </Accordion>

    <!-- allow several open -->
    <Accordion multiple>
        <AccordionItem :index="0" title="A">…</AccordionItem>
        <AccordionItem :index="1" title="B">…</AccordionItem>
    </Accordion>
</template>
```

## Notes
- Provides `open` state + `toggle(index)` to descendant `AccordionItem`s via Vue `provide`/`inject`.
- Single mode: opening one item closes the others. `multiple`: independent toggles.
- Items must receive a unique `:index` so the container tracks them.
