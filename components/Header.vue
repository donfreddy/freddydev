<template>
  <header id="home" class="font-mono text-fgColor">
    <div class="container">
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
          <router-link :to="localePath('/')" class="hidden lg:flex">
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
            <li class="nav__item">
              <a
                v-scroll-to="'#skills'"
                href="#"
                class="font-semibold hover:text-acColor transit nav__link"
              >
                {{ $t('navigation.skills') }}
              </a>
            </li>
            <li>
              <a
                v-scroll-to="'#services'"
                href="#"
                class="font-semibold hover:text-acColor transit"
              >
                {{ $t('navigation.services') }}
              </a>
            </li>
            <li>
              <a
                v-scroll-to="'#portfolio'"
                href="#"
                class="font-semibold hover:text-acColor transit"
              >
                {{ $t('navigation.portfolio') }}
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
                @click="scrollToEl('about')"
              >
                <i class="uil uil-user"></i>
                <span class="mx-4"> {{ $t('navigation.about') }}</span>
              </a>
              <a
                href="#"
                :class="inactiveClass"
                class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
                @click="scrollToEl('skills')"
              >
                <i class="uil uil-file-alt"></i>
                <span class="mx-4"> {{ $t('navigation.skills') }}</span>
              </a>
              <a
                href="#"
                :class="inactiveClass"
                class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
                @click="scrollToEl('services')"
              >
                <i class="uil uil-briefcase-alt"></i>
                <span class="mx-4"> {{ $t('navigation.services') }}</span>
              </a>
              <a
                href="#"
                :class="inactiveClass"
                class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
                @click="scrollToEl('portfolio')"
              >
                <i class="uil uil-scenery"></i>
                <span class="mx-4">{{ $t('navigation.portfolio') }}</span>
              </a>
              <a
                href="#"
                :class="inactiveClass"
                class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
                @click="scrollToEl('contact')"
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
