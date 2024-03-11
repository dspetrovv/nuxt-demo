/**
 * Приведение числа к удобочитаемому виду
 * Прим: 1000 -> 1 000; 10000 -> 10 000; 1000000 -> 1 000 000;
 * @param {Number} num Число
 * @returns Преобразованное число
 */
export default function convertNumberForView(num) {
  const convertedNumber = num.toString();

  return convertedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}