import { Router } from 'express';
import { userControolers } from './user.controoler';

const router: Router = Router();

//? express middleware ⤵

//? express middleware ⤴

router.get('/api/users', userControolers.getAllUsers);
router.get('/api/users/:userId', userControolers.getSingleUser);
router.post('/api/users', userControolers.createUser);
router.put('/api/users/:userId', userControolers.updateUser);

export default router;
