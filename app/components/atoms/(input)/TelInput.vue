<script setup lang="ts">
import { PhNumpad } from "@phosphor-icons/vue";
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
    { modelValue: "", placeholder: "+15550000000", size: "md", disabled: false },
);

const emit = defineEmits<{
    "update:modelValue": [value: string];
}>();
</script>

<template>
    <Input
        :model-value="modelValue"
        type="tel"
        inputmode="numeric"
        digits-only
        :label="label"
        :placeholder="placeholder"
        :size="size"
        :disabled="disabled"
        @update:model-value="emit('update:modelValue', $event)"
    >
        <template #icon-left>
            <PhNumpad />
        </template>
    </Input>
</template>
