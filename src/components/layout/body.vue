<template>
  <div class="body">
    <div class="left">
      <ul class="menu">
        <li :class="{alone:!tag.list||tag.list.length===0,active:tag.url===currentUrl}" v-for="(tag , index) in markdownList" :key="tag.tag">
          <span   @click="showMark(tag,index)">{{tag.tag}}</span>
          <ul v-if="tag.list" v-show="tag.isShowChildren">
            <li v-for="markdown in tag.list" :key="markdown.url" :class="{active:markdown.url===currentUrl}">
                <span @click="showMark(markdown)">{{markdown.title}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="middle"> 
      <div v-show="isLoading" class="loading"></div>
      <MdShower v-bind:url="currentUrl"  v-bind:onloading="showLoading" v-bind:onShow="hideLoading" />
    </div>
    <div class="right">  </div>
  </div>
</template>

<script>
import MdShower from "../common/mdShower.vue";
import markdownList  from "../config/markdownList.js";


export default {
  name: "app-body",
  data: ()=>({
    currentUrl: "markdown/README.md",
    markdownList: markdownList,
    isLoading:false
  }),
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
      }else{
        this.markdownList[index].isShowChildren = !markdown.isShowChildren;
      }
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body{
  padding-top: 64px;
  width: 100%;
  position: relative;
  display: flex;
}
.left{
  width: 20%;
  padding: 10px;
  box-sizing: border-box;
}
.middle{
  width: 60%;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
}
.right{
  width: 20%;
}
.loading{
  width: 100%;
  height: 100%;
  background: grey;
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
