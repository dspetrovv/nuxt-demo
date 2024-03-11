<template>
  <v-app class="layout">
    <main class="layout-main">
      <slot></slot>
    </main>
    <LayoutFooter></LayoutFooter>
  </v-app>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.layout {
  justify-content: space-between;
  &-main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
</style>