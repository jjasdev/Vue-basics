<script setup>
import { ref } from "vue";
const names = ref([
  {
    firstName: "Bruce",
    lastName: "Wayne",
  },
  {
    firstName: "Clark",
    lastName: "Kent",
  },
  {
    firstName: "Princess",
    lastName: "Diana",
  },
]);
</script>
<template>
  <div v-for="name in names" :key="name.firstName">
    <h2>Name</h2>
    <!-- NORMAL
        <slot :firstName="name.firstName" :lastName="name.lastName" /> -->
    <!-- DESTRUCTURING -->
    <slot name="users" :fullName="name" />
  </div>
</template>
