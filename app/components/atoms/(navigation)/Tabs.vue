<script setup lang="ts">
import { ref, provide } from "vue";

interface Tab {
    id: string;
    label: string;
}

const props = withDefaults(
    defineProps<{
        tabs: Tab[];
        modelValue?: string;
    }>(),
    { modelValue: "" },
);

const active = ref(props.modelValue || props.tabs[0]?.id || "");
provide("tabs", active);
</script>

<template>
    <div class="tabs">
        <div class="list" role="tablist">
            <button
                v-for="tab in tabs"
                :key="tab.id"
                class="tab"
                type="button"
                role="tab"
                :aria-selected="active === tab.id"
                :data-active="active === tab.id || undefined"
                @click="active = tab.id"
            >
                {{ tab.label }}
            </button>
        </div>
        <div class="panels">
            <slot :active="active" />
        </div>
    </div>
</template>

<style scoped lang="sass">
.tabs
    width: 100%

.list
    display: flex
    gap: var(--space-xs)
    border-bottom: 1px solid var(--color-border)
    margin-bottom: var(--space-md)

.tab
    padding: 0.5em 0.9em
    border: none
    border-bottom: 2px solid transparent
    background: transparent
    color: var(--color-muted-fg)
    font: inherit
    font-weight: 600
    cursor: pointer
    margin-bottom: -1px

    &:focus-visible
        outline: 2px solid currentColor
        outline-offset: 2px

    &[data-active]
        color: var(--color-fg)
        border-bottom-color: var(--color-info-fg)

.panels
    color: var(--color-fg)
</style>
