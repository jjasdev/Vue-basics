<script setup>
const name = "Juanjo";
const isPromoted = true;
const isError = true;
const highlightColor = "orange";
const headerSize = 20;
const headerStyleObject = {
  color: "green",
  fontSize: "50px",
};
</script>

<template>
  <h2 class="underline">Underlined title</h2>
  <div>Hello {{ name }}</div>
  <p :class="isPromoted && 'promoted'">Promoted movie</p>
  <p :class="isError ? 'red' : 'blue'">Movie</p>
  <p :class="['underline', 'blue']">Summary of the movie</p>
  <p :style="{ color: highlightColor, 'font-size': headerSize + 'px' }">
    Inline style
  </p>
  <p :style="headerStyleObject">Object style</p>
</template>

<style scoped>
.underline {
  text-decoration: underline;
}
.promoted {
  font-style: italic;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
