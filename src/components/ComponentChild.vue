<script setup>
import { inject } from "vue";
const title = inject("TITLE");
const count = inject("COUNTER");
const dataUser = inject("DATA_USER");
const incrementCount = inject("incrementCount");
// Con default value
// const usernameDefault = inject("USERNAME", "Default value");
</script>
<template>
  <div>
    <p>{{ title }}</p>
    <p>Usuario: {{ dataUser.name }}</p>
    <p>Company: {{ dataUser.company }}</p>
  </div>
  <div>Likes: {{ count }} {{ dataUser.count }}</div>
  <button @click="incrementCount">Like from child</button>
</template>
