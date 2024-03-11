export const useInterceptorFetch = (url, options) => {
  const store = useUserStore();
  const router = useRouter();
  const route = useRoute();

  return useFetch(url, {
    ...options,
    async onResponseError({ request, response, error }) {
      const originalRequest = request;
      if (response && response.status === 401 && originalRequest.url.includes('refresh')) {
        store.logout();
      } else if (
        response &&
        response.status === 401 &&
        !originalRequest._retry &&
        !originalRequest.url.includes('signin')
      ) {
        originalRequest._retry = true;
        const user = await store.refresh();
        request.headers.common.Authorization = user.token;
      }
    },

    async onRequest({ options, ...rest }) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        options.headers = {
          Authorization: 'Bearer ' + user.token,
          Accept: 'application/json',
        };
      } else {
        store.logout(route.name);
        router.replace('/login');
      }
      return { options, ...rest };
    },

    onRequestError({ error }) {
      Promise.reject(error);
    }
  })
}