<template>
  <template class="bg-white relative border rounded-lg">
    <v-card>
      <div class="flex justify-center">
        <v-table class="w-full text-sm text-left text-gray-500" hover>
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th class="px-4 py-3"
                  v-for="title in titles"
                  :key="title">
                {{ title }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(elements, index) in paginatedItems" :key="index">
              <td class="px-4 py-3"
                  v-for="(element, elementIndex) in elements"
                  :key="elementIndex">
                {{ element }}
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>

      <v-row>
        <v-col cols="9">
          <v-pagination
              class="pagination mb-2"
              v-model="page"
              :length="totalPages"
              :show-first-last-page="true"
              @update:modelValue="updatePageHandler"
          ></v-pagination>
        </v-col>
        <v-col cols="3">
          <v-select
              class="ml-auto"
              v-model="itemsPerPage"
              :items="['10', '25', '50', '100']"
              variant="solo-filled"
              @update:modelValue="updateItemsPerPageHandler"
          ></v-select>
        </v-col>
      </v-row>
    </v-card>
  </template>
</template>

<script setup>
import { computed, ref, defineProps, defineEmits } from "vue";

const emit = defineEmits(['changePage', 'changeItemsPerPage']);

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
  meta: {
    type: Object,
    default: () => ({
      current_page: 1,
      per_page: 10,
      total: 0
    })
  }
});
const page = ref();
const currentPage = computed(() => {
  return props.meta?.current_page;
});

const itemsPerPage = computed(() => {
  return props.meta?.per_page;
});

const totalItems = computed(() => {
  return props.meta?.total;
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
  return items.value.slice(0, itemsPerPage.value);
});

const updatePageHandler = (event) => {
  emit('changePage', event);
};

const updateItemsPerPageHandler = (event) => {
  emit('changeItemsPerPage', event);
};
</script>
