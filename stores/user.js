import { defineStore } from "pinia";
import axios from 'axios';

// const user = JSON.parse(localStorage.getItem('user'));

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {},
    userInfo: {},
    loggedIn: false,
    error: '',
    loggedRoute: '/',
  }),
  actions: {
    /**
     * Проверка не залогинен ли юзер
     * Используется при первичной загрузке приложения
     */
    checkIsLogged() {
      if (localStorage.getItem('userInfo')) {
        this.loggedIn = true;
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
      }
    },
    /**
     * Логин
     * @param {Object} param Объект с полями логина и пароля
     * @return Удачно/Нет
     */
    async signin({ login, password }) {
      this.error = '';
      const { data, error } = await useInterceptorFetch('/api/login', {
        params: {
          login,
          password,
        }
      });
      if (error.value) {
        this.user = {};
        this.error = error.value.data.message;
        this.loggedIn = false;
        return false;
      }
      this.userInfo = data.value.user;
      localStorage.setItem(
        'userInfo',
        JSON.stringify(data.value.user),
      );
      localStorage.setItem(
        'user',
        JSON.stringify({
          token: data.value.access_token,
          refresh: data.value.refresh_token,
        }),
      );
      this.loggedIn = true;
      this.user = { ...this.user, ...data.value };
      return true;
    },
    /**
     * Логаут
     * @param {String} route Роут, с которого пришли
     */
    async logout(route) {
      localStorage.removeItem('user');
      localStorage.removeItem('userInfo');
      this.loggedIn = false;
      this.user = null;
      this.loggedRoute = route || '';
    },
    /**
     * Рефреш токена
     */
    async refresh() {
      const { data } = await useInterceptorFetch('/api/refresh', {
        token: JSON.parse(localStorage.getItem('user')).refresh,
      });
      localStorage.setItem(
        'user',
        JSON.stringify({
          token: data.access_token,
          refresh: data.refresh_token,
        }),
      );
      this.user = { ...this.user, ...data };
    },
  },
});