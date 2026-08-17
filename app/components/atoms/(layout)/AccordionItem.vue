<script setup lang="ts">
import { inject, computed } from "vue";
import { PhCaretDown } from "@phosphor-icons/vue";
import Label from "../(typography)/Label.vue";

const props = defineProps<{
    title: string;
    index?: number;
}>();

const accordion = inject<{
    open: { value: Set<number> };
    toggle: (i: number) => void;
}>("accordion", { open: { value: new Set() }, toggle: () => {} });

const id = computed(() => props.index ?? 0);
const isOpen = computed(() => accordion.open.value.has(id.value));
</script>

<template>
    <div class="item" :data-open="isOpen || undefined">
        <button
            class="header"
            type="button"
            :aria-expanded="isOpen"
            @click="accordion.toggle(id)"
        >
            <Label>{{ title }}</Label>
            <PhCaretDown class="caret" weight="bold" />
        </button>
        <div class="panel">
            <div class="body">
                <div class="content">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="sass">
.item
    background: transparent
    border-bottom: 1px solid var(--color-border)

.header
    display: flex
    align-items: center
    justify-content: space-between
    gap: var(--space-sm)
    width: 100%
    padding: 0.6em 0
    border: none
    background: transparent
    color: var(--color-fg)
    font: inherit
    font-weight: 600
    text-align: left
    cursor: pointer

    &:focus-visible
        outline: 2px solid currentColor
        outline-offset: -2px

    .caret
        flex: 0 0 auto
        width: 1.1em
        height: 1.1em
        transition: transform 0.18s ease

.item[data-open] .caret
    transform: rotate(180deg)

.panel
    display: grid
    grid-template-rows: 0fr
    transition: grid-template-rows 0.25s ease

.item[data-open] .panel
    grid-template-rows: 1fr

.body
    overflow: hidden
    min-height: 0

.content
    color: var(--color-muted-fg)
    line-height: 1.5
    padding-bottom: 0.5em
</style>
