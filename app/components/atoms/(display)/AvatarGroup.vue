<script setup lang="ts">
import { computed, useSlots, cloneVNode, Comment, Text } from "vue";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

const props = withDefaults(
    defineProps<{
        max?: number;
        size?: Size;
    }>(),
    { size: "md" },
);

const Vnode = (p: { node: unknown }) => p.node as never;

const slots = useSlots();

const children = computed(() => {
    const raw = slots.default?.() ?? [];
    return raw.filter(
        (n) =>
            n.type !== Comment &&
            !(n.type === Text && typeof n.children === "string" && !n.children.trim()),
    );
});

const overflow = computed(() =>
    props.max != null && children.value.length > props.max
        ? children.value.length - props.max
        : 0,
);

const shown = computed(() =>
    props.max != null ? children.value.slice(0, props.max) : children.value,
);

// Inherit group size into children that don't set their own.
const shownSized = computed(() =>
    shown.value.map((node) =>
        cloneVNode(node, { size: (node.props as any)?.size ?? props.size }),
    ),
);
</script>

<template>
    <div class="avatar-group">
        <Vnode v-for="(node, i) in shownSized" :key="i" :node="node" />
        <span v-if="overflow > 0" class="more" :data-size="size">+{{ overflow }}</span>
    </div>
</template>

<style scoped lang="sass">
.avatar-group
    display: inline-flex
    align-items: center

    & > *
        position: relative
        box-shadow: 0 0 0 2px var(--color-bg)
    & > * + *
        margin-left: -0.5em

    .more
        display: inline-flex
        align-items: center
        justify-content: center
        flex: 0 0 auto
        border-radius: var(--radius-pill)
        background: var(--color-muted-bg)
        color: var(--color-muted-fg)
        font-weight: 600
        box-sizing: border-box

        &[data-size="xs"]
            width: 1.5rem
            height: 1.5rem
            font-size: 0.625rem
        &[data-size="sm"]
            width: 2rem
            height: 2rem
            font-size: 0.75rem
        &[data-size="md"]
            width: 2.75rem
            height: 2.75rem
            font-size: 0.9375rem
        &[data-size="lg"]
            width: 3.5rem
            height: 3.5rem
            font-size: 1.125rem
        &[data-size="xl"]
            width: 4.5rem
            height: 4.5rem
            font-size: 1.375rem
</style>
