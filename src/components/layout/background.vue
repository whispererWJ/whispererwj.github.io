<template>
  <div class="background" :style="{background: `url(/blog/background/bg${weekNum}.jpg)`}">
   
  </div>
</template>

<script>
export default {
  name: 'background',
  props: {},
  data: ()=>{
    return {
      weekNum:(new Date()).getDay()
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
</style>
