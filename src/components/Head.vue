<template>
    <header :class="[language === 'ar' ? 'flex-row-reverse' : 'flex-row']" class="flex justify-between px-3 sticky top-0 left-0 bg-neutral-900 py-2 text-slate-200 text-xl font-cursive shadow-sm shadow-black z-[2]">
        <div :class="[language === 'en' ? '' : 'flex-row-reverse']" class="flex gap-1 items-center">
            <More class="w-5 sm:hidden" @click="sidebar = true"/> 
            <div class="font-bold px-2">{{ quran  }}</div>
        </div>
        <Settings v-if="!settings" @click="settings = true" class="w-6"/>
        <Cancel @click="settings = false" v-else class="w-5"/>
    </header>
</template>

<script setup>
import {watchEffect} from 'vue'
import { languageStore } from '../stores/languageStore';
import {statesStore} from '../stores/statesStore'
import Settings from './icons/Settings.vue';
import Cancel from './icons/Cancel.vue'
import More from './icons/More.vue';
import { storeToRefs } from 'pinia';

const store = languageStore()
const states = statesStore()
const {sidebar, settings} = storeToRefs(states)
const {language, quran} = storeToRefs(store)
</script>


















