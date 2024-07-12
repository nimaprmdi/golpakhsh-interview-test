/**
 *
 * Create a slug by give text
 *
 * @param text {string}
 * @returns
 */
const createSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
};

/**
 *
 * Simple Paginate Function
 *
 * @param array
 * @param pageSize
 * @param pageNumber
 * @returns
 */
function paginate(array: any[], pageSize: number, pageNumber: number) {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

/**
 *
 * Safe Clone from a object or array
 *
 * @param object {Object}
 * @returns
 */
function deepClone<T>(object: T): T {
  return JSON.parse(JSON.stringify(object));
}

export { createSlug, paginate, deepClone };
