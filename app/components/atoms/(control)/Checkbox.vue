<script setup lang="ts">
import { PhCheck, PhMinus } from "@phosphor-icons/vue";

type Variant = "neutral" | "info" | "success" | "warning" | "error";
type Size = "sm" | "md" | "lg";

const props = withDefaults(
    defineProps<{
        modelValue?: boolean;
        indeterminate?: boolean;
        variant?: Variant;
        size?: Size;
        disabled?: boolean;
        label?: string;
    }>(),
    {
        modelValue: false,
        indeterminate: false,
        variant: "info",
        size: "md",
        disabled: false,
    },
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
    <label
        class="checkbox"
        :data-variant="variant"
        :data-size="size"
        :data-checked="modelValue || undefined"
        :data-indeterminate="indeterminate || undefined"
        :data-disabled="disabled || undefined"
    >
        <input
            class="input"
            type="checkbox"
            :checked="modelValue"
            :disabled="disabled || undefined"
            @change="toggle"
        />
        <span class="box" aria-hidden="true">
            <Transition name="check-pop">
                <component
                    :is="indeterminate ? PhMinus : PhCheck"
                    v-if="indeterminate || modelValue"
                    class="check"
                    weight="bold"
                />
            </Transition>
        </span>
        <span v-if="label" class="label">{{ label }}</span>
    </label>
</template>

<style scoped lang="sass">
.checkbox
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

    .box
        flex: 0 0 auto
        display: inline-flex
        align-items: center
        justify-content: center
        border: 2px solid var(--color-muted-fg)
        border-radius: var(--radius-sm)
        background: transparent
        transition: border-color 0.15s ease, background-color 0.15s ease

        &:hover
            border-color: currentColor

    .check
        width: 75%
        height: 75%
        display: block
        color: var(--color-bg)

    .check-pop-enter-active,
    .check-pop-leave-active
        transition: transform 0.35s ease, opacity 0.35s ease

    .check-pop-enter-from,
    .check-pop-leave-to
        transform: scale(0.4)
        opacity: 0

    &[data-checked]
        .box
            border-color: currentColor
            background: currentColor

    &[data-indeterminate]
        .box
            border-color: currentColor
            background: currentColor

    &:focus-within:focus-visible
        outline: 2px solid currentColor
        outline-offset: 2px
        border-radius: var(--radius-sm)

    .label
        font-size: inherit
        line-height: 1

    &[data-size="sm"]
        font-size: 0.8125rem
        .box
            width: 1rem
            height: 1rem
    &[data-size="md"]
        font-size: 0.9375rem
        .box
            width: 1.25rem
            height: 1.25rem
    &[data-size="lg"]
        font-size: 1.0625rem
        .box
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
