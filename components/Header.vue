<template>
  <header class="font-mono bg-bgColor text-fgColor">
    <nav class="content">
      <div class="flex items-center justify-between py-6">
        <!-- Brand logo -->
        <router-link to="/">
          <span class="text-2xl font-extrabold">Don.</span>
        </router-link>

        <!-- Desktop Navigation -->
        <ul class="hidden space-x-8 lg:flex lg:items-center">
          <li><a href="#" class="font-semibold text-acColor transit">Home</a></li>
          <li><a href="#" class="font-semibold hover:text-acColor transit">About</a></li>
          <li><a href="#" class="font-semibold hover:text-acColor transit">Works</a></li>
          <li><a href="#" class="font-semibold hover:text-acColor transit">Blog</a></li>
          <li><a href="#" class="font-semibold hover:text-acColor transit">Contact</a></li>
        </ul>

        <!-- Header Icons -->
        <div class="flex">
          <a
            href="https://github.com/Donfreddy"
            target="_blank"
            aria-label="GitHub"
            rel="noopener"
            class="flex flex-row"
          >
            <button v-tooltip="'GitHub'" class="icon transit" aria-label="GitHub">
              <!-- <span class="mr-2">GitHub</span> -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="material-icons">
                <path
                  d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
            </button>
          </a>
          <v-popover>
            <button v-tooltip="$t('choose_language')" class="icon transit">
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

          <button v-tooltip="$t('settings_drawer')" class="icon transit">
            <i class="material-icons">settings</i>
          </button>

          <!-- Mobile button -->
          <button class="icon transit lg:hidden" @click="isOpen = !isOpen">
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                v-show="!isOpen"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                v-show="isOpen"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on mobile menu state.  -->
      <transitionDrawer>
        <div
          v-show="isOpen"
          class="py-2 border-t-2 border-gray-500 lg:hidden blg:lock border-opacity-10"
        ></div>
      </transitionDrawer>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { LocaleObject } from 'nuxt-i18n';

@Component
export default class Header extends Vue {
  isOpen: boolean = false;
  showSettings: boolean = false;

  get availableLocales(): string[] | LocaleObject[] {
    const locales = this.$i18n.locales as any[];

    return locales.filter(({ code }: { code: string }) => code !== this.$i18n.locale);
  }
}
</script>
