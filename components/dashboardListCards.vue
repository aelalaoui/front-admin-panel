<template>
  <v-row>
    <v-col cols="12" sm="12" md="6" class="my-4">
      <suspense>
        <template #default>
<!--          <table-card :items="getParts"/>-->
          <reusable-table
            :data="getParts"
            :meta="getMeta"
            :titles="[
              'ref',
              'designation',
              'quantity',
              'price_unit',
            ]"
            @currentPageChange="handleCurrentPageChange"
          />
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
import ReusableTable from "./reusableTable.vue";

const AsyncTableCard = defineAsyncComponent(() => import('./TableCard.vue'));
const AsyncTimeLineCard = defineAsyncComponent(() => import('./TimeLineCard.vue'));

export default {
  components: {
    ReusableTable,
    TableCard,
    TimeLineCard,
    AsyncTableCard,
    AsyncTimeLineCard
  },
  setup() {
    const partsStore = usePartsStore();
    const isLoading = ref(true);
    const currentPage = ref(1);
    const itemsPerPage = ref(10);

    onMounted(async () => {
      await partsStore.getParts(currentPage.value, itemsPerPage.value);
      isLoading.value = false;
    });

    async function handleCurrentPageChange(pageNumber) {
      currentPage.value = pageNumber;
      await partsStore.getParts(currentPage.value, itemsPerPage.value);
    }

    const getParts = computed(() => {
      const items = partsStore.items;
      return (Array.isArray(items)) ? partsStore.items : [];
    })

    const getMeta = computed(() => {
      return partsStore.meta;
    });

    return {
      getParts,
      getMeta,
      isLoading,
      handleCurrentPageChange
    };
  },
};
</script>