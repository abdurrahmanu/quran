<script setup>
import { ref, onMounted, onBeforeMount, watch, watchEffect } from 'vue'
import Head from './components/Head.vue';
import Sidebar from './components/Sidebar.vue';
import Settings from './components/Settings.vue';
import SurahNames from './components/SurahNames.vue';
import {languageStore} from './stores/languageStore'
import { quranStore } from './stores/quranStore';
import { storeToRefs } from 'pinia';

const quran = quranStore()
const store = languageStore()
const {language} = storeToRefs(store)
const {surahNames, surahsArabic, surahsEnglish} = storeToRefs(quran)

onBeforeMount( async () => {
  surahNames.value = await getSurahsNames()
  
  for (let index = 1; index < 114; index++) {
    surahsArabic.value.push(await getASurah(index))
  }

  for (let index = 1; index < 114; index++) {
    surahsEnglish.value.push(await getASurahEn(index))
  }
  })

async function getSurahsNames(num) {
  const surahs = `https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah.json`;
  let res = await fetch(surahs)
  return await res.json()
}

async function getASurah(num) {
    const surah_text = `https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah/surah_${num}.json`;
    let res = await fetch(surah_text)
    return await res.json()
}

async function getASurahEn(num) {
    const surah_text = `https://raw.githubusercontent.com/semarketir/quranjson/master/source/translation/en/en_translation_${num}.json`;
    let res = await fetch(surah_text)
    return await res.json()
}
</script>

<template>
  <div v-if="surahNames.length">
    <div class="flex flex-col h-[100%] selection:bg-none">
      <Head />
      <div :class="[language === 'en' ? 'flex-col' : 'flex-col-reverse']" class="max-w-[1100px] max-h-[100dvh] overflow-y-auto mx-auto shadow-md shadow-black w-[100%] flex">
        <SurahNames/>
        <div class="sm:w-[80%] bg-neutral-900 h-full overflow-y-auto w-[100%]"></div>
      </div>
    </div>
    <Sidebar />
    <Settings />
  </div>
  <div v-else>asdfasdf</div>
</template>


