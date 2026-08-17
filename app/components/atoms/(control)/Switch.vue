<script setup lang="ts">
type Variant = "neutral" | "info" | "success" | "warning" | "error";
type Size = "sm" | "md" | "lg";

const props = withDefaults(
    defineProps<{
        modelValue?: boolean;
        variant?: Variant;
        size?: Size;
        disabled?: boolean;
        label?: string;
    }>(),
    { modelValue: false, variant: "info", size: "md", disabled: false },
);

const emit = defineEmits<{
    "update:modelValue": [value: boolean];
}>();

function toggle() {
    if (props.disabled) return;
    emit("update:modelValue", !props.modelValue);
}
</script>

<template>
    <button
        class="switch"
        type="button"
        role="switch"
        :aria-checked="modelValue"
        :aria-label="label"
        :data-variant="variant"
        :data-size="size"
        :disabled="disabled || undefined"
        @click="toggle"
    >
        <span class="thumb" />
    </button>
</template>

<style scoped lang="sass">
.switch
    --thumb: 1em
    position: relative
    display: inline-flex
    align-items: center
    flex: 0 0 auto
    border: none
    border-radius: var(--radius-pill)
    background: var(--color-muted-bg)
    color: var(--color-info-fg)
    padding: 0
    cursor: pointer
    transition: background-color 0.15s ease

    &:focus-visible
        outline: 2px solid currentColor
        outline-offset: 2px

    &:disabled
        opacity: 0.5
        cursor: not-allowed

    .thumb
        position: absolute
        top: 50%
        left: 0.15em
        transform: translateY(-50%)
        width: var(--thumb)
        height: var(--thumb)
        border-radius: var(--radius-pill)
        background: var(--color-fg)
        transition: left 0.15s ease, background-color 0.15s ease

    &[data-size="sm"]
        width: 2.75em
        height: 1.5em
        font-size: 0.75rem
        --thumb: 1em
    &[data-size="md"]
        width: 2.75em
        height: 1.5em
        font-size: 0.9375rem
        --thumb: 1em
    &[data-size="lg"]
        width: 3.25em
        height: 1.75em
        font-size: 1.0625rem
        --thumb: 1.15em

    &[aria-checked="true"]
        background: currentColor

        .thumb
            left: calc(100% - var(--thumb) - 0.15em)
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
