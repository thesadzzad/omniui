<script setup lang="ts">
type Variant = "neutral" | "info" | "success" | "warning" | "error";
type Size = "sm" | "md" | "lg";

type Value = string | number | boolean;

interface Option {
    value: Value;
    label?: string;
    variant?: Variant;
    disabled?: boolean;
}

const props = withDefaults(
    defineProps<{
        modelValue?: Value[];
        options: Option[];
        name?: string;
        size?: Size;
        direction?: "row" | "col";
        disabled?: boolean;
    }>(),
    { modelValue: () => [], size: "md", direction: "col", disabled: false },
);

const emit = defineEmits<{
    "update:modelValue": [value: Value[]];
}>();

function toggle(opt: Option) {
    if (props.disabled || opt.disabled) return;
    const current = props.modelValue ?? [];
    const next = current.includes(opt.value)
        ? current.filter((v) => v !== opt.value)
        : [...current, opt.value];
    emit("update:modelValue", next);
}
</script>

<template>
    <div
        class="checkbox-group"
        :data-dir="direction"
        role="group"
    >
        <Checkbox
            v-for="opt in options"
            :key="String(opt.value)"
            :model-value="(modelValue ?? []).includes(opt.value)"
            :indeterminate="false"
            :variant="opt.variant"
            :size="size"
            :disabled="disabled || opt.disabled"
            :label="opt.label"
            @update:model-value="toggle(opt)"
        />
    </div>
</template>

<style scoped lang="sass">
.checkbox-group
    display: inline-flex
    gap: var(--space-sm)

    &[data-dir="row"]
        flex-direction: row
        align-items: center
    &[data-dir="col"]
        flex-direction: column
        align-items: flex-start
</style>
