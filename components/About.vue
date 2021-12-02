<template>
  <section id="about">
    <div class="container py-20">
      <!-- Section title -->
      <div class="flex flex-col w-full mb-12 text-center">
        <h1 class="mb-2 text-3xl sm:text-4xl">About Me</h1>
        <h3 class="mx-auto text-sm">My introduction</h3>
      </div>

      <!-- Section content -->
      <div class="flex flex-col items-center justify-center lg:flex-row">
        <div class="flex items-center justify-center w-full lg:w-1/2">
          <img
            class="object-cover object-center w-56 rounded-full"
            alt="hero"
            src="~@/assets/images/cartoon.jpg"
          />
        </div>
        <div class="flex items-center justify-center w-full lg:w-1/2">
          <h1>2</h1>
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
