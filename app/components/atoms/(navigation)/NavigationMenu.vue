<script setup lang="ts">
interface Item {
    label: string;
    to?: string;
    active?: boolean;
    disabled?: boolean;
}

withDefaults(
    defineProps<{
        items: Item[];
        orientation?: "horizontal" | "vertical";
    }>(),
    { orientation: "vertical" },
);
</script>

<template>
    <nav
        class="nav-menu"
        :data-orientation="orientation"
        aria-label="Navigation"
    >
        <Anchor
            v-for="(item, i) in items"
            :key="i"
            class="item"
            :to="item.to"
            :disabled="item.disabled"
            :data-active="item.active || undefined"
        >
            {{ item.label }}
        </Anchor>
    </nav>
</template>

<style scoped lang="sass">
.nav-menu
    display: flex
    gap: var(--space-xs)

    &[data-orientation="vertical"]
        flex-direction: column
        align-items: flex-start

    &[data-orientation="horizontal"]
        flex-direction: row
        align-items: center

    .item
        padding: 0.4em 0.7em
        border-radius: var(--radius-sm)
        color: var(--color-muted-fg)

        &:hover
            color: var(--color-fg)
            text-decoration: none
            background: var(--color-muted-bg)

        &[data-active]
            color: var(--color-fg)
            font-weight: 600
            background: var(--color-muted-bg)
</style>
