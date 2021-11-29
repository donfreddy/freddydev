<template>
  <div class="flex flex-col">
    <label>
      {{ $t('settings.accent_color') }}
      <div class="text-xs text-gray-500">
        {{ active.charAt(0).toUpperCase() + active.slice(1) }}
      </div>
    </label>
    <div>
      <!-- text-blue-400 -->
      <!-- text-green-400 -->
      <!-- text-teal-400 -->
      <!-- text-indigo-400 -->
      <!-- text-purple-400 -->
      <!-- text-orange-400 -->
      <!-- text-pink-400 -->
      <!-- text-red-400 -->
      <!-- text-yellow-400 -->
      <span
        v-for="(color, index) of accentColors"
        :key="`color-${index}`"
        v-tooltip="`${color.charAt(0).toUpperCase()}${color.slice(1)}`"
        class="inline-flex items-center justify-center p-3 m-2 transition duration-150 ease-in-out bg-transparent rounded-full cursor-pointer hover:bg-ovbColor hover:shadow-none hover:transit"
        :class="[`text-${color}-400`, { 'bg-ovbColor': color === active }]"
        @click="setActiveColor(color)"
      >
        <i class="material-icons">lens</i>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator';

@Component
export default class AccentModePicker extends Vue {
  active: string = localStorage.getItem('THEME_COLOR') || 'green';
  accentColors: string[] = [
    'blue',
    'green',
    'teal',
    'indigo',
    'purple',
    'orange',
    'pink',
    'red',
    'yellow',
  ];

  @Watch('active', { immediate: true, deep: true })
  onColorChanged(val: string, _oldVal: string): void {
    localStorage.setItem('THEME_COLOR', val);
  }

  public setActiveColor(color: string): void {
    document.documentElement.setAttribute('data-accent', color);
    this.$toast.show(color);
    this.active = color;
  }
}
</script>
