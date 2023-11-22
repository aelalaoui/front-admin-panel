<template>
  <v-navigation-drawer location="left" v-if="show" theme="dark" class="bg-deep-purple">
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
