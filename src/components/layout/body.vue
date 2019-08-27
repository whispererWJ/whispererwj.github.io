<!--
 * @Author: whisperer
 * @Date: 2019-08-02 14:46:58
 * @LastEditors: whisperer
 * @Description: 
 -->
<template>
  <div class="body">
     <transition
      name="my-animation"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
     >
        <routerView></routerView>
     </transition>
  </div>
</template>

<script>
import router from "../config/router.js";



export default {
  name: "app-body",
  router,
  data: () => ({
    isLoading: false
  }),
  props: {},
  components: { },
  methods: {
    showLoading() {
      this.isLoading = true;
    },
    hideLoading() {
      this.isLoading = false;
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "~@assets/css/animate.css";

.body {
  width: 80%;
  margin: 0 auto;
  position: relative;
  display: flex;
  height: 100%;
  box-sizing: border-box;
  background: transparent;
}
</style>
