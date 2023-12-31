import Joi from 'joi';

// joiUserNameSchema object
const joiUserNameSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});
// joiUserAddressSchema object
const joiUserAddressSchema = Joi.object({
  street: Joi.string().required(),
  city: Joi.string().required(),
  country: Joi.string().required(),
});
// joiUserOrdersSchema object
const joiUserOrdersSchema = Joi.object({
  productName: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
});
// joiUserSchema object
const joiUserSchema = Joi.object({
  userId: Joi.number().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  fullName: joiUserNameSchema.required(),
  age: Joi.number().required(),
  email: Joi.string().email().required(),
  isActive: Joi.boolean().required(),
  hobbies: Joi.array().items(Joi.string().min(1).required()).required(),
  address: joiUserAddressSchema.required(),
  orders: Joi.array().items(joiUserOrdersSchema.min(1).required()),
});

export default joiUserSchema;
