import { Schema, model } from 'mongoose';
import {
  TUser,
  TUserAddress,
  TUserModel,
  TUserName,
  TUserOrders,
} from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
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
const userSchema = new Schema<TUser, TUserModel>(
  {
    userId: { type: Number, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, trim: true },
    fullName: { type: nameSchema, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    hobbies: { type: [String], required: true },
    address: { type: addressSchema, required: true },
    orders: { type: [ordersSchema] },
  },
  { versionKey: false },
);

//? schema methods ⤵
userSchema.statics.passwordHashing = async function (data) {
  let { password } = data;
  if (!password) return data;
  const hashedPassword = await bcrypt.hash(
    password,
    Number(config.salt_rounds),
  );
  const newData = { ...data, password: hashedPassword };
  return newData;
};
userSchema.statics.isUserExist = async function (userId) {
  const exist = await this.findOne({ userId });
  if (!exist) throw new Error('User not found!');
};
//? schema methods ⤴

// user schema model
export const userSchemaModel = model<TUser, TUserModel>('User', userSchema);
