<template>
  <div class="about">
    <h1 class="text-center">{{ $t("grid") }}</h1>
    <ejs-grid
      ref="grid"
      :allowSorting="true"
      :allowFiltering="true"
      :dataSource="localData"
      :allowPaging="true"
      :pageSettings="pageSettings"
      :searchSettings="searchOptions"
      :editSettings="editSettings"
      :toolbar="toolbarOptions"
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
          headerText="Description"
          textAlign="Center"
        ></e-column>
        <e-column field="code" headerText="Code" textAlign="Center"></e-column>
        <e-column
          field="state"
          headerText="state"
          textAlign="Center"
          :valueAccessor="valueAccess"
        ></e-column>
        <e-column
          headerText="Commands"
          width="120"
          :commands="commands"
        ></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { dataDB } from "../db";
import {
  Page,
  Sort,
  Filter,
  Toolbar,
  Search,
  Edit,
  CommandColumn,
} from "@syncfusion/ej2-vue-grids";

export default Vue.extend({
  name: "GrigliaView",
  data() {
    return {
      localData: dataDB,
      pageSettings: { pageSize: 20 },
      toolbarOptions: [
        "Search",
        "Add",
        "PdfExport",
        "ExcelExport",
        "CsvExport",
      ],
      searchOptions: { fields: ["code", "first_name"] },
      editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: "Dialog",
      },
      valueAccess: function (_: string, data: any): string {
        return data.state ? "yes" : "no";
      },
      commands: [
        {
          type: "Edit",
          buttonOption: { cssClass: "e-flat", iconCss: "e-edit e-icons" },
        },
        {
          type: "Delete",
          buttonOption: { cssClass: "e-flat", iconCss: "e-delete e-icons" },
        },
        {
          type: "Save",
          buttonOption: { cssClass: "e-flat", iconCss: "e-update e-icons" },
        },
        {
          type: "Cancel",
          buttonOption: {
            cssClass: "e-flat",
            iconCss: "e-cancel-icon e-icons",
          },
        },
      ],
    };
  },

  provide: {
    grid: [Page, Sort, Filter, Toolbar, Search, Edit, CommandColumn],
  },
});
</script>
