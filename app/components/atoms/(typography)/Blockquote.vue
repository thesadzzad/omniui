<script setup lang="ts">
defineProps<{
    cite?: string;
}>();
</script>

<template>
    <blockquote class="quote">
        <p class="text"><slot /></p>
        <footer v-if="cite" class="cite">— {{ cite }}</footer>
    </blockquote>
</template>

<style scoped lang="sass">
.quote
    margin: 0
    padding-left: 1em
    border-left: 3px solid var(--color-border)
    color: var(--color-muted-fg)

    .text
        margin: 0
        font-style: italic
        line-height: 1.6

    .cite
        margin-top: 0.35em
        font-size: 0.8125rem
        color: var(--color-fg)
</style>
