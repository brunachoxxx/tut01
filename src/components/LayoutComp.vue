<template>
  <div>
    <NavigationComp />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationComp from "./NavigationComp.vue";

export default Vue.extend({
  name: "LayoutComp",
  components: {
    NavigationComp,
  },
});
</script>
