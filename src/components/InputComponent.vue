<script setup>
defineProps({
  modelValue: String,
});
let emit = defineEmits(["update:modelValue"]);
</script>
<template>
  <input
    type="text"
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>
