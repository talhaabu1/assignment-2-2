import { Model } from 'mongoose';

// user name interface
export interface TUserName {
  firstName: string;
  lastName: string;
}
// user address interface
export interface TUserAddress {
  street: string;
  city: string;
  country: string;
}
// user orders interface
export interface TUserOrders {
  productName: string;
  price: number;
  quantity: number;
}
// user interface
export interface TUser {
  userId: Number;
  username: string;
  password: string;
  fullName: TUserName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: TUserAddress;
  orders?: TUserAddress[];
}
// static methods interface
export interface TUserModel extends Model<TUser> {
  passwordHashing(data: TUser): Promise<TUser>;
  findUserByUserId(userId: string): Promise<TUser | null>;
}
