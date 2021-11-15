<template>
  <header class="font-mono bg-bgColor text-fgColor">
    <nav class="content">
      <div class="flex items-center justify-between py-6">
        <!-- Brand logo -->
        <span class="text-2xl font-extrabold">Don.</span>

        <!-- Desktop Navigation -->
        <ul class="hidden space-x-8 md:flex md:items-center">
          <li><a href="#" class="font-semibold text-acColor transit">Home</a></li>
          <li><a href="#" class="font-semibold hover:text-acColor transit">About</a></li>
          <li><a href="#" class="font-semibold hover:text-acColor transit">Works</a></li>
          <li><a href="#" class="font-semibold hover:text-acColor transit">Blog</a></li>
          <li><a href="#" class="font-semibold hover:text-acColor transit">Contact</a></li>
        </ul>

        <!-- Header Icons -->
        <div class="flex">
          <a
            href="https://twitter.com/DonFreddy2"
            target="_blank"
            aria-label="Twitter"
            rel="noopener"
            class="flex flex-row"
          >
            <button v-tooltip="'Twitter'" class="icon" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="material-icons">
                <path
                  d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z"
                />
              </svg>
            </button>
          </a>
          <a
            href="https://github.com/Donfreddy"
            target="_blank"
            aria-label="GitHub"
            rel="noopener"
            class="flex flex-row"
          >
            <button v-tooltip="'Github'" class="icon" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="material-icons">
                <path
                  d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
            </button>
          </a>

          <v-popover>
            <button v-tooltip="$t('choose_language')" class="icon">
              <!-- <span class="mr-1">{{ local }}</span> -->
              <i class="material-icons">translate</i>
            </button>
            <template slot="popover">
              <div v-for="locale in availableLocales" :key="locale.code">
                <nuxt-link :to="switchLocalePath(locale.code)">
                  <button v-close-popover class="icon">
                    {{ locale.name }}
                  </button>
                </nuxt-link>
              </div>
            </template>
          </v-popover>

          <button v-tooltip="$t('settings_drawer')" class="icon">
            <i class="material-icons">settings</i>
          </button>
        </div>
      </div>
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

  get local(): string {
    const locale = this.$i18n.locale.toLocaleLowerCase();

    return locale.charAt(0).toUpperCase() + locale.slice(1);
  }
}
</script>
