<script setup lang="ts">
type Variant = "neutral" | "info" | "success" | "warning" | "error";
type Size = "sm" | "md" | "lg";

withDefaults(
    defineProps<{
        variant?: Variant;
        size?: Size;
        dot?: boolean;
    }>(),
    { variant: "neutral", size: "md", dot: false },
);
</script>

<template>
    <span class="badge" :data-variant="variant" :data-size="size">
        <span v-if="dot" class="dot" aria-hidden="true" />
        <slot />
    </span>
</template>

<style scoped lang="sass">
.badge
    display: inline-flex
    align-items: center
    gap: var(--space-xs)
    border-radius: var(--radius-pill)
    font-weight: 600
    line-height: 1
    white-space: nowrap
    user-select: none

    &[data-size="sm"]
        padding: 0.15em 0.5em
        font-size: 0.6875rem
    &[data-size="md"]
        padding: 0.25em 0.6em
        font-size: 0.75rem
    &[data-size="lg"]
        padding: 0.35em 0.75em
        font-size: 0.875rem

    .dot
        flex: 0 0 auto
        width: 0.5em
        height: 0.5em
        border-radius: var(--radius-pill)
        background: currentColor

    &[data-variant="neutral"]
        color: var(--color-neutral-fg)
        background: var(--color-neutral-bg)
    &[data-variant="info"]
        color: var(--color-info-fg)
        background: var(--color-info-bg)
    &[data-variant="success"]
        color: var(--color-success-fg)
        background: var(--color-success-bg)
    &[data-variant="warning"]
        color: var(--color-warning-fg)
        background: var(--color-warning-bg)
    &[data-variant="error"]
        color: var(--color-error-fg)
        background: var(--color-error-bg)
</style>
