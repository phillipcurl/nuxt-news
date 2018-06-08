<template>
  <div class="container">
    <!-- <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" /> -->
    <h1 class="title">
      NEWS
    </h1>
    <div v-if="loadingWeather">
      LOADING WEATHER
    </div>
    <no-ssr>
      <weather
          v-if="!loadingWeather" 
          api-key="11fcbeefa79897d7a0d2af907557818b"
          title="Weather"
          :latitude="lat"
          :longitude="long"
          language="en"
          units="us">
      </weather>
    </no-ssr>
    <section class="measure-wide center">
      <story-card
        v-for="(article, index) in articles"
        :key="index"
        :story="article"
        class="mb4"
      />
      <!-- <article class="w-100 br2 shadow-3"
           v-for="(article, index) in articles"
           :key="index">
        <a :href="article.url" class="link" target="_blank">
          <div class="aspect-ratio aspect-ratio--6x4">
            <div class="aspect-ratio--object cover"
                 style="border-top-left-radius: 0.25rem; border-top-right-radius: 0.25rem;" 
                 :style="`background:url(${article.urlToImage}) center;`"></div>
          </div>
          <div class="pa3">
            <h3 class="f3 lh-title b mt0 mb2">{{ article.title }}</h3>
            <p class="f5 lh-copy mt0">
              {{ article.title }}
            </p>
          </div>
        </a>
      </article> -->
    </section>
  </div>
</template>

<script>
// import axios from '~/plugins/axios';
import VueWeatherWidget from 'vue-weather-widget';
import 'vue-weather-widget/dist/css/vue-weather-widget.css';
import StoryCard from '~/components/StoryCard';

export default {
  async asyncData({ app }) {
    const { articles } = await app.$axios.$get(
      `https://newsapi.org/v2/top-headlines?language=en&pageSize=50&apiKey=${
        process.env.NEWS_API_KEY
      }`
    );

    // const weather = await app.$axios.$get(
    //   `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${
    //     process.env.WEATHER_API_KEY
    //   }`
    // );

    return { articles };
  },
  data() {
    return {
      online: true,
      users: [],
      loadingWeather: true,
      lat: 0,
      long: 0
    };
  },
  head() {
    return {
      title: 'Home'
    };
  },
  mounted() {
    console.log('articles: ', this.articles);
    // console.log('weather: ', this.weather);
    if (!window.navigator) {
      this.online = false;
      return;
    }
    this.online = Boolean(window.navigator.onLine);
    console.log('navigator: ', navigator);
    window.addEventListener('offline', this._toggleNetworkStatus);
    window.addEventListener('online', this._toggleNetworkStatus);
    navigator.geolocation.getCurrentPosition(this._geoSuccess);
  },
  destroyed() {
    window.removeEventListener('offline', this._toggleNetworkStatus);
    window.removeEventListener('online', this._toggleNetworkStatus);
  },
  methods: {
    _toggleNetworkStatus({ type }) {
      this.online = type === 'online';
    },
    _geoSuccess(position) {
      console.log('geo success. position is: ', position);
      this.lat = `${position.coords.latitude}`;
      this.long = `${position.coords.longitude}`;
      this.loadingWeather = false;
    }
  },
  components: {
    weather: VueWeatherWidget,
    StoryCard
  }
};
</script>

<style scoped>
.services-list {
  padding: 0 0.75rem;
}
.services-list article {
  width: calc(100%-1.5rem);
  margin-bottom: 1.5rem;
}
/* @media (min-width: 768px) {
  .services-list article {
    width: calc(50%-1.5rem);
  }
} */
</style>
