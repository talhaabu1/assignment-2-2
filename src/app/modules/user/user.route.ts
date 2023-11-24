import { Router } from 'express';
import { userControolers } from './user.controoler';

const router: Router = Router();

router.get('/api/users', userControolers.getAllUsers);
router.get('/api/users/:userId', userControolers.getSingleUser);
router.post('/api/users', userControolers.createUser);
router.put('/api/users/:userId', userControolers.updateUser);
router.delete('/api/users/:userId', userControolers.deleteUser);
router.put('/api/users/:userId/orders', userControolers.deleteUser);

export default router;
