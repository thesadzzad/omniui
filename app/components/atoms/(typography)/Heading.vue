<script setup lang="ts">
withDefaults(
    defineProps<{
        level?: 1 | 2 | 3 | 4 | 5 | 6;
    }>(),
    { level: 2 },
);
</script>

<template>
    <component :is="`h${level}`" class="heading">
        <slot />
    </component>
</template>

<style scoped lang="sass">
.heading
    margin: 0
    color: var(--color-fg)
    font-weight: 700
    line-height: 1.25

    &:is(h1)
        font-size: 2.25rem
    &:is(h2)
        font-size: 1.75rem
    &:is(h3)
        font-size: 1.375rem
    &:is(h4)
        font-size: 1.125rem
    &:is(h5)
        font-size: 1rem
    &:is(h6)
        font-size: 0.875rem
</style>
