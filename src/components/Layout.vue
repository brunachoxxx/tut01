import Vue from 'vue';
<template>
  <Navigation />
</template>

<script lang="ts">
import Vue from "vue";
import Navigation from "./Navigation.vue";

export default Vue.extend({
  name: "Layout",
  components: {
    Navigation,
  },
});
</script>
