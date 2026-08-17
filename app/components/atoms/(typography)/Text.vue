<script setup lang="ts">
withDefaults(
    defineProps<{
        size?: "sm" | "md" | "lg";
    }>(),
    { size: "md" },
);
</script>

<template>
    <p class="text" :data-size="size">
        <slot />
    </p>
</template>

<style scoped lang="sass">
.text
    margin: 0
    color: var(--color-fg)
    line-height: 1.6

    &[data-size="sm"]
        font-size: 0.875rem
    &[data-size="md"]
        font-size: 1rem
    &[data-size="lg"]
        font-size: 1.125rem
</style>
