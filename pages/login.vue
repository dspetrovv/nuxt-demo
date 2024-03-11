<template>
  <ClientOnly>
    <div class="login">
      <h1>Вход</h1>
      <div class="login-input">
        <v-text-field
          v-model="login"
          label="Логин"
          hide-details
          required
        ></v-text-field>
      </div>

      <div class="login-input">
        <v-text-field
          v-model="password"
          label="Пароль"
          type="password"
          hide-details
          required
        ></v-text-field>
      </div>
      <div class="login-action">
        <v-btn class="login-button" @click="signin">Войти</v-btn>
        <div v-if="loginError" class="login-error">{{ loginError }}</div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';

definePageMeta({
  layout: 'login'
});

useHead({
  title: 'Вход',
});

const login = ref('');
const password = ref('');

const store = useUserStore();
const router = useRouter();

const { error: loginError, loggedRoute } = storeToRefs(store);

const signin = async () => {
  const isSuccess = await store.signin({
    login: login.value, password: password.value
  });
  if (isSuccess) {
    router.replace(loggedRoute || '/');
  }
};

onMounted(() => {
  if (localStorage.getItem('user')) {
    router.replace('/');
  }
});
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  margin: 12px;
  &-input {
    width: 560px;
  }
  &-button {
    padding: 0 12px;
    border-radius: 8px;
    text-transform: none;
    background: var(--green-color);
    color: var(--background-color);
  }
  &-action {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &-error {
    @include font-4;
    margin-top: 8px;
    color: red;
  }
}
</style>