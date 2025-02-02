/**
 * Переводит первый символ в верхний регистр
 * @global
 * @example
 * // returns 10
 * round(10);
 * @example
 * // returns 22?
 * round('22.8634');
 * @returns {String} Возращает округленное значение в виде строки
 */
export const round = (num: string | number | undefined | null): string => {
  if (!num) return "";

  return `${Math.round(Number(num))}`;
};
