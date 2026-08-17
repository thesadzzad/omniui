<script setup lang="ts">
type Dir = "row" | "col";
type Gap = "xs" | "sm" | "md" | "lg" | "xl";

withDefaults(
    defineProps<{
        direction?: Dir;
        gap?: Gap;
        align?: "start" | "center" | "end" | "stretch";
        justify?: "start" | "center" | "end" | "between";
    }>(),
    { direction: "col", gap: "md", align: "stretch", justify: "start" },
);
</script>

<template>
    <div
        class="stack"
        :data-dir="direction"
        :data-gap="gap"
        :data-align="align"
        :data-justify="justify"
    >
        <slot />
    </div>
</template>

<style scoped lang="sass">
.stack
    display: flex

    &[data-dir="row"]
        flex-direction: row
    &[data-dir="col"]
        flex-direction: column

    &[data-gap="xs"]
        gap: var(--space-xs)
    &[data-gap="sm"]
        gap: var(--space-sm)
    &[data-gap="md"]
        gap: var(--space-md)
    &[data-gap="lg"]
        gap: var(--space-lg)
    &[data-gap="xl"]
        gap: var(--space-xl)

    &[data-align="start"]
        align-items: flex-start
    &[data-align="center"]
        align-items: center
    &[data-align="end"]
        align-items: flex-end
    &[data-align="stretch"]
        align-items: stretch

    &[data-justify="start"]
        justify-content: flex-start
    &[data-justify="center"]
        justify-content: center
    &[data-justify="end"]
        justify-content: flex-end
    &[data-justify="between"]
        justify-content: space-between
</style>
