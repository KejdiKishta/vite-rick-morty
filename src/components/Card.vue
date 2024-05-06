<script>
export default {
    props: {
        cardInfo: Object,
    }
}
</script>

<template>
    <div class="card border-0">
        <img :src="cardInfo.image" class="card-img-top rounded-circle" :alt="cardInfo.name">
        <div class="card-body">
            <p class="card-text fs-2 text-center">{{ cardInfo.name }}</p>
            <p class="card-text text-center">{{ cardInfo.status }} <br> {{ cardInfo.species }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>