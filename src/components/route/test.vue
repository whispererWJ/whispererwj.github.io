<!--
 * @Author: whisperer
 * @Date: 2019-08-14 15:10:05
 * @LastEditors: whisperer
 * @Description: 
 -->
<template>
  <div class="container" ref="con">
        <h1>用于测试是否能够再浏览器中进行单元快照测试</h1>
        <pre>{{result}}</pre>
        <button @click="checkIsEqual">检查</button>
        <div class="invisible" ref="invisible"></div>
  </div>
</template>

<script>

import html2canvas from 'html2canvas';

export default {
  name: "app-body-test",
  data: ()=>({
    old:'',
    result:'',
    list:['1','2',3],
    cookie:''
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
    checkIsEqual() {
      let target = this.target;
      if(!target){return;}
       html2canvas(target).then(canvas => {
        this.$refs.invisible.appendChild(canvas);
        let newUrl = canvas.toDataURL();
        this.$data.result = newUrl===this.$data.old?'两次截屏相同':'两次截屏不同';
        this.$data.old = newUrl;
        canvas.remove();
      });
    },
    initOperation() {
      let target = this.target;
      if(!target){return;}
      html2canvas(target).then(canvas => {
        this.$refs.invisible.appendChild(canvas);
        this.$data.old = canvas.toDataURL();
        canvas.remove();
      });
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
