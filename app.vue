<template>
  <v-card class="mx-auto">
    <v-layout>
      <!-- Include the NavBar component -->
      <nav-bar @toggle-drawer="updateDrawerState" />

      <!-- Include the SideBar component -->
      <side-bar :show="sideBarShow" />

      <v-container>
        <template>
          <v-row align="center" justify="center">
            <v-col cols="auto">
              <v-card
                  class="mx-auto"
                  max-width="344"
                  title="Icons"
                  subtitle="prepend-icon and append-icon"
                  prepend-icon="mdi-account"
                  append-icon="mdi-check"
              >
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
              </v-card>
            </v-col>

            <v-col cols="auto">
              <v-card
                  class="mx-auto"
                  max-width="344"
                  title="Icons"
                  subtitle="prepend and append"
              >
                <template v-slot:prepend>
                  <v-icon icon="mdi-account" color="primary"></v-icon>
                </template>
                <template v-slot:append>
                  <v-icon icon="mdi-check" color="success"></v-icon>
                </template>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
              </v-card>
            </v-col>

            <v-col cols="auto">
              <v-card
                  class="mx-auto"
                  max-width="344"
                  title="Avatars"
                  subtitle="prepend-avatar and append-avatar"
                  prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
                  append-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
              >
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
              </v-card>
            </v-col>

            <v-col cols="auto">
              <v-card
                  class="mx-auto"
                  max-width="344"
                  title="Avatars"
                  subtitle="prepend and append"
              >
                <template v-slot:prepend>
                  <v-avatar color="blue-darken-2">
                    <v-icon icon="mdi-alarm"></v-icon>
                  </v-avatar>
                </template>
                <template v-slot:append>
                  <v-avatar size="24">
                    <v-img
                        src="https://cdn.vuetifyjs.com/images/john.png"
                        alt="John"
                    ></v-img>
                  </v-avatar>
                </template>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-container>
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