import { Router } from 'express';
import { userControolers } from './user.controoler';

const router: Router = Router();
// all routes ⤵
router.get('/users', userControolers.getAllUsers);
router.get('/users/:userId', userControolers.getSingleUser);
router.post('/users', userControolers.createUser);
router.put('/users/:userId', userControolers.updateUser);
router.delete('/users/:userId', userControolers.deleteUser);
router.get('/users/:userId/orders', userControolers.getProductUser);
router.put('/users/:userId/orders', userControolers.addProductUser);
router.get(
  '/users/:userId/orders/total-price',
  userControolers.calculateTotalPrice,
);
// all routes ⤴

export default router;
