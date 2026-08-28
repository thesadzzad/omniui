# OmniUI design

OmniUI is a Svelte 5 component library. Components live in `src/lib`; routes only demonstrate and test them.

## Styling

- UnoCSS Wind4 utilities are the styling primitive.
- Typography and web-font presets are available through UnoCSS. `font-sans` uses Inter.
- Variant groups and `@apply`, `@screen`, and `theme()` directives are enabled.
- Compile repeated utility groups with `:uno:`. Generated classes use the `omni-` prefix.

## Icons

Use Phosphor fill icons through `@iconify-json/ph`: `i-ph-<name>-fill`. Icons use mask mode, inherit `currentColor`, and align inline with text. Do not use regular, thin, light, bold, or duotone variants.
