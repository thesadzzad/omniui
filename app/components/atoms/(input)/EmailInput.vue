<script lang="ts">
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
</script>

<script setup lang="ts">
import { computed } from "vue";
import { PhAt } from "@phosphor-icons/vue";
import Input from "./Input.vue";

type Size = "sm" | "md" | "lg";

const props = withDefaults(
    defineProps<{
        modelValue?: string;
        label?: string;
        placeholder?: string;
        size?: Size;
        disabled?: boolean;
        regex?: RegExp;
    }>(),
    {
        modelValue: "",
        placeholder: "name@example.com",
        size: "md",
        disabled: false,
        regex: EMAIL_RE,
    },
);

const emit = defineEmits<{
    "update:modelValue": [value: string];
}>();

// Non-empty and failing the pattern → show warning.
const invalid = computed(
    () => !!props.modelValue && !props.regex.test(props.modelValue),
);
</script>

<template>
    <div class="email-input">
        <Input
            :model-value="modelValue"
            type="email"
            :label="label"
            :placeholder="placeholder"
            :size="size"
            :disabled="disabled"
            :data-invalid="invalid || undefined"
            @update:model-value="emit('update:modelValue', $event)"
        >
            <template #icon-left>
                <PhAt />
            </template>
        </Input>
        <Transition name="warn">
            <p v-if="invalid" class="warning" role="alert">
                Please enter a valid email address.
            </p>
        </Transition>
    </div>
</template>

<style scoped lang="sass">
.email-input
    width: 100%

.warning
    margin: 0.25em 0 0
    font-size: 0.8125rem
    color: var(--color-error-fg)

.warn-enter-active,
.warn-leave-active
    transition: opacity 0.18s ease, transform 0.18s ease

.warn-enter-from,
.warn-leave-to
    opacity: 0
    transform: translateY(-4px)
</style>
