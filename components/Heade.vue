<template>
  <div id="top" class="bg-darkGrey">
    <div class="content">
      <div class="flex items-center justify-between py-6">
        <div class="text-white lg:text-2xl">
          <router-link to="/"
            ><span class="font-extrabold">Don</span>
            <span class="font-medium text-gray-300"> Freddy</span>
          </router-link>
        </div>
        <div class="hidden sm:flex sm:items-center">
          <a href="#" class="mr-6 text-sm font-semibold text-primary transit">
            {{ Services }}
          </a>
          <a href="#" class="mr-6 text-sm font-semibold text-white hover:text-primary transit">
            {{ Works }}
          </a>
          <a href="#" class="mr-6 text-sm font-semibold text-white hover:text-primary transit">
            {{ Notes }}
          </a>
          <a href="#" class="text-sm font-semibold text-white hover:text-primary transit">
            {{ Contact }}
          </a>
        </div>
        <div class="hidden sm:flex sm:items-center">
          <div class="hidden lg:flex lg:items-center">
            <a href="#" class="mr-2">
              <i class="mr-2 text-white fab fa-twitter hover:text-primary transit"></i>
            </a>
            <a href="#" class="mr-2 text-white">
              <i class="mr-2 text-white fab fa-github hover:text-primary transit"></i>
            </a>
            <a href="#" class="mr-2">
              <i class="mr-2 text-white fab fa-facebook hover:text-primary transit"></i>
            </a>
            <a href="#" class="mr-8 text-white">
              <i class="mr-2 text-white fab fa-instagram hover:text-primary transit"></i>
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
        </div>

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

      <!-- 
           Mobile menu, show/hide based on mobile menu state.
         -->
      <transition
        enter-active-class="transition duration-500 ease-out transform"
        enter-from-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="transition duration-300 ease-in transform"
        leave-from-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
      >
        <div
          v-show="isOpen"
          class="block py-2 border-t-2 border-gray-500 sm:hidden border-opacity-10"
        >
          <div class="flex flex-col">
            <a href="#" class="mb-2 text-sm font-semibold text-primary transit">
              {{ Services }}
            </a>
            <a href="#" class="mb-2 text-sm font-semibold text-white hover:text-primary transit">
              {{ Works }}
            </a>
            <a href="#" class="mb-2 text-sm font-semibold text-white hover:text-primary transit">
              {{ Notes }}
            </a>
            <a href="#" class="mb-2 text-sm font-semibold text-white hover:text-primary transit">
              {{ Contact }}
            </a>
            <div
              class="flex items-center justify-between pt-2 border-t-2 border-gray-500 border-opacity-10"
            >
              <div class="">
                <a href="#" class="mr-2">
                  <i class="mr-2 text-white fab fa-twitter hover:text-primary transit"></i>
                </a>
                <a href="#" class="mr-2 text-white">
                  <i class="mr-2 text-white fab fa-github hover:text-primary transit"></i>
                </a>
                <a href="#" class="mr-2">
                  <i class="mr-2 text-white fab fa-facebook hover:text-primary transit"></i>
                </a>
                <a href="#" class="mr-8 text-white">
                  <i class="mr-2 text-white fab fa-instagram hover:text-primary transit"></i>
                </a>
              </div>

              <a
                href="#"
                class="inset-0 flex transform rounded-full shadow-sm w-14 h-14 bg-primary bg-opacity-5 transit hover:scale-75"
              >
                <i class="m-auto far text-primary fa-lg fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
