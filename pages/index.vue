<template>
  <v-container fluid>
    <v-row>
      <dashboard-graph />
    </v-row>
    <v-row>
      <dashboard-key-cards />
    </v-row>
    <v-row>
      <dashboard-list-cards />
    </v-row>
  </v-container>
</template>

<script>
import DashboardGraph from "../components/dashboardGraph.vue";
import DashboardKeyCards from "../components/dashboardKeyCards.vue";
import DashboardListCards from "../components/dashboardListCards.vue";

export default {
  components: {DashboardListCards, DashboardKeyCards, DashboardGraph },
}
</script>