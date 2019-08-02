<template>
  <div id="app">
    <Head />
    <Body />
    <Foot />
  </div>
</template>

<script>
import Head from './components/layout/head.vue'
import Body from './components/layout/body.vue'
import Foot from './components/layout/footer.vue'

export default {
  name: 'app',
  components: {
    Head,Body,Foot
  }
}
</script>

<style>
@import "./assets/css/hack-theme.css";
#app {
  padding: 0;
  margin: 0;
}
</style>
