<template>
    <div class="bg-neutral-800 w-[20%] hidden sm:block overflow-y-auto">
        <SurahName v-for="(name, index) in surahNames" :name="name" :index="index" :key="index"/>
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

</script>

<style scoped>

</style>