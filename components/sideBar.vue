<template>
  <v-navigation-drawer
      location="left"
      theme="dark"
      class="sidebar-container bg-deep-purple"
      :class="{ 'transformed': show }"
      :style="{ transform: show ? 'translateX(0%)' : 'translateX(-110%)' }"
  >
    <v-list color="transparent">
      <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
      <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>
<style scoped>
  .transformed {
    transform: translateX(0%);
  }
</style>
