<template>
  <section id="about">
    <div class="container py-12 space-y-10 sm:space-y-28 sm:py-28">
      <!-- Title -->
      <div class="grid items-center grid-cols-1 text-center">
        <h1 class="text-3xl sm:text-4xl">About Me</h1>
        <h3 class="mt-2 text-sm">My introduction</h3>
      </div>

      <!-- content -->
      <div class="grid items-center grid-cols-1 sm:gap-0 sm:grid-cols-2">
        <div class="flex justify-center">
          <img
            class="object-cover object-center w-56 rounded-full"
            alt="hero"
            src="~@/assets/images/cartoon.jpg"
          />
        </div>
        <div class="mt-6 sm:mt-0">
          <p class="text-lg text-center sm:text-left">
            Web developer, with extensive knowledge and years of experience, working in web
            technologies and mobile, delivering quality work. I am a self-taught developer with a
            passion for learning and problem solving. I am a team player and a fast learner. Web
            developer, with extensive knowledge and years of experience, working in web technologies
            and mobile, delivering quality work.
          </p>

          <div class="grid grid-cols-3 gap-0 my-10 sm:gap-8 gap md:gap-24">
            <div class="flex flex-col items-center ">
              <div class="flex flex-row items-center justify-center">
                <span class="text-2xl font-bold">03</span><i class="uil uil-plus"></i>
              </div>
              <div class="text-base">Years</div>
              <div class="text-base">experiences</div>
            </div>
            <div class="flex flex-col items-center ">
              <div class="flex flex-row items-center">
                <span class="text-2xl font-bold">06</span><i class="uil uil-plus"></i>
              </div>
              <div class="text-base">Projects</div>
              <div class="text-base">completed</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="flex flex-row items-center">
                <span class="text-2xl font-bold">01</span><i class="uil uil-plus"></i>
              </div>
              <div class="text-base">Companies</div>
              <div class="text-base">worked</div>
            </div>
          </div>

          <a href="#" class="flex justify-center sm:justify-start">
            <button class="icon primary">
              Get in touch
              <i class="uil loader uil-envelope-upload-alt"></i>
            </button>
          </a>
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
