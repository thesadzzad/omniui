<script setup lang="ts">
defineProps<{
    text?: string;
}>();
</script>

<template>
    <small class="caption">
        <slot>{{ text }}</slot>
    </small>
</template>

<style scoped lang="sass">
.caption
    display: block
    color: var(--color-muted-fg)
    font-size: 0.75rem
    line-height: 1.4
</style>
