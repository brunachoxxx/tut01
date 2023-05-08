<template>
  <nav>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-tollbar-side-icon @click="drawer = !drawer"></v-tollbar-side-icon>
      </div>

      <v-spacer></v-spacer>

      <v-btn>
        <v-icon left>mdi-home</v-icon>
        <span>Home</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <p>test</p>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Navigation",
  data: () => ({
    drawer: false,
  }),
});
</script>
