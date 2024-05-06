<!-- *Descrizione:
Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato.
Al caricamento della pagina, effettuate una chiama ajax all'API di Rick and Morty:
https://rickandmortyapi.com/api/character
Potete consultare la documentazione completa di API qui: https://rickandmortyapi.com/documentation -->
<!-- *Bonus:
Creare un componente loader da visualizzare fintantoché i risultati non sono pronti. -->

<script>
import axios from 'axios';

export default {
  components: {

  },

  data() {
    return {

    }
  },

  created() {
    axios
    .get("https://rickandmortyapi.com/api/character")
    .then((resp) => {
      console.log(resp);
    })
  }
}
</script>

<template>

</template>

<style lang="scss">

</style>