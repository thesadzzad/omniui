<script setup lang="ts">
import { computed } from "vue";
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";

const props = withDefaults(
    defineProps<{
        modelValue?: number;
        total: number;
        size?: "sm" | "md" | "lg";
    }>(),
    { modelValue: 1, size: "md" },
);

const emit = defineEmits<{
    "update:modelValue": [value: number];
}>();

const pages = computed(() => {
    const t = props.total;
    const cur = props.modelValue;
    const out: (number | "…")[] = [1];
    if (t <= 7) {
        for (let i = 2; i <= t; i++) out.push(i);
        while (out.length < 7) out.push("");
        return out;
    } else if (cur <= 4) {
        for (let i = 2; i <= 5; i++) out.push(i);
        out.push("…");
    } else if (cur >= t - 3) {
        out.push("…");
        for (let i = t - 4; i <= t - 1; i++) out.push(i);
    } else {
        out.push("…");
        out.push(cur - 1, cur, cur + 1);
        out.push("…");
    }
    out.push(t);
    return out;
});

function go(n: number) {
    if (n < 1 || n > props.total || n === props.modelValue) return;
    emit("update:modelValue", n);
}
</script>

<template>
    <nav class="pagination" :data-size="size" aria-label="Pagination">
        <button
            class="nav"
            type="button"
            :disabled="modelValue <= 1"
            aria-label="Previous"
            @click="go(modelValue - 1)"
        >
            <PhCaretLeft weight="bold" />
        </button>
        <TransitionGroup name="pg" tag="span" class="cells">
            <span
                v-for="(p, i) in pages"
                :key="i"
                :class="p === '…' || p === '' ? 'gap' : 'page'"
                :data-active="p === modelValue || undefined"
                :aria-current="p === modelValue ? 'page' : undefined"
            >
                <button
                    v-if="p !== '…' && p !== ''"
                    type="button"
                    class="cell-btn"
                    @click="go(p)"
                >
                    {{ p }}
                </button>
                <template v-else>{{ p === "" ? "" : "…" }}</template>
            </span>
        </TransitionGroup>
        <button
            class="nav"
            type="button"
            :disabled="modelValue >= total"
            aria-label="Next"
            @click="go(modelValue + 1)"
        >
            <PhCaretRight weight="bold" />
        </button>
    </nav>
</template>

<style scoped lang="sass">
.pagination
    display: inline-flex
    align-items: center
    gap: var(--space-xs)

    .cells
        display: inline-flex
        align-items: center
        gap: var(--space-xs)

    .nav
        display: inline-flex
        align-items: center
        justify-content: center
        width: 2em
        height: 2em
        padding: 0
        border: 1px solid var(--color-border)
        border-radius: var(--radius-sm)
        background: var(--color-muted-bg)
        color: var(--color-fg)
        font: inherit
        cursor: pointer
        transition: background-color 0.15s ease, border-color 0.15s ease, opacity 0.15s ease

        &:disabled
            opacity: 0.4
            cursor: not-allowed

        &:focus-visible
            outline: 2px solid currentColor
            outline-offset: 2px

    &[data-size="sm"] .nav
        width: 1.6em
        height: 1.6em
        font-size: 0.8125rem
    &[data-size="lg"] .nav
        width: 2.4em
        height: 2.4em
        font-size: 1.0625rem

    .page,
    .gap
        display: inline-flex
        align-items: center
        justify-content: center
        width: 2em
        height: 2em
        border: 1px solid var(--color-border)
        border-radius: var(--radius-sm)
        background: var(--color-muted-bg)
        color: var(--color-fg)
        transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease, transform 0.15s ease

    .cell-btn
        display: inline-flex
        align-items: center
        justify-content: center
        width: 100%
        height: 100%
        padding: 0
        border: none
        background: transparent
        color: inherit
        font: inherit
        cursor: pointer

        &:focus-visible
            outline: 2px solid currentColor
            outline-offset: 2px

    .page[data-active]
        background: var(--color-fg)
        color: var(--color-bg)
        border-color: var(--color-fg)
        font-weight: 600

    .gap
        color: var(--color-muted-fg)

    &[data-size="sm"] .page,
    &[data-size="sm"] .gap
        width: 1.6em
        height: 1.6em
        font-size: 0.8125rem
    &[data-size="lg"] .page,
    &[data-size="lg"] .gap
        width: 2.4em
        height: 2.4em
        font-size: 1.0625rem

.pg-enter-active,
.pg-leave-active
    transition: opacity 0.18s ease, transform 0.18s ease

.pg-enter-from,
.pg-leave-to
    opacity: 0
    transform: scale(0.8)
</style>
