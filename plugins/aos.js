import Vue from 'vue';

import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.use(
  AOS.init({
    duration: 600, // values from 0 to 3000,
    disable: 'phone',
  }),
);
