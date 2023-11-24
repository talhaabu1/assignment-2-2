import { Request, Response } from 'express';
import { userServices } from './user.service';
import joiUserSchema from './user.validationWithJoi';

const createUser = async (req: Request, res: Response) => {
  try {
    const value = await joiUserSchema.validateAsync(req.body);
    const result = await userServices.createUserIntoDB(value);
    //? response success send ⤵
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
    //? response success send ⤴
  } catch (err) {
    console.log(err);
    //? response error send ⤵
    res.status(500).json({
      success: false,
      message: 'User created not successfully!',
      errorMassage: (err as Error).message,
    });
    //? response error send ⤴
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsersIntoDB();
    //? response success send ⤵
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
    //? response success send ⤴
  } catch (err) {
    console.log(err);
    //? response error send ⤵
    res.status(500).json({
      success: false,
      message: 'User get not successfully!',
      errorMassage: (err as Error).message,
    });
    //? response error send ⤴
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await userServices.getSingleUsersIntoDB(userId);
    //? response success send ⤵
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
    //? response success send ⤴
  } catch (err) {
    console.log(err);
    //? response error send ⤵
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
    //? response error send ⤴
  }
};

export const userControolers = { createUser, getAllUsers, getSingleUser };
