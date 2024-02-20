<template>
  <div>
    <v-card height="25"></v-card>
    <v-img class="mx-auto my-6" max-width="228"
           src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"></v-img>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <v-form fast-fail @submit.prevent="signup">
        <v-text-field
            density="compact"
            variant="underlined"
            v-model="form.name"
            label="Name"
            prepend-inner-icon="mdi-account-outline"
            :rules="[requiredRule, nameLengthRule]"
        ></v-text-field>
        <v-text-field
            density="compact"
            variant="underlined"
            v-model="form.email"
            label="Email"
            prepend-inner-icon="mdi-email-outline"
            :rules="[requiredRule, emailFormatRule]"
        ></v-text-field>
        <v-text-field
            density="compact"
            variant="underlined"
            v-model="form.password"
            label="Password"
            prepend-inner-icon="mdi-lock-outline"
            :rules="[passwordRule]"
        ></v-text-field>
        <v-text-field
            density="compact"
            variant="underlined"
            v-model="form.repeated"
            label="Repeat again"
            prepend-inner-icon="mdi-lock-outline"
            :rules="[passwordMatchRule]"
        ></v-text-field>

        <v-btn
            type="submit"
            color="primary"
            block class="mt-2"
            :disabled="passwordHealth"
        >Sign up
        </v-btn>
      </v-form>
      <div class="mt-2">
        <p class="text-body-2">
          Already have an account? <a href="#">Sign in</a>
        </p>
      </div>
    </v-card>
  </div>
</template>
<script>
import { useUserStore } from '@/stores/users';
import { computed } from "vue";
export default {
  setup() {
    const form = ref({});
    const user = ref();
    const userStore = useUserStore();

    async function signup() {
      await userStore.storeUser(form.value)
          .then((res) => {user.value = res.data;})
          .catch((error) => {
            user.value = null;
            console.error('An error has been encountered:', error);
          });
    }

    const passwordHealth = computed(() => {
      let l = form.value.password ? form.value.password.length : 0;
      if (l >= 8) {
        return !(form.value.password === form.value.repeated);
      }
      return true;
    });

    const nameLengthRule = (value) => {
      if (value.length === 0) {
        return true;
      }
      if (value.length <= 5) {
        return 'Name must be more than 5 characters';
      }
      return true;
    };

    const requiredRule = (value) => !!value || 'this Field is required';

    const emailFormatRule = (value) => {
      if (value.length === 0) {
        return true;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value) || 'Invalid email format';
    };

    const passwordRule = (value) => {
      if (value.length === 0) {
        return true;
      }
      return (value.length >= 8) || 'Passwords should be more than 8 characters';
    };

    const passwordMatchRule = (value) => {
      if (value.length === 0) {
        return true;
      }
      return value === form.value.password || 'Passwords do not match';
    };

    return {
      form,
      signup,
      passwordHealth,
      nameLengthRule,
      requiredRule,
      emailFormatRule,
      passwordRule,
      passwordMatchRule
    }
  }
};
</script>