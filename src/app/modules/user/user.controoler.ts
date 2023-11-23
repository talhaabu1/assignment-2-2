import { Request, Response } from 'express';
import { userServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const reslut = await userServices.createUserIntoDB(req.body);
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: reslut,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      success: false,
      message: 'User created not successfully!',
      errorMassage: (err as Error).message,
    });
  }
};

export const userControolers = { createUser };
