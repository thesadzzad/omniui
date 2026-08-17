<script setup lang="ts">
withDefaults(
    defineProps<{
        muted?: boolean;
    }>(),
    { muted: false },
);
</script>

<template>
    <span class="label" :data-muted="muted || undefined">
        <slot />
    </span>
</template>

<style scoped lang="sass">
.label
    display: inline-block
    color: var(--color-fg)
    font-size: 0.8125rem
    font-weight: 600
    letter-spacing: 0.02em

    &[data-muted]
        color: var(--color-muted-fg)
        font-weight: 500
</style>
