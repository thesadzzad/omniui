# omniui — Component Docs

Per-component documentation, mirroring `app/components/atoms/<category>/`.

## Atoms

### `(display)`
- [Alert](./atoms/(display)/Alert.md)
- [Avatar](./atoms/(display)/Avatar.md)
- [AvatarGroup](./atoms/(display)/AvatarGroup.md)
- [Badge](./atoms/(display)/Badge.md)

### `(control)`
- [Button](./atoms/(control)/Button.md)
- [Progress](./atoms/(control)/Progress.md)

### `(overlay)`
- [Banner](./atoms/(overlay)/Banner.md)

## Conventions

- All components are auto-imported by **filename** (no folder prefix) via `pathPrefix: false`.
- Styles are scoped indented **Sass**; variant/size are exposed as `data-*` attributes.
- Status tokens (`--color-{neutral,info,success,warning,error}-fg/bg`) drive `variant` props.
- Empty higher-tier folders (`molecules/`, `organisms/`, `templates/`, `pages/`) are Nuxt scaffolds, not yet documented.
