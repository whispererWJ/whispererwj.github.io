<template>
  <section v-html="cleanHtml"></section>
</template>

<script>
import marked from "marked";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import "whatwg-fetch";

export default {
  name: "markdown-shower",
  data: ()=>({
    cleanHtml: ""
  }),
  props: {
    url: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.getMd(); 
  },
  updated() {
    
  },
  methods: {
    clenMd(dirty) {
      const win = (new JSDOM("")).defaultView,
        DOMPurify = createDOMPurify(win);
      return DOMPurify.sanitize(dirty);
    },
    transMdIntoHtml(str) {
      return marked(str);
    },
    getMd() {
      const baseUrl =  window.location.href;
      window
        .fetch(`${baseUrl}${this.$props.url}`)
        .then((response) => response.text())
        .then((mdStr) => this.transMdIntoHtml(mdStr))
        .then((dirty) => this.clenMd(dirty))
        .then((clean)=>{ this.cleanHtml = clean;});
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
