<script setup>
import { reactive, ref, watch } from "vue";

const volume = ref(0);
const movie = ref("");
const movieInfo = ref({
  title: "",
  actor: "",
});
const state = reactive({
  name: "",
  lastName: "",
});
//Ejecutar watcher cuando se produce un cambio
watch(volume, (newValue, oldValue) => {
  if (newValue > oldValue && newValue === 16) {
    alert("Listening to a high volume may damage your hearing");
  }
});
//Ejecutar watcher cuando carga la página
watch(
  movie,
  (newValue) => {
    console.log(`Calling API with movie name ${newValue}`);
  },
  {
    immediate: true,
  }
);
//Ejecutar watcher en arrays y objetos
watch(
  movieInfo,
  (newValue) => {
    console.log(
      `Calling API with movie title ${newValue.title} and actor ${newValue.actor}`
    );
  },
  {
    deep: true,
  }
);
//Ejecutar watcher en múltiples referencias/sources
watch([volume, movie], (newValues, oldValues) => {
  console.log(`Volume: ${newValues[0]} - ${oldValues[0]}`);
  console.log(`Movie: ${newValues[1]} - ${oldValues[1]}`);
});

//Ejecutar watcher usando reactive
watch(
  () => state.name,
  (newValue, oldValue) => {
    console.log(`New Name: ${newValue}`);
    console.log(`Old Name: ${oldValue}`);
  }
);
//Ejecutar watcher usando reactive con varios atributos
watch(
  () => {
    return { ...state };
  },
  (newValue, oldValue) => {
    console.log(`New Name: ${newValue.name} ${newValue.lastName}`);
    console.log(`Old Name: ${oldValue.name} ${oldValue.lastName}`);
  }
);
</script>
<template>
  <h2>Volumen tracker (0-20)</h2>
  <h3>Current volume - {{ volume }}</h3>
  <button @click="volume += 2">Increase</button>
  <button @click="volume -= 2">Decrease</button>
  <h2>Movies</h2>
  <input type="text" v-model="movie" />
  <input type="text" v-model="movieInfo.title" />
  <input type="text" v-model="movieInfo.actor" />
  <h2>Names</h2>
  <input type="text" v-model="state.name" />
  <input type="text" v-model="state.lastName" />
</template>
