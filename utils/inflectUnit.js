/**
 * Склонение единиц
 * @param {Number} num Склоняемое число
 * @param {String} unit Единица измерения
 * @returns Преобразованная строка
 */
export default function inflectUnit(num, unit) {
  const inflections = {
    sec: ["секунда", "секунды", "секунд"],
    min: ["минута", "минуты", "минут"],
    hour: ["час", "часа", "часов"],
    day: ["день", "дня", "дней"],
    week: ["неделя", "недели", "недель"],
    month: ["месяц", "месяца", "месяцев"],
    year: ["год", "года", "лет"],
    review: ["отзыв", "отзыва", "отзывов"],
  };

  const inflection = inflections[unit];

  if (num % 10 === 1 && num % 100 !== 11) {
      return `${num} ${inflection[0]}`;
  } else if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
      return `${num} ${inflection[1]}`;
  } else {
      return `${num} ${inflection[2]}`;
  }
}