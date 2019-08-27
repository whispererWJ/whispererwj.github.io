<!--
 * @Author: whisperer
 * @Date: 2019-08-14 15:10:05
 * @LastEditors: whisperer
 * @Description: 
 -->
<template>
  <div class="container">
    <div class="view"> 
      <div v-show="isLoading" class="loading"></div>
      <MdShower v-bind:url="currentUrl"  v-bind:onloading="showLoading" v-bind:onShow="hideLoading" />
    </div>
    <div class="sideBar">
      <ul class="menu">
        <li :class="{alone:!tag.list||tag.list.length===0,active:tag.url===currentUrl}" v-for="(tag , index) in markdownList" :key="tag.id">
          <span   @click="showMark(tag,index)">{{tag.tag}}</span>
          <ul v-if="tag.list" v-show="tag.isShowChildren">
            <li v-for="markdown in tag.list" :key="markdown.url" :class="{active:markdown.url===currentUrl}">
                <span @click="showMark(markdown)">{{markdown.title}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MdShower from "../common/mdShower.vue";
import markdownList  from "../config/markdownList.js"; 


export default {
  name: "app-body-markdown",
  data: ()=>({
    currentUrl: "markdown/README.md",
    markdownList: markdownList,
    isLoading:false
  }),
  beforeMount (){
      //取得上次缓存的markdown地址,并取得其父节点的id,使其父节点默认展开
      let lastMarkDownUrl = localStorage.getItem('lastMarkDownUrl')||'',
          urlAry = lastMarkDownUrl.split('/'),
          pid = urlAry.length>2?urlAry[1]:'Home';
      this.markdownList.forEach((tag)=>{
          tag.isShowChildren = tag.id===pid;
      });
      this.currentUrl = lastMarkDownUrl||"markdown/README.md";
  },
  props: {},
  components: { MdShower },
  methods: {
    showLoading() {
        this.isLoading=true;
    },
    hideLoading() {
        this.isLoading=false;
    },
    showMark(markdown,index=0) {
      if(markdown.url){
        this.currentUrl = markdown.url;
        //存入缓存  以便恢复
        localStorage.setItem('lastMarkDownUrl',markdown.url);
      }else{
        this.markdownList[index].isShowChildren = !markdown.isShowChildren;
      }
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  padding-top: 64px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  height: 100%;
  box-sizing: border-box;
  background: transparent;
}
.view{
  width: 80%;
  padding: 10px 10px 10px 20px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  height: 100%;
  overflow: auto;
  background: rgba(241, 251, 255, 0.75);
  box-shadow: 0px -2px 10px 1px #9fa7ab;
}
.sideBar{
  width: 20%;
  padding: 10px;
  box-sizing: border-box;
  z-index: 2;
  background: #f1fbff;
  box-shadow: 0px -2px 10px 1px #9fa7ab;
}
.loading{
  width: 100%;
  height: 100%;
  background: #cce5ff;
  display: block;
  position: absolute;
}
/* 统一左侧快捷菜单样式 */
ul{
  margin: 0px;
  padding: 0 10px 0 30px;
}
li span{
  cursor: pointer;
}
.active{
  color: #4caf50;
}
.alone{
  list-style: none;
}
.menu{
  position: fixed;
}
</style>
