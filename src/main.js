import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './routes';
import posts_array from "./exportvariables";

Vue.config.productionTip = false
//Telling vue to use VueRouter
Vue.use(VueRouter);

//Creating new const router
const router = new VueRouter({
  routes: routes,
  posts_array: posts_array,
  mode: 'history'
})

new Vue({
  router,

  render: h => h(App),
}).$mount('#app')
