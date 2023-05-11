import Vue from 'vue';
<template>
  <div class="about">
    <h1 class="text-center">{{ $t("grid") }}</h1>
    <ejs-grid
      ref="grid"
      :dataSource="localData"
      :allowPaging="true"
      :pageSettings="pageSettings"
      :allowSorting="true"
      :allowFiltering="true"
    >
      <e-columns>
        <e-column
          field="id"
          :visible="false"
          headerText="Item Id"
          textAlign="Center"
        ></e-column>
        <e-column
          field="first_name"
          headerText="Name"
          textAlign="Center"
        ></e-column>
        <e-column field="code" headerText="Code" textAlign="Center"></e-column>
        <e-column
          field="state"
          headerText="state"
          textAlign="Center"
          :valueAccessor="valueAccess"
        ></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { dataDB } from "../db";
import { Page, Sort, Filter } from "@syncfusion/ej2-vue-grids";
export default Vue.extend({
  name: "GrigliaView",
  data() {
    return {
      localData: dataDB,
      pageSettings: { pageSizes: true, pageSize: 20 },
      provide: {
        grid: [Page, Sort, Filter],
      },
      valueAccess: function (_: string, data: any): string {
        return data.state ? "Yes" : "No";
      },
    };
  },
});
</script>
