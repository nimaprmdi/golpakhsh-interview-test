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
 * @param array
 * @param pageSize
 * @param pageNumber
 * @returns
 */
function paginate(array: any[], pageSize: number, pageNumber: number) {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

export { createSlug, paginate };
