export default defineEventHandler((event) => {
  // JWT приходит с сервака, поэтому просто замокано
  const { login, password } = getQuery(event);
  if (login !== 'admin' || password !== 'secret') {
    throw new Error('Неверные логин или пароль');
  }
  return {
    access_token: 'access',
    refresh_token: 'refresh',
    user: {
      id: 1,
      name: 'User',
      img: 'https://cdn.vuetifyjs.com/images/john.jpg',
      info: { isVerifyed: true, rating: 5.0, reviews: 0 },
    },
  };
});