<template>
  <section id="home">
    <!-- <div class="container max-w-screen-xl px-4 mx-auto py-14 md:py-28 lg:py-40 sm:px-6">
      <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
        <div class="flex flex-col justify-center order-1 mt-6 bg-blue-500 lg:mt-0 lg:space-y-3">
          <SocialIcon name="github" link="https://" />
          <SocialIcon name="twitter" link="https://" />
          <SocialIcon name="linkedin" link="https://" />
        </div>

        <div class="max-w-lg bg-green-600 lg:mx-12 lg:order-2">
          <h1 class="text-3xl font-semibold">Hi, I'am Don Freddy</h1>
          <h3 class="py-2 mb-2 font-medium text-md text-fgLightColor">Full-stack Developer</h3>
          <p class="mb-6 text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati modi voluptatibus
            quo officiis laborum quibusdam vitae nemo sint? Eaque, minus totam quia ipsam
            reprehenderit ex facilis quidem laboriosam qui ad.
          </p>

          <button class="icon primary">
            Download CV
            <i class="uil uil-download-alt"></i>
          </button>
        </div>

        <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            class="object-cover object-center w-56 rounded-full"
            alt="hero"
            src="~@/assets/images/cartoon.jpg"
          />
        </div>
      </div>
    </div>
    <div class="mt-48">
      <a href="#" class="flex items-center">
        <i class="uil uil-mouse-alt text-acColor"></i>
        <span class="mx-2">Scroll down</span>
        <i class="uil text-acColor loader uil-arrow-down"></i>
      </a>
    </div> -->
    <div class="container py-0 space-y-12 lg:py-20">
      <div class="flex flex-col py-12 space-y-12 lg:space-y-0 lg:py-24 lg:flex-row lg:items-center">
        <!-- Home data -->
        <div class="flex items-center justify-center w-full lg:justify-start lg:w-1/2">
          <div class="max-w-lg text-center lg:text-left">
            <h1 class="text-3xl font-semibold lg:text-4xl">Hi, I'am Don Freddy</h1>
            <h3 class="py-2 uppercase text-acColor ">Full-stack Developer</h3>
            <p class="mt-2 text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias
              vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos
              accusantium cumque.
            </p>
            <div class="flex justify-center mt-6 lg:justify-start">
              <a
                href="#"
                class="px-2 py-1.5 font-semibold text-center text-white transition-colors duration-200 transform rounded-md bg-acColor"
              >
                Get in touch
                <i class="uil loader uil-envelope-upload-alt"></i>
                 <!-- <i class="ml-4 uil loader uil-download-alt"></i> -->
              </a>
              <a
                href="#"
                class="px-2 py-1.5 ml-2 font-semibold text-center text-white transition-colors duration-200 transform rounded-md bg-acColor"
              >
                View portfolio
              <!-- <i class="uil loader uil-arrow-down"></i> -->
              <i class="uil uil-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Home logo -->
        <div class="flex items-center justify-center w-full lg:w-1/2">
          <home-logo
            v-tooltip="name"
            :active-color="active"
            class="object-fill w-full h-full max-w-2xl rounded-md focus:outline-none"
          ></home-logo>
        </div>
      </div>

      <!-- Scroll button -->
      <!-- <a href="#" class="flex items-center">
        <i class="uil uil-mouse-alt text-acColor"></i>
        <span class="mx-2">Scroll down</span>
        <i class="uil text-acColor loader uil-arrow-down"></i>
      </a> -->

      <div class="hidden lg:flex">
        <a href="#" class="mb-0 arrow-container">
          <div class="arrow"></div>
          <div class="arrow"></div>
          <div class="arrow"></div>
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
