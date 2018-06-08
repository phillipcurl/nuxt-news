<template>
  <div class="app avenir">
    <app-navigation/>
    <main :class="{'sidebar--is-open': sidebarOpen}">
      <nuxt/>
      <app-footer/>
    </main>
    <app-sidebar title="Sidebar Title"
                 width="280px"
                 :is-open="sidebarOpen"
                 @close="$store.dispatch('closeMenu')">
      <ul class="list pv0 mv0 ph3">
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Orange</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Apple</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Peach</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Grape</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Grapefruit</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Kiwi</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Orange</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Apple</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Peach</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Grape</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Grapefruit</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Kiwi</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Orange</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Apple</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Peach</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Grape</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Grapefruit</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Kiwi</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Orange</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Apple</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Peach</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Grape</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Grapefruit</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Kiwi</li>
      </ul>
    </app-sidebar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppNavigation from '~/components/Navigation.vue';
import AppSidebar from '~/components/Sidebar/Sidebar.vue';
import AppFooter from '~/components/Footer.vue';

export default {
  computed: {
    ...mapGetters({
      sidebarOpen: 'sidebarOpen'
    })
  },
  // watch: {
  //   $route: function(value) {
  //     if (this.isOpen) {
  //       this.$store.dispatch('closeMenu');
  //     }
  //   }
  // },
  components: {
    AppNavigation,
    AppSidebar,
    AppFooter
  }
};
</script>

<style scoped>
main {
  min-height: 75vh;
  padding-top: 53px;
  width: 100%;
  transition: transform 0.2s ease;
  transform: translateX(0) !important;
}

main.sidebar--is-open {
  width: calc(100% -280px);
  transform: translateX(280px) !important;
}
</style>
