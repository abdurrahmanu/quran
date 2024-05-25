import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const quranStore = defineStore('quran', () => {
    const surahNames = ref({})
    const surahsArabic = ref([])
    const surahsEnglish = ref([])
    const currentSurah = ref({})
    const singleSurah = (index, language) => {
        if (language === 'ar') {
            currentSurah.value = surahsArabic.value[index]
        } else {
            currentSurah.value = surahsEnglish.value[index]
        }
    }
    return {
        surahNames,
        surahsArabic,
        surahsEnglish,
        currentSurah,
        singleSurah
    }
})