<template>
  <div>
    <v-row>
      <dashboard-graph />
    </v-row>
    <v-row>
      <dashboard-key-cards />
    </v-row>
    <v-row>
      <table-from-server />
    </v-row>
  </div>
</template>

<script>
import DashboardGraph from "../components/dashboardGraph.vue";
import DashboardKeyCards from "../components/dashboardKeyCards.vue";
import DashboardListCards from "../components/dashboardListCards.vue";
import TableFromServer from "../components/tableFromServer.vue";

export default {
  components: {TableFromServer, DashboardListCards, DashboardKeyCards, DashboardGraph },
}
</script>