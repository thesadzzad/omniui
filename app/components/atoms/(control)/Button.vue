<script setup lang="ts">
type Variant = "neutral" | "info" | "success" | "warning" | "error";
type Size = "sm" | "md" | "lg";

withDefaults(
    defineProps<{
        variant?: Variant;
        size?: Size;
        disabled?: boolean;
    }>(),
    { variant: "neutral", size: "md", disabled: false },
);
</script>

<template>
    <button
        class="btn"
        :data-variant="variant"
        :data-size="size"
        :disabled="disabled || undefined"
        type="button"
    >
        <slot />
    </button>
</template>

<style scoped lang="sass">
.btn
    display: inline-flex
    align-items: center
    justify-content: center
    gap: var(--space-xs)
    border: none
    border-radius: var(--radius-sm)
    font: inherit
    font-weight: 600
    line-height: 1
    cursor: pointer
    white-space: nowrap
    transition: background-color 0.15s ease, opacity 0.15s ease

    &:focus-visible
        outline: 2px solid currentColor
        outline-offset: 2px

    &:disabled
        opacity: 0.5
        cursor: not-allowed

    &[data-size="sm"]
        padding: 0.35em 0.7em
        font-size: 0.8125rem
    &[data-size="md"]
        padding: 0.5em 0.9em
        font-size: 0.9375rem
    &[data-size="lg"]
        padding: 0.65em 1.1em
        font-size: 1.0625rem

    &:not(:disabled):hover
        opacity: 0.88

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
