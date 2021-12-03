<template>
  <section id="about" class="bg-blue-500">
    <div class="container sm:py-20">
      <!-- Section title -->
      <div class="flex flex-col w-full mb-12 text-center">
        <h1 class="mb-2 text-3xl sm:text-4xl">About Me</h1>
        <h3 class="mx-auto text-sm">My introduction</h3>
      </div>

      <!-- Section content -->
      <div class="flex flex-col items-center justify-center lg:flex-row">
        <div class="flex items-center justify-center w-full bg-black lg:w-1/2">
          <img
            class="object-cover object-center w-56 rounded-full"
            alt="hero"
            src="~@/assets/images/cartoon.jpg"
          />
        </div>
        <div class="flex flex-col justify-center w-full bg-red-500 lg:w-1/2">
          <p class="text-lg">
            Web developer, with extensive knowledge and years of experience, working in web
            technologies and mobile, delivering quality work.
          </p>
          <p class="text-lg">
            I am a self-taught developer with a passion for learning and problem solving. I am a
            team player and a fast learner.
          </p>
          <div class="flex flex-row justify-between my-4">
            <div class="flex flex-col items-center bg-teal-900">
              <div class="flex flex-row items-center">
                <span class="text-2xl font-bold">03</span><i class="uil uil-plus"></i>
              </div>
              <div class="text-base">Years</div>
              <div class="text-base">experiences</div>
            </div>
            <div class="flex flex-col items-center bg-teal-900">
              <div class="flex flex-row items-center">
                <span class="text-2xl font-bold">03</span><i class="uil uil-plus"></i>
              </div>
              <div class="text-base">Projects</div>
              <div class="text-base">completed</div>
            </div>
            <div class="flex flex-col items-center bg-teal-900">
              <div class="flex flex-row items-center">
                <span class="text-2xl font-bold">03</span><i class="uil uil-plus"></i>
              </div>
              <div class="text-base">Languages</div>
              <div class="text-base">known</div>
            </div>
          </div>
          <!-- buton -->
          <div class="flex flex-row mt-4">
            <button class="icon primary">
              Download CV
              <i class="uil uil-download-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Base extends Vue {}
</script>
