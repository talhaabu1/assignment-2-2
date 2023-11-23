import { Schema, model } from 'mongoose';
import { TUser, TUserAddress, TUserName, TUserOrders } from './user.interface';
// name schema
const nameSchema = new Schema<TUserName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});
// address schema
const addressSchema = new Schema<TUserAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});
// orders schema
const ordersSchema = new Schema<TUserOrders>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});
// user schema
const userSchema = new Schema<TUser>({
  userId: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: nameSchema, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String], required: true },
  address: { type: addressSchema, required: true },
  orders: { type: [ordersSchema], required: true },
});
// user schema model
export const userSchemaModel = model('User', userSchema);
