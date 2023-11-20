<template>
  <v-card class="mx-auto">
    <v-layout>
      <!-- Include the NavBar component -->
      <nav-bar @toggle-drawer="updateDrawerState" />

      <!-- Include the SideBar component -->
      <side-bar :show="sideBarShow" />

      <v-main>
        <v-container fluid>
          <v-row dense>
            <v-col v-for="n in 8" :key="n" cols="3">
              <v-sheet color="surface-variant-alt" height="96"></v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
import NavBar from "./component/navBar.vue";
import SideBar from "./component/sideBar.vue";
export default {
  components: { NavBar, SideBar },
  data: () => ({
    sideBarShow: false,
  }),
  methods: {
    updateDrawerState(drawerState) {
      this.sideBarShow = drawerState;
    },
  },
}
</script>