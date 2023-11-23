import { TUser } from './user.interface';
import { userSchemaModel } from './user.model';

const createUserIntoDB = async (userData: TUser) => {
  const result = await userSchemaModel.create(userData);
  return result;
};

export const userServices = {
  createUserIntoDB,
};
