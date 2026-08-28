# Code review guide

Review OmniUI as a published Svelte 5 component library. Report correctness, compatibility, accessibility, and consumer-facing regressions before style preferences.

## Review priorities

1. **Public API** — Flag accidental exports, breaking prop/event/snippet/type changes, missing types, and browser or SSR assumptions. Components belong in `src/lib`; demo-only code belongs in `src/routes`.
2. **Svelte behavior** — Check Svelte 5 runes, reactivity, bindings, snippets, lifecycle cleanup, SSR/hydration parity, and stable DOM behavior. Avoid legacy syntax in new components.
3. **Accessibility** — Require semantic HTML, keyboard operation, visible focus, correct labels and ARIA, sensible disabled states, and reduced-motion support where animation exists.
4. **Component ownership** — Components must accept consumer content and state without hiding required behavior in demos. Reject duplicated utilities, speculative abstractions, and app-specific policy inside library components.
5. **Styling** — Use UnoCSS Wind4 utilities. Check class forwarding, consumer overrides, responsive states, dark mode when supported, and unintended global CSS. Compiled utility groups use `:uno:` and retain the `omni-` prefix.
6. **Icons** — Use only Phosphor fill icons named `i-ph-<name>-fill`. They must inherit `currentColor`; icon-only controls require an accessible name.
7. **Packaging** — Check `src/lib/index.ts` exports, package side effects, generated declarations, and whether `svelte-package`/`publint` can publish the change.
8. **Tests** — Require the smallest test proving new behavior or a fixed regression. Prefer component tests; use Playwright only for browser behavior component tests cannot prove.

## Finding format

Report only actionable findings, highest severity first. Each finding must include file and line, impact on library consumers, and smallest correct fix. Do not report formatting-only issues handled by Prettier or unrelated pre-existing failures.

If no findings exist, say so and list any unverified risk or missing test coverage.

## Verification

- `bun run check`
- `bun run test:unit -- --run`
- `bun run build`

Run only checks relevant to the diff first. `bun run build` is required for public API, UnoCSS, or packaging changes.
