<template>
  <v-row>
    <v-col cols="12" sm="12" md="6" class="my-4">
      <suspense>
        <template #default>
          <reusable-table
            :data="elements"
            :meta="getMeta"
            :itemsPerPage="itemsPerPage"
            :titles="[
              'ref',
              'designation',
              'quantity',
              'price_unit',
            ]"
            @changePage="handleCurrentPageChange"
            @changeItemsPerPage="handleItemsPerPageChange"
          />
        </template>
        <template #fallback>
          <!-- Fallback content while loading -->
          <v-card :loading="isLoading">Loading...</v-card>
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
import TimeLineCard from "./timeLineCard.vue";
import { onMounted, computed, ref, defineAsyncComponent } from 'vue';
import ReusableTable from "./reusableTable.vue";

const AsyncTableCard = defineAsyncComponent(() => import('./TableCard.vue'));
const AsyncTimeLineCard = defineAsyncComponent(() => import('./TimeLineCard.vue'));

export default {
  components: {
    ReusableTable,
    TimeLineCard,
    AsyncTableCard,
    AsyncTimeLineCard
  },
  setup() {
    const partsStore = usePartsStore();
    const isLoading = ref(false);
    const currentPage = ref(1);
    const itemsPerPage = ref(10);

    onMounted(async () => {
      isLoading.value = true;
      await partsStore.getParts(currentPage.value, itemsPerPage.value).then(() => {
        isLoading.value = false;
      });
    });

    async function handleCurrentPageChange(event) {
      currentPage.value = event;
      isLoading.value = true;
      await partsStore.getParts(event, itemsPerPage.value).then(() => {
        isLoading.value = false;
      });
    }

    async function handleItemsPerPageChange(event) {
      itemsPerPage.value = event;
      isLoading.value = true;
      await partsStore.getParts(currentPage.value, event).then(() => {
        isLoading.value = false;
      });
    }

    const elements = computed(() => {
      const items = partsStore.items;
      return (Array.isArray(items)) ? partsStore.items : [];
    })

    const getMeta = computed(() => {
      return partsStore.meta;
    });

    return {
      elements,
      getMeta,
      isLoading,
      itemsPerPage,
      handleCurrentPageChange,
      handleItemsPerPageChange
    };
  },
};
</script>