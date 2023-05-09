<template>
  <v-app>
    <v-main>
      <LayoutComp />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import LayoutComp from "@/components/LayoutComp.vue";

export default Vue.extend({
  name: "App",
  components: { LayoutComp },
  data: () => ({
    //
  }),
});
</script>
