import { reactive } from "vue";

export const store = reactive({
    // array di destinazione axios
    characters: [],
    selectedStatus: "All"
});