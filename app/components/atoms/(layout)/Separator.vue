<script setup lang="ts">
type Variant = "neutral" | "info" | "success" | "warning" | "error";
type Orientation = "horizontal" | "vertical";

withDefaults(
    defineProps<{
        orientation?: Orientation;
        variant?: Variant;
        label?: string;
    }>(),
    { orientation: "horizontal", variant: "neutral", label: "" },
);
</script>

<template>
    <div
        class="separator"
        :data-orientation="orientation"
        :data-variant="variant"
        role="separator"
        :aria-orientation="orientation"
    >
        <span v-if="label" class="label">{{ label }}</span>
    </div>
</template>

<style scoped lang="sass">
.separator
    display: flex
    align-items: center
    gap: var(--space-sm)
    color: var(--color-muted-fg)
    background: var(--color-border)
    flex: 0 0 auto

    &[data-orientation="horizontal"]
        flex-direction: row
        width: 100%
        height: 1px

        &::before,
        &::after
            content: ""
            flex: 1 1 auto
            height: 1px
            background: var(--color-border)

    &[data-orientation="vertical"]
        flex-direction: column
        width: 1px
        align-self: stretch
        min-height: 1rem

        &::before,
        &::after
            content: ""
            flex: 1 1 auto
            width: 1px
            background: var(--color-border)

    .label
        flex: 0 0 auto
        padding: 0 var(--space-xs)
        font-size: 0.75rem
        font-weight: 600
        text-transform: uppercase
        letter-spacing: 0.05em
        color: var(--color-muted-fg)
        background: var(--color-bg)

    &[data-variant="neutral"]
        color: var(--color-neutral-fg)
    &[data-variant="info"]
        color: var(--color-info-fg)
    &[data-variant="success"]
        color: var(--color-success-fg)
    &[data-variant="warning"]
        color: var(--color-warning-fg)
    &[data-variant="error"]
        color: var(--color-error-fg)
</style>
