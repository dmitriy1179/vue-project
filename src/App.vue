<template>
  <div id="app">
    <AppNavbar v-if="isLoggedIn"/>
      <router-view
          :content="'Content'"
      />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    AppNavbar,
  },
  computed: {
    ...mapState(['isLoggedIn'])
  },
  created() {
    if(!this.isLoggedIn) {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
#app {
  display: flex;
  overflow: hidden;
  min-height: calc(100vh - 16px);
  width: 100%;
  position: relative;
}

</style>
