<script setup>
defineProps({
  content: String,
});
</script>

<template>
  <div class="card">
    <div id="header"><slot name="header" /></div>
    <div id="content"><slot /></div>
    <div id="footer"><slot name="footer" /></div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 16px;
  margin-bottom: 20px;
  width: 200px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
