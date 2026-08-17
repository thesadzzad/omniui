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
- [Switch](./atoms/(control)/Switch.md)
- [Radio](./atoms/(control)/Radio.md)
- [RadioGroup](./atoms/(control)/RadioGroup.md)
- [Checkbox](./atoms/(control)/Checkbox.md)
- [CheckboxGroup](./atoms/(control)/CheckboxGroup.md)

### `(layout)`
- [Stack](./atoms/(layout)/Stack.md)
- [Separator](./atoms/(layout)/Separator.md)
- [Accordion](./atoms/(layout)/Accordion.md)
- [AccordionItem](./atoms/(layout)/AccordionItem.md)

### `(input)`
- [Input](./atoms/(input)/Input.md)
- [EmailInput](./atoms/(input)/EmailInput.md)
- [PasswordInput](./atoms/(input)/PasswordInput.md)
- [TelInput](./atoms/(input)/TelInput.md)

### `(typography)`
- [Heading](./atoms/(typography)/Heading.md)
- [Text](./atoms/(typography)/Text.md)
- [Label](./atoms/(typography)/Label.md)
- [Caption](./atoms/(typography)/Caption.md)
- [Blockquote](./atoms/(typography)/Blockquote.md)

### `(navigation)`
- [Anchor](./atoms/(navigation)/Anchor.md)
- [Breadcrumb](./atoms/(navigation)/Breadcrumb.md)
- [NavigationMenu](./atoms/(navigation)/NavigationMenu.md)
- [Pagination](./atoms/(navigation)/Pagination.md)
- [Tabs](./atoms/(navigation)/Tabs.md)

### `(overlay)`
- [Banner](./atoms/(overlay)/Banner.md)

## Conventions

- All components are auto-imported by **filename** (no folder prefix) via `pathPrefix: false`.
- Styles are scoped indented **Sass**; variant/size are exposed as `data-*` attributes.
- Status tokens (`--color-{neutral,info,success,warning,error}-fg/bg`) drive `variant` props.
- Empty higher-tier folders (`molecules/`, `organisms/`, `templates/`, `pages/`) are Nuxt scaffolds, not yet documented.
