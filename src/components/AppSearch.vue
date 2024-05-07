<script>
import { store } from "../store.js";

export default {
    data() {
        return {
            store,
            options: ["All", "Alive", "Dead", "Unknown"],
        }
    },
    methods: {

    }
}
</script>

<template>
    <div class="container pb-5">
        <label for="status" class="px-2">Filter by status:</label>
        <select name="status" id="status" @change="$emit('filter')" v-model="store.selectedStatus">
            <option :value="item" v-for="item in options">{{ item }}</option>
        </select>
    </div>
</template>

<style scoped lang="scss">

</style>