<template>
    <div id="app">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import "@fontsource/jetbrains-mono";

onBeforeMount(() => {
    const theme = localStorage.getItem("data-theme") || "dark";
    document.documentElement.setAttribute("data-theme", theme);
});
</script>

<style scoped>
/* ===== Reset ===== */
:global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:global(html),
:global(body),
:global(#app) {
    width: 100%;
    height: 100%;
    background-color: var(--color-bg);
    color: var(--color-fg);
}

:global(body) {
    line-height: 1;
    font-family: "JetBrains Mono", system-ui, sans-serif;
    padding: 12px;
}

/* ===== Radius ===== */
:global(html) {
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-pill: 9999px;
    --radius-none: 0;
}

/* ===== Spacing ===== */
:global(html) {
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
}

:global([data-theme="dark"]) {
    color-scheme: dark;
    /* Base */
    --color-bg: #1a1a1a;
    --color-fg: #f5f5f5;
    --color-muted-fg: #b8b9b6;
    --color-muted-bg: #2e2e2e;
    --color-accent-fg: #f2f3f0;
    --color-accent-bg: #111111;
    --color-border: #2e2e2e;
    /* Status */
    --color-neutral-fg: #c4c4c4;
    --color-neutral-bg: #2a2a2a;
    --color-error-fg: #ff5c33;
    --color-error-bg: #24100b;
    --color-warning-fg: #ff8400;
    --color-warning-bg: #291c0f;
    --color-info-fg: #b2b2ff;
    --color-info-bg: #222229;
    --color-success-fg: #b6ffce;
    --color-success-bg: #222924;
}
</style>
