<template>
  <v-app-bar color="black" density="compact">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Cloud SAV</v-app-bar-title>

    <template v-slot:append>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<script>
import SideBar from './SideBar.vue';

export default {
  components: { SideBar },
  data: () => ({
    drawer: false,
    group: null
  }),

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
      this.$emit('toggle-drawer', this.drawer);
    }
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
