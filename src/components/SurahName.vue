<template>
    <div @click="singleSurah(index, language)" class="text-slate-400 py-2 px-3 hover:bg-neutral-700 whitespace-nowrap text-sm">
        <span class="font-mono text-xs">{{ language === 'en' ? index + 1 + '.' : '' }}</span> {{ language === 'en' ? name.title : name.titleAr }}
    </div>
</template>

<script setup>
import SurahName from './SurahName.vue';
import {languageStore} from '../stores/languageStore'
import { quranStore } from '../stores/quranStore';
import { storeToRefs } from 'pinia';

const quran = quranStore()
const store = languageStore()
const {language} = storeToRefs(store)
const {surahNames, surahsArabic, surahsEnglish} = storeToRefs(quran)
const {singleSurah} = quran

const props = defineProps({
    name: Object,
    index: Number,
})
</script>

<style scoped>

</style>