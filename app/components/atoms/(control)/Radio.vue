<script setup lang="ts">
type Variant = "neutral" | "info" | "success" | "warning" | "error";
type Size = "sm" | "md" | "lg";

const props = withDefaults(
    defineProps<{
        modelValue?: string | number | boolean | null;
        value: string | number | boolean;
        name?: string;
        variant?: Variant;
        size?: Size;
        disabled?: boolean;
        label?: string;
    }>(),
    { modelValue: null, variant: "info", size: "md", disabled: false },
);

const emit = defineEmits<{
    "update:modelValue": [value: string | number | boolean];
}>();

function select() {
    if (props.disabled) return;
    emit("update:modelValue", props.value);
}
</script>

<template>
    <label
        class="radio"
        :data-variant="variant"
        :data-size="size"
        :data-checked="modelValue === value || undefined"
        :data-disabled="disabled || undefined"
    >
        <input
            class="input"
            type="radio"
            :name="name"
            :value="value"
            :checked="modelValue === value"
            :disabled="disabled || undefined"
            @change="select"
        />
        <span class="dot" aria-hidden="true" />
        <span v-if="label" class="label">{{ label }}</span>
    </label>
</template>

<style scoped lang="sass">
.radio
    display: inline-flex
    align-items: center
    gap: var(--space-xs)
    cursor: pointer
    color: var(--color-fg)
    user-select: none

    &[data-disabled]
        opacity: 0.5
        cursor: not-allowed

    .input
        position: absolute
        opacity: 0
        width: 0
        height: 0
        margin: 0
        pointer-events: none

    .dot
        flex: 0 0 auto
        display: inline-flex
        align-items: center
        justify-content: center
        border: 2px solid var(--color-muted-fg)
        border-radius: var(--radius-pill)
        background: transparent
        transition: border-color 0.15s ease, background-color 0.15s ease

        &::after
            content: ""
            width: 50%
            height: 50%
            border-radius: inherit
            background: currentColor
            transform: scale(0)
            transition: transform 0.15s ease

    &[data-checked]
        .dot
            border-color: currentColor

            &::after
                transform: scale(1)

        color: var(--color-info-fg)

    &:focus-within:focus-visible
        outline: 2px solid currentColor
        outline-offset: 2px
        border-radius: var(--radius-sm)

    .label
        font-size: inherit
        line-height: 1

    &[data-size="sm"]
        font-size: 0.8125rem
        .dot
            width: 1rem
            height: 1rem
    &[data-size="md"]
        font-size: 0.9375rem
        .dot
            width: 1.25rem
            height: 1.25rem
    &[data-size="lg"]
        font-size: 1.0625rem
        .dot
            width: 1.5rem
            height: 1.5rem

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
