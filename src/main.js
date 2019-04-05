import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'


Vue.use(require('vue-moment'));
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App),

})
