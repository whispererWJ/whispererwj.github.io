<!--
 * @Author: whisperer
 * @Date: 2019-08-14 15:10:05
 * @LastEditors: whisperer
 * @Description: 
 -->
<template>
  <div class="container" ref="con">
       <button @click="backToBlog">{{'\u8fd4\u56de\u535a\u5ba2'}}</button>
  </div>
</template>

<script>

export default {
  name: "app-body-test",
  data: ()=>({

  }),
  mounted() {
  },
  props: {},
  components: { },
  computed: {
    target() {
      return false;
    }
  },
  methods: {
    backToBlog() {
      this.$router.push('/');
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  padding-top: 64px;
  width: 80%;
  margin: 0 auto;
  position: relative;
  height: 100%;
  box-sizing: border-box;
  background: transparent;
  z-index: 2;
}
img{
  width: 100px;
  height: 100px;
}
.invisible{
  position: fixed;
  z-index: -1;
  visibility: hidden;
}
ul{
  background: wheat;
}
iframe{
  border: none;
  width: 1220px;
  height: 850px;
}
</style>
