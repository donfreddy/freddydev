<template>
  <v-popover>
    <button v-tooltip="$t('settings.choose_language')" class="icon transit">
      <i class="material-icons">translate</i>
    </button>
    <template slot="popover">
      <div v-for="locale in availableLocales" :key="locale.code">
        <nuxt-link :to="switchLocalePath(locale.code)">
          <button v-close-popover class="icon transit">
            {{ locale.name }}
          </button>
        </nuxt-link>
      </div>
    </template>
  </v-popover>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { LocaleObject } from 'nuxt-i18n';

@Component
export default class ChangeLanguage extends Vue {
  get availableLocales(): string[] | LocaleObject[] {
    const locales = this.$i18n.locales as any[];

    return locales.filter(({ code }: { code: string }) => code !== this.$i18n.locale);
  }
}
</script>
