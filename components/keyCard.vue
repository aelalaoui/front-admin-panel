<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-card
            class="mx-auto"
            max-width="344"
            title="Avatars"
            subtitle="tasks to do"
        >
          <template v-slot:prepend>
            <v-avatar color="blue-darken-2">
              <v-icon icon="mdi-headset"></v-icon>
            </v-avatar>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

