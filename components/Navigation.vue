<template>
  <nav class="fixed w-100 pa3 bg-white bb b--black-10 navigation">
    <nuxt-link to="/" class="link dim v-mid black b f5 dib mr3" title="Home">Company</nuxt-link>
    <nuxt-link to="/users" class="link dim v-mid mid-gray f5 dib mr3" title="Home">Users</nuxt-link>
    <nuxt-link to="/about" class="link dim v-mid mid-gray f5 dib mr3" title="About">About</nuxt-link>
    <nuxt-link to="/contact" class="link dim v-mid mid-gray f5 dib" title="Contact">Contact</nuxt-link>
    <button @click="openSidebar()" class="btn-reset mid-gray v-mid f2 dib fr sidebar-toggle" type="button"></button>
  </nav>
</template>

<script>
export default {
  methods: {
    openSidebar() {
      this.$store.dispatch('toggleMenu');
    }
  }
};
</script>

<style scoped>
.navigation {
  top: 0;
  left: 0;
  z-index: 1000;
  height: 53px;
}
.sidebar-toggle {
  margin-top: -25px;
  outline: none;
  border: none;
  background: transparent;
}
.sidebar-toggle:before {
  content: '\2261';
}
.sidebar-toggle:hover {
  cursor: pointer;
}
</style>
