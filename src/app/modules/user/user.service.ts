import { TUser } from './user.interface';
import { userSchemaModel } from './user.model';

const createUserIntoDB = async (userData: TUser) => {
  const dataToHash = await userSchemaModel.passwordHashing(userData);
  const result = await userSchemaModel.create(dataToHash);
  const { password, orders, _id, ...newData } = result.toObject();
  return newData;
};

const getAllUsersIntoDB = async () => {
  const queryFieldFilter = 'username fullName age email address -_id';
  const result = await userSchemaModel.find().select(queryFieldFilter);
  return result;
};

const getSingleUsersIntoDB = async (userId: string) => {
  const result = await userSchemaModel.findUserByUserId(userId);
  return result;
};

const updateUserIntoDB = async (userId: string, updateData: TUser) => {
  await userSchemaModel.isUserExist(userId);
  const queryFieldFilter = '-password -_id -orders';
  const dataToHash = await userSchemaModel.passwordHashing(updateData);
  console.log({ userId });
  const result = await userSchemaModel
    .findOneAndUpdate({ userId }, dataToHash, {
      returnDocument: 'after',
    })
    .select(queryFieldFilter);
  return result;
};

const userDeleteIntoDB = async (userId: string) => {
  await userSchemaModel.isUserExist(userId);
  const result = await userSchemaModel.deleteOne({ userId });
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUsersIntoDB,
  getSingleUsersIntoDB,
  updateUserIntoDB,
  userDeleteIntoDB,
};
