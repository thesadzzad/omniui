<script setup lang="ts">
import { ref } from "vue";
import { PhFingerprint, PhEye, PhEyeSlash } from "@phosphor-icons/vue";
import Input from "./Input.vue";

type Size = "sm" | "md" | "lg";

const props = withDefaults(
    defineProps<{
        modelValue?: string;
        label?: string;
        placeholder?: string;
        size?: Size;
        disabled?: boolean;
    }>(),
    {
        modelValue: "",
        placeholder: "Enter password",
        size: "md",
        disabled: false,
    },
);

const emit = defineEmits<{
    "update:modelValue": [value: string];
}>();

const revealed = ref(false);
</script>

<template>
    <Input
        :model-value="modelValue"
        :type="revealed ? 'text' : 'password'"
        :label="label"
        :placeholder="placeholder"
        :size="size"
        :disabled="disabled"
        @update:model-value="emit('update:modelValue', $event)"
    >
        <template #icon-left>
            <PhFingerprint />
        </template>
        <template #icon-right>
            <button
                v-if="!disabled"
                class="reveal"
                type="button"
                :aria-label="revealed ? 'Hide password' : 'Show password'"
                @click="revealed = !revealed"
            >
                <Transition name="eye-fade" mode="out-in">
                    <component
                        :key="revealed ? 'slash' : 'eye'"
                        :is="revealed ? PhEyeSlash : PhEye"
                    />
                </Transition>
            </button>
        </template>
    </Input>
</template>

<style scoped lang="sass">
.reveal
    display: inline-flex
    align-items: center
    justify-content: center
    padding: 0
    border: none
    background: transparent
    color: inherit
    font: inherit
    cursor: pointer
    line-height: 1
    pointer-events: auto

    svg
        width: 1.1em
        height: 1.1em
        display: block

    &:focus-visible
        outline: 2px solid currentColor
        outline-offset: 2px
        border-radius: var(--radius-sm)

.eye-fade-enter-active,
.eye-fade-leave-active
    transition: opacity 0.18s ease

.eye-fade-enter-from,
.eye-fade-leave-to
    opacity: 0
</style>
