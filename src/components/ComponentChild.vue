<script setup>
import { inject } from "vue";
const username = inject("USERNAME");
</script>
<template>
  <div>Usuario: {{ username }}</div>
</template>
