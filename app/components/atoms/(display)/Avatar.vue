<script setup lang="ts">
import { computed } from "vue";
import { PhUser } from "@phosphor-icons/vue";

type Size = "xs" | "sm" | "md" | "lg" | "xl";
type Shape = "circle" | "square" | "squircle";

const props = withDefaults(
    defineProps<{
        src?: string;
        alt?: string;
        name?: string;
        size?: Size;
        shape?: Shape;
        ring?: boolean;
        status?: "online" | "busy" | "away" | "offline";
    }>(),
    {
        size: "md",
        shape: "circle",
        ring: false,
    },
);

const initials = computed(() => {
    if (!props.name) return "";
    return props.name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase() ?? "")
        .join("");
});
</script>

<template>
    <span class="avatar" :data-type="shape" :data-size="size" :data-ring="ring || undefined">
        <span class="media">
            <img
                v-if="src"
                class="img"
                :src="src"
                :alt="alt ?? name ?? 'avatar'"
            />
            <span v-else-if="initials" class="initials">{{ initials }}</span>
            <span v-else class="icon">
                <PhUser weight="bold" />
            </span>
        </span>

        <span v-if="status" class="status" :data-status="status" />
    </span>
</template>

<style scoped lang="sass">
.avatar
    position: relative
    display: inline-flex
    align-items: center
    justify-content: center
    flex: 0 0 auto
    background: var(--color-muted-bg)
    color: var(--color-muted-fg)
    font-weight: 600
    user-select: none
    vertical-align: middle

    .media
        display: flex
        align-items: center
        justify-content: center
        width: 100%
        height: 100%
        overflow: hidden
        border-radius: inherit

    &[data-type="circle"]
        border-radius: var(--radius-pill)
    &[data-type="square"]
        border-radius: var(--radius-md)
    &[data-type="squircle"]
        border-radius: 30%

    /* Story ring */
    &[data-ring]
        border: 0.15em solid var(--color-error-fg)
        padding: 0.15em
        box-sizing: border-box

        .media
            border-radius: inherit

    /* Sizes */
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

    .img
        width: 100%
        height: 100%
        object-fit: cover
        display: block

    .icon
        display: inline-flex
        align-items: center
        justify-content: center

        svg
            width: 60%
            height: 60%
            display: block

    /* Status dot */
    .status
        position: absolute
        right: 0
        bottom: 0
        transform: translate(25%, 25%)
        width: 28%
        height: 28%
        min-width: 0.625rem
        min-height: 0.625rem
        border-radius: var(--radius-pill)
        border: 2px solid var(--color-bg)
        box-sizing: border-box

    &[data-type="circle"] .status
        right: 5%
        bottom: 5%
        transform: none

    .status[data-status="online"]
        background: var(--color-success-fg)
    .status[data-status="busy"]
        background: var(--color-warning-fg)
    .status[data-status="away"]
        background: var(--color-error-fg)
    .status[data-status="offline"]
        background: var(--color-neutral-fg)
</style>
