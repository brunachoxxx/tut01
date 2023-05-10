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
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { DialogPlugin } from "@syncfusion/ej2-vue-popups";

Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);
Vue.use(GridPlugin);

export default Vue.extend({
  name: "App",
  components: { LayoutComp },
  data: () => ({
    //
  }),
});
</script>
