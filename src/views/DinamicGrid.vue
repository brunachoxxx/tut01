<template>
  <div class="about">
    <h1 class="text-center">{{ $t("dynamic grid") }}</h1>
    <ejs-button @click.native="btnClick">Get Data</ejs-button>
    <ejs-grid
      :allowSorting="true"
      :allowFiltering="true"
      :allowPaging="true"
      :dataSource="rData"
      :pageSettings="pageSettings"
      :searchSettings="searchOptions"
      :editSettings="editSettings"
      :toolbar="toolbarOptions"
      :filterSettings="filterOptions"
    >
    </ejs-grid>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ sbText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  Page,
  Sort,
  Filter,
  Toolbar,
  Search,
  Edit,
  CommandColumn,
} from "@syncfusion/ej2-vue-grids";
import { Ajax } from "@syncfusion/ej2-base";
export default Vue.extend({
  name: "DinamicGrid",
  data() {
    return {
      snackbar: false,
      sbText: "",
      timeout: 2000,
      rData: {},
      pageSettings: { pageSize: 20 },
      toolbarOptions: [
        "Search",
        "Add",
        "PdfExport",
        "ExcelExport",
        "CsvExport",
      ],
      searchOptions: { fields: ["code", "description"] },
      filterOptions: { fields: ["code", "description", "state"] },
      editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        showConfirmDialog: true,
        showDeleteConfirmDialog: true,
        mode: "Dialog",
      },
      customerIDRules: { unique: true },
      customeDescriptionRules: { minLength: 3, maxLength: 20 },
      boolParams: { params: { checked: true } },
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

  methods: {
    btnClick: function () {
      try {
        var ajax = new Ajax({
          url: "https://demo.spedizioni-web.it:18443/SpedizioniWeb/webservice/tnazioni/grid",
          type: "POST",
          data: "take=1000&skip=0&page=1&pageSize=1000&datiCfg%5Bentity%5D=&datiCfg%5Bcodapp%5D=&datiCfg%5Bcodmodulo%5D=&datiCfg%5Bstrentity%5D=tnazioni",
          compressed: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          headers: {
            Accept: "application/json, text/javascript, */*; q=0.01",
            "Accept-Language": "it-IT,it;q=0.9,en;q=0.8",
            "BSS-AZIENDA": "*",
            "BSS-ESERCIZIO": "**",
          },
        });
        ajax.send().then((response: any) => {
          this.rData = JSON.parse(response).results;
          console.log(this.rData);
        });

        ajax.onFailure = function (error: any) {
          throw new Error(error.message);
        };
        this.snackbar = true;
        this.sbText = "Success";
      } catch (error: any) {
        this.sbText = error.message;
      }
    },
  },
  provide: {
    grid: [Page, Sort, Filter, Toolbar, Search, Edit, CommandColumn],
  },
});
</script>
