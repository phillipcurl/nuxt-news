<template>
  <article class="flex items-start justify-between ph3">
    <div class="flex-auto pr3-ns">
      <h3 class="f4 lh-title mt0 mb2" v-html="story.title" />
      <h4 class="f5 lh-title mt0">{{ story.source.name }}</h4>
    </div>
    <img class="w3 h3 w4-ns h-auto-ns" :src="story.urlToImage" />
  </article>
</template>

<script>
export default {
  props: ['story']
};
</script>

<style scoped>
</style>
