import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const quranStore = defineStore('quran', () => {
    const surahNames = ref({})
    const surahsArabic = ref([])
    const surahsEnglish = ref([])

    return {
        surahNames,
        surahsArabic,
        surahsEnglish
    }
})