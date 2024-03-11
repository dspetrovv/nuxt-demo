<template>
  <div>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useGlobalStore } from './stores/global';

const globalStore = useGlobalStore();

useFetch('/api/global').then(({ data }) => {
  globalStore.setGlobalInfo(data.value);
});
</script>