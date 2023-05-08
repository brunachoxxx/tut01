<template>
  <LayoutComp />
</template>

<script lang="ts">
import Vue from "vue";
//import HelloWorld from "../components/HelloWorld.vue";
import LayoutComp from "@/components/LayoutComp.vue";

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",

  components: {
    //HelloWorld,
    LayoutComp,
  },
});
</script>
