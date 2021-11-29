<template>
  <a :href="link" target="_blank" :class="color">
    <i :class="getClass()"></i>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class Base extends Vue {
  @Prop({ type: String, required: true })
  readonly name!: string;

  @Prop({ type: String, default: 'text-acColor' })
  readonly color!: string;

  @Prop({ type: String, required: true })
  readonly link!: string;

  getClass() {
    return `uil uil-${this.name}-alt ${this.color}`;
  }
}
</script>
