<!--
 * @Author: whisperer
 * @Date: 2019-08-02 13:45:37
 * @LastEditors: whisperer
 * @Description: 
 -->
<template>
  <div id="app">
    <AppHead />
    <AppBody v-cloak />
    <AppFoot />
    <Background  />
  </div>
</template>

<script>
import AppHead from "./components/layout/head.vue";
import AppBody from "./components/layout/body.vue";
import AppFoot from "./components/layout/footer.vue";
import Background from "./components/layout/background.vue";

export default {
  name: "app",
  components: {
    AppHead,
    AppBody,
    AppFoot,
    Background
  }
};
</script>

<style>
@import "./assets/css/misty-light-macos.css";

html,body,#app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

/*自定义滚动条 */
::-webkit-scrollbar {
  width: 6px;
  background-color: #cce5ff;
}
::-webkit-scrollbar-thumb {
  background-color:#cce5ff;
  border-radius: 6px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px #fff;
  background-color:#fff;
}
</style>
