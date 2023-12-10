<template>
  <v-card color="grey-lighten-4" flat min-height="200px" >
    <v-toolbar
        :color="'primary'"
        :dark="false"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-plus-circle</v-icon>
      </v-btn>
    </v-toolbar>
    <v-data-table v-model:search="search" :items="items" class="scrollable-table">
      <template v-slot:header.quantity>
        <div class="text-end">Stock</div>
      </template>

      <template v-slot:item.id="{ item }">
        <v-card class="my-2" elevation="2" rounded>
          <v-img
              :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.id}`"
              height="64"
              cover
          ></v-img>
        </v-card>
      </template>

      <template v-slot:item.rating="{ item }">
        <v-rating
            :model-value="item.rating"
            color="orange-darken-2"
            density="compact"
            size="small"
            readonly
        ></v-rating>
      </template>

      <template v-slot:item.quantity="{ item }">
        <div class="text-end">
          <v-chip
              :color="item.quantity > 0 ? 'green' : 'red'"
              :text="item.quantity > 0 ? 'In stock' : 'Out of stock'"
              class="text-uppercase"
              label
              size="small"
          ></v-chip>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
export default {
  props: {
    items: Array|Object,
    loading: Boolean,
    totalItems: {
      type: Number|null,
      default: null,
    },
    page: {
      type: Number,
      default: 1,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    sortBy: String,
    error: String,
  },
  data: () => ({
    bars: [
      { class: 'primary' },
      { class: 'purple', dark: true },
      { class: 'red', dark: true },
      { class: 'green' },
    ],
    search: '',
  }),
}
</script>

<style scoped>
.scrollable-table {
  overflow-x: auto;
}

/* Add a media query to set a specific width on small screens */
@media (max-width: 600px) {
  .scrollable-table {
    width: 100%;
  }
}
</style>