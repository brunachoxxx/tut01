<template>
  <div class="contact">
    <h1 class="text-center">{{ $t("contact") }}</h1>
    <v-btn color="success" :disabled="isLoading" @click="handleButtonClick"
      >text</v-btn
    >
    <v-alert
      v-if="showAlert"
      :color="isError ? 'red' : 'success'"
      icon="mdi-alert"
      :value="true"
    >
      {{ isLoading ? "Loading ..." : response }}
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
      simulatedError: false,
    };
  },

  methods: {
    async handleButtonClick() {
      this.isLoading = true;
      this.simulatedError = !this.simulatedError;
      try {
        if (this.simulatedError) throw new Error("request failed");
        let resp = await myAxiosInstance.get("todos");
        this.response = resp.data;
      } catch (err: any) {
        this.isError = true;
        this.response = { msg: err.message };
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
