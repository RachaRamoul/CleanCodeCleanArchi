import { Router } from 'express';
import { addUser, listUsers } from '../controllers/user.controller';

const router = Router();

router.post('/users', addUser);

router.get('/users', listUsers);

export default router;
