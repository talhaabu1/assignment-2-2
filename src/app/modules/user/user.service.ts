import { TUser, TUserOrders } from './user.interface';
import { userSchemaModel } from './user.model';

const createUserIntoDB = async (userData: TUser) => {
  const dataToHash = await userSchemaModel.passwordHashing(userData);
  const result = await userSchemaModel.create(dataToHash);
  const { password, orders, _id, ...newData } = result.toObject();
  return newData;
};

const getAllUsersIntoDB = async () => {
  const queryFieldFilter = {
    _id: 0,
    userId: 0,
    password: 0,
    'fullName._id': 0,
    'address._id': 0,
    orders: 0,
  };
  const result = await userSchemaModel.find({}, queryFieldFilter);

  return result;
};

const getSingleUsersIntoDB = async (userId: string) => {
  await userSchemaModel.isUserExist(userId);
  const queryFieldFilter = {
    _id: 0,
    password: 0,
    'fullName._id': 0,
    'address._id': 0,
    orders: 0,
  };
  const result = await userSchemaModel.findOne({ userId }, queryFieldFilter);

  return result;
};

const updateUserIntoDB = async (userId: string, updateData: TUser) => {
  await userSchemaModel.isUserExist(userId);
  const queryFieldFilter = {
    _id: 0,
    password: 0,
    'fullName._id': 0,
    'address._id': 0,
    orders: 0,
  };
  const dataToHash = await userSchemaModel.passwordHashing(updateData);
  const result = await userSchemaModel.findOneAndUpdate(
    { userId },
    dataToHash,
    {
      returnDocument: 'after',
      projection: queryFieldFilter,
    },
  );
  return result;
};

const userDeleteIntoDB = async (userId: string) => {
  await userSchemaModel.isUserExist(userId);
  const result = await userSchemaModel.deleteOne({ userId });
  return result;
};

const addProductUserIntoDB = async (userId: string, product: TUserOrders) => {
  await userSchemaModel.isUserExist(userId);
  const result = await userSchemaModel.updateOne(
    { userId },
    { $push: { orders: product } },
  );
  return result;
};

const getProductUserIntoDB = async (userId: string) => {
  await userSchemaModel.isUserExist(userId);
  const queryFieldFilter = { _id: 0, orders: 1 };
  const result = await userSchemaModel.findOne({ userId }, queryFieldFilter);
  return result;
};

const calculateTotalPriceIntoDB = async (userId: string) => {
  await userSchemaModel.isUserExist(userId);
  const pipeline = [
    {
      $match: {
        userId: Number(userId),
      },
    },
    {
      $unwind: '$orders',
    },
    {
      $group: {
        _id: null,
        totalPrice: {
          $sum: { $multiply: ['$orders.price', '$orders.quantity'] },
        },
      },
    },

    { $project: { totalPrice: 1, _id: 0 } },
  ];
  const result = await userSchemaModel.aggregate(pipeline);
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUsersIntoDB,
  getSingleUsersIntoDB,
  updateUserIntoDB,
  userDeleteIntoDB,
  addProductUserIntoDB,
  getProductUserIntoDB,
  calculateTotalPriceIntoDB,
};
