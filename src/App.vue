<!-- ?FATTO -->
<!-- *Descrizione:
Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato.
Al caricamento della pagina, effettuate una chiama ajax all'API di Rick and Morty:
https://rickandmortyapi.com/api/character
Potete consultare la documentazione completa di API qui: https://rickandmortyapi.com/documentation -->
<!-- *Bonus:
Creare un componente loader da visualizzare fintantoché i risultati non sono pronti. -->

<!-- *Descrizione:
Continuate a lavorare nella stessa repo di ieri e aggiungete una select per filtrare i risultati in base al status:  alive, dead, unknown.
Quando l'utente seleziona un valore dalla lista, viene effettuata una chiamata alle API con lo status corrispondente. -->
<!-- *Come dovete procedere:
1. Create il file dello store globale per salvare la variabile del selectedStatus
2. Creare il componente AppSearch dove dovete inserire il select con delle options: alive, dead, unknown (create gli options dinamicamente tramite v-for)
3. Inserire il componente AppSearch nel App.vue
4. Create evento al cambiamento del valore del select in AppSearch. In App.vue inserite ascolto dell'evento e eseguite console.log per verificare se l'evento funzioni.
5. Collegare tramite v-model il select al selectedStatus dello store (nel componente AppSearch)
6. Nell App.vue importare lo store e in base al valore del selectedStatus fare la chiamata api. Nel then aggiornare i la lista di personaggi.
-->
<!-- *Bonus:
1. Fare refactorin dell'app, inserendo la lista dei personaggi nello store globale
2. Creare un componente che mostri il numero totale di risultati ottenuti. -->

<script>
// import componenti
import { store } from "./store.js";
import axios from 'axios';
import AppCards from './components/AppCards.vue';
import AppSearch from './components/AppSearch.vue';
import ResultNum from './components/ResultNum.vue';

export default {
  components: {
    AppCards,
    AppSearch,
    ResultNum
  },

  data() {
    return {
      store
    }
  },

  created() {
    this.logStatus()
  },

  methods: {
    logStatus: function () {
      console.log(store.selectedStatus);

      // array vuoto che conterrà il filtro selezionato
      let statusObj= {}

      // aggiungiamo il filtro selezionato nella variabile solo se è diverso da All perchè non è uno status nell'API se vogliamo tutti il params deve essere vuoto
      if (this.store.selectedStatus !== "All") {
        statusObj.status = this.store.selectedStatus
      }

      console.log(statusObj);

      // chiamata axios con il parametro selezionato
      axios
      .get("https://rickandmortyapi.com/api/character", { params: statusObj })
      .then((resp) => {
        // copio il risultato del get nell'array
        this.store.characters = resp.data.results;
        console.log(this.store.characters);
      })

    }
  }
}
</script>

<template>
  <h1 class="text-center py-5">Rick and Morty App</h1>

  <!-- filter è stato creato nel componente con $emit per poter ascoltare il cambiamento del valore di select -->
  <AppSearch @filter="logStatus"/>

  <ResultNum />

  <AppCards :characters="store.characters"/>
</template>

<style lang="scss">

</style>