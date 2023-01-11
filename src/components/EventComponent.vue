<script setup>
import { ref } from "vue";
const name = ref("Name");
const count = ref(0);
function changeName(event) {
  name.value = "Juanjo";
  console.log("Event", event);
}
function increment(num, event) {
  count.value += num;
  console.log("Event", event);
}
function decrement(num, event) {
  count.value -= num;
  console.log("Event", event);
}
</script>
<template>
  <h2>{{ name }}</h2>
  <div>
    <button @click="changeName($event)">Change name</button>
  </div>
  <h2>{{ count }}</h2>
  <div>
    <button @click="increment(5, $event)">Increment</button>
    <button @click="decrement(5, $event)">Decrement</button>
  </div>
</template>
