/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {

  const trim = Array.from(string)
    .reduce((accum, value) => {
      if (accum?.at(-1)?.includes(value)) {
        accum[accum.length - 1] += value;
      } else {
        accum.push(value);
      }
      return accum;
    }, ['']);

  return trim
    .map((item) => item.length > size ? item.slice(0, size) : item)
    .join('');
}
