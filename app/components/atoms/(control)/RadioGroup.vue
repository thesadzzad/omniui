<script setup lang="ts">
type Variant = "neutral" | "info" | "success" | "warning" | "error";
type Size = "sm" | "md" | "lg";

interface Option {
    value: string | number | boolean;
    label?: string;
    variant?: Variant;
    disabled?: boolean;
}

const props = withDefaults(
    defineProps<{
        modelValue?: string | number | boolean | null;
        options: Option[];
        name?: string;
        size?: Size;
        direction?: "row" | "col";
        disabled?: boolean;
    }>(),
    { modelValue: null, size: "md", direction: "col", disabled: false },
);

const emit = defineEmits<{
    "update:modelValue": [value: string | number | boolean];
}>();
</script>

<template>
    <div
        class="radio-group"
        :data-dir="direction"
        role="radiogroup"
    >
        <Radio
            v-for="opt in options"
            :key="String(opt.value)"
            :model-value="props.modelValue"
            :value="opt.value"
            :name="name"
            :variant="opt.variant"
            :size="size"
            :disabled="disabled || opt.disabled"
            :label="opt.label"
            @update:model-value="emit('update:modelValue', $event)"
        />
    </div>
</template>

<style scoped lang="sass">
.radio-group
    display: inline-flex
    gap: var(--space-sm)

    &[data-dir="row"]
        flex-direction: row
        align-items: center
    &[data-dir="col"]
        flex-direction: column
        align-items: flex-start
</style>
