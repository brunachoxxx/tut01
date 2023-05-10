<template>
  <div class="contact">
    <h1 class="text-center">{{ $t("contact") }}</h1>
    <v-btn
      :color="isError ? 'red' : 'success'"
      :disabled="isLoading"
      @click="handleButtonClick"
      >{{ isLoading ? "loading..." : "Fetch Data" }}</v-btn
    >
    <v-alert
      v-if="showAlert"
      :color="isError ? 'red' : 'success'"
      icon="mdi-alert"
      :value="true"
    >
      {{ response }}
    </v-alert>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import myAxiosInstance from "../axios";

export default Vue.extend({
  data: function () {
    return {
      isLoading: false,
      response: {},
      isError: false,
      showAlert: false,
    };
  },

  methods: {
    async handleButtonClick() {
      this.isLoading = true;
      try {
        let resp = await myAxiosInstance.get("todos");
        this.response = resp.data;
        this.isError = false;
      } catch (err) {
        this.isError = true;
        this.response = { err };
      } finally {
        this.isLoading = false;
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 5000);
      }
    },
  },
});
</script>
