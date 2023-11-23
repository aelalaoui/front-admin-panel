<template>
  <v-card class="mx-auto">
    <v-layout>
      <!-- Include the NavBar components -->
      <nav-bar @toggle-drawer="toggleSidebar" />

      <!-- Include the SideBar components -->
      <side-bar :show="sideBarShow" ref="sidebar"/>

      <!-- Markup shared across all pages -->
      <NuxtPage />
    </v-layout>
  </v-card>
</template>
<script>
import NavBar from "./components/navBar.vue";
import SideBar from "./components/sideBar.vue";

export default {
  components: { NavBar, SideBar },
  data: () => ({
    sideBarShow: false,
  }),
  mounted() {
    document.body.addEventListener("mousedown", this.closeSidebarOnClickOutside);
  },
  methods: {
    toggleSidebar() {
      this.sideBarShow = !this.sideBarShow;
    },
    closeSidebarOnClickOutside(event) {
      const sidebarElement = this.$refs.sidebar && this.$refs.sidebar.$el;
      if (sidebarElement && !event.target.closest('.sidebar-container')) {
        this.sideBarShow = false;
      }
    }
  },
  beforeDestroy() {
    document.body.removeEventListener("mousedown", this.closeSidebarOnClickOutside);
  },
};
</script>