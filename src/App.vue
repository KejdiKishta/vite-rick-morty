<!-- *Descrizione:
Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato.
Al caricamento della pagina, effettuate una chiama ajax all'API di Rick and Morty:
https://rickandmortyapi.com/api/character
Potete consultare la documentazione completa di API qui: https://rickandmortyapi.com/documentation -->
<!-- *Bonus:
Creare un componente loader da visualizzare fintantoché i risultati non sono pronti. -->

<script>
import axios from 'axios';
import AppCard from './components/AppCard.vue';

export default {
  components: {
    AppCard
  },

  data() {
    return {
      characters: [],
    }
  },

  created() {
    axios
    .get("https://rickandmortyapi.com/api/character")
    .then((resp) => {
      this.characters = resp.data.results;
      console.log(this.characters);
    })
  }
}
</script>

<template>
  <h1 class="text-center py-5">Rick and Morty App</h1>

  <AppCard />
</template>

<style lang="scss">

</style>