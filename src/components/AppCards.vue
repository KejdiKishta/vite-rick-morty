<script>
import Card from './Card.vue';

export default {
    components: {
        Card
    },
    props: {
        characters: Array,
    },
}
</script>

<template>
    <div class="container m-auto">
        <div class="row justify-content-around">
            <div class="col col-sm-6 col-md-4 col-lg-3" v-for="character in characters">
                <Card :cardInfo="character" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>