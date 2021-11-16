<template>
  <transition
    enter-active-class="transition duration-500 ease-out transform"
    enter-from-class="scale-95 opacity-0"
    enter-to-class="scale-100 opacity-100"
    leave-active-class="transition duration-300 ease-in transform"
    leave-from-class="scale-100 opacity-100"
    leave-to-class="scale-95 opacity-0"
  >
    <slot></slot>
  </transition>
</template>
