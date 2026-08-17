<script setup lang="ts">
withDefaults(
    defineProps<{
        to?: string;
        disabled?: boolean;
        external?: boolean;
    }>(),
    { disabled: false, external: false },
);
</script>

<template>
    <a
        class="anchor"
        :href="disabled ? undefined : (to || '#')"
        :target="external ? '_blank' : undefined"
        :rel="external ? 'noopener noreferrer' : undefined"
        :aria-disabled="disabled || undefined"
        :data-disabled="disabled || undefined"
    >
        <slot />
    </a>
</template>

<style scoped lang="sass">
.anchor
    color: var(--color-info-fg)
    text-decoration: none
    cursor: pointer
    border-radius: var(--radius-sm)

    &:hover
        text-decoration: underline

    &:focus-visible
        outline: 2px solid currentColor
        outline-offset: 2px

    &[data-disabled]
        color: var(--color-muted-fg)
        cursor: not-allowed
        pointer-events: none
</style>
