<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
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

const props = defineProps<{
    variant?: "neutral" | "info" | "success" | "warning" | "error";
    dismissible?: boolean;
    duration?: number;
}>();

const emit = defineEmits<{
    dismiss: [];
}>();

const dismissed = ref(false);

function close() {
    dismissed.value = true;
    emit("dismiss");
}

let timer: ReturnType<typeof setTimeout> | undefined;

onMounted(() => {
    if (props.duration && props.duration > 0) {
        timer = setTimeout(close, props.duration);
    }
});

onBeforeUnmount(() => {
    if (timer) clearTimeout(timer);
});
</script>

<template>
    <Transition name="banner-slide">
        <div
            v-if="!dismissed"
            class="banner"
            :data-variant="variant ?? 'info'"
            role="alert"
        >
            <span class="icon">
                <slot name="icon">
                    <component :is="icons[variant ?? 'info']" weight="fill" />
                </slot>
            </span>
            <div class="text">
                <slot />
            </div>
            <div class="actions">
                <slot name="action" />
                <button
                    v-if="dismissible"
                    class="dismiss"
                    type="button"
                    aria-label="Dismiss"
                    @click="close"
                >
                    <PhX weight="bold" />
                </button>
            </div>
        </div>
    </Transition>
</template>

<style scoped lang="sass">
.banner
    position: fixed
    top: 0
    left: 0
    right: 0
    z-index: 1000
    width: 100%
    padding: var(--space-sm) var(--space-md)
    border-radius: 0
    border-bottom: none
    display: grid
    grid-template-columns: 1fr auto 1fr
    align-items: center
    gap: var(--space-sm)
    .icon
        display: flex
        justify-content: center
        align-items: center
        flex: 0 0 auto
        width: 1.5rem
        height: 1.5rem
        font-size: 1.25rem
        line-height: 1
        svg
            width: 1em
            height: 1em
            display: block
    .text
        font-size: 0.9375rem
        line-height: 1.4
        min-width: 0
        text-align: center

    .actions
        display: inline-flex
        align-items: center
        justify-content: flex-end
        gap: var(--space-xs)
        flex: 0 0 auto

    .dismiss
        display: inline-flex
        align-items: center
        justify-content: center
        width: 1.5rem
        height: 1.5rem
        padding: 0
        border: none
        border-radius: var(--radius-sm)
        background: transparent
        color: inherit
        font-size: 1.25rem
        line-height: 1
        cursor: pointer

        &:focus-visible
            outline: 2px solid currentColor
            outline-offset: 2px

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

.banner-slide-leave-active
    transition: transform 0.3s ease, opacity 0.3s ease

.banner-slide-leave-to
    transform: translateY(-100%)
    opacity: 0
</style>
