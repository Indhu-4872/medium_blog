<template>
  <div id="app">
    <NavBar />
    <router-view/>

  </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
<style >
#app , body , html{
  font-family: sans-serif;
  height: 100%;
  width: 100%;
}
</style>
