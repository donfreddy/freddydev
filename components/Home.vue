<template>
  <section id="about">
    <div class="container py-0 space-y-12 sm:py-20">
      <div
        class="grid items-center justify-center grid-cols-1 gap-10 py-8 text-center  sm:py-20 sm:gap-0 sm:grid-cols-2"
      >
        <div class="max-w-lg text-center sm:text-left">
          <h1 class="text-3xl font-semibold lg:text-4xl">Hi, I'am Don Freddy</h1>
          <h3 class="py-2 uppercase">Full-stack Developer</h3>
          <p class="mt-2 text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero
            magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium
            cumque.
          </p>

          <a href="#" class="mt-4">
            <button class="icon primary">
              Get in touch
              <i class="uil loader uil-envelope-upload-alt"></i>
            </button>
          </a>
        </div>

        <!-- Home logo -->
        <div class="justify-center mb-8 text-center">
          <home-logo
            v-tooltip="name"
            :active-color="active"
            class="object-fill w-full h-full max-w-2xl rounded-md focus:outline-none"
          >
          </home-logo>
        </div>
      </div>

      <!-- Scroll button -->
      <div class="h-1/4">
        <!-- Scroll button -->
        <a href="#about" class="items-center justify-center hidden sm:flex">
          <i class="text-5xl uil uil-mouse-alt text-acColor"></i>
          <span>Scroll down</span>
          <i class="text-3xl uil text-acColor loader uil-arrow-down"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Home extends Vue {
  name: string = 'Developer activity'; // Activité des développeurs
}
</script>

<style>
@keyframes loader-translate {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
}

.loader {
  border-right-color: transparent;
  animation: loader-translate 1s alternate infinite;
}
</style>
