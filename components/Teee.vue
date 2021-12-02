<template>
  <!-- component -->
  <!-- Foooter -->
  <section class="text-gray-100 bg-acColor">
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
      <nav class="flex flex-wrap justify-center -mx-5 -my-2">
        <div class="px-5 py-2">
          <a href="#" class="leading-6"> About </a>
        </div>
        <div class="px-5 py-2">
          <a href="#" class="leading-6"> Blog </a>
        </div>
        <div class="px-5 py-2">
          <a href="#" class="leading-6"> Team </a>
        </div>
        <div class="px-5 py-2">
          <a href="#" class="leading-6"> Pricing </a>
        </div>
        <div class="px-5 py-2">
          <a href="#" class="leading-6"> Contact </a>
        </div>
        <div class="px-5 py-2">
          <a href="#" class="leading-6"> Terms </a>
        </div>
      </nav>
      <div class="flex justify-center mt-8 space-x-6">
        <a href="#" class="">
          <span class="sr-only">Facebook</span>
          <i class="uil uil-facebook-f"></i>
        </a>
        <a href="#" class="">
          <span class="sr-only">Instagram</span>
          <i class="uil uil-instagram"></i>
        </a>
        <a href="#" class="">
          <span class="sr-only">Twitter</span>
          <i class="uil uil-twitter-alt"></i>
        </a>
        <a href="#" class="">
          <span class="sr-only">GitHub</span>
          <i class="uil uil-github-alt"></i>
        </a>
        <a href="#" class="0">
          <span class="sr-only">Dribbble</span>
          <i class="uil uil-linkedin-alt"></i>
        </a>
      </div>
      <p class="mt-8 text-xs leading-6 text-center md:text-base">
        Copyright © {{ new Date().getFullYear() }} Don Freddy. All rights reserved
      </p>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.anim-item {
  @apply transform hover:translate-x-1 transition-transform duration-500 ease-out;
}
</style>
