<script setup lang="ts">
import {
    PhBellSimpleRinging,
    PhHeartBreak,
    PhWarningOctagon,
    PhSealCheck,
    PhLightbulb,
    PhX,
} from "@phosphor-icons/vue";

const icons = {
    neutral: PhBellSimpleRinging,
    info: PhLightbulb,
    success: PhSealCheck,
    warning: PhWarningOctagon,
    error: PhHeartBreak,
} as const;

defineProps<{
    variant?: "neutral" | "info" | "success" | "warning" | "error";
    dismissible?: boolean;
    title?: string;
}>();

defineEmits<{
    dismiss: [];
}>();
</script>

<template>
    <div class="alert" :data-variant="variant ?? 'info'" role="alert">
        <span class="icon">
            <slot name="icon">
                <component :is="icons[variant ?? 'info']" weight="fill" />
            </slot>
        </span>
        <div class="text">
            <p v-if="title" class="title">{{ title }}</p>
            <slot />
        </div>
        <button
            v-if="dismissible"
            class="dismiss"
            type="button"
            aria-label="Dismiss"
            @click="$emit('dismiss')"
        >
            <slot name="dismiss">
                <PhX weight="bold" />
            </slot>
        </button>
    </div>
</template>

<style scoped lang="sass">
.alert
    width: 100%
    padding: var(--space-md)
    border-radius: var(--radius-md)
    display: grid
    grid-template-columns: auto 1fr auto
    align-items: flex-start
    gap: var(--space-sm)
    .icon
        display: flex
        justify-content: center
        align-items: center
        flex: 0 0 auto
        font-size: 1.5rem
        line-height: 1.4
        svg
            width: 1em
            height: 1em
            display: block
    .text
        font-size: 0.9375rem
        line-height: 1.4
        min-width: 0
    .title
        font-size: 1rem
        font-weight: 600
        margin: 0 0 0.25em

    .dismiss
        flex: 0 0 auto
        display: inline-flex
        align-items: center
        justify-content: center
        width: 1.75rem
        height: 1.75rem
        padding: 0
        border: none
        border-radius: var(--radius-sm)
        background: transparent
        color: inherit
        font-size: 1.25rem
        line-height: 1
        cursor: pointer
        opacity: 0.7
        transition: background-color 0.15s ease, opacity 0.15s ease
        &:hover
            opacity: 1
            background: rgba(127, 127, 127, 0.18)
        &:focus-visible
            outline: 2px solid currentColor
            outline-offset: 2px
            opacity: 1
        svg
            width: 1em
            height: 1em
            display: block
    &[data-variant="neutral"]
        color: var(--color-neutral-fg)
        background: var(--color-neutral-bg)

    &[data-variant="info"]
        color: var(--color-info-fg)
        background: var(--color-info-bg)

    &[data-variant="success"]
        color: var(--color-success-fg)
        background: var(--color-success-bg)

    &[data-variant="warning"]
        color: var(--color-warning-fg)
        background: var(--color-warning-bg)

    &[data-variant="error"]
        color: var(--color-error-fg)
        background: var(--color-error-bg)
</style>
