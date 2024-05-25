import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const statesStore = defineStore('states', () => {
    const sidebar = ref(false)
    const settings = ref(false)

    return {
        sidebar,
        settings,
    }
})