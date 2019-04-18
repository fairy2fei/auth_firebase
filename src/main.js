// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import Axios from 'axios'
import * as firebase from 'firebase'
import router from './router'
import {store} from './store'
const AlertCmp = () => import('./components/Alert.vue')
Vue.prototype.$http = Axios
Vue.use(Vuetify)
Vue.config.productionTip = false
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
Vue.component('app-alert', AlertCmp)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAuVCgPzvcyRNmWqRPoXo2uRv7xU4cieXE',
      authDomain: 'fairy2fei-666.firebaseapp.com',
      databaseURL: 'https://fairy2fei-666.firebaseio.com',
      projectId: 'fairy2fei-666',
      storageBucket: 'fairy2fei-666.appspot.com',
      messagingSenderId: '809475952462'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
})
