import Joi from "joi";
import { validateProperty } from "./validation/validate";
import { IErrors } from "../models/error";

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
function paginate<T>(array: T[], pageSize: number, pageNumber: number) {
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

/**
 *
 * @param e {React.ChangeEvent<HTMLInputElement>}
 */
const validateInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  schema: Joi.ObjectSchema<any>,
  setErrors: React.Dispatch<React.SetStateAction<IErrors>>,
  errors: IErrors
) => {
  const errorMsg = validateProperty(e.target, schema);

  if (errorMsg) {
    setErrors({ ...errors, [e.target.name]: errorMsg });
  } else {
    setErrors((prevState) => {
      const errorsClone = { ...deepClone(prevState) };
      delete errorsClone[e.target.name];
      return { ...errorsClone };
    });
  }

  const value =
    e.target instanceof HTMLInputElement && e.target.type === "checkbox" ? e.target.checked : e.target.value;

  return value;
  // setData({ ...deepClone(data), [e.target.name]: value });
};

export { createSlug, paginate, deepClone, validateInputChange };
