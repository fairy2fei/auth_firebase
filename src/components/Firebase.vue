<template>
  <v-app>
    <v-toolbar dark class="primary">
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Auth with Firebase</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          {{ item.title }}

        </v-btn>
        <v-btn
          v-if="userIsAuthenticated"
          flat
          @click="onLogout">
          Logout

        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <div><Signin />
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <Signup /></div>
  </v-app>
</template>

<script>
import Signin from './Signin.vue'
import Signup from './Signup.vue'
export default {
  components: {Signin, Signup},
  data () {
    return {
      sideNav: false
    }
  },
  computed: {
    menuItems () {
      let menuItems
      if (this.userIsAuthenticated) {
        menuItems = [
          {title: 'Profile', link: '/profile'}
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>
