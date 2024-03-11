import { defineStore } from "pinia";

export const useGlobalStore = defineStore('global', {
  state: () => ({
    info: {},
  }),
  actions: {
    /**
     * Установка информации приложения
     * @param {Object} info Общая информация приложения по типу title, etc.
     */
    setGlobalInfo(info) {
      this.info = { ...this.info, ...info };
    },
  },
});