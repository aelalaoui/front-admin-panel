<template>
  <v-row>
    <v-col cols="12" sm="12" md="6" class="my-4">
      <suspense>
        <template #default>
          <table-card :items="getParts"/>
        </template>
        <template #fallback>
          <!-- Fallback content while loading -->
          <div>Loading...</div>
        </template>
      </suspense>
    </v-col>
    <v-col cols="12" sm="12" md="6" class="my-4">
      <suspense>
        <template #default>
          <time-line-card />
        </template>
        <template #fallback>
          <!-- Fallback content while loading -->
          <div>Loading...</div>
        </template>
      </suspense>
    </v-col>
  </v-row>
</template>

<script>
import { usePartsStore } from '@/stores/parts';
import TableCard from "./tableCard.vue";
import TimeLineCard from "./timeLineCard.vue";
import { onMounted, computed, ref, defineAsyncComponent } from 'vue';

const AsyncTableCard = defineAsyncComponent(() => import('./TableCard.vue'));
const AsyncTimeLineCard = defineAsyncComponent(() => import('./TimeLineCard.vue'));

export default {
  components: { TableCard, TimeLineCard, AsyncTableCard, AsyncTimeLineCard },
  setup() {
    const partsStore = usePartsStore();
    const isLoading = ref(true);

    onMounted(async () => {
      await partsStore.getParts();
      isLoading.value = false;
    });

    const getParts = computed(() => {
      const items = partsStore.items;
      return (Array.isArray(items)) ? partsStore.items : [];
    });

    return {
      getParts,
      isLoading,
    };
  },
};
</script>