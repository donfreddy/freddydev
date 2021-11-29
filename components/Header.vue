<template>
  <header id="home" class="font-mono text-fgColor">
    <div class="container max-w-screen-xl px-4 mx-auto sm:px-6">
      <nav>
        <div class="flex items-center justify-between py-6">
          <!-- Menu button -->
          <button
            v-tooltip="$t('app.menu')"
            class="icon transit lg:hidden"
            @click="showMenu = !showMenu"
          >
            <i class="material-icons">menu</i>
          </button>

          <!-- Brand logo -->
          <router-link to="/" class="hidden lg:flex">
            <span class="text-2xl font-extrabold">Don.</span>
          </router-link>

          <!-- Desktop Navigation -->
          <ul class="hidden space-x-8 lg:flex lg:items-center">
            <li>
              <a v-scroll-to="'#home'" href="#" class="font-semibold text-acColor transit">{{
                $t('navigation.home')
              }}</a>
            </li>
            <li>
              <a v-scroll-to="'#about'" href="#" class="font-semibold hover:text-acColor transit">
                {{ $t('navigation.about') }}
              </a>
            </li>
            <li>
              <a v-scroll-to="'#work'" href="#" class="font-semibold hover:text-acColor transit">
                {{ $t('navigation.work') }}
              </a>
            </li>
            <li>
              <a v-scroll-to="'#blog'" href="#" class="font-semibold hover:text-acColor transit">
                {{ $t('navigation.blog') }}
              </a>
            </li>
            <li>
              <a v-scroll-to="'#contact'" href="#" class="font-semibold hover:text-acColor transit">
                {{ $t('navigation.contact') }}
              </a>
            </li>
          </ul>

          <!-- Header Button Icons -->
          <div class="flex space-x-2">
            <a
              href="https://github.com/Donfreddy"
              target="_blank"
              aria-label="GitHub"
              rel="noopener"
              class="flex flex-row"
            >
              <button v-tooltip="'GitHub'" class="icon transit" aria-label="GitHub">
                <!-- <span class="mr-2">GitHub</span> -->
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

            <button
              v-tooltip="$t('app.settings_drawer')"
              class="icon transit"
              @click="showSettings = !showSettings"
            >
              <i class="material-icons">settings</i>
            </button>
          </div>
        </div>

        <!-- Mobile navigation  -->
        <app-drawer :show="showMenu" dir="ltr" width="64" @close="closeMenu()">
          <template #content>
            <!-- Header -->
            <div class="sticky top-0 z-10 flex items-center justify-between p-2 transition-colors">
              <span class="text-xl font-extrabold">Don.</span>
              <button v-tooltip="$t('action.close')" class="icon" @click="showMenu = !showMenu">
                <i class="material-icons">close</i>
              </button>
            </div>

            <!-- Navigation -->
            <nav>
              <a
                href="#"
                :class="activeClass"
                class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
                @click="scrollToEl('home')"
              >
                <i class="uil uil-estate"></i>
                <span class="mx-4">{{ $t('navigation.home') }}</span>
              </a>
              <a
                href="#"
                :class="inactiveClass"
                class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
                @click="scrollToEl('home')"
              >
                <i class="uil uil-user"></i>
                <span class="mx-4"> {{ $t('navigation.about') }}</span>
              </a>
              <a
                href="#"
                :class="inactiveClass"
                class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
                @click="scrollToEl('home')"
              >
                <i class="uil uil-file-alt"></i>
                <span class="mx-4"> {{ $t('navigation.skills') }}</span>
              </a>
              <a
                href="#"
                :class="inactiveClass"
                class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
                @click="scrollToEl('home')"
              >
                <i class="uil uil-briefcase-alt"></i>
                <span class="mx-4"> {{ $t('navigation.services') }}</span>
              </a>
              <a
                href="#"
                :class="inactiveClass"
                class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
                @click="scrollToEl('home')"
              >
                <i class="uil uil-scenery"></i>
                <span class="mx-4">{{ $t('navigation.portfolio') }}</span>
              </a>
              <a
                href="#"
                :class="inactiveClass"
                class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
                @click="scrollToEl('home')"
              >
               <i class="uil uil-message"></i>
                <span class="mx-4">{{ $t('navigation.contact') }}</span>
              </a>
            </nav>
          </template>
        </app-drawer>

        <!-- Setting drawer -->
        <app-drawer :show="showSettings" @close="closeSettings()">
          <template #content>
            <div
              class="sticky top-0 z-10 flex items-center justify-between p-2 transition-colors border-b border-brdColor"
            >
              <h3 class="ml-4 heading">{{ $t('navigation.settings') }}</h3>
              <button
                v-tooltip="$t('action.close')"
                class="icon"
                @click="showSettings = !showSettings"
              >
                <i class="material-icons">close</i>
              </button>
            </div>

            <div class="flex flex-col px-6 py-4 space-y-4">
              <ColorModePicker />
              <AccentModePicker />
            </div>
          </template>
        </app-drawer>
      </nav>

      <!--  -->
      <!-- <Home/> -->
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { LocaleObject } from 'nuxt-i18n';

@Component
export default class Header extends Vue {
  showMenu: boolean = false;
  showSettings: boolean = false;

  activeClass = 'bg-ovbColor text-acColor border-acColor';
  inactiveClass = 'border-bgColor text-fgColor hover:bg-ovbColor hover:text-acColor';

  get availableLocales(): string[] | LocaleObject[] {
    const locales = this.$i18n.locales as any[];

    return locales.filter(({ code }: { code: string }) => code !== this.$i18n.locale);
  }

  closeSettings() {
    this.showSettings = !this.showSettings;
  }

  closeMenu() {
    this.showMenu = !this.showMenu;
  }

  onDone(element: Element) {
    console.log(document.activeElement?.id);
    console.log(element.id);
    document.activeElement!.id = element.id;
    console.log('#############');
    console.log(document.activeElement?.id);
  }

  isActiveEl(element: string): boolean {
    return document.activeElement?.id === element;
  }

  // Ssroll to element
  scrollToEl(element: string) {
    this.closeMenu();
    this.$scrollTo(`#${element}`, { onDone: this.onDone });
  }
}
</script>
