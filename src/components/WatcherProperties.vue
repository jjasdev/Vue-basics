<script setup>
import { ref, watch } from "vue";

const volume = ref(0);
const movie = ref("");
const movieInfo = ref({
  title: "",
  actor: "",
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
</script>
<template>
  <h2>Volumen tracker (0-20)</h2>
  <h3>Current volume - {{ volume }}</h3>
  <button @click="volume += 2">Increase</button>
  <button @click="volume -= 2">Decrease</button>
  <input type="text" v-model="movie" />
  <input type="text" v-model="movieInfo.title" />
  <input type="text" v-model="movieInfo.actor" />
</template>
