<template>
  <div class="agents">
    <v-card
      v-for="(agent) in agents"
      :key="agent.id"
      class="agents-card"
      variant="flat"
    >
      <div class="agents-main">
        <img
          :src="agent.img"
          class="agents-avatar"
          alt="user"
        >
        <div class="agents-info">
          <v-card-title class="agents-name">{{ agent.name }}</v-card-title>
          <StatusList :status="agent.info"></StatusList>
        </div>
        <div class="agents-description">{{ agent.description }}</div>
      </div>
    </v-card>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
useHead({
  title: 'Агенты',
});

const store = useAgentsStore();

const { agentsList: agents } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.agents {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 32px;
  margin-bottom: 64px;
  align-items: center;
  &-card {
    background-color: var(--gray-color-six);
    border-radius: 20px;
    padding: 20px;
    display: flex !important;
    gap: 20px;
    width: 560px;
  }
  &-main {
    display: grid;
    grid-gap: 4px;
  }
  &-info {
    display: flex;
    flex-direction: column;
    grid-column: 2 / 2;
    grid-row: 1 / 2;
    padding: 0 16px;
  }
  &-name {
    @include font-2;
    color: var(--base-color-second);
    padding: 8px 0;
    white-space: break-spaces;
  }
  &-description {
    @include font-4;
    margin-top: 6px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    grid-column: 2 / 2;
    grid-row: 2 / 2;
    overflow: hidden;
    padding: 0 16px;
    height: fit-content;
  }
  &-avatar {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    border-radius: 20px;
    display: block;
    width: 140px;
    height: 140px;
  }
}

@media screen and (max-width: 565px) {
  .agents {
    gap: 8px;
    margin: 24px 12px;
    &-card {
      border-radius: 16px;
      padding: 16px;
      width: auto;
    }
    &-info {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      padding: 0 8px;
    }
    &-name {
      @include font-9;
      padding: 4px 0 5px;
    }
    &-description {
      grid-column: 1 / 4;
      grid-row: 2 / 2;
      padding: 0;
      -webkit-line-clamp: 4;
    }
    &-avatar {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      width: 48px;
      height: 48px;
      border-radius: 9.6px;
    }
  }
}
</style>