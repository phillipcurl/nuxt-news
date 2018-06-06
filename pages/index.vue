<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      NEWS
    </h1>
     <div class="column is-one-quarter"
          v-for="(article, index) in articles"
          :key="index">
      <a :href="article.url" target="_blank">
        <div class="card">
          <div class="card-image">
            <figure class="image is-3by2">
              <img :src="article.urlToImage" :alt="article.title">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">{{ article.title }}</div>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
// import axios from '~/plugins/axios';

export default {
  async asyncData({ app }) {
    const { articles } = await app.$axios.$get(
      `https://newsapi.org/v2/top-headlines?language=en&pageSize=50&apiKey=${
        process.env.API_KEY
      }`
    );

    return { articles };
  },
  head() {
    return {
      title: 'Users'
    };
  },
  mounted() {
    console.log('articles: ', this.articles);
  }
};
</script>

<style scoped>
.title {
  margin: 30px 0;
}
.users {
  list-style: none;
  margin: 0;
  padding: 0;
}
.user {
  margin: 10px 0;
}
</style>
