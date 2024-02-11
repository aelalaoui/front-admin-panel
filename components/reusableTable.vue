<template>
  <div class="bg-white relative border rounded-lg">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th class="px-4 py-3" v-for="title in titles" :key="title">{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(elements, index) in paginatedItems" :key="index">
          <td class="px-4 py-3" v-for="(element, elementIndex) in elements" :key="elementIndex">{{ element }}</td>
        </tr>
      </tbody>
    </table>
    <div class="mt-4">
      <v-pagination
          class="pagination mb-2"
          v-model="currentPage"
          :length="totalPages"
          @update:currentPage="emitCurrentPageChange"
      >
      </v-pagination>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits, watch, ref } from "vue";

const emit = defineEmits(['currentPageChange']);

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  titles: {
    type: Array,
    default: () => []
  },
  itemsPerPage: {
    type: Number,
    default: 10
  },
  page: {
    type: Number,
    default: 1
  },
  currentPage: {
    type: Number,
    default: 1
  },
  meta: {
    type: Object,
    default: () => ({
      current_page: 1,
      per_page: 10,
      total: 0
    })
  }
});

const currentPage = ref(props.currentPage);

const itemsPerPage = computed(() => {
  return props.meta?.per_page;
});
const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage.value));

const items = computed(() => {
  if (props.titles.length === 0) {
    return props.data;
  } else {
    return props.data.map(item => {
      const filteredItem = {};
      props.titles.forEach(title => {
        if (item.hasOwnProperty(title)) {
          filteredItem[title] = item[title];
        }
      });
      return filteredItem;
    });
  }
});

const paginatedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * props.itemsPerPage;
  const endIndex = startIndex + props.itemsPerPage;
  return items.value.slice(startIndex, endIndex);
});

const totalItems = computed(() => {
  return props.meta?.total;
});

function emitCurrentPageChange(currentPage) {
  console.log('line 96');
  emit('currentPageChange', currentPage);
}

watch(() => props.meta?.current_page, (newPage) => {
  currentPage.value = newPage;
});
</script>
