<template>
  <v-col cols="12" sm="12" md="6" class="my-4">
    <table-card :items="parts.items"/>
  </v-col>
  <v-col cols="12" sm="12" md="6" class="my-4">
    <time-line-card />
  </v-col>
</template>
<script>
import { usePartsStore } from '@/stores/parts'
import TableCard from "./tableCard.vue";
import TimeLineCard from "./timeLineCard.vue";
export default {
  components: {TimeLineCard, TableCard},
  data: () => ({
    parts: {},
    bars: [
      { class: 'primary' },
      { class: 'purple', dark: true },
      { class: 'red', dark: true },
      { class: 'green' },
    ],
  }),
  async mounted() {
    const partsStore = usePartsStore();
    this.parts = await partsStore.getParts();
  },
}
</script>