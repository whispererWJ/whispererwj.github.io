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
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
     >
        <routerView></routerView>
     </transition>
  </div>
</template>

<script>

export default {
  name: "app-body",
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
  padding-top: 70px;
}
</style>
