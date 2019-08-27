<!--
 * @Author: whisperer
 * @Date: 2019-08-02 14:46:02
 * @LastEditors: whisperer
 * @Description: 
 -->
<template>
  <div class="head">
    <div class="blogIcon">
          <span class="iconfont icon-xingkong"></span>
          <span class="signature ellipsis">{{signature}}</span>
    </div>
    <div  class="menuList">
        <div  v-bind:class="{'menu':true,'active':menu.url===currentRoute}" v-for="menu in menuList" :key="menu.id">
            <span @click="jump(menu.url)">{{menu.title}}</span>
        </div>
    </div>
    <div class="avatar">
      <i class="ellipsis">{{userName}}</i>
      <span></span>
    </div>
  </div>
</template>

<script>
import {menuList} from '../config/config.js';

export default {
  name: 'app-head',
  props: {
  },
  data: ()=>{

    return {
      signature:'结之已学,而得未知',
      userName:'whisperer',
      menuList:menuList,
      currentRoute:'/'
    }
  },
  watch: {
  '$route':'setCurrentRoute'
},
  mounted() {
      this.$data.currentRoute = this.$router.currentRoute.fullPath;
  },
  methods: {
      jump(url) {
        if(this.$router.currentRoute.fullPath===url){return;}
        this.$router.push(url);
      },
      setCurrentRoute(route) {
          this.$data.currentRoute = route.fullPath;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('~@assets/css/iconfont/iconfont.css');
  .head{
    /* background: #24292e url('../../assets/images/head_bg.jpg');
    color: hsla(0,0%,100%,.7); */
    font-size: 14px;
    line-height: 1.5;
    padding: 16px;
    z-index: 9;
    height: 32px;
    display: flex;
    position: fixed;
    width: 100%;
    background: #203b7e;
    flex-flow: row nowrap;
  }
  .blogIcon{
    flex: 0 0 15%;
    color: #ffffff;
    line-height: 30px;
  }
  .blogIcon .iconfont{
    font-size: 45px;
  }
  .blogIcon .signature{
    font-size: 18px;
    padding-left: 10px;
    display: inline-block;
  }
  .ellipsis{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .menuList{
      flex: 1 0 1000px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
      color: #ffffff;
  }
  .menu{
      flex: 0 0  100px;
      cursor: pointer;
      height: 32px;
      line-height: 32px;
  }
  .menu.active,.menu:hover{
    color: lightseagreen;
  }

  .avatar{
      flex: 0 0 10%;
      display: flex;
      flex-flow: row nowrap;
  }
  .avatar span{
    background: url('~@assets/avatar/AVATAR_dog.png')  center   no-repeat;
    background-size: contain;
    border-radius: 50%;
    display: inline-block;
    width: 45px;
    height: 45px;
    flex: 0 0 45px;
    margin:-7px 30px 0 0;
  }
  .avatar i{
    color: white;
    font-size: 18px;
    flex: 1 0 100px;
    text-align: right;
    padding-right: 10px;
  }
</style>
