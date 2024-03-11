import { defineStore } from "pinia";

export const useAgentsStore = defineStore('agents', {
  state: () => ({
    agents: { items: [], page: 1, count: 0 },
  }),
  actions: {
    /**
     * Получаем список агентов с бэка
     * @param {Object} fetchProps Опции для загрузки (можно найти в документации на сайте)
     */
    async getAgents(fetchProps) {
      const { data, error } = await useFetch('/api/agents', fetchProps);
      if (error.value) {
        this.agents = [];
      } else {
        this.agents = data;
      }
    },
  },
  getters: {
    /**
     * Возвращает список агентов
     * @param {Object} state Состояние
     * @returns Список агентов
     */
    agentsList: (state) => {
      return state.agents.items;
    },
    /**
     * Возвращает количество агентов
     * Нужно отобразить в кнопках переключения страниц
     * @param {Object} state Состояние
     * @returns Количество агентов
     */
    agentsCount: (state) => {
      return state.agents.count;
    },
  },
});