<template>
  <footer class="text-white bg-acColor">
    <div class="container max-w-screen-xl px-4 py-8 mx-auto">
      <!-- Top area: Blocks -->
      <div class="flex flex-col items-start mb-10 space-y-8 md:space-y-0 md:mb-20 md:flex-row md:justify-start">
        <!-- 1st block -->
        <div class="flex flex-col w-full md:w-1/3">
          <h1 class="text-2xl font-extrabold">Don.</h1>
          <h3>Full-stack Developer</h3>
        </div>

        <!-- 2nd block -->
        <ul class="flex flex-col justify-center w-full space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:w-1/3">
          <li>
            <a class="font-semibold hover:text-gray-200 transit" href="#">Service</a>
          </li>
          <li>
            <a class="font-semibold hover:text-gray-200 transit" href="#">Portfolio</a>
          </li>
          <li>
            <a class="font-semibold hover:text-gray-200 transit" href="#">Contactme</a>
          </li>
        </ul>

        <!-- 3rd block -->
        <div class="flex flex-row w-full space-x-3 md:justify-end md:w-1/3">
          <SocialIcon name="github" color="text-white" link="https://" />
          <SocialIcon name="twitter" color="text-white" link="https://" />
          <SocialIcon name="linkedin" color="text-white" link="https://" />
        </div>
      </div>

      <!-- Bottom area: Blocks -->
      <p class="mt-6 text-sm text-center lg:text-base">
        &copy; {{ year }} Don Freddy. All rights reserved
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Base extends Vue {
  readonly year: number = new Date().getUTCFullYear();
}
</script>
