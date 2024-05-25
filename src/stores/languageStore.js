import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const languageStore = defineStore('language', () => {
    const languages = ref(['ar', 'en'])
    const language = ref('en')

    const quran = computed(() => {
        return language.value === 'en' ? "Qur'an" : '----'
    })

    return {
        languages,
        language,
        quran,
    }
})