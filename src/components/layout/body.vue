<template>
  <div class="body">
    <MdShower v-bind:url="currentUrl" />
  </div>
</template>

<script>
import MdShower from "../common/mdShower.vue";

export default {
  name: "body",
  data: ()=>({
    currentUrl: "markdown/README.md"
  }),
  props: {},
  components: { MdShower }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
