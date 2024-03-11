<template>
  <header class="header">
    <nav class="header-nav">
      <div class="header-burger">
        <img src="~/assets/icon/burger.svg" alt="menu">
      </div>
      <div class="header-left">
        <NuxtLink>
          <div class="header-title">{{ info.title }}</div>
        </NuxtLink>
        <v-chip class="header-nav-item">
          <img src="~/assets/icon/category.svg" alt="category">
          Все категории
        </v-chip>
      </div>
      <div class="header-right">
        <Navigator />
        <div class="header-divider"></div>
        <div class="header-adv">Разместить объявление</div>
        <ClientOnly>
          <v-chip class="header-agent">
            <template v-if="loggedIn">
              <img src="~/assets/icon/burger.svg" alt="menu">
              <v-avatar end>
                <img :src="userInfo.img" class="header-avatar">
              </v-avatar>
            </template>
            <NuxtLink v-else to="/login">
              <span>
                Вход
              </span>
            </NuxtLink>
          </v-chip>
        </ClientOnly>
      </div>
      <div class="header-bag">
        <img src="~/assets/icon/bag.svg" alt="bag">
      </div>
    </nav>
  </header>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores/global';

const globalStore = useGlobalStore();
const userStore = useUserStore();

const { info } = storeToRefs(globalStore);

const { loggedIn, userInfo } = storeToRefs(userStore);
</script>

<style lang="scss">
@mixin headerIcon {
  width: 16px;
  height: 16px;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--header-background-color);
  padding: 0 32px;
  &-title {
    @include font-1;
    font-family: 'Noto Serif';
    color: var(--base-color);
    height: 32px;
  }
  &-nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    max-width: 1440px;
    &-item {
      cursor: pointer;
      background-color: var(--gray-color-four);
      padding: 12px 16px;
      border-radius: 40px;
      gap: 4px;
      color: var(--base-color-second);
      img {
        @include headerIcon;
        margin-right: 4px;
      }
    }
  }
  &-left {
    display: flex;
    align-items: center;
    gap: 16px
  }
  &-right {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  &-city {
    display: flex;
    align-items: center;
    gap: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 4px 6px;
    max-width: 152px;
    span {
      @include font-3;
      display: inline-block;
    }
    img {
      @include headerIcon;
    }
  }
  &-divider {
    width: 1px;
    height: 32px;
    background-color: var(--gray-color-five);
  }
  &-adv {
    @include font-3;
    padding: 8px 12px;
    color: var(--green-color);
    cursor: pointer;
  }
  &-agent {
    cursor: pointer;
    border-radius: 24px;
    padding: 4px 4px 4px 12px;
    gap: 8px;
    background-color: var(--gray-color-four);
    a {
      color: var(--base-color-second);
      text-decoration: none;
    }
  }
  &-avatar {
    width: 40px;
    height: 40px;
    border-radius: 80px;
  }
  &-bag,
  &-burger {
    display: none;
  }
}

@media screen and (max-width: 565px) {
  .header {
    padding: 0 8px;
    justify-content: space-between;
    &-nav-item,
    &-right {
      display: none;
    }
    &-bag,
    &-burger {
      display: flex;
    }
  }
}
</style>