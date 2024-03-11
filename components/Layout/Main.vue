<template>
  <div class="main">
    <img class="main-logo" src="~/assets/image/logo.png" alt="logo">
    <h3 class="main-title">
      Наследие
    </h3>
    <StatusList v-if="loggedIn" :status="userInfo.info"></StatusList>
    <v-btn class="main-phone-button" @click="togglePhoneNumber">
      {{ isPhoneNumberVisible ? `+${phoneNumber} (скрыть)` : 'Показать номер телефона'}}
    </v-btn>
    <PagesMainTabs @changePage=""></PagesMainTabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

const phoneNumber = convertNumberForView(1555725727);
const isPhoneNumberVisible = ref(false);

const togglePhoneNumber = () => {
  isPhoneNumberVisible.value = !isPhoneNumberVisible.value;
};

const userStore = useUserStore();
const globalStore = useGlobalStore();

const { logo } = storeToRefs(globalStore);
const { loggedIn, userInfo } = storeToRefs(userStore);
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid var(--gray-color-five);
  &-logo {
    width: 120px;
    height: 120px;
    border-radius: 20px;
  }
  &-title {
    @include font-1;
    margin-top: 24px;
    margin-bottom: 12px;
  }
  &-phone-button {
    @include font-10;
    height: fit-content !important;
    color: var(--gray-color-six);
    background-color: var(--green-color);
    padding: 16px 20px;
    border-radius: 12px;
    margin-top: 24px;
    margin-bottom: 32px;
    text-transform: none;
  }
}
</style>