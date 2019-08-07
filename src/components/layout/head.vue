<template>
  <div class="head">
    
  </div>
</template>

<script>
export default {
  name: 'app-head',
  props: {
   
  },
  data: ()=>{
    return {
      signature:'结之已学,而得未知.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .head{
    /* background: #24292e url('../../assets/images/head_bg.jpg');
    color: hsla(0,0%,100%,.7); */
    font-size: 14px;
    line-height: 1.5;
    padding: 16px;
    z-index: 32;
    height: 32px;
    display: flex;
    position: fixed;
    width: 100%;
  }
</style>
