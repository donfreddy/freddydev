<template>
  <div class="container">
    <div class="bg-bgColor text-fgColor p-36">
      <h1 class="mb-12 text-4xl font-bold text-acColor dark:text-white">{{ $t('test') }}</h1>

      <ColorModePicker />
      <AccentModePicker />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class Default extends Vue {}
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
