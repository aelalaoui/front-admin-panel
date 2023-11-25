<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="scrollable-row">
      <v-col cols="auto">
        <v-card class="mx-auto" min-width="300" max-width="360" title="Customers" subtitle="tasks to do" color="green">
          <template v-slot:prepend>
            <v-avatar color="white">
              <v-icon icon="mdi-bank"></v-icon>
            </v-avatar>
          </template>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="mx-auto" min-width="300" max-width="360" title="Contracts" subtitle="tasks to do" color="blue">
          <template v-slot:prepend>
            <v-avatar color="white">
              <v-icon icon="mdi-handshake"></v-icon>
            </v-avatar>
          </template>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="mx-auto" min-width="300" max-width="360" title="Devices" subtitle="tasks to do" color="purple">
          <template v-slot:prepend>
            <v-avatar color="white">
              <v-icon icon="mdi-audio-video"></v-icon>
            </v-avatar>
          </template>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="mx-auto" min-width="300" max-width="360" title="Claims" subtitle="tasks to do" color="red">
          <template v-slot:prepend>
            <v-avatar color="white">
              <v-icon icon="mdi-headset"></v-icon>
            </v-avatar>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.scrollable-row {
  overflow-x: auto;
  white-space: nowrap;
}
</style>

