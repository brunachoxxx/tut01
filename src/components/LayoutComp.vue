import Vue from 'vue';
<template>
  <NavigationComp />
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
