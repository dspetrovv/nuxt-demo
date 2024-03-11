const items = [
  {
    id: 0,
    name: 'Дмитрий хитрый',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quae quo porro odit. Beatae provident ipsa asperiores saepe cum, dignissimos ex quas voluptate ea error! Nobis non quos laudantium ut!',
    img: 'https://cdn.vuetifyjs.com/images/john.jpg',
    info: { isVerifyed: true, rating: 5, reviews: 10 },
  },
  {
    id: 1,
    name: 'Апполинарий Землеперекопский',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quae quo porro odit. Beatae provident ipsa asperiores saepe cum, dignissimos ex quas voluptate ea error! Nobis non quos laudantium ut!',
    img: 'https://cdn.vuetifyjs.com/images/john.png',
    info: { isVerifyed: false, rating: 4.7, reviews: 0 },
  },
  {
    id: 2,
    name: 'Фёдор Сумкин',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quae quo porro odit. Beatae provident ipsa asperiores saepe cum, dignissimos ex quas voluptate ea error! Nobis non quos laudantium ut!',
    img: 'https://cdn.vuetifyjs.com/images/john.jpg',
    info: { isVerifyed: false, rating: null, reviews: 0 },
  },
  {
    id: 3,
    name: 'Василий Копушин',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quae quo porro odit. Beatae provident ipsa asperiores saepe cum, dignissimos ex quas voluptate ea error! Nobis non quos laudantium ut!',
    img: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
    info: { isVerifyed: true, rating: 4.2, reviews: 0 },
  },
  {
    id: 4,
    name: 'Феофан Кусакин',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quae quo porro odit. Beatae provident ipsa asperiores saepe cum, dignissimos ex quas voluptate ea error! Nobis non quos laudantium ut!',
    img: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
    info: { isVerifyed: true, rating: null, reviews: 2 },
  },
  {
    id: 5,
    name: 'Василиса Землеперекопская',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quae quo porro odit. Beatae provident ipsa asperiores saepe cum, dignissimos ex quas voluptate ea error! Nobis non quos laudantium ut!',
    img: 'https://cdn.vuetifyjs.com/images/john.png',
    info: { isVerifyed: false, rating: 3, reviews: 1 },
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