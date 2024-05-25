<template>
    <Transition appear mode="in-out">
        <div v-if="settings" :class="[language === 'en' ? 'right-0' : 'left-0']" class="top-0 h-fit w-fit fixed bg-neutral-800 z-[1] pt-12">
            <div @click="language = 'en'" class="px-7 py-2 hover:bg-neutral-700 text-slate-400">English</div>
            <div @click="language = 'ar'" class="px-7 py-2 hover:bg-neutral-700 text-slate-400">Arabic</div>
        </div>
    </Transition>
</template>

<script setup>
import { languageStore } from '../stores/languageStore';
import {statesStore} from '../stores/statesStore'
import { storeToRefs } from 'pinia';

const store = languageStore()
const states = statesStore()
const {settings} = storeToRefs(states)
const {language} = storeToRefs(store)
</script>

<style scoped>
.v-enter-from {
    transform: translateY(-100%);
}

.v-leave-to {
    transform: translateY(-100%)
}

.v-leave-active,
.v-enter-active {
    transition: all .5s ease;
}
</style>