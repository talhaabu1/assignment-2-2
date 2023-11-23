import { Router } from 'express';
import { userControolers } from './user.controoler';

const router = Router();

router.post('/api/users', userControolers.createUser);

export default router;
