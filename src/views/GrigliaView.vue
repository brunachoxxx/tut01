import Vue from 'vue';
<template>
  <div class="about">
    <h1 class="text-center">{{ $t("grid") }}</h1>
    <ejs-grid
      :dataSource="localData"
      :allowPaging="true"
      :pageSettings="pageSettings"
    ></ejs-grid>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { dataDB } from "../db";
import { Page } from "@syncfusion/ej2-vue-grids";
export default Vue.extend({
  name: "GrigliaView",
  data() {
    return {
      localData: dataDB,
      pageSettings: { pageSize: 20 },
      provide: {
        grid: [Page],
      },
    };
  },
});
</script>
