const items = [
  {
    id: 0,
    name: 'Доки',
    price: 10000,
    img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    type: 'Место',
    category: 1,
    isPromote: true,
    views: 255,
    days: 4,
  },
  {
    id: 1,
    name: 'Цветы',
    price: 10000,
    img: 'https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg',
    type: 'Растение',
    category: 2,
    isPromote: false,
    views: 0,
    days: 12,
  },
  {
    id: 2,
    name: 'Кактус',
    price: 10000,
    img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    type: 'Растение',
    category: 2,
    isPromote: false,
    views: 1,
    days: 1,
  },
  {
    id: 3,
    name: 'Умный дом',
    price: 10000,
    img: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
    type: 'Услуга',
    category: 1,
    isPromote: true,
    views: 16,
    days: 32,
  },
  {
    id: 4,
    name: 'Дорога',
    price: 10000,
    img: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    type: 'Место',
    category: 1,
    isPromote: true,
    views: 64,
    days: 5,
  },
  {
    id: 5,
    name: 'Самолёт',
    price: 10000,
    img: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    type: 'Товар',
    category: 2,
    isPromote: false,
    views: 128,
    days: 9,
  },
];

export default defineEventHandler(() => {
  // Чтобы каждый раз получать разное количество агентов
  const mappedItems = [ ...items ];
  mappedItems.length = Math.floor(Math.random()*6);

  const agents = {
    items: mappedItems,
    count: mappedItems.length,
  };
  return agents;
});