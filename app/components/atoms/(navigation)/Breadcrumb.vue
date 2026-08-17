<script setup lang="ts">
interface Crumb {
    label: string;
    to?: string;
}

withDefaults(
    defineProps<{
        items: Crumb[];
        separator?: string;
    }>(),
    { separator: "/" },
);
</script>

<template>
    <nav class="breadcrumb" aria-label="Breadcrumb">
        <ol>
            <li
                v-for="(item, i) in items"
                :key="i"
                class="crumb"
                :data-current="i === items.length - 1 || undefined"
            >
                <Anchor
                    v-if="item.to && i !== items.length - 1"
                    :to="item.to"
                >
                    {{ item.label }}
                </Anchor>
                <span v-else>{{ item.label }}</span>
                <span
                    v-if="i !== items.length - 1"
                    class="sep"
                    aria-hidden="true"
                >{{ separator }}</span>
            </li>
        </ol>
    </nav>
</template>

<style scoped lang="sass">
.breadcrumb
    ol
        display: flex
        flex-wrap: wrap
        align-items: center
        gap: var(--space-xs)
        margin: 0
        padding: 0
        list-style: none

    .crumb
        display: inline-flex
        align-items: center
        gap: var(--space-xs)
        color: var(--color-muted-fg)
        font-size: 0.875rem

        &[data-current]
            color: var(--color-fg)
            font-weight: 600
</style>
