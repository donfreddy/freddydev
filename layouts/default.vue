<template>
  <div class="flex flex-col min-h-screen mx-auto">
    <Header />
    <main class="container flex-grow mx-auto">
      <!--Page content -->
      <Nuxt />
    </main>
    <Footer />

    <!-- Back to top button -->
    <back-to-top visibleoffset="800">
      <button
        class="fixed bottom-0 right-0 p-2 m-10 text-white transition-colors duration-500 rounded-md  d bg-orangeColor hover:bg-orange-400 focus:outline-none"
        aria-label="Back to top"
      >
        <!-- heroicons: chevron-up -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </back-to-top>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BackToTop from 'vue-backtotop';

@Component({
  components: {
    BackToTop,
  },
  beforeMount() {
    const color = localStorage.getItem('THEME_COLOR') || 'green';
    document.documentElement.setAttribute('data-accent', color);
  },
})
export default class Default extends Vue {}
</script>

<style scoped>
@keyframes loader-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader {
  border-right-color: transparent;
  animation: loader-rotate 10s linear infinite;
}
.back-to-top {
  animation-direction: alternate;
  /* -webkit-animation: action 1s infinite alternate;
  animation: action 1s infinite alternate; */
}
</style>
