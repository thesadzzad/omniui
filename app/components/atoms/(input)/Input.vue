<script setup lang="ts">
import { useSlots, type Component } from "vue";
import Label from "../(typography)/Label.vue";

type Size = "sm" | "md" | "lg";

const props = withDefaults(
    defineProps<{
        modelValue?: string;
        type?: string;
        placeholder?: string;
        label?: string;
        inputmode?: string;
        digitsOnly?: boolean;
        iconLeft?: Component;
        iconRight?: Component;
        size?: Size;
        disabled?: boolean;
    }>(),
    { modelValue: "", type: "text", size: "md", disabled: false },
);

const slots = useSlots();

const emit = defineEmits<{
    "update:modelValue": [value: string];
}>();

function onInput(e: Event) {
    const el = e.target as HTMLInputElement;
    let value = el.value;
    if (props.digitsOnly) {
        const hadPlus = el.value.startsWith("+");
        value = el.value.replace(/[^\d+]/g, "").replace(/\+/g, "");
        if (hadPlus) value = "+" + value;
    }
    if (props.digitsOnly && value !== el.value) el.value = value;
    emit("update:modelValue", value);
}
</script>

<template>
    <label
        class="input"
        :data-size="size"
        :data-disabled="disabled || undefined"
    >
        <Label v-if="label" muted>{{ label }}</Label>
        <span
            class="field-wrap"
            :data-icon-left="slots['icon-left'] || props.iconLeft ? '' : undefined"
            :data-icon-right="slots['icon-right'] || props.iconRight ? '' : undefined"
        >
            <span v-if="slots['icon-left'] || props.iconLeft" class="icon icon-left">
                <slot name="icon-left">
                    <component :is="props.iconLeft" />
                </slot>
            </span>
            <input
                class="field"
                :type="type"
                :value="modelValue"
                :placeholder="placeholder"
                :inputmode="inputmode"
                :disabled="disabled || undefined"
                @input="onInput"
            />
            <span v-if="slots['icon-right'] || props.iconRight" class="icon icon-right">
                <slot name="icon-right">
                    <component :is="props.iconRight" />
                </slot>
            </span>
        </span>
    </label>
</template>

<style scoped lang="sass">
.input
    display: inline-flex
    flex-direction: column
    gap: var(--space-xs)
    color: var(--color-fg)
    width: 100%

    .field-wrap
        position: relative
        display: flex
        align-items: center

        .field
            width: 100%
            border: 1px solid var(--color-border)
            border-radius: var(--radius-sm)
            background: var(--color-muted-bg)
            color: var(--color-fg)
            font: inherit
            line-height: 1.4
            outline: none
            padding: 0.5em 0.75em
            transition: border-color 0.15s ease, box-shadow 0.15s ease

            &::placeholder
                color: var(--color-muted-fg)

            &:focus-visible
                outline: none

            &:disabled
                opacity: 0.5
                cursor: not-allowed

    .icon
        display: inline-flex
        align-items: center
        justify-content: center
        flex: 0 0 auto
        color: var(--color-muted-fg)
        pointer-events: none

        svg
            width: 1.1em
            height: 1.1em
            display: block

    .field-wrap[data-icon-left] .field
        padding-left: 2.25em
    .field-wrap[data-icon-left] .icon-left
        position: absolute
        left: 0.6em
        top: 50%
        transform: translateY(-50%)

    .field-wrap[data-icon-right] .field
        padding-right: 2.25em
    .field-wrap[data-icon-right] .icon-right
        position: absolute
        right: 0.6em
        top: 50%
        transform: translateY(-50%)

    &[data-size="sm"]
        .field
            padding-top: 0.35em
            padding-bottom: 0.35em
            font-size: 0.8125rem
    &[data-size="md"]
        .field
            padding-top: 0.5em
            padding-bottom: 0.5em
            font-size: 0.9375rem
    &[data-size="lg"]
        .field
            padding-top: 0.65em
            padding-bottom: 0.65em
            font-size: 1.0625rem
</style>
