import Joi from "joi";

const validate = <T>(data: T, schema: Joi.ObjectSchema<any>) => {
  const options = { abortEarly: false };
  const { error } = schema.validate(data, options);

  if (!error) return null;
  const errors: any = {};
  for (let item of error.details) {
    errors[item.path[0]] = item.message;
  }

  return errors;
};

const validateProperty = (
  input: EventTarget & (HTMLInputElement | HTMLTextAreaElement),
  schema: Joi.ObjectSchema<any>
) => {
  const value = input instanceof HTMLInputElement && input.type === "checkbox" ? input.checked : input.value;

  const obj = {
    [input.name]: value,
  };
  const schemaOfProperty = Joi.object({ [input.name]: schema.extract(input.name) });
  const { error } = schemaOfProperty.validate(obj);
  return error ? error.details[0].message : null;
};

export { validateProperty, validate };
