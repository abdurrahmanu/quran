<template>
    <div class="text-slate-400 py-2 px-3 hover:bg-neutral-700 whitespace-nowrap text-sm">
        <span class="font-mono text-xs">{{ index + 1 }}.</span> {{ name.title }}
    </div>
</template>

<script setup>
const props = defineProps({
    name: Object,
    index: Number,
})

</script>

<style scoped>

</style>