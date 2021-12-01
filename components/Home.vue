<template>
  <section id="home" class="">
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
    <div
      class="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center"
    >
      <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
        <div class="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
          <SocialIcon name="github" link="https://" />
          <SocialIcon name="twitter" link="https://" />
          <SocialIcon name="linkedin" link="https://" />
        </div>

        <div class="max-w-lg lg:mx-12 lg:order-2">
          <h1 class="text-3xl font-medium tracking-wide lg:text-4xl">
            Hi, I'am Don Freddy
          </h1>
          <p class="mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero
            magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium
            cumque.
          </p>
          <div class="mt-6">
            <a
              href="#"
              class="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform rounded-md bg-acColor lg:inline"
              > Download CV</a
            >
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
        <home-logo
          :active-color="active"
          class="object-fill w-full h-full max-w-2xl rounded-md"
        ></home-logo>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Home extends Vue {}
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
