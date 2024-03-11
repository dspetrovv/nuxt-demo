import { defineStore } from "pinia";

const ALL = 'Все товары и услуги';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: { items: [], page: 1, count: 0 },
    filterType: '',
    selectedProducts: { title: ALL },
  }),
  actions: {
    /**
     * Изменить тип фильтра
     * @param {String} filter Фильтр (место/услуга/растение/товар)
     */
    changeFilterType(filter) {
      this.filterType = filter;
    },
    /**
     * Фильтруем продукт (изменение в getters)
     * @param {Object} prod Выбранный тип продукта (место/услуга/растение/товар)
     */
    changeProduct(prod) {
      Object.assign(this.selectedProducts, prod);
      this.changeFilterType(prod.title === ALL ? '' : prod.title);
    },
    /**
     * Загрузка продуктов с сервера
     * @param {Object} fetchProps Опции для загрузки (можно найти в документации на сайте)
     */
    async getProducts(fetchProps) {
      this.loadingError = '';
      const { data, error } = await useFetch('/api/products', fetchProps);
      if (error.value) {
        this.products = [];
      } else {
        this.products = data;
      }
    },
  },
  getters: {
    /**
     * Возвращает список товаров/услуг
     * Может быть отфильтрован по типу, выбранному в селекторе
     * @param {Object} state Состояние
     * @returns Список товаров/услуг
     */
    productsList: (state) => {
      if (state.filterType) {
        return state.products.items.filter((item) => item.type === state.filterType);
      }
      return state.products.items;
    },
    /**
     * Возвращает селектор с посчитанным количеством товаров с бэка
     * @param {Object} state Состояние
     * @returns Селектор
     */
    productsSelector: (state) => {
      return [
        { title: ALL },
        { props: { header: 'Категория 1' } },
        {
          title: 'Место',
          count: state.products.items.filter((item) => item.type === 'Место').length,
        },
        {
          title: 'Услуга',
          count: state.products.items.filter((item) => item.type === 'Услуга').length,
        },
        { props: { divider: true } },
        { props: { header: 'Категория 2' } },
        {
          title: 'Растение',
          count: state.products.items.filter((item) => item.type === 'Растение').length,
        },
        {
          title: 'Товар',
          count: state.products.items.filter((item) => item.type === 'Товар').length,
        },
      ];
    }
  },
});