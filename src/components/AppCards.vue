<script>
// import componenti
import Card from './Card.vue';

export default {
    // componenti
    components: {
        Card
    },
    props: {
        // chiave : tipo di dato
        characters: Array,
    },
}
</script>

<template>
    <div class="container m-auto">
        <div class="row justify-content-around">
            <!-- nel v-for utilizziamo il props a cui nell'app.vue assegneremo l'array di axios -->
            <div v-for="character in characters" class="col-sm-6 col-md-4 col-lg-3">
                <!-- utilizzo del component e assegnazione del props -->
                <Card :cardInfo="character" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>