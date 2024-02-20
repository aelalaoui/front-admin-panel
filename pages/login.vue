<template>
  <div>
    <v-card height="25"></v-card>
    <v-img class="mx-auto my-6" max-width="228"
           src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"></v-img>

    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis">Email</div>

      <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
                    variant="outlined"></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
          Forgot login password?</a>
      </div>

      <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                    density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
                    @click:append-inner="visible = !visible"></v-text-field>

      <v-btn block class="mb-8" color="blue" size="large" variant="tonal" @click="hundleLogin">
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <a class="text-blue text-decoration-none" href="./register" rel="noopener noreferrer" target="_blank">
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
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

    const hundleLogin = async () => {
      await partsStore.getParts(1, 10);
    }

    return { visible, hundleLogin };
  }
}
</script>