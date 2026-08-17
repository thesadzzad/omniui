<script setup lang="ts">
type Variant = "neutral" | "info" | "success" | "warning" | "error";
type Size = "sm" | "md" | "lg";

withDefaults(
    defineProps<{
        value?: number;
        variant?: Variant;
        size?: Size;
        indeterminate?: boolean;
    }>(),
    { value: 0, variant: "info", size: "md", indeterminate: false },
);
</script>

<template>
    <div
        class="progress"
        :data-variant="variant"
        :data-size="size"
        :data-indeterminate="indeterminate || undefined"
        role="progressbar"
        :aria-valuenow="indeterminate ? undefined : value"
        aria-valuemin="0"
        aria-valuemax="100"
    >
        <div
            class="bar"
            :style="indeterminate ? undefined : { width: `${Math.min(100, Math.max(0, value))}%` }"
        />
    </div>
</template>

<style scoped lang="sass">
.progress
    width: 100%
    background: var(--color-muted-bg)
    border-radius: var(--radius-pill)
    overflow: hidden

    &[data-size="sm"]
        height: 0.25rem
    &[data-size="md"]
        height: 0.5rem
    &[data-size="lg"]
        height: 0.75rem

    .bar
        height: 100%
        border-radius: inherit
        background: currentColor
        transition: width 0.3s ease

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

    &[data-indeterminate]
        .bar
            width: 40%
            animation: progress-indeterminate 1.2s ease-in-out infinite

@keyframes progress-indeterminate
    0%
        margin-left: -40%
    100%
        margin-left: 100%
</style>
