<script setup>
import axios from "axios";
import { ref } from "vue";

const posts = ref([]);
const errorMsg = ref("");
function getPosts() {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => (posts.value = response.data))
    .catch((error) => (errorMsg.value = `Error: ${error}`));
}
</script>
<template>
  <button @click="getPosts">Post</button>
  <div v-for="post in posts" :key="post.id">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <hr />
  </div>
  <div>{{ errorMsg }}</div>
</template>
