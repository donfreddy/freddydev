<template>
  <div>
    <transition v-if="show" name="fade" appear>
      <div class="fixed inset-0 z-20 transition-opacity" @keydown.esc="close()">
        <div class="absolute inset-0 bg-bgColor opacity-80" tabindex="0" @click="close()"></div>
      </div>
    </transition>
    <aside
      class="fixed top-0 z-30 flex flex-col h-full max-w-full overflow-auto transition duration-300 ease-in-out transform bg-bgColor"
      :class="getClass()"
    >
      <slot name="content"></slot>
    </aside>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop, Watch } from 'nuxt-property-decorator';

@Component({
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        close();
      }
    });
  },
})
export default class Header extends Vue {
  @Prop({ type: Boolean })
  readonly show!: boolean;

  @Prop({ type: String, default: 'rtl', required: false })
  readonly dir!: string; // Direction

  @Prop({ type: String, default: '96', required: false })
  readonly width!: string; // Direction

  @Watch('show')
  onShowChange(val: boolean) {
    if (process.client) {
      if (val) {
        document.body.style.setProperty('overflow', 'hidden');
      } else {
        document.body.style.removeProperty('overflow');
      }
    }
  }

  @Emit('close')
  close() {}

  getClass() {
    if (this.dir === 'rtl') {
      return this.show
        ? `translate-x-0 shadow-xl right-0 w-${this.width}`
        : `translate-x-full right-0 w-${this.width}`;
    } else {
      return this.show
        ? `translate-x-0 shadow-xl left-0 w-${this.width}`
        : `-translate-x-full left-0 w-${this.width}`;
    }
  }
}
</script>
