<template>
  <nav>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="$router.push('/')">
        <v-icon left>mdi-home</v-icon>
        <span>Home</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Menu </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          router
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavigationComp",
  data: () => ({
    drawer: false,
    items: [
      { title: "Home", icon: "mdi-home", path: "/" },
      { title: "Chisiamo", icon: "mdi-group", path: "/chisiamo" },
      { title: "Contatti", icon: "mdi-help-box", path: "/contatti" },
    ],
  }),
});
</script>
