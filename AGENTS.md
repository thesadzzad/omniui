# Repository instructions

- Keep reusable Svelte 5 components in `src/lib`; use `src/routes` only for demos and end-to-end fixtures.
- Style with UnoCSS Wind4 utilities. Reuse variant groups and directives before adding component CSS.
- Use `:uno:` for compiled utility groups; generated class names must retain the `omni-` prefix.
- Use only Phosphor fill icons: `i-ph-<name>-fill`. Icons must inherit `currentColor`.
- Run `bun run build` after configuration or component changes. Run `bun run check`; report unrelated existing failures instead of broadening scope.
