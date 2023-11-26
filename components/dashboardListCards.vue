<template>
  <v-col cols="12" sm="12" md="6" class="my-4">
    <listing-card />
  </v-col>
  <v-col cols="12" sm="12" md="6" class="my-4">
    <time-line-card />
  </v-col>
</template>
<script>
import ListingCard from "./listingCard.vue";
import TimeLineCard from "./timeLineCard.vue";
export default {
  components: {TimeLineCard, ListingCard},
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