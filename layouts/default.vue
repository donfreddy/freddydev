<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow">
      <Nuxt />
    </main>
    <Footer />

    <!-- Back to top button -->
    <back-to-top visibleoffset="800">
      <button
        class="fixed bottom-0 right-0 m-6 rounded-md md:m-10 loader icon primary"
        aria-label="Back to top"
      >
       <i class="uil uil-angle-double-up"></i>
      </button>
    </back-to-top>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BackToTop from 'vue-backtotop';
// import { UilAngleDoubleUp } from '@iconscout/vue-unicons';

@Component({
  components: {
    BackToTop,
    //  UilAngleDoubleUp,
  },
  beforeMount() {
    const color = localStorage.getItem('THEME_COLOR') || 'green';
    document.documentElement.setAttribute('data-accent', color);
  },
})
export default class Default extends Vue {}
</script>

<style scoped>
@keyframes loader-translate {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
.loader {
  border-right-color: transparent;
  animation: loader-translate 1s alternate infinite;
}
</style>
