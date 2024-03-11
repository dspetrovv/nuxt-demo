<template>
  <v-app class="layout">
    <LayoutHeader></LayoutHeader>
    <main class="layout-main">
      <LayoutMain></LayoutMain>
      <slot></slot>
    </main>
    <LayoutFooter></LayoutFooter>
  </v-app>
</template>

<script setup>
const agentsStore = useAgentsStore();
const productsStore = useProductsStore();
const userStore = useUserStore();

// Первичная загрузка для показа количества в Tabs
agentsStore.getAgents();
productsStore.getProducts();
onMounted(() => {
  userStore.checkIsLogged();
});
</script>

<style lang="scss">
.layout {
  justify-content: space-between;
  &-main {
    height: 100%;
  }
}
</style>