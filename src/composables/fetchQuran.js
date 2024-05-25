import {ref, computed} from 'vue'

export function Quran(url, item) {
  const surahNames_en = ref({})
  const surahNames_ar = ref({})
  const surahVerse_en = ref({})
  const surahVerse_ar = ref({})
  const surahs_en = ref({})
  const surahs_ar = ref({})

  return {
    surahNames_ar,
    surahNames_en,
    surahVerse_ar,
    surahVerse_en,
    surahs_ar,
    surahs_en
  }
}