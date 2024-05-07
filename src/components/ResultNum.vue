<script>
import { store } from "../store.js";

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">
        <p>{{ store.characters.length }} personaggi trovati:</p>
    </div>
</template>

<style scoped lang="scss">

</style>