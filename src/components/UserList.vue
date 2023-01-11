<script setup>
import { ref } from "vue";
const names = ref([
  {
    firstName: "Bruce",
    lastName: "Wayne",
    email: "bw@gmail.com",
  },
  {
    firstName: "Clark",
    lastName: "Kent",
    email: "ck@gmail.com",
  },
  {
    firstName: "Princess",
    lastName: "Diana",
    email: "pd@gmail.com",
  },
]);
function remove(item) {
  names.value = names.value.filter((entry) => entry.email !== item.email);
}
</script>
<template>
  <h2>Users: <slot name="userlist" :data="names" :count="names.length" /></h2>
  <template v-for="user in names" :key="user.firstName">
    <slot name="users" :data="user" :remove="remove" />
  </template>
</template>
