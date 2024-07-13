import Joi from "joi";

const schema = Joi.object({
  firstName: Joi.string().min(3).label("Name").required(),
  lastName: Joi.string().min(3).label("Last name").required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .label("Email")
    .required(),
  phone: Joi.string()
    .regex(/^\+[1-9]{1}[0-9]{3,14}$/)
    .message("input is incorrect eg. +981234567890")
    .required(),
  address: Joi.string().required().label("Address"),
  region: Joi.string().valid("iran", "usa", "germany").label("Region"),
  company: Joi.string().min(3).label("Company"),
  apartment: Joi.string().min(3).label("Apartment"),
  postalCode: Joi.string().min(3).label("PostalCode").required(),
  city: Joi.string().min(3).label("City").required(),
  saveInfo: Joi.boolean().required(),
});

const shippingSchema = Joi.object({
  expectedDate: Joi.string()
    .valid(...["Monday, August 14", "Wednesday, August 16", "Tuesday, August 22", "Friday, August 25"])
    .required(),
  guaranteed: Joi.string()
    .valid(...["wednesday, August 11th by 8 PM", "wednesday, August 11th By Noon"])
    .required(),
});

const loginSchema = Joi.object({
  username: Joi.string().min(3).label("Username").required(),
  password: Joi.string().min(3).label("Password").required(),
});
export { schema, shippingSchema, loginSchema };
