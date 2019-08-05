<template>
  <div id="app">
    <AppHead />
    <AppBody />
    <AppFoot />
  </div>
</template>

<script>
import AppHead from "./components/layout/head.vue";
import AppBody from "./components/layout/body.vue";
import AppFoot from "./components/layout/footer.vue";

export default {
  name: "app",
  components: {
    AppHead,
    AppBody,
    AppFoot
  }
};
</script>

<style>
@import "./assets/css/hack-theme.css";
#app {
  padding: 0;
  margin: 0;
}

/*自定义滚动条 */
::-webkit-scrollbar {
  width: 6px;
  background-color: rgba(217, 217, 217, 0.3);
}
::-webkit-scrollbar-thumb {
  background-color:#fff;
  border-radius: 6px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(217, 217, 217, 0.3);
  background-color:rgb(26, 26, 26);
}
</style>
