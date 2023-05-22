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
import { GridPlugin, PagerPlugin } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin, SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { DialogPlugin } from "@syncfusion/ej2-vue-popups";
import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(ComboBoxPlugin);
Vue.use(ToolbarPlugin);
Vue.use(PagerPlugin);
Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);
Vue.use(GridPlugin);
Vue.use(SwitchPlugin);

export default Vue.extend({
  name: "App",
  components: { LayoutComp },
  data: () => ({
    //
  }),
});
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
