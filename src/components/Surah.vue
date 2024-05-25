<template>
    <div v-if="language === 'en'" class="text-slate-300 py-1">
        <p class="text-center">{{currentSurah.index}} {{ currentSurah.name }}</p>
        <div v-for="(verse, key, index) in currentSurah.verse" :key="index">
            <div class="px-3">{{ index +  1 + '.' }}  {{ verse }}</div>
        </div>
    </div>
    <div v-else>
        <p class="text-center">{{ currentSurah.name }}{{ currentSurah.index }}</p>
        <div v-for="(verse, key, index) in currentSurah.verse" :key="index">
            <div class="px-3">{{ verse }} {{ '.' + index +  1 }}</div>
        </div>
    </div>
</template>

<script setup>
import {languageStore} from '../stores/languageStore'
import { quranStore } from '../stores/quranStore';
import { storeToRefs } from 'pinia';

const quran = quranStore()
const store = languageStore()
const {language} = storeToRefs(store)
const {currentSurah} = storeToRefs(quran)

</script>

<style scoped>

</style>