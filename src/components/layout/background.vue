<!--
 * @Author: whisperer
 * @Date: 2019-08-07 14:24:04
 * @LastEditors: whisperer
 * @Description: 
 -->
<template>
<!-- :style="{background: `url(/blog/background/bg${weekNum}.jpg)`}" -->
  <div class="background" >
      <img :src="`/blog/background/bg${weekNum}.jpg`" @error="hideLoading"  @load="hideLoading" />
  </div>
</template>

<script>
import { isBgChangeWithDate } from '@config/config.js';

export default {
  name: 'background',
  props: {},
  data: ()=>{
    return {
      weekNum:isBgChangeWithDate?(new Date()).getDay():3
    }
  },
  methods: {
    hideLoading (){
          document.querySelector('.hold').style = "display:none;"
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background{
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  /* background: url(/blog/background/bg1.jpg); */
  z-index: 1;
}
img{
  width: 100%;
  height: 100%;
}
</style>
