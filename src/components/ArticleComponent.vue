<script>
export default {
  inheritAttrs: false,
};
</script>
<script setup>
import { ref, toRefs } from "vue";

const name = ref("Article");
const props = defineProps({
  title: String,
  likes: Number,
  isPublished: Boolean,
  resume: {
    type: String,
    required: true,
    default: "Resume of the article",
  },
});
const { title } = toRefs(props);
</script>
<template>
  <div>
    <h2 v-bind="$attrs">{{ name }} component</h2>
    <h3>{{ title }}</h3>
    <h4>{{ resume }}</h4>
    <h3>Likes: {{ likes }}</h3>
    <h3>Published: {{ isPublished ? "Yes" : "No" }}</h3>
  </div>
</template>
