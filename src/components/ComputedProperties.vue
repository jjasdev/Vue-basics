<script setup>
import { ref, computed } from "vue";
const firstName = ref("Bruce");
const lastName = ref("Wayne");
const items = ref([
  {
    id: 1,
    title: "TV",
    price: 100,
  },
  {
    id: 2,
    title: "Phone",
    price: 200,
  },
  {
    id: 3,
    title: "Mobile",
    price: 300,
  },
]);
const fullName = computed({
  get() {
    return `${firstName.value} ${lastName.value}`;
  },
  set(value) {
    const names = value.split(" ");
    firstName.value = names[0];
    lastName.value = names[1];
  },
});
const total = computed(() =>
  items.value.reduce((total, curr) => (total = total + curr.price), 0)
);
const expensiveItems = computed(() =>
  items.value.filter((item) => item.price > 100)
);

function changeFullName() {
  fullName.value = "Clark Kent";
}
</script>
<template>
  <h2>Full name - {{ fullName }}</h2>
  <button @click="changeFullName">Change fullname</button>
  <button @click="items.push({ id: 4, title: 'Keyboard', price: 50 })">
    Add item
  </button>
  <h2>Total - {{ total }}</h2>
  <template v-for="item in items" :key="item.id">
    <h2 v-if="item.price > 100">{{ item.title }} {{ item.price }}</h2>
  </template>
  <h2 v-for="item in expensiveItems" :key="item.id">
    {{ item.title }} {{ item.price }}
  </h2>
</template>
