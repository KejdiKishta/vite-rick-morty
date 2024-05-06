<script>
export default {
    props: {
        cardInfo: Object,
    }
}
</script>

<template>
    <div class="card border-0 bg-transparent">
        <img :src="cardInfo.image" class="card-img-top rounded-circle ms_shadow" :alt="cardInfo.name">
        <div class="card-body">
            <p class="card-text fs-4 text-center ms_height">{{ cardInfo.name }}</p>
            <p class="card-text text-center">{{ cardInfo.status }} <br> {{ cardInfo.species }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.ms_shadow {
    box-shadow: 0 0 8px#888888;
}
</style>