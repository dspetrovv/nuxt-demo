<template>
  <div class="tabs">
    <NuxtLink to="/" class="tabs-link">
      <v-btn
        :class="{
          'tabs-agent': true,
          'tabs_active': route.name === 'index',
        }"
        @click="getProducts"
      >
        Товары и услуги
      </v-btn>
    </NuxtLink>
    <NuxtLink to="agents" class="tabs-link">
      <v-btn
        :class="{
          'tabs-agent': true,
          'tabs_active': route.name === 'agents',
        }"
        @click="getAgents"
      >
        Агенты <span class="tabs-count">{{ agentsCount }}</span>
      </v-btn>
    </NuxtLink>
    <NuxtLink to="about" class="tabs-link">
      <v-btn
        :class="{
          'tabs-agent': true,
          'tabs_active': route.name === 'about',
        }"
      >
        О компании
      </v-btn>
    </NuxtLink>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

const agentsStore = useAgentsStore();
const productsStore = useProductsStore();

const route = useRoute();

const { agentsCount } = storeToRefs(agentsStore);

const getProducts = () => {
  if (route.name === 'index') {
    return;
  }
  productsStore.getProducts({ server: false });
};

const getAgents = () => {
  if (route.name === 'agents') {
    return;
  }
  agentsStore.getAgents({ server: false });
};
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  gap: 8px;
  color: var(--base-color-second);
  margin-bottom: 32px;
  &-agent {
    background-color: var(--gray-color-four);
    border-radius: 12px;
    height: 40px !important;
    text-transform: none;
    padding: 8px 12px;
    font-size: 13px;
  }
  &_active {
    border: 1px solid var(--base-color-second);
  }
  &-count {
    color: var(--gray-color-third);
    margin-left: 4px;
  }
  &-link {
    color: var(--base-color-second);
  }
}
@media screen and (max-width: 565px) {
  .tabs {
    width: 100%;
    overflow-x: auto;
    margin-left: 16px;  
    &-agent {
      box-shadow: none;
    }
  }
}
</style>