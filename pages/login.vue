<template>
  <div>
    <v-card height="25"></v-card>
    <v-img
        class="mx-auto my-6"
        max-width="228"
        src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img>

    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <v-text-field
          density="compact"
          variant="underlined"
          label="Email address"
          prepend-inner-icon="mdi-email-outline"
      ></v-text-field>

      <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          label="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="underlined"
          @click:append-inner="visible = !visible"
      ></v-text-field>
      <div class="text-subtitle-1 text-medium-emphasis d-flex align-start justify-end">
        <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
        >Forgot login password?</a>
      </div>

      <v-btn
          block class="mt-8"
          color="blue"
          size="large"
          variant="tonal"
          @click="handleLogin"
      >Log In</v-btn>

      <v-card-text class="text-center">
        <a
            class="text-blue text-decoration-none"
            href="./register"
            rel="noopener noreferrer"
        >
          Sign up now<v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import { usePartsStore } from '@/stores/parts';
export default {
  setup() {
    const partsStore = usePartsStore();
    const visible = ref(false);

    const handleLogin = async () => {
      await partsStore.getParts(1, 10);
    }

    return { visible, handleLogin };
  }
}
</script>