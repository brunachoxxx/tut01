<template>
  <div class="contact">
    <h1 class="text-center">{{ $t("contact") }}</h1>
    <v-btn color="success" @click="">text</v-btn>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    myPromise() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() < 0.5) {
            resolve(true);
          } else {
            reject(false);
          }
        }, 5000);
      });
    },
  },
});
</script>
