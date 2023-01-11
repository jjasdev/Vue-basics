<script setup>
import { toRefs } from "vue";
const props = defineProps({
  name: String,
  company: String,
});
const { name, company } = toRefs(props);
</script>
<template>
  <div>Hello {{ name }} by {{ company }}</div>
</template>
