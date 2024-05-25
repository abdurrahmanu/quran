<template>
    <Transition appear mode="in-out" :name="language === 'en' ? 'english' : 'arabic'">
        <div v-if="sidebar" class="max-w-[200px] w-[100%] h-[100dvh] max-h-[200px]:h-full max-w-[200px]:absolute fixed top-0 bg-neutral-800 transition-all text-slate-300 z-[2]" :class="[language === 'ar' ? 'right-0' : 'left-0', sidebar ? 'block' : 'hidden']">
            <div class="font-bold text-right"><Cancel @click="sidebar = false" class="w-6 inline"/></div>
        </div>
    </Transition>
</template>

<script setup>
import SurahNames from './SurahNames.vue';
import Cancel from './icons/Cancel.vue';
import {languageStore} from '../stores/languageStore'
import {statesStore} from '../stores/statesStore'
import { storeToRefs } from 'pinia';

const store = languageStore()
const states = statesStore()
const {sidebar} = storeToRefs(states)
const {language} = storeToRefs(store)
</script>

<style scoped>
.english-enter-from {
    transform: translateX(-100%);
}

.english-leave-to {
    transform: translateX(-100%)
}

.arabic-enter-from {
    transform: translateX(100%);
}

.arabic-leave-to {
    transform: translateX(100%)
}

.v-leave-active,
.v-enter-active {
    transition: all .5s ease;
}
</style>