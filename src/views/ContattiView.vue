<template>
  <div class="contact">
    <h1 class="text-center">{{ $t("contact") }}</h1>
    <v-btn color="success" :disabled="isLoading" @click="handleButtonClick"
      >text</v-btn
    >
    <v-alert
      v-if="showAlert"
      type="isError ? red : success"
      icon="mdi-alert"
      :value="true"
    >
      {{ response }}
    </v-alert>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  data: function () {
    return {
      isLoading: false,
      response: {},
      isError: false,
      showAlert: false,
      simulatedError: false,
      apiR: "https://jsonplaceholder.typicode.com/users/1/todos",
    };
  },

  methods: {
    async handleButtonClick() {
      this.simulatedError = !this.simulatedError;
      this.isLoading = true;
      this.showAlert = true;
      try {
        if (this.simulatedError) throw new Error("request failed");
        let response = await axios(this.apiR);
        this.response = response;
      } catch (error) {
        this.isError = true;
        this.response = { error };
      } finally {
        this.isLoading = false;
        setTimeout(() => {
          this.showAlert = false;
        }, 5000);
      }
    },
  },
});
</script>
