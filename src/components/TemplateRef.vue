<script setup>
import { ref, onMounted } from "vue";
const inputRef = ref(null);
onMounted(() => {
  inputRef.value.focus();
});
</script>
<template>
  <div><input type="text" ref="inputRef" /></div>
</template>
