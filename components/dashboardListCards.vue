<template>
  <v-row>
    <v-col
        v-for="(bar, i) in bars"
        :key="i"
        cols="12"
        sm="12"
        md="6"
        class="my-4"
    >
      <v-card color="grey-lighten-4" flat height="200px">
        <v-toolbar
            :color="bar.class"
            :dark="bar.dark"
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>Title</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
     <listing-card />
    </v-col>
  </v-row>
</template>
<script>
import ListingCard from "./listingCard.vue";
export default {
  components: {ListingCard},
  data: () => ({
    bars: [
      { class: 'primary' },
      { class: 'purple', dark: true },
      { class: 'red', dark: true },
      { class: 'green' },
    ],
  }),
}
</script>