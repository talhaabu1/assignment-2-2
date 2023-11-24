import { TUser } from './user.interface';
import { userSchemaModel } from './user.model';

const createUserIntoDB = async (userData: TUser) => {
  const dataToHash = await userSchemaModel.passwordHashing(userData);
  await userSchemaModel.create(dataToHash);
  const { password, ...newData } = dataToHash;
  return newData;
};

const getAllUsersIntoDB = async () => {
  const queryFileterField = 'username fullName age email address -_id';
  const result = await userSchemaModel.find().select(queryFileterField);
  return result;
};

const getSingleUsersIntoDB = async (userId: string) => {
  const result = await userSchemaModel.findUserByUserId(userId);
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUsersIntoDB,
  getSingleUsersIntoDB,
};
