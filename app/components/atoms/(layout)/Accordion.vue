<script setup lang="ts">
import { ref, provide } from "vue";

const props = withDefaults(
    defineProps<{
        multiple?: boolean;
    }>(),
    { multiple: false },
);

const open = ref<Set<number>>(new Set());

function toggle(index: number) {
    if (props.multiple) {
        const next = new Set(open.value);
        next.has(index) ? next.delete(index) : next.add(index);
        open.value = next;
    } else {
        open.value = open.value.has(index) ? new Set() : new Set([index]);
    }
}

provide("accordion", { open, toggle });
</script>

<template>
    <div class="accordion">
        <slot />
    </div>
</template>

<style scoped lang="sass">
.accordion
    display: flex
    flex-direction: column
    width: 100%
</style>
