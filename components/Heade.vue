<template>
  <header class="font-mono bg-bgColor text-fgColor">
    <div class="content">
      <div class="flex items-center justify-between py-6">
        <!-- Brand logo -->
        <div class="lg:text-2xl">
          <router-link to="/">
            <span class="font-extrabold">Don.</span>
            <!-- <span class="font-semibold"> Freddy</span> -->
          </router-link>
        </div>

        <!-- Desktop Navigation  -->
        <div class="hidden sm:flex sm:items-center">
          <a href="#" class="mr-6 font-semibold text-acColor transit"> Home </a>
          <a href="#" class="mr-6 font-semibold hover:text-acColor transit"> About </a>
          <a href="#" class="mr-6 font-semibold hover:text-acColor transit"> Works </a>
          <a href="#" class="mr-6 hover:text-acColor transit"> Blog </a>
          <a href="#" class="font-semibold hover:text-acColor transit"> Contact </a>
        </div>

        <!--  -->
        <div class="">
          <div class="flex">
            <a href="mailto:support@hoppscotch.io" target="_blank" rel="noopener">
              <button v-tooltip="$t('contact_us')" class="icon">
                <i class="material-icons">email</i>
              </button>
            </a>
            <a href="mailto:support@hoppscotch.io" target="_blank" rel="noopener">
              <button v-tooltip="$t('contact_us')" class="icon">
                <i class="material-icons">settings</i>
              </button>
            </a>
            <a
              href="https://twitter.com/DonFreddy2"
              target="_blank"
              aria-label="Twitter"
              rel="noopener"
              class="flex flex-row"
            >
              <button v-tooltip="'Twitter'" class="icon" aria-label="GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  class="material-icons"
                >
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  class="material-icons"
                >
                  <path
                    d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </button>
            </a>

            <!--  -->
            <v-popover>
              <button v-tooltip="$t('choose_language')" class="icon">
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
          </div>
        </div>

        <!-- <div class="cursor-pointer">
          <div class="lg:flex lg:items-center">
            <a href="#" class="mr-2">
              <i class="mr-2 text-white fab fa-twitter hover:text-primary transit"></i>
              un title
              <i class="material-icons">refresh</i>
            </a>
            <a href="#" class="mr-2">
              <i class="mr-2 text-white fab fa-twitter hover:text-primary transit"></i>
              un title
              <i class="material-icons">refresh</i>
            </a>
          </div>

          <div class="hidden sm:flex sm:items-center">
            <a
              href="#"
              class="inset-0 flex transform rounded-full shadow-sm w-14 h-14 bg-bgColor transit hover:scale-75"
            >
              <i class="m-auto far text-primary fa-lg fa-envelope"></i>
            </a>
          </div>
        </div> -->

        <!--  -->
        <div class="cursor-pointer sm:hidden">
          <button
            class="rounded-lg sm:hidden focus:outline-none focus:shadow-outline transit"
            @click="isOpen = !isOpen"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6 text-primary">
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
    </div>

    <!-- Mobile menu, show/hide based on mobile menu state.  -->
    <transition></transition>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { LocaleObject } from 'nuxt-i18n';

@Component({
  mounted() {
    const cookiesAllowed = localStorage.getItem('cookiesAllowed') === 'yes';
    if (!cookiesAllowed) {
      this.$toast.info(`${this.$t('we_use_cookies')}`, {
        icon: 'info',
        duration: 5000,
        theme: 'toasted-primary',
        action: [
          {
            text: `${this.$t('dismiss')}`,
            onClick: (_, toastObject) => {
              localStorage.setItem('cookiesAllowed', 'no');
              toastObject.goAway(0);
            },
          },
        ],
      });
    }

    const showWelcome = localStorage.getItem('showWelcome') === 'no';
    if (!showWelcome) {
      setTimeout(() => {
        this.$toast.clear();
        this.$toast.show(
          "<span><a href='https://github.com/sponsors/hoppscotch' target='_blank' rel='noopener'>Sponsor us to support Hoppscotch open source project 💖</a><br><sub>Whoosh this away to dismiss.</sub></span>",
          {
            icon: '',
            duration: 0,
            theme: 'toasted-ad',
            className: '',
            action: [
              {
                text: 'Sponsor',
                icon: 'chevron_right',
                onClick: (_, toastObject) => {
                  localStorage.setItem('showWelcome', 'no');
                  toastObject.goAway(0);
                  window.open('https://github.com/sponsors/hoppscotch');
                },
              },
            ],
            onComplete() {
              localStorage.setItem('showWelcome', 'no');
            },
          },
        );
      }, 8000);
    }
  },
})
export default class Header extends Vue {
  isOpen: boolean = false;
  showSettings: boolean = false;
  inventory: object[] = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 },
  ];

  get availableLocales(): string[] | LocaleObject[] {
    const locales = this.$i18n.locales as any[];

    return locales.filter(({ code }: { code: string }) => code !== this.$i18n.locale);
  }
}
</script>
