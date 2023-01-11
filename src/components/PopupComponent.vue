<script setup>
import { ref } from "vue";
//const emit = defineEmits(["close"]);
// Validation
const emit = defineEmits({
  close: (name) => {
    if (!name) {
      return false;
    } else {
      return true;
    }
  },
});
const name = ref("");
</script>
<template>
  <div>
    <h2>This is a popup</h2>
    <input type="text" v-model="name" />
    <button @click="emit('close', name)">Close Popup</button>
  </div>
</template>
