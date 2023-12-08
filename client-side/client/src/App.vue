<script>
import { mapWritableState } from 'pinia';
import { useCounterStore } from './stores/counter';
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: { Navbar },
  computed: {
    ...mapWritableState(useCounterStore, ['isLogin'])
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true
    }
  }
}
</script>

<template>
  <div>
    <Navbar />
    <RouterView />
  </div>
</template>

<style scoped>

</style>
