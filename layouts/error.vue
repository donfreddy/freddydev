<template>
  <div class="flex flex-col items-center justify-center text-center page">
    <h1 class="mb-4 font-mono text-4xl">{{ statusCode }}</h1>
    <h3 class="mb-4 font-mono text-xs">{{ message }}</h3>
    <p class="mt-4 border-t border-ttColor">
      <nuxt-link to="/">
        <button class="icon">
          <i class="material-icons">home</i>
          <span>
            <!-- {{ $t('go_home') }} -->
            go Home
          </span>
        </button>
      </nuxt-link>
      <button class="icon" @click="reloadApplication">
        <i class="material-icons">refresh</i>
        <span>
          <!-- {{ $t('reload') }} -->
          reload
        </span>
      </button>
    </p>
  </div>
</template>

<script lang="ts">
import { NuxtError } from '@nuxt/types';
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class Error extends Vue {
  @Prop({ type: Object, default: null }) readonly error!: NuxtError;

  get statusCode(): number {
    return (this.error && this.error.statusCode) || 500;
  }

  get message(): string {
    return this.error.message || 'something went wrong';
  }

  public reloadApplication(): void {
    window.location.reload();
  }
}
</script>
